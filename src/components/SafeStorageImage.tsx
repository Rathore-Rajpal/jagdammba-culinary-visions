import React, { useState, useEffect } from 'react';
import { getSafeSupabaseUrl, encodeSupabasePath } from '../lib/supabaseStorageUtils';

interface ImageDisplayProps {
  bucketName: string;
  fileName: string;
  alt?: string;
  className?: string;
}

/**
 * Component that safely displays images from Supabase storage with Unicode filenames
 */
export default function SafeStorageImage({ 
  bucketName, 
  fileName, 
  alt = 'Image', 
  className = ''
}: ImageDisplayProps) {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  
  useEffect(() => {
    if (bucketName && fileName) {
      try {
        // Generate a safe URL for the image, properly encoding any Unicode characters
        const safeUrl = getSafeSupabaseUrl(bucketName, fileName);
        setImageUrl(safeUrl);
        setError(false);
      } catch (e) {
        console.error('Error generating safe image URL:', e);
        setError(true);
      }
    }
  }, [bucketName, fileName]);

  // Show a placeholder if there's an error or no image URL
  if (error || !imageUrl) {
    return <div className={`bg-gray-200 ${className}`}>Image not found</div>;
  }

  return (
    <img 
      src={imageUrl} 
      alt={alt} 
      className={className}
      onError={() => setError(true)}
    />
  );
}

// Example usage in another component:
/* 
  <SafeStorageImage 
    bucketName="menu-items" 
    fileName="लड्डू.png" 
    alt="Laddu" 
    className="w-full h-48 object-cover rounded-lg" 
  />
*/