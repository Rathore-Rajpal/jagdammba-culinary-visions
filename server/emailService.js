const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter using Gmail OAUTH2
const createTransporter = async () => {
  // Configure OAuth2 credentials
  const OAuth2 = require('googleapis').google.auth.OAuth2;
  
  const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://jagdammba-culinary-visions.vercel.app/" // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
  });

  try {
    // Generate access token
    const accessToken = await oauth2Client.getAccessToken();
    
    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'jagdambacatrers@gmail.com', // The email that will be sending emails
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken.token
      },
    });

    return transporter;
  } catch (error) {
    console.error("Error creating transporter:", error);
    throw new Error(`Failed to create email transporter: ${error.message}`);
  }
};

// Generate HTML email template with golden theme matching Jagdamba branding
const generateEmailTemplate = (data) => {
  const { name, email, phone, eventType, eventDate, guestCount, message } = data;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Jagdamba Caterers and Events - Booking Confirmation</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #f0f0f0;
          margin: 0;
          padding: 0;
          background-color: #111827;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #1a2233;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 10px;
        }
        .header {
          text-align: center;
          padding: 20px 0;
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
        }
        .logo {
          max-width: 150px;
          margin-bottom: 15px;
        }
        .title {
          color: #d4af37;
          font-size: 24px;
          margin: 0;
          font-weight: bold;
        }
        .subtitle {
          color: #cccccc;
          font-size: 16px;
          margin: 5px 0 0;
        }
        .content {
          padding: 20px 0;
        }
        .message {
          background-color: rgba(212, 175, 55, 0.1);
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
          border-left: 4px solid #d4af37;
        }
        .booking-details {
          background-color: #1e293b;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .detail-row {
          display: flex;
          margin-bottom: 10px;
        }
        .detail-label {
          width: 40%;
          color: #d4af37;
          font-weight: bold;
        }
        .detail-value {
          width: 60%;
          color: #f0f0f0;
        }
        .footer {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(212, 175, 55, 0.3);
          font-size: 14px;
          color: #cccccc;
        }
        .gold-button {
          display: inline-block;
          background: linear-gradient(135deg, #d4af37 0%, #f5d76e 50%, #d4af37 100%);
          color: #111827;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: bold;
          margin-top: 15px;
          text-align: center;
        }
        .social-links {
          margin-top: 20px;
        }
        .social-link {
          display: inline-block;
          margin: 0 10px;
          color: #d4af37;
          text-decoration: none;
        }
        @media only screen and (max-width: 600px) {
          .container {
            width: 100%;
            padding: 10px;
          }
          .detail-row {
            flex-direction: column;
          }
          .detail-label, .detail-value {
            width: 100%;
          }
          .detail-label {
            margin-bottom: 5px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://jagdambacaterers.in/logo.png" alt="Jagdamba Caterers and Events Logo" class="logo">
          <h1 class="title">Jagdamba Caterers and Events</h1>
          <p class="subtitle">Creating delicious memories since 1997</p>
        </div>
        
        <div class="content">
          <p>Dear ${name},</p>
          
          <p>Thank you for contacting Jagdamba Caterers and Events. We have received your inquiry and our team will get back to you within 24 hours with a personalized quote.</p>
          
          <div class="booking-details">
            <h3 style="color: #d4af37; margin-top: 0;">Your Booking Request Details:</h3>
            
            <div class="detail-row">
              <div class="detail-label">Name:</div>
              <div class="detail-value">${name}</div>
            </div>
            
            <div class="detail-row">
              <div class="detail-label">Email:</div>
              <div class="detail-value">${email}</div>
            </div>
            
            <div class="detail-row">
              <div class="detail-label">Phone:</div>
              <div class="detail-value">${phone}</div>
            </div>
            
            <div class="detail-row">
              <div class="detail-label">Event Type:</div>
              <div class="detail-value">${eventType}</div>
            </div>
            
            ${eventDate ? `
            <div class="detail-row">
              <div class="detail-label">Event Date:</div>
              <div class="detail-value">${new Date(eventDate).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
            </div>
            ` : ''}
            
            ${guestCount ? `
            <div class="detail-row">
              <div class="detail-label">Guest Count:</div>
              <div class="detail-value">${guestCount}</div>
            </div>
            ` : ''}
            
            ${message ? `
            <div class="detail-row" style="flex-direction: column;">
              <div class="detail-label" style="margin-bottom: 10px;">Message:</div>
              <div class="message">${message}</div>
            </div>
            ` : ''}
          </div>
          
          <p>If you need immediate assistance, please feel free to call us directly:</p>
          
          <div style="text-align: center;">
            <a href="tel:+918769480205" class="gold-button">Call: +91 87694 80205</a>
          </div>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} Jagdamba Caterers and Events. All rights reserved.</p>
          <p>1/1, D.D.P. Nagar, Madhuban Housing Board, Basni, Jodhpur</p>
          
          <div class="social-links">
            <a href="https://www.facebook.com/share/1BAX3KYYyv/?mibextid=wwXIfr" class="social-link" target="_blank">Facebook</a>
            <a href="https://www.instagram.com/jagdamba_caterers_events?igsh=MnhobDNidjBrM3hl&utm_source=qr" class="social-link" target="_blank">Instagram</a>
            <a href="https://wa.me/918769480205" class="social-link" target="_blank">WhatsApp</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send email function
const sendEmail = async (data) => {
  try {
    const transporter = await createTransporter();
    const { name, email } = data;
    const ownerEmail = process.env.OWNER_EMAIL || 'mahendra2731@gmail.com';

    const emailContent = generateEmailTemplate(data);

    // Send to the customer
    const customerInfo = await transporter.sendMail({
      from: '"Jagdamba Caterers and Events" <jagdambacatrers@gmail.com>',
      to: email,
      subject: 'Thank You for Contacting Jagdamba Caterers and Events',
      html: emailContent,
    });

    // Send notification to the owner
    const ownerInfo = await transporter.sendMail({
      from: '"Jagdamba Caterers and Events Website" <jagdambacatrers@gmail.com>',
      to: ownerEmail,
      subject: `New Booking Request from ${name}`,
      html: emailContent,
    });

    return {
      customerEmailId: customerInfo.messageId,
      ownerEmailId: ownerInfo.messageId,
      success: true
    };

  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Error sending email: ${error.message}`);
  }
};

module.exports = { sendEmail };
