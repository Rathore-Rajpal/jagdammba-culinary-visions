const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { sendEmail } = require('./emailService');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const formData = req.body;
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.phone || !formData.eventType) {
      return res.status(400).json({ success: false, message: 'Required fields missing' });
    }
    
    // Send email
    const emailResult = await sendEmail(formData);
    
    res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      data: emailResult
    });
    
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process your request',
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
