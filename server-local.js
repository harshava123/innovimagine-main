// Simple local development server for testing contact form
// Run with: node server-local.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Contact form email template (same as api/contact.js)
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
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
            .email-container { background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #000; padding-bottom: 20px; }
            .header h1 { color: #000; margin: 0; font-size: 24px; }
            .field { margin-bottom: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #000; }
            .field-label { font-weight: bold; color: #000; margin-bottom: 5px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
            .field-value { color: #333; font-size: 16px; }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header"><h1>📧 New Contact Form Submission</h1></div>
            <div class="field"><div class="field-label">Full Name</div><div class="field-value">${fullName}</div></div>
            <div class="field"><div class="field-label">Email Address</div><div class="field-value">${email}</div></div>
            <div class="field"><div class="field-label">Phone Number</div><div class="field-value">${number}</div></div>
            ${country ? `<div class="field"><div class="field-label">Country</div><div class="field-value">${country}</div></div>` : ''}
            <div class="field"><div class="field-label">Subject of Interest</div><div class="field-value">${subject}</div></div>
            ${message ? `<div class="field"><div class="field-label">Message</div><div class="field-value" style="white-space: pre-wrap;">${message}</div></div>` : ''}
        </div>
    </body>
    </html>
  `;
};

app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, number, country, subject, message } = req.body;

    if (!fullName || !email || !number || !subject) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
      });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return res.status(500).json({
        success: false,
        error: 'Gmail credentials not configured. Check your .env file.',
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact Form: ${subject} - ${fullName}`,
      html: createContactEmailTemplate({ fullName, email, number, country: country || '', subject, message: message || '' }),
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent:', info.messageId);

    return res.json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('❌ Error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to send email',
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Local dev server running on http://localhost:${PORT}`);
  console.log(`📧 Contact API: http://localhost:${PORT}/api/contact`);
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.log('⚠️  Warning: GMAIL_USER or GMAIL_APP_PASSWORD not found in .env file');
  }
});

