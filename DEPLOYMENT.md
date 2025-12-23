# Production Deployment Guide

## 🚨 Current Issue
Your frontend is deployed but the backend API (`localhost:3001`) doesn't exist in production, causing 404 errors.

## ✅ Solution Options

### Option 1: Deploy Backend Separately (Recommended)

#### Deploy Backend to Railway/Render/Vercel

**Railway (Easiest):**
1. Go to https://railway.app
2. New Project → Deploy from GitHub
3. Select your repo
4. Add environment variables:
   - `GMAIL_USER=your-email@gmail.com`
   - `GMAIL_APP_PASSWORD=your-app-password`
   - `PORT=3001`
5. Railway will give you a URL like: `https://your-app.railway.app`
6. Set `VITE_API_URL=https://your-app.railway.app` in your frontend `.env`

**Render:**
1. Go to https://render.com
2. New → Web Service
3. Connect GitHub repo
4. Root Directory: `server`
5. Build Command: (leave empty)
6. Start Command: `node server.js`
7. Add environment variables (same as above)

#### Update Frontend Environment Variable

Create `.env.production` in your frontend root:
```env
VITE_API_URL=https://your-backend-url.railway.app
```

Then rebuild:
```bash
npm run build
```

---

### Option 2: Use Serverless Function (Vercel/Netlify)

If deploying to Vercel or Netlify, you can use serverless functions instead of a separate backend.

**For Vercel:**
Create `api/contact.js`:
```javascript
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, number, country, subject, message } = req.body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  // Send email (use email template from server/emailService.js)
  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact: ${subject} - ${fullName}`,
      html: `...email template...`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
```

---

### Option 3: Quick Fix - Use Form Submission Service

If you want a quick solution without backend deployment, use a service like:
- **Formspree** (free tier available)
- **Web3Forms** (free)
- **FormSubmit** (free)

Update Contact.jsx to use their endpoint instead.

---

## 🔧 Quick Fix for Now

**Temporary solution** - Update Contact.jsx to handle the error gracefully:

```javascript
} catch (err) {
  console.error('Contact form error:', err);
  // For production, show a message to contact directly
  if (window.location.hostname !== 'localhost') {
    setError('Please contact us directly at grahmindinnovations@gmail.com');
  } else {
    setError('Network error. Please check if the server is running.');
  }
  setSending(false);
}
```

---

## 📋 Recommended Steps

1. **Deploy backend to Railway** (easiest option)
2. **Get backend URL** (e.g., `https://grahmind-api.railway.app`)
3. **Add to frontend `.env.production`:**
   ```env
   VITE_API_URL=https://grahmind-api.railway.app
   ```
4. **Rebuild and redeploy frontend**

---

## 🧪 Testing Production

After deployment:
1. Go to your live site
2. Open browser DevTools (F12) → Network tab
3. Submit contact form
4. Check if request goes to your backend URL (not localhost)
5. Check backend logs for email sending confirmation

