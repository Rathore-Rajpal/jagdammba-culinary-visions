# Jagdamba Caterers and Events - Server

This is the backend server for the Jagdamba Caterers and Events website, handling email functionality for the contact form.

## Setup Instructions

1. **Install dependencies**

```bash
cd server
npm install
```

2. **Set up Google OAuth2 Credentials**

First, ensure the redirect URI is properly configured in the Google Cloud Console:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Navigate to "APIs & Services" > "Credentials"
4. Find and edit the OAuth 2.0 Client ID
5. Under "Authorized redirect URIs", make sure this URL is added:
   `https://jagdammba-culinary-visions.vercel.app/`
6. Click "Save"

Then run the script to generate a refresh token:

```bash
node getRefreshToken.js
```

Follow the instructions in the console:
- Visit the URL provided
- Sign in with the jagdambacatrers@gmail.com account
- Grant the requested permissions
- Copy the code from the redirect URL
- Paste it back in the terminal

The refresh token will be automatically added to the `.env` file.

3. **Start the server**

For development with auto-restart on changes:
```bash
npm run dev
```

For production:
```bash
npm start
```

## Environment Variables

The server uses the following environment variables in the `.env` file at the project root:

```
VITE_GOOGLE_CLIENT_ID=808246606979-tuh7onlj6bsuqvhh30249lomqp3jm9jt.apps.googleusercontent.com
VITE_GOOGLE_CLIENT_SECRET=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
VITE_OWNER_EMAIL=mahendra2731@gmail.com
GOOGLE_REFRESH_TOKEN=<your-refresh-token>
```

## API Endpoints

### POST /api/contact

Handles contact form submissions, sending emails to both the customer and the business owner.

**Request Body:**
```json
{
  "name": "Customer Name",
  "email": "customer@example.com",
  "phone": "+9187694XXXXX",
  "eventType": "Wedding",
  "eventDate": "2025-10-15",
  "guestCount": "200",
  "message": "Additional details about the event"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Form submitted successfully",
  "data": {
    "customerEmailId": "...",
    "ownerEmailId": "...",
    "success": true
  }
}
```

## Deployment

For production, deploy the server to a service like Render, Heroku, or Vercel, and update the API URL in the React frontend accordingly.
