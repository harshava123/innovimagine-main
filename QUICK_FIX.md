# Quick Fix for Production 404 Error

## 🚨 Problem
Your contact form shows "successfully sent" but you're not receiving emails because the backend API (localhost:3001) doesn't exist in production.

## ✅ Immediate Solutions

### Solution 1: Deploy Backend to Railway (5 minutes)

1. **Go to Railway**: https://railway.app
2. **Sign up** with GitHub
3. **New Project** → **Deploy from GitHub repo**
4. **Select your repository**
5. **Settings** → **Add Environment Variables**:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   PORT=3001
   ```
6. **Settings** → **Generate Domain** (or use custom domain)
7. **Copy the URL** (e.g., `https://grahmind-api.railway.app`)

8. **In your frontend project**, create `.env.production`:
   ```env
   VITE_API_URL=https://grahmind-api.railway.app
   ```

9. **Rebuild and redeploy**:
   ```bash
   npm run build
   ```

10. **Redeploy your frontend** with the new build

---

### Solution 2: Use Vercel Serverless Function (If using Vercel)

1. Create `api/contact.js` in your project root:
```javascript
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const { fullName, email, number, country, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact: ${subject} - ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${number}</p>
        ${country ? `<p><strong>Country:</strong> ${country}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
```

2. **Update Contact.jsx** API URL to:
```javascript
const API_URL = import.meta.env.VITE_API_URL || '/api';
```

3. **Add environment variables in Vercel dashboard**:
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`

---

### Solution 3: Temporary Workaround

Update Contact.jsx to show direct contact info when API fails:

The code is already updated to show:
> "Unable to send message. Please contact us directly at grahmindinnovations@gmail.com or call +919000278794"

This way users can still contact you even if the backend isn't deployed.

---

## 🎯 Recommended: Railway Deployment

**Why Railway?**
- ✅ Free tier available
- ✅ Easy GitHub integration
- ✅ Automatic HTTPS
- ✅ Environment variables management
- ✅ Takes 5 minutes to set up

**Steps:**
1. Railway.app → New Project → GitHub
2. Add env vars (GMAIL_USER, GMAIL_APP_PASSWORD)
3. Get URL → Add to frontend `.env.production`
4. Rebuild frontend → Done!

---

## 📧 Test After Deployment

1. Submit contact form on live site
2. Check browser console (F12) → Network tab
3. Verify request goes to your backend URL (not localhost)
4. Check your email inbox
5. Check Railway logs for any errors

