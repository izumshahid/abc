import sgMail from "@sendgrid/mail";

// Initialize SendGrid with API key
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

/**
 * Send email using SendGrid
 * @param {Object} emailData - Email data object
 * @param {string} emailData.to - Recipient email
 * @param {string} emailData.subject - Email subject
 * @param {string} emailData.html - HTML content
 * @param {string} emailData.text - Plain text content (optional)
 * @returns {Promise<boolean>} - Success status
 */
export async function sendEmail({ to, subject, html, text }) {
  console.log("Sending email to:", to, SENDGRID_API_KEY);

  if (!SENDGRID_API_KEY) {
    console.warn("⚠️  SendGrid API key not configured. Email not sent.");
    return false;
  }

  try {
    const msg = {
      to,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL || "noreply@abccomputronics.com",
        name: "ABC Computronics & Kashmir Skill Institute",
      },
      subject,
      text: text || subject,
      html,
    };

    await sgMail.send(msg);
    console.log(`✅ Email sent successfully to ${to}`);
    return true;
  } catch (error) {
    console.error("❌ SendGrid error:", error.response?.body || error.message);
    return false;
  }
}

/**
 * Send enrollment confirmation email to user
 */
export async function sendUserConfirmationEmail({
  name,
  email,
  courses,
  startDate,
}) {
  const coursesList = Array.isArray(courses) ? courses.join(", ") : courses;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Enrollment Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1a4d3e; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .details { background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { padding: 10px 0; border-bottom: 1px solid #eee; }
        .detail-label { font-weight: bold; color: #1a4d3e; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
        .button { background-color: #d4a853; color: #1a4d3e; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Enrollment Confirmation</h1>
        </div>
        <div class="content">
          <h2>Dear ${name},</h2>
          <p>Thank you for your interest in ABC Computronics & Kashmir Skill Institute!</p>
          <p>We have received your enrollment inquiry and our team will contact you within 24 hours to discuss your enrollment details.</p>
          
          <div class="details">
            <h3 style="color: #1a4d3e; margin-top: 0;">Your Enrollment Details:</h3>
            <div class="detail-row">
              <span class="detail-label">Name:</span> ${name}
            </div>
            <div class="detail-row">
              <span class="detail-label">Email:</span> ${email}
            </div>
            <div class="detail-row">
              <span class="detail-label">Selected Course(s):</span> ${coursesList}
            </div>
            ${
              startDate
                ? `<div class="detail-row"><span class="detail-label">Preferred Start Date:</span> ${startDate}</div>`
                : ""
            }
          </div>

          <p>If you have any immediate questions, feel free to contact us:</p>
          <ul>
            <li>📞 Phone: [Your Phone Number]</li>
            <li>📧 Email: info@abccomputronics.com</li>
            <li>📍 Location: Main Market Road, Srinagar, Kashmir</li>
          </ul>

          <center>
            <a href="https://abccomputronics.com/courses" class="button">View All Courses</a>
          </center>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} ABC Computronics & Kashmir Skill Institute. All rights reserved.</p>
          <p>This is an automated message. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return sendEmail({
    to: email,
    subject: "✅ Enrollment Inquiry Received - ABC Computronics",
    html,
  });
}

/**
 * Send enrollment notification to admin
 */
export async function sendAdminNotificationEmail({
  name,
  email,
  phone,
  courses,
  startDate,
  message,
}) {
  const coursesList = Array.isArray(courses) ? courses.join(", ") : courses;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Enrollment Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #d4a853; color: #1a4d3e; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .details { background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .detail-row { padding: 12px; border-bottom: 1px solid #eee; display: flex; }
        .detail-label { font-weight: bold; color: #1a4d3e; min-width: 150px; }
        .detail-value { flex: 1; }
        .urgent { background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 4px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎓 New Enrollment Inquiry</h1>
        </div>
        <div class="content">
          <div class="urgent">
            <strong>⚡ Action Required:</strong> A new student has submitted an enrollment inquiry. Please contact them within 24 hours.
          </div>
          
          <div class="details">
            <h3 style="color: #1a4d3e; margin-top: 0;">Student Details:</h3>
            <div class="detail-row">
              <span class="detail-label">👤 Name:</span>
              <span class="detail-value">${name}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">📧 Email:</span>
              <span class="detail-value"><a href="mailto:${email}">${email}</a></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">📱 Phone:</span>
              <span class="detail-value"><a href="tel:${phone}">${phone}</a></span>
            </div>
            <div class="detail-row">
              <span class="detail-label">📚 Course(s):</span>
              <span class="detail-value"><strong>${coursesList}</strong></span>
            </div>
            ${
              startDate
                ? `<div class="detail-row"><span class="detail-label">📅 Preferred Start:</span><span class="detail-value">${startDate}</span></div>`
                : ""
            }
            ${
              message
                ? `<div class="detail-row"><span class="detail-label">💬 Message:</span><span class="detail-value">${message}</span></div>`
                : ""
            }
            <div class="detail-row">
              <span class="detail-label">🕐 Submitted:</span>
              <span class="detail-value">${new Date().toLocaleString("en-US", {
                timeZone: "Asia/Kolkata",
              })}</span>
            </div>
          </div>

          <p><strong>Next Steps:</strong></p>
          <ol>
            <li>Contact the student within 24 hours</li>
            <li>Discuss course details and requirements</li>
            <li>Share fee structure and enrollment process</li>
            <li>Schedule a visit or demo class if needed</li>
          </ol>
        </div>
      </div>
    </body>
    </html>
  `;

  return sendEmail({
    to: "irzumshahid@gmail.com",
    subject: `🎓 New Enrollment: ${name} - ${coursesList}`,
    html,
  });
}
