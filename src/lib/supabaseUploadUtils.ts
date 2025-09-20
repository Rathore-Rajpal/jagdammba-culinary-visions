/**
 * Utility functions for uploading files with Hindi/Unicode filenames to Supabase storage
 */

import { supabase } from './supabaseClient';

/**
 * Upload a file to Supabase storage with Unicode/Hindi filename support
 * 
 * @param bucketName - The name of the storage bucket to upload to
 * @param file - The file object from input[type="file"] or File API
 * @param prefixPath - Optional folder path within the bucket (e.g., 'folder/')
 * @param useOriginalName - Whether to use the file's original name (true) or generate a unique name (false)
 * @returns Object with the upload results: { path, error, url }
 */
export async function uploadFileWithUnicodeName(
  bucketName: string,
  file: File,
  prefixPath: string = '',
  useOriginalName: boolean = true
): Promise<{ path: string | null; error: Error | null; url: string | null }> {
  if (!file || !bucketName) {
    console.error('Missing file or bucket name');
    return { path: null, error: new Error('Missing file or bucket name'), url: null };
  }

  try {
    // Decide on the file name to use for storage
    let fileName = file.name;
    
    // If not using original name, generate a unique name but keep extension
    if (!useOriginalName) {
      const extension = fileName.split('.').pop();
      fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 15)}.${extension}`;
    }
    
    // Construct the full path in the bucket
    const filePath = prefixPath 
      ? `${prefixPath}${prefixPath.endsWith('/') ? '' : '/'}${fileName}` 
      : fileName;
      
    // Upload the file to Supabase storage
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true, // Override if file already exists
      });
      
    if (error) {
      console.error('Supabase storage upload error:', error);
      return { path: null, error, url: null };
    }

    // Get the public URL for the uploaded file
    const { data: { publicUrl } } = supabase.storage
      .from(bucketName)
      .getPublicUrl(data?.path || '');
      
    // To ensure the URL is valid with Hindi characters, apply encodeURI to the filename part
    // while preserving the rest of the URL structure
    const urlParts = publicUrl.split('/');
    const encodedFileName = encodeURIComponent(urlParts[urlParts.length - 1]);
    urlParts[urlParts.length - 1] = encodedFileName;
    const safeUrl = urlParts.join('/');
    
    return { 
      path: data?.path || null, 
      error: null, 
      url: safeUrl
    };
  } catch (err: any) {
    console.error('Error in uploadFileWithUnicodeName:', err);
    return { path: null, error: err, url: null };
  }
}

/**
 * Upload a menu item image with Hindi/Unicode filename support
 * 
 * @param file - The file object from input[type="file"] or File API
 * @param useOriginalName - Whether to use the file's original name (true) or generate a unique name (false)
 * @returns Object with upload results
 */
export async function uploadMenuItemImage(
  file: File,
  useOriginalName: boolean = true
): Promise<{ path: string | null; error: Error | null; url: string | null }> {
  return uploadFileWithUnicodeName('menu-items', file, '', useOriginalName);
}

/**
 * Create a File object from base64 data (useful for handling file data from canvas or image processing)
 * 
 * @param base64 - The base64 string (can include data URL prefix like "data:image/jpeg;base64,")
 * @param filename - The filename to use (can include Hindi characters)
 * @param mimeType - The MIME type, defaults to 'image/jpeg'
 * @returns A File object that can be uploaded
 */
export function base64ToFile(
  base64: string, 
  filename: string, 
  mimeType: string = 'image/jpeg'
): File {
  // Remove data URL prefix if present
  const base64Data = base64.includes('base64,') 
    ? base64.split('base64,')[1] 
    : base64;
  
  // Convert base64 to binary
  const byteString = atob(base64Data);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  
  // Create Blob and then File object
  const blob = new Blob([ab], { type: mimeType });
  return new File([blob], filename, { type: mimeType });
}