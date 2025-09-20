import React, { useState } from 'react';
import { getSafeSupabaseUrl } from '../lib/supabaseStorageUtils';
import SafeStorageImage from '../components/SafeStorageImage';

// Sample Hindi filenames that might be in your Supabase bucket
const SAMPLE_ITEMS = [
  { name: 'लड्डू.png', bucket: 'menu-items', english: 'Laddu' },
  { name: 'समोसा.jpg', bucket: 'menu-items', english: 'Samosa' },
  { name: 'पकोड़ा.png', bucket: 'menu-items', english: 'Pakora' },
  { name: 'जलेबी.jpg', bucket: 'menu-items', english: 'Jalebi' },
  { name: 'बर्फी.png', bucket: 'menu-items', english: 'Barfi' },
];

export default function StorageDemo() {
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    bucket: string;
    url: string;
  } | null>(null);

  // Generate and display the URL for a selected file
  const handleSelectFile = (file: typeof SAMPLE_ITEMS[0]) => {
    const safeUrl = getSafeSupabaseUrl(file.bucket, file.name);
    setSelectedFile({
      name: file.name,
      bucket: file.bucket,
      url: safeUrl,
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Supabase Storage Unicode Demo</h1>
      
      <div className="mb-8">
        <h2 className="text-xl mb-2">Test Hindi Filenames</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {SAMPLE_ITEMS.map((item) => (
            <div 
              key={item.name}
              className="border p-4 rounded cursor-pointer hover:bg-gray-50"
              onClick={() => handleSelectFile(item)}
            >
              <p><span className="font-bold">Hindi:</span> {item.name}</p>
              <p><span className="font-bold">English:</span> {item.english}</p>
              
              <div className="mt-2">
                <SafeStorageImage
                  bucketName={item.bucket}
                  fileName={item.name}
                  alt={item.english}
                  className="w-full h-32 object-cover rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedFile && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl mb-2">Generated Safe URL:</h2>
          <div className="mb-2">
            <span className="font-bold">File:</span> {selectedFile.name}
          </div>
          <div className="mb-4">
            <span className="font-bold">Bucket:</span> {selectedFile.bucket}
          </div>
          <div className="bg-white p-3 rounded border overflow-auto">
            <code className="text-sm break-all">{selectedFile.url}</code>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Notice how the Hindi characters have been properly encoded in the URL
              (the part with % symbols). This allows the Supabase CDN to serve the image
              while maintaining the original Hindi filename in storage.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}