import React from 'react';
import HindiImageUploader from '../components/HindiImageUploader';
import MenuItemUploader from '../components/MenuItemUploader';

export default function UploadDemo() {
  const handleUploadSuccess = (url: string, path: string) => {
    console.log('Upload successful!');
    console.log('Public URL:', url);
    console.log('Storage path:', path);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Hindi Filename Upload Demo</h1>

      <div className="mb-12 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Basic Hindi Image Uploader
        </h2>
        <p className="mb-4">
          Upload images with Hindi filenames directly to Supabase storage.
        </p>

        <HindiImageUploader
          bucketName="public-uploads"
          onUploadSuccess={handleUploadSuccess}
          className="mt-4"
        />

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <h3 className="font-semibold text-blue-800">How It Works:</h3>
          <p className="mt-2 text-sm">
            1. When you select a file with a Hindi name, it is uploaded to
            Supabase using the original filename.
          </p>
          <p className="mt-1 text-sm">
            2. The URL returned is automatically encoded to ensure it works in
            browsers.
          </p>
          <p className="mt-1 text-sm">
            3. Images can be displayed using this encoded URL, but the original
            filename is preserved in storage.
          </p>
        </div>
      </div>

      <div className="mb-12 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Complete Menu Item Form
        </h2>
        <p className="mb-4">
          Add a menu item with image upload (supports Hindi filenames).
        </p>

        <MenuItemUploader />

        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <h3 className="font-semibold text-green-800">Usage Tips:</h3>
          <p className="mt-2 text-sm">
            1. You can enter item names in Hindi or English.
          </p>
          <p className="mt-1 text-sm">
            2. Image filenames can be in Hindi and will be preserved in storage.
          </p>
          <p className="mt-1 text-sm">
            3. After upload, the encoded URL is automatically used in the database.
          </p>
          <p className="mt-1 text-sm">
            4. Use the HindiImageUploader component in your own forms for Hindi filename support.
          </p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Code Examples</h2>

        <div className="mb-4">
          <h3 className="font-medium">Basic Upload</h3>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
{`// 1. Import the upload utility
import { uploadFileWithUnicodeName } from '../lib/supabaseUploadUtils';

// 2. Get a file (from input[type="file"] or other source)
const file = event.target.files[0];

// 3. Upload with Unicode/Hindi filename support
const { url, path, error } = await uploadFileWithUnicodeName(
  'bucket-name',  // Bucket name
  file,           // File object
  'folder/',      // Optional prefix path
  true            // Use original filename (with Hindi characters)
);

// 4. Use the encoded URL (url is automatically safe for browsers)
if (url) {
  imageElement.src = url;
}`}
          </pre>
        </div>

        <div>
          <h3 className="font-medium">Using the Component</h3>
          <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
{`<HindiImageUploader
  bucketName="menu-items"
  prefixPath="dishes/"
  onUploadSuccess={(url, path) => {
    // Store the URL in your database or state
    setImageUrl(url);
  }}
  maxFileSizeMB={2}
  acceptedFileTypes="image/png,image/jpeg"
  useOriginalName={true}
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
}