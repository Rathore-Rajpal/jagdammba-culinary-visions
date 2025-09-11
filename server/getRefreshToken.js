const { google } = require('googleapis');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Setup OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID || '808246606979-tuh7onlj6bsuqvhh30249lomqp3jm9jt.apps.googleusercontent.com',
  process.env.GOOGLE_CLIENT_SECRET || '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',
  'https://jagdammba-culinary-visions.vercel.app/' // Redirect URL
);

// Generate a URL to get the refresh token
const scopes = [
  'https://mail.google.com/',
  'https://www.googleapis.com/auth/gmail.send',
  'https://www.googleapis.com/auth/gmail.compose'
];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
  prompt: 'consent'
});

console.log('Authorize this app by visiting this URL:', authUrl);

// Create readline interface to get the auth code
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user to enter the code from the redirect URL
rl.question('Enter the code from that page here: ', (code) => {
  // Exchange the auth code for tokens
  oauth2Client.getToken(code, (err, tokens) => {
    if (err) {
      console.error('Error getting tokens:', err);
      rl.close();
      return;
    }

    console.log('Tokens received successfully!');
    console.log('Refresh Token:', tokens.refresh_token);

    // Append to .env file
    const envPath = path.resolve(__dirname, '../.env');
    fs.appendFileSync(envPath, `\nGOOGLE_REFRESH_TOKEN=${tokens.refresh_token}\n`);
    
    console.log('Token added to .env file successfully!');
    rl.close();
  });
});
