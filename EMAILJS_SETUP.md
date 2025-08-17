# EmailJS Setup Guide for Contact Form

## What is EmailJS?
EmailJS allows you to send emails directly from your React app without needing a backend server. It's perfect for portfolio websites and contact forms.

## Step-by-Step Setup

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

### 2. Create Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose "Gmail" (or your preferred email provider)
- Connect your Gmail account
- Note down the **Service ID** (you'll need this)

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template content:

**Subject:**
```
New message from {{from_name}} - {{subject}}
```

**Email Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Message</title>
</head>
<body>
    <h2>New message from your portfolio website</h2>
    
    <h3>Contact Details:</h3>
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Subject:</strong> {{subject}}</p>
    
    <h3>Message:</h3>
    <p>{{message}}</p>
    
    <hr>
    <p><em>This message was sent from your portfolio contact form.</em></p>
</body>
</html>
```

- Save the template
- Note down the **Template ID**

### 4. Get Your Public Key
- Go to "Account" → "API Keys"
- Copy your **Public Key**

### 5. Update Configuration
Open `src/config/emailjs.ts` and replace the placeholder values:

```typescript
export const emailjsConfig = {
  serviceId: 'YOUR_ACTUAL_SERVICE_ID', // Replace with your service ID
  templateId: 'YOUR_ACTUAL_TEMPLATE_ID', // Replace with your template ID
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY', // Replace with your public key
  toEmail: 'rajaishwaryasingh@gmail.com' // Your Gmail address
};
```

### 6. Test the Form
- Start your development server
- Fill out the contact form
- Submit and check your Gmail inbox
- You should receive the email with the form details

## Free Plan Limitations
- 200 emails per month
- Perfect for portfolio websites
- Upgrade if you need more

## Security Notes
- The public key is safe to expose in frontend code
- EmailJS handles the backend securely
- No sensitive credentials are exposed

## Troubleshooting
- Check browser console for errors
- Verify all IDs are correct
- Ensure Gmail service is properly connected
- Check spam folder for test emails

## Alternative: Gmail SMTP
If you prefer to use Gmail's SMTP directly, you'll need a backend server (Node.js, Python, etc.) which is more complex but gives you full control.

## Support
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Community: [https://community.emailjs.com/](https://community.emailjs.com/) 