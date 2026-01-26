# Complete EmailJS Setup Guide - BlueberryFin Contact Form

**Everything you need to set up your contact form from start to finish.**

---

## 📋 Overview

Your contact form will send **two emails** when someone submits it:
1. **Notification to you** (sm091849@gmail.com) - Contains their message
2. **Auto-reply to sender** - Confirms their message was received

---

## ✅ Prerequisites (Already Done)

- [x] EmailJS account created
- [x] Gmail service connected
- [x] Code implementation complete

---

## 🚀 Setup Steps

### Step 1: Create Notification Template (Main Email to You)

1. Go to **EmailJS Dashboard** → **Email Templates**
2. Click **"Create New Template"**
3. Name it: `contact_form_notification`

#### Template Settings:

**To Email:**
```
{{to_email}}
```

**From Name:**
```
BlueberryFin Website
```

**Reply To:**
```
{{from_email}}
```

#### Subject Line:
```
New Contact Form Submission from {{from_name}}
```

#### Email Body:
```
Hello,

You have received a new message from your BlueberryFin website contact form.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM: {{from_name}}
EMAIL: {{from_email}}

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Sent from: BlueberryFin Contact Form

---
This is an automated message from your website contact form.
```

4. Click **"Save"**
5. **Copy the Template ID** (looks like `template_xxxxxxx`)

---

### Step 2: Create Auto-Reply Template (Confirmation to Sender)

1. Still in **Email Templates**, click **"Create New Template"** again
2. Name it: `contact_form_autoreply`

#### Template Settings:

**To Email:**
```
{{to_email}}
```

**From Name:**
```
BlueberryFin
```

**Reply To:**
```
sm091849@gmail.com
```

#### Subject Line:
```
Thank you for contacting BlueberryFin
```

#### Email Body:
```
Hi {{to_name}},

Thank you for reaching out to BlueberryFin! We've received your message and appreciate you taking the time to contact us.

Your message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Our team will review your inquiry and get back to you within 24-48 hours.

If you have any urgent questions, feel free to reach us directly at:
📧 Email: sm091849@gmail.com
📞 Phone: +91 9870333395

Best regards,
BlueberryFin Team

---
This is an automated confirmation message. Please do not reply to this email.
```

4. Click **"Save"**
5. **Copy the Template ID** (looks like `template_yyyyyyy`)

---

### Step 3: Get Your Credentials

Collect these values from your EmailJS dashboard:

#### Service ID
1. Go to **"Email Services"** in left sidebar
2. Find your Gmail service
3. Copy the **Service ID** (e.g., `blueberry_trial`)

#### Template IDs
1. Go to **"Email Templates"**
2. Copy **both Template IDs**:
   - Notification template ID
   - Auto-reply template ID

#### Public Key
1. Click **"Account"** in left sidebar
2. Go to **"General"** tab
3. Copy your **Public Key**

---

### Step 4: Configure .env.local File

1. Open your project: `c:\Users\sm091\Downloads\bas bhai\BlueberryFin`
2. Open the `.env.local` file (or create it if it doesn't exist)
3. Add these lines with **your actual values**:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=blueberry_trial
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_o867pkl
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_yyyyyyy
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Qq49mgI87P8ao_Xan
```

**Replace:**
- `template_o867pkl` → Your notification template ID
- `template_yyyyyyy` → Your auto-reply template ID
- Keep your existing Service ID and Public Key

4. **Save the file**

---

### Step 5: Restart Development Server

```bash
# Stop the current server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

> [!IMPORTANT]
> You **must** restart the server after changing `.env.local` for the changes to take effect!

---

### Step 6: Test Your Contact Form

1. Open `http://localhost:3000` in your browser
2. Scroll to **"Get in Touch"** section
3. Fill out the form with **your own email** (so you can verify both emails):
   - **Name:** Your Name
   - **Email:** your-test-email@gmail.com
   - **Message:** This is a test message

4. Click **"Send Message"**

5. Watch for:
   - ✅ Loading spinner appears
   - ✅ Success toast: "Message sent successfully!"
   - ✅ Form fields reset

6. **Check TWO inboxes:**
   - ✅ **sm091849@gmail.com** → Should receive notification with the message
   - ✅ **your-test-email@gmail.com** → Should receive auto-reply confirmation

> [!TIP]
> Check spam folders if emails don't appear in inbox!

---

## 📧 What Happens When Form is Submitted

```
User fills form → Validates input → Sends 2 emails
                                    ↓
                    ┌───────────────┴───────────────┐
                    ↓                               ↓
        Email to sm091849@gmail.com    Auto-reply to sender
        (Notification with message)    (Confirmation email)
                    ↓                               ↓
                    └───────────────┬───────────────┘
                                    ↓
                        Success toast + Form resets
```

---

## 🔍 Troubleshooting

### Emails not received?

**Check spam folder first!** This is the most common issue.

1. Open **sm091849@gmail.com**
2. Check **Spam** folder
3. If found, mark as "Not Spam"

### "Failed to send message" error?

1. Verify all credentials in `.env.local` are correct
2. Make sure you **restarted the dev server**
3. Check browser console (F12) for detailed errors
4. Verify template variables match:
   - `{{to_email}}`
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_name}}` (auto-reply only)

### Only one email received?

- Check EmailJS dashboard → **"History"** tab
- See which email succeeded/failed
- Verify both template IDs in `.env.local`

### Auto-reply not sending?

- Verify `NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID` is set correctly
- Check that auto-reply template uses `{{to_email}}` in "To Email" field
- Restart dev server after adding the variable

---

## 🎯 Quick Reference

### Your Current Credentials

```env
Service ID: blueberry_trial
Notification Template ID: template_o867pkl
Auto-Reply Template ID: [Add after creating template]
Public Key: Qq49mgI87P8ao_Xan
```

### Template Variables

**Notification Template (to you):**
- `{{to_email}}` → sm091849@gmail.com
- `{{from_name}}` → Sender's name
- `{{from_email}}` → Sender's email
- `{{message}}` → Their message
- `{{reply_to}}` → Sender's email (for replies)

**Auto-Reply Template (to sender):**
- `{{to_email}}` → Sender's email
- `{{to_name}}` → Sender's name
- `{{message}}` → Their message

---

## 🚀 Deployment (When Ready)

When deploying to production (Vercel, Netlify, etc.):

1. Add the **same environment variables** in your hosting platform's settings
2. Redeploy your site
3. Test the contact form on your live site

**No backend server needed!** ✨

---

## ✅ Checklist

- [ ] Created notification template in EmailJS
- [ ] Created auto-reply template in EmailJS
- [ ] Copied both Template IDs
- [ ] Updated `.env.local` with all credentials
- [ ] Restarted development server
- [ ] Tested form with own email
- [ ] Received notification at sm091849@gmail.com
- [ ] Received auto-reply at test email
- [ ] Checked spam folders if needed

---

## 📞 Support

If you encounter issues:
1. Check EmailJS dashboard → **"History"** tab to see email status
2. Check browser console (F12) for error messages
3. Verify all template variables are spelled correctly
4. Make sure Gmail service is still connected in EmailJS

---

**That's it! Your contact form is now fully functional with professional auto-replies.** 🎉
