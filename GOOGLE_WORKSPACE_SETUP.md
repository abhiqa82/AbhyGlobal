# Google Workspace Setup Guide for Abhy Global

## 📧 Account Information

**Domain:** abhyglobal.com  
**Admin Email:** abhishek.agawane@abhyglobal.com  
**Website Contact Email:** contact@abhyglobal.com

---

## 🎯 Required Email Setup

The website uses `contact@abhyglobal.com` as the primary contact email address. You need to create this email alias/user in your Google Workspace account.

### Step 1: Create Contact Email in Google Workspace

#### Option A: Create as Email Alias (Recommended)
1. Log in to Google Admin Console: https://admin.google.com
2. Go to **Users** → Select your admin user (abhishek.agawane@abhyglobal.com)
3. Click on **User information** → **Email aliases**
4. Click **Add alternate email**
5. Enter: `contact@abhyglobal.com`
6. Click **Save**

This way, emails sent to contact@abhyglobal.com will be delivered to your admin inbox.

#### Option B: Create as Separate User
1. Log in to Google Admin Console: https://admin.google.com
2. Go to **Users** → Click **Add new user**
3. Fill in the details:
   - First name: Contact
   - Last name: Abhy Global
   - Email: contact@abhyglobal.com
   - Set a secure password
4. Click **Add new user**

**Note:** Option A (alias) is recommended as it's simpler and all emails go to one inbox.

---

## 📋 Additional Recommended Email Addresses

Consider setting up these email aliases for better organization:

### Business Emails (Aliases)
- `info@abhyglobal.com` - General information inquiries
- `sales@abhyglobal.com` - Sales and product inquiries
- `support@abhyglobal.com` - Customer support
- `quotes@abhyglobal.com` - Quote requests
- `export@abhyglobal.com` - Export-specific inquiries

### Setup Steps for Additional Aliases:
1. Log in to Google Admin Console
2. Go to **Users** → Select admin user
3. Click **Email aliases** → **Add alternate email**
4. Add each email address
5. Save

---

## 🔧 Website Configuration

The website is already configured to use:
- **Domain:** abhyglobal.com (✅ All references correct)
- **Contact Email:** contact@abhyglobal.com (✅ Updated in code)

### Files Updated:
- ✅ `index.html` - Contact section and structured data
- ✅ `catalog.html` - Footer contact information
- ✅ Schema.org structured data - Email updated

---

## 📨 Contact Form Setup

The website contact form currently uses client-side JavaScript for form handling. To receive form submissions via email, you have two options:

### Option 1: Use a Form Service (Recommended - Easiest)
Use services like:
- **Formspree** (https://formspree.io) - Free tier available
- **EmailJS** (https://www.emailjs.com) - Free tier available
- **Google Forms** - Integrated with Google Workspace

### Option 2: Backend Email Service
Set up a backend service (PHP, Node.js, etc.) to handle form submissions and send emails using:
- SMTP through Google Workspace
- SendGrid API
- Mailgun API

### Current Form Status:
The contact form (`#contact-form` in `index.html`) currently shows a success message but doesn't send emails. You'll need to integrate one of the above solutions.

---

## 🔐 Google Workspace SMTP Settings

If you need to send emails programmatically (for contact forms), use these SMTP settings:

```
SMTP Server: smtp.gmail.com
Port: 587 (TLS) or 465 (SSL)
Username: contact@abhyglobal.com
Password: [Your Google Workspace password or App Password]
Encryption: TLS/SSL
```

**Note:** For better security, use an "App Password" instead of your regular password when setting up SMTP.

### Creating App Password:
1. Go to your Google Account: https://myaccount.google.com
2. Navigate to **Security**
3. Under "2-Step Verification", enable it if not already enabled
4. Go to **App passwords**
5. Create a new app password for "Mail"
6. Use this password in your SMTP configuration

---

## 🌐 Domain Configuration

### DNS Settings Required:
Make sure your domain's DNS is properly configured in Google Workspace:

1. **MX Records** - For email delivery
   - Should be automatically configured by Google Workspace
   - Verify in Google Admin Console → **Apps** → **Google Workspace** → **Gmail** → **MX Records**

2. **CNAME Records** - If using custom domain features
   - Verify in Google Admin Console

3. **A Records** - For website hosting
   - Point abhyglobal.com and www.abhyglobal.com to your hosting provider's IP address
   - This is separate from Google Workspace email configuration

---

## ✅ Verification Checklist

After setting up Google Workspace:

- [ ] Created contact@abhyglobal.com email alias or user
- [ ] Tested receiving email at contact@abhyglobal.com
- [ ] Verified domain DNS settings (MX records)
- [ ] Set up any additional email aliases if needed
- [ ] Integrated contact form with email service (if using form service)
- [ ] Tested contact form submission end-to-end
- [ ] Updated any other email references in documentation

---

## 📞 Support

For Google Workspace support:
- Google Workspace Help: https://support.google.com/a
- Admin Help Center: https://support.google.com/a/topic/25838

For website email integration support, refer to the form service documentation you choose to use.

---

## 📝 Notes

1. **Email Delivery:** Once you set up the email alias, it may take a few minutes to a few hours for the email to be fully active.

2. **Testing:** Test sending an email to contact@abhyglobal.com from an external email address to verify it's working.

3. **Privacy:** Consider updating your website's privacy policy to mention how contact form data is handled.

4. **Backup Email:** Keep abhyglobal@gmail.com as a backup or redirect it to your workspace email if needed.

---

**Last Updated:** January 2024  
**Domain:** abhyglobal.com  
**Admin:** abhishek.agawane@abhyglobal.com

