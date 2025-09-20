# Supabase Storage Unicode Filename Utilities

This set of utilities solves the problem of uploading and displaying images with non-ASCII filenames (like Hindi) stored in Supabase buckets.

## The Problem

While Supabase Storage technically supports Unicode filenames for upload, there are two main issues:
1. When generating public URLs, these characters need to be properly URL-encoded to work with the Supabase CDN
2. Standard file upload methods may have issues with non-ASCII filenames during the upload process

## Solution

The utilities in `supabaseStorageUtils.ts` provide helper functions to properly encode filenames with non-ASCII characters.

## Usage

### Basic Usage

```typescript
import { getSafeSupabaseUrl } from '../lib/supabaseStorageUtils';

// Generate a safe URL for an image with a Hindi filename
const imageUrl = getSafeSupabaseUrl('menu-items', 'लड्डू.png');

// Use in an img tag
<img src={imageUrl} alt="Laddu" />
```

### With Full Paths

If you already have a full path:

```typescript
import { encodeSupabasePath } from '../lib/supabaseStorageUtils';

// Fix a URL that's not loading
const brokenPath = 'menu-items/समोसा.jpg';
const fixedUrl = encodeSupabasePath(brokenPath);

// Use in an img tag
<img src={fixedUrl} alt="Samosa" />
```

### Using the SafeStorageImage Component

We've also provided a component that handles all of this for you:

```tsx
import SafeStorageImage from '../components/SafeStorageImage';

// In your component:
<SafeStorageImage 
  bucketName="menu-items" 
  fileName="लड्डू.png" 
  alt="Laddu" 
  className="w-full h-48 object-cover rounded" 
/>
```

## How It Works

1. The functions take a bucket name and filename or a full path
2. They construct the correct Supabase storage URL
3. They use `encodeURIComponent()` to properly encode Unicode characters in the filename
4. The resulting URL works with the Supabase CDN

## Uploading Files with Hindi Filenames

We've added utilities in `supabaseUploadUtils.ts` to handle the upload process for files with Unicode filenames:

```typescript
import { uploadFileWithUnicodeName } from '../lib/supabaseUploadUtils';

// Upload a file with Hindi filename
const file = event.target.files[0]; // e.g., "लड्डू.png"
const { url, path, error } = await uploadFileWithUnicodeName(
  'menu-items',  // bucket name
  file,         // File object 
  '',           // optional path prefix
  true          // use original filename with Hindi characters
);

// The returned URL is already properly encoded
console.log(url); // https://.../menu-items/%E0%A4%B2%E0%A4%A1%E0%A5%8D%E0%A4%A1%E0%A5%82.png
```

### React Components for Upload

We provide two React components for easy file uploads:

1. `HindiImageUploader` - Basic file uploader that preserves Hindi filenames
2. `MenuItemUploader` - Complete form with image upload for adding menu items

```tsx
import HindiImageUploader from '../components/HindiImageUploader';

<HindiImageUploader
  bucketName="menu-items"
  onUploadSuccess={(url, path) => {
    console.log('Upload successful:', url);
  }}
/>
```

## Tips

- Only the filename needs encoding, not the bucket or folder paths
- These utilities maintain your original filenames in storage while fixing display issues
- The `SafeStorageImage` component includes error handling if an image fails to load
- For uploads, use our `uploadFileWithUnicodeName` function instead of direct Supabase upload methods
- See the UploadDemo page for complete examples of uploading and displaying Hindi-named files