import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendContactEmail } from './emailService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, number, country, subject, message } = req.body;

    // Validate required fields
    if (!fullName || !email || !number || !subject) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: fullName, email, number, and subject are required',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
      });
    }

    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(number)) {
      return res.status(400).json({
        success: false,
        error: 'Phone number must be 10 digits',
      });
    }

    // Send email
    const result = await sendContactEmail({
      fullName,
      email,
      number,
      country: country || '',
      subject,
      message: message || '',
    });

    if (result.success) {
      res.json({
        success: true,
        message: 'Email sent successfully',
        messageId: result.messageId,
      });
    } else {
      res.status(500).json({
        success: false,
        error: result.error || 'Failed to send email',
      });
    }
  } catch (error) {
    console.error('Contact API error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email service ready`);
});

