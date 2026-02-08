import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !company || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send notification email to business
    const notificationEmail = await resend.emails.send({
      from: 'BlueberryFin <onboarding@resend.dev>',
      to: 'mit.mehta@blueberryfin.com',
      subject: `New Contact: ${name} from ${company}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f0eb;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f0eb; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0f2c59 0%, #2563eb 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                        New Contact Form Submission
                      </h1>
                      <p style="margin: 10px 0 0 0; color: #60a5fa; font-size: 14px;">
                        BlueberryFin - Financial Advisory
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      
                      <p style="margin: 0 0 30px 0; color: #374151; font-size: 16px; line-height: 1.6;">
                        You have received a new inquiry from your website contact form.
                      </p>
                      
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                        
                        <!-- Name -->
                        <tr>
                          <td style="padding: 15px 20px; background-color: #f9fafb; border-left: 4px solid #2563eb; margin-bottom: 10px;">
                            <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: 600;">
                              FULL NAME
                            </p>
                            <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">
                              ${name}
                            </p>
                          </td>
                        </tr>
                        
                        <tr><td style="height: 10px;"></td></tr>
                        
                        <!-- Email -->
                        <tr>
                          <td style="padding: 15px 20px; background-color: #f9fafb; border-left: 4px solid #2563eb;">
                            <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: 600;">
                              EMAIL ADDRESS
                            </p>
                            <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">
                              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                            </p>
                          </td>
                        </tr>
                        
                        <tr><td style="height: 10px;"></td></tr>
                        
                        <!-- Company -->
                        <tr>
                          <td style="padding: 15px 20px; background-color: #f9fafb; border-left: 4px solid #2563eb;">
                            <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: 600;">
                              COMPANY NAME
                            </p>
                            <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">
                              ${company}
                            </p>
                          </td>
                        </tr>
                        
                        <tr><td style="height: 10px;"></td></tr>
                        
                        <!-- Phone -->
                        <tr>
                          <td style="padding: 15px 20px; background-color: #f9fafb; border-left: 4px solid #2563eb;">
                            <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: 600;">
                              PHONE NUMBER
                            </p>
                            <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">
                              <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                            </p>
                          </td>
                        </tr>
                        
                      </table>
                      
                      <!-- Message -->
                      <div style="background-color: #f9fafb; border-left: 4px solid #2563eb; padding: 20px; border-radius: 8px;">
                        <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: 600;">
                          MESSAGE
                        </p>
                        <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                      </div>
                      
                      <!-- CTA Button -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #0f2c59 0%, #2563eb 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                              Reply to ${name}
                            </a>
                          </td>
                        </tr>
                      </table>
                      
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 13px;">
                        This email was sent from the BlueberryFin contact form
                      </p>
                      <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                        © 2026 BlueberryFin - Financial Advisory
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (notificationEmail.error) {
      throw new Error(`Failed to send notification: ${notificationEmail.error.message}`);
    }

    // Send auto-reply to customer
    const autoReplyEmail = await resend.emails.send({
      from: 'BlueberryFin <onboarding@resend.dev>',
      to: email,
      replyTo: 'mit.mehta@blueberryfin.com',
      subject: 'Thank you for contacting BlueberryFin',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f0eb;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f0eb; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #0f2c59 0%, #2563eb 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                        Thank You for Reaching Out!
                      </h1>
                      <p style="margin: 10px 0 0 0; color: #60a5fa; font-size: 14px;">
                        BlueberryFin - Financial Advisory
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      
                      <p style="margin: 0 0 20px 0; color: #374151; font-size: 18px; font-weight: 600;">
                        Hi ${name},
                      </p>
                      
                      <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.7;">
                        Thank you for contacting BlueberryFin! We've received your message and appreciate you taking the time to reach out to us.
                      </p>
                      
                      <!-- Message Recap -->
                      <div style="background-color: #f9fafb; border-left: 4px solid #2563eb; padding: 20px; border-radius: 8px; margin: 30px 0;">
                        <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: 600;">
                          YOUR MESSAGE
                        </p>
                        <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                      </div>
                      
                      <p style="margin: 20px 0; color: #374151; font-size: 16px; line-height: 1.7;">
                        Our team will review your inquiry and get back to you within <strong>24-48 hours</strong>.
                      </p>
                      
                      <p style="margin: 20px 0; color: #374151; font-size: 16px; line-height: 1.7;">
                        If you have any urgent questions, feel free to reach us directly:
                      </p>
                      
                      <!-- Contact Info -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
                        <tr>
                          <td style="padding: 10px 0;">
                            <span style="color: #6b7280; font-size: 14px;">Email:</span>
                            <a href="mailto:mit.mehta@blueberryfin.com" style="color: #2563eb; text-decoration: none; font-weight: 600; margin-left: 8px;">mit.mehta@blueberryfin.com</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0;">
                            <span style="color: #6b7280; font-size: 14px;">Phone:</span>
                            <a href="tel:+919870333395" style="color: #2563eb; text-decoration: none; font-weight: 600; margin-left: 8px;">+91 9870333395</a>
                          </td>
                        </tr>
                      </table>
                      
                      <p style="margin: 30px 0 0 0; color: #374151; font-size: 16px;">
                        Best regards,<br>
                        <strong>BlueberryFin Team</strong>
                      </p>
                      
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 13px;">
                        This is an automated confirmation message
                      </p>
                      <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                        © 2026 BlueberryFin - Financial Advisory
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      notificationId: notificationEmail.data?.id,
      autoReplyId: autoReplyEmail.data?.id,
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
