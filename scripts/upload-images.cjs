const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://ynkjxqxzkktojebpxnnq.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlua2p4cXh6a2t0b2plYnB4bm5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMTA1NjcsImV4cCI6MjA3Mzc4NjU2N30.4hRETL9jWTI5LKwTwXyOICHa2Mb_TBfiZ2swnCr_XsI';
const supabase = createClient(supabaseUrl, supabaseKey);

const imagesDir = path.join(__dirname, '../public/jadamba-images');

async function uploadImage(fileName) {
  const filePath = path.join(imagesDir, fileName);
  const fileBuffer = fs.readFileSync(filePath);
  const { data, error } = await supabase.storage.from('menu-images').upload(fileName, fileBuffer, {
    contentType: 'image/png',
    upsert: true,
  });
  if (error) {
    console.error(`Failed to upload ${fileName}:`, error.message);
  } else {
    console.log(`Uploaded: ${fileName}`);
  }
}

async function main() {
  const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png'));
  for (const file of files) {
    await uploadImage(file);
  }
}

main();
