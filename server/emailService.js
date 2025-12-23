import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // App password
    },
  });
};

// Contact form email template
const createContactEmailTemplate = (data) => {
  const { fullName, email, number, country, subject, message } = data;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - Grahmind</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
            }
            .email-container {
                background-color: #ffffff;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
                border-bottom: 2px solid #000;
                padding-bottom: 20px;
            }
            .header h1 {
                color: #000;
                margin: 0;
                font-size: 24px;
            }
            .content {
                margin-bottom: 25px;
            }
            .field {
                margin-bottom: 20px;
                padding: 15px;
                background-color: #f8f9fa;
                border-radius: 8px;
                border-left: 4px solid #000;
            }
            .field-label {
                font-weight: bold;
                color: #000;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            .field-value {
                color: #333;
                font-size: 16px;
            }
            .message-field {
                background-color: #f8f9fa;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #000;
                margin-top: 10px;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
                color: #666;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>📧 New Contact Form Submission</h1>
            </div>
            
            <div class="content">
                <p>You have received a new message from the Grahmind website contact form.</p>
                
                <div class="field">
                    <div class="field-label">Full Name</div>
                    <div class="field-value">${fullName}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Email Address</div>
                    <div class="field-value">${email}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Phone Number</div>
                    <div class="field-value">${number}</div>
                </div>
                
                ${country ? `
                <div class="field">
                    <div class="field-label">Country</div>
                    <div class="field-value">${country}</div>
                </div>
                ` : ''}
                
                <div class="field">
                    <div class="field-label">Subject of Interest</div>
                    <div class="field-value">${subject}</div>
                </div>
                
                ${message ? `
                <div class="message-field">
                    <div class="field-label">Message</div>
                    <div class="field-value" style="white-space: pre-wrap;">${message}</div>
                </div>
                ` : ''}
            </div>
            
            <div class="footer">
                <p><strong>Grahmind Contact Form</strong></p>
                <p>This email was sent from your website contact form.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Send contact form email
export const sendContactEmail = async (data) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to your own email
      replyTo: data.email, // Allow replying directly to customer
      subject: `New Contact Form: ${data.subject} - ${data.fullName}`,
      html: createContactEmailTemplate(data),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, error: error.message };
  }
};

