# Complete EmailJS Setup Guide - BlueberryFin Contact Form

**Everything you need to set up your contact form from start to finish.**

---

## 📋 Overview

Your contact form collects **5 required fields**:
1. Name
2. Email
3. Company Name
4. Phone Number (international format)
5. Message

When submitted, it sends **TWO professional HTML emails**:
1. **Notification to you** (sm091849@gmail.com) - Contains all their details
2. **Auto-reply to sender** - Confirms their message was received

---

## ✅ Prerequisites (Already Done)

- [x] EmailJS account created
- [x] Gmail service connected
- [x] Code implementation complete

---

## 🚀 Setup Steps

### Step 1: Create Email Template

1. Go to **EmailJS Dashboard** → **Email Templates**
2. Click **"Create New Template"**
3. Name it: `blueberry_contact_form`

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
{{reply_to}}
```

#### Subject Line:
```
New Contact: {{from_name}} from {{company}}
```

#### Email Body (HTML):

**IMPORTANT:** Switch to HTML mode in EmailJS editor and paste this:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
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
                      {{from_name}}
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
                      <a href="mailto:{{from_email}}" style="color: #2563eb; text-decoration: none;">{{from_email}}</a>
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
                      {{company}}
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
                      <a href="tel:{{phone}}" style="color: #2563eb; text-decoration: none;">{{phone}}</a>
                    </p>
                  </td>
                </tr>
                
              </table>
              
              <!-- Message -->
              <div style="background-color: #f9fafb; border-left: 4px solid #2563eb; padding: 20px; border-radius: 8px;">
                <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: 600;">
                  MESSAGE
                </p>
                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">{{message}}</p>
              </div>
              
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                <tr>
                  <td align="center">
                    <a href="mailto:{{from_email}}" style="display: inline-block; background: linear-gradient(135deg, #0f2c59 0%, #2563eb 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                      Reply to {{from_name}}
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
```

4. Click **"Save"**
5. **Copy the Template ID** (looks like `template_xxxxxxx`)


---

### Step 2: Create Auto-Reply Template (Confirmation to Sender)

1. Still in **Email Templates**, click **"Create New Template"** again
2. Name it: `blueberry_autoreply`

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

#### Email Body (HTML):

**IMPORTANT:** Switch to HTML mode and paste this:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You</title>
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
                Hi {{to_name}},
              </p>
              
              <p style="margin: 0 0 20px 0; color: #374151; font-size: 16px; line-height: 1.7;">
                Thank you for contacting BlueberryFin! We've received your message and appreciate you taking the time to reach out to us.
              </p>
              
              <!-- Message Recap -->
              <div style="background-color: #f9fafb; border-left: 4px solid #2563eb; padding: 20px; border-radius: 8px; margin: 30px 0;">
                <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; font-weight: 600;">
                  YOUR MESSAGE
                </p>
                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">{{message}}</p>
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
                    <a href="mailto:sm091849@gmail.com" style="color: #2563eb; text-decoration: none; font-weight: 600; margin-left: 8px;">sm091849@gmail.com</a>
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

#### Template ID
1. Go to **"Email Templates"**
2. Copy the **Template ID** from the template you just created

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
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_yyyyyyy
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Qq49mgI87P8ao_Xan
```

**Replace:**
- `template_xxxxxxx` → Your notification template ID (from Step 1)
- `template_yyyyyyy` → Your auto-reply template ID (from Step 2)
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
3. Fill out ALL fields (all are required):
   - **Name:** Your Name
   - **Email:** your-test-email@gmail.com
   - **Company:** Test Company
   - **Phone:** +91 9876543210
   - **Message:** This is a test message

4. Click **"GET A QUOTE"**

5. Watch for:
   - ✅ Loading spinner appears
   - ✅ Success toast: "Message sent successfully!"
   - ✅ Form fields reset

6. **Check TWO inboxes:**
   - ✅ **sm091849@gmail.com** → Should receive notification with all contact details
   - ✅ **your-test-email@gmail.com** → Should receive auto-reply confirmation

> [!TIP]
> Check spam folders if emails don't appear in inbox!

---

## 📧 Template Variables Reference

Your form sends these variables to EmailJS:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{to_email}}` | Your email | sm091849@gmail.com |
| `{{from_name}}` | Sender's name | John Doe |
| `{{from_email}}` | Sender's email | john@example.com |
| `{{company}}` | Company name | Acme Corp |
| `{{phone}}` | Phone number | +91 9876543210 |
| `{{message}}` | Message text | I need financial advice... |
| `{{reply_to}}` | Reply address | john@example.com |

---

## 🔍 Troubleshooting

### Email not received?

**Check spam folder first!** This is the most common issue.

1. Open **sm091849@gmail.com**
2. Check **Spam** folder
3. If found, mark as "Not Spam"

### "Failed to send message" error?

1. Verify all credentials in `.env.local` are correct
2. Make sure you **restarted the dev server**
3. Check browser console (F12) for detailed errors
4. Verify template variables match exactly (case-sensitive)

### Form validation errors?

All fields are required:
- Name must not be empty
- Email must be valid format
- Company must not be empty
- Phone must be valid international format
- Message must not be empty

### HTML not rendering in email?

1. Make sure you switched to **HTML mode** in EmailJS editor
2. Don't use the plain text editor - use HTML editor
3. Copy the entire HTML code including `<!DOCTYPE html>`

---

## 🎯 Quick Reference

### Your Current Credentials

```env
Service ID: blueberry_trial
Template ID: [Add after creating template]
Public Key: Qq49mgI87P8ao_Xan
```

---

## 🚀 Deployment (When Ready)

When deploying to production (Vercel, Netlify, etc.):

1. Add the **same environment variables** in your hosting platform's settings
2. Redeploy your site
3. Test the contact form on your live site

**No backend server needed!** ✨

---

## ✅ Checklist

- [ ] Created HTML template in EmailJS
- [ ] Switched to HTML mode (not plain text)
- [ ] Copied Template ID
- [ ] Updated `.env.local` with all credentials
- [ ] Restarted development server
- [ ] Tested form with all required fields
- [ ] Received professional HTML email at sm091849@gmail.com
- [ ] Checked spam folder if needed

---

## 📞 Support

If you encounter issues:
1. Check EmailJS dashboard → **"History"** tab to see email status
2. Check browser console (F12) for error messages
3. Verify all template variables are spelled correctly
4. Make sure Gmail service is still connected in EmailJS
5. Ensure you're using HTML mode, not plain text mode

---

**That's it! Your contact form is now fully functional with professional HTML emails.** 🎉
