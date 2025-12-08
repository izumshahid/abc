import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Enrollment from '@/models/Enrollment';
import { sendUserConfirmationEmail, sendAdminNotificationEmail } from '@/lib/sendgrid';

export async function POST(request) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const body = await request.json();
    const { name, email, phone, courses, startDate, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !courses) {
      return NextResponse.json(
        {
          error: 'Missing required fields',
          fieldErrors: [
            !name && { name: ['name'], errors: ['Name is required'] },
            !email && { name: ['email'], errors: ['Email is required'] },
            !phone && { name: ['phone'], errors: ['Phone number is required'] },
            !courses && { name: ['courses'], errors: ['Please select at least one course'] },
          ].filter(Boolean)
        },
        { status: 400 }
      );
    }

    // Validate courses is an array
    if (!Array.isArray(courses) || courses.length === 0) {
      return NextResponse.json(
        {
          error: 'Please select at least one course',
          fieldErrors: [
            { name: ['courses'], errors: ['Please select at least one course'] }
          ]
        },
        { status: 400 }
      );
    }

    // Create new enrollment
    const enrollment = await Enrollment.create({
      name,
      email,
      phone,
      courses,
      startDate: startDate || null,
      message: message || '',
      status: 'pending',
    });

    // Verify enrollment was saved successfully
    if (!enrollment || !enrollment._id) {
      throw new Error('Failed to save enrollment to database');
    }

    console.log('✅ Enrollment saved to database:', enrollment._id);

    // Only send emails after confirming DB save was successful
    // Send asynchronously (don't wait for completion to avoid delays)
    Promise.all([
      sendUserConfirmationEmail({
        name,
        email,
        courses,
        startDate,
      }),
      sendAdminNotificationEmail({
        name,
        email,
        phone,
        courses,
        startDate,
        message,
      }),
    ]).then(([userEmailSent, adminEmailSent]) => {
      console.log('📧 Emails sent - User:', userEmailSent ? '✅' : '❌', 'Admin:', adminEmailSent ? '✅' : '❌');
    }).catch((error) => {
      console.error('❌ Error sending emails (enrollment still saved):', error);
      // Note: Enrollment is already saved, so this is a non-critical error
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Enrollment submitted successfully',
        enrollmentId: enrollment._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Enrollment error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json(
        { error: 'Validation failed', details: messages },
        { status: 400 }
      );
    }

    // Handle duplicate email (if you add unique constraint)
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'An enrollment with this email already exists' },
        { status: 409 }
      );
    }

    // Generic error
    return NextResponse.json(
      { error: 'Failed to submit enrollment', details: error.message },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve enrollments (admin only)
export async function GET(request) {
  try {
    await connectDB();

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50');

    // Build query
    const query = status ? { status } : {};

    // Fetch enrollments
    const enrollments = await Enrollment.find(query)
      .sort({ submittedAt: -1 })
      .limit(limit)
      .lean();

    return NextResponse.json({
      success: true,
      count: enrollments.length,
      enrollments,
    });
  } catch (error) {
    console.error('❌ Error fetching enrollments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch enrollments' },
      { status: 500 }
    );
  }
}
