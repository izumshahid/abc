import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, phone, course } = body;

    if (!name || !email || !phone || !course) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // In production, you would:
    // 1. Save to database
    // 2. Send confirmation email to user
    // 3. Notify admin about new enrollment
    // 4. Integrate with CRM/email marketing

    // Example: Log the enrollment (replace with actual database save)
    console.log('New enrollment inquiry:', {
      name,
      email,
      phone,
      course,
      startDate: body.startDate,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        success: true,
        message: 'Enrollment inquiry received successfully',
        data: {
          name,
          email,
          course,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Enrollment error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
