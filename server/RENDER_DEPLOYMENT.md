# Deploying to Render.com

This guide explains how to deploy the Jagdamba Caterers backend to Render.com.

## Steps:

1. **Create a new Web Service on Render**

   - Log in to your [Render dashboard](https://dashboard.render.com/)
   - Click "New +" and select "Web Service"
   - Connect your GitHub repository or use "Deploy from GitHub" option
   - Choose the repository that contains your server code

2. **Configure your Web Service**

   - **Name**: `jagdamba-api` (or your preferred name)
   - **Root Directory**: If your server code is in a subdirectory (e.g., `/server`), specify that path
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Free (or choose a paid plan for production)

3. **Add Environment Variables**

   Go to the "Environment" tab and add the following variables:
   
   ```
   NODE_ENV=production
   GOOGLE_CLIENT_ID=808246606979-tuh7onlj6bsuqvhh30249lomqp3jm9jt.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=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
   GOOGLE_REFRESH_TOKEN=[Your refresh token]
   OWNER_EMAIL=mahendra2731@gmail.com
   ```

4. **Update CORS Settings**

   Make sure your server's CORS settings include your Vercel frontend domain:
   
   ```javascript
   const corsOptions = {
     origin: ['https://jagdammba-culinary-visions.vercel.app']
   };
   ```

5. **Deploy**

   - Click "Create Web Service"
   - Wait for the deployment to complete

6. **Verify Deployment**

   - Once deployed, visit `https://jagdamba-api.onrender.com/api/test` to verify your API is working
   - Check the logs if you encounter any issues

7. **Update Frontend**

   - Make sure your frontend's Contact.tsx uses the correct API URL:
     ```javascript
     const apiUrl = import.meta.env.DEV 
       ? 'http://localhost:5000/api/contact' 
       : 'https://jagdamba-api.onrender.com/api/contact';
     ```

## Troubleshooting

If your deployment encounters issues, check:

1. **Logs**: Check the logs in your Render dashboard
2. **Environment Variables**: Verify all required environment variables are set
3. **CORS**: Ensure CORS is properly configured for your frontend domain
4. **Dependencies**: Make sure all dependencies are listed in package.json
