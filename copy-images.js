const fs = require('fs');
const path = require('path');

// Define paths
const SOURCE_DIR = path.join(__dirname, 'dist', 'assets', 'jadamba Images');
const TARGET_DIR = path.join(__dirname, 'public', 'assets', 'jadamba Images');

// Create target directory if it doesn't exist
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
  console.log(`Created directory: ${TARGET_DIR}`);
}

// Copy all files from source to target
try {
  const files = fs.readdirSync(SOURCE_DIR);
  console.log(`Found ${files.length} files in source directory`);
  
  files.forEach(file => {
    const sourcePath = path.join(SOURCE_DIR, file);
    const targetPath = path.join(TARGET_DIR, file);
    
    fs.copyFileSync(sourcePath, targetPath);
  });
  
  console.log(`Successfully copied ${files.length} files to public folder`);
} catch (err) {
  console.error('Error copying files:', err);
}
