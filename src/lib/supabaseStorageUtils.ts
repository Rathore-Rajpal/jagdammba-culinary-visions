/**
 * Utility functions for Supabase storage, with focus on proper URL encoding for non-ASCII filenames
 */

import { supabase } from './supabaseClient';

// Get the Supabase URL from the environment or from another safe source
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL || '';

/**
 * Creates a properly encoded URL for accessing files with Unicode filenames (e.g., Hindi)
 * from Supabase storage buckets
 * 
 * @param bucketName - The name of the Supabase storage bucket
 * @param fileName - The filename which may contain Unicode/Hindi characters
 * @returns A properly encoded URL that works with Supabase CDN
 */
export function getSafeSupabaseUrl(bucketName: string, fileName: string): string {
  if (!bucketName || !fileName) {
    console.warn('Missing bucketName or fileName in getSafeSupabaseUrl');
    return '';
  }
  
  // Ensure we're working with strings
  const bucket = String(bucketName);
  const file = String(fileName);
  
  // Construct storage URL using the project URL
  const storageUrl = `${SUPABASE_URL}/storage/v1/object/public`;
  
  // Build the complete URL with properly encoded filename
  // encodeURIComponent handles Unicode characters correctly
  return `${storageUrl}/${bucket}/${encodeURIComponent(file)}`;
}

/**
 * Alternative version that accepts a complete path and handles encoding
 * Useful when you have a full path already
 * 
 * @param fullPath - The full path including bucket/folder/filename
 * @returns Properly encoded URL
 */
export function encodeSupabasePath(fullPath: string): string {
  if (!fullPath) return '';
  
  // Use the same base storage URL from the project URL
  const storageUrl = `${SUPABASE_URL}/storage/v1`;
  
  // Split by slashes and only encode the last part (the filename)
  const parts = fullPath.split('/');
  const basePathParts = parts.slice(0, -1);
  const fileName = parts[parts.length - 1];
  
  // Rebuild the URL with encoded filename
  return `${storageUrl}/object/public/${basePathParts.join('/')}/${encodeURIComponent(fileName)}`;
}

/**
 * Convenience function specifically for menu items
 * 
 * @param fileName - The menu item filename (which may contain Unicode/Hindi characters)
 * @returns A properly encoded URL
 */
export function getMenuItemImageUrl(fileName: string): string {
  return getSafeSupabaseUrl('menu-items', fileName);
}

/**
 * Example usage:
 * 
 * // Get URL for a Hindi filename
 * const imageUrl = getSafeSupabaseUrl('menu-items', 'लड्डू.png');
 * 
 * // For menu items specifically
 * const menuImageUrl = getMenuItemImageUrl('लड्डू.png');
 * 
 * // Fix an existing path that's not loading
 * const fixedUrl = encodeSupabasePath('menu-items/समोसा.jpg');
 */