# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/e77ab030-9b6c-4a60-b3d0-aa6fa5b10009

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e77ab030-9b6c-4a60-b3d0-aa6fa5b10009) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Supabase (for database and storage)

## Utility Functions

### Supabase Storage Unicode Filename Support

This project includes utility functions for handling Hindi/Unicode filenames in Supabase Storage for both uploading and displaying files:

```typescript
// Import the utilities for display
import { getSafeSupabaseUrl, getMenuItemImageUrl } from './src/lib/supabaseStorageUtils';

// For any image with Hindi filename
const imageUrl = getSafeSupabaseUrl('bucket-name', 'लड्डू.png');

// Specifically for menu items (shorthand)
const menuImage = getMenuItemImageUrl('समोसा.jpg');

// For uploading files with Hindi filenames
import { uploadFileWithUnicodeName, uploadMenuItemImage } from './src/lib/supabaseUploadUtils';

// Upload a file while preserving Hindi filename
const file = event.target.files[0]; // e.g. "जलेबी.png"
const { url, path, error } = await uploadFileWithUnicodeName('menu-items', file);

// Quick upload for menu items
const { url } = await uploadMenuItemImage(file);
```

#### React Components

We also provide React components for easy Hindi filename handling:

```tsx
// Display component
import SafeStorageImage from './src/components/SafeStorageImage';
<SafeStorageImage bucketName="menu-items" fileName="लड्डू.png" />

// Upload component
import HindiImageUploader from './src/components/HindiImageUploader';
<HindiImageUploader bucketName="menu-items" onUploadSuccess={(url) => console.log(url)} />

// Complete menu item form with image upload
import MenuItemUploader from './src/components/MenuItemUploader';
<MenuItemUploader />
```

See the full documentation in `src/lib/README-storage-utils.md` and demo pages in `src/pages/StorageDemo.tsx` and `src/pages/UploadDemo.tsx`.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/e77ab030-9b6c-4a60-b3d0-aa6fa5b10009) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
