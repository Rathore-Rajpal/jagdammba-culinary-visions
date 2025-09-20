import React, { useState } from 'react';
import { uploadMenuItemImage } from '../lib/supabaseUploadUtils';
import { supabase } from '../lib/supabaseClient';
import HindiImageUploader from './HindiImageUploader';

interface MenuItemUploaderProps {
  onSuccess?: () => void;
  className?: string;
}

export default function MenuItemUploader({
  onSuccess,
  className = '',
}: MenuItemUploaderProps) {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleImageUploaded = (url: string) => {
    setImageUrl(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!itemName || !price || !imageUrl) {
      setError('Name, price, and image are required');
      return;
    }

    setIsSubmitting(true);

    try {
      // Insert the new menu item into the database
      const { error: insertError } = await supabase.from('menu_items').insert({
        name: itemName,
        description,
        price: parseFloat(price),
        category,
        available: true,
        image_url: imageUrl,
      });

      if (insertError) {
        throw insertError;
      }

      setSuccess(true);
      
      // Reset form
      setItemName('');
      setDescription('');
      setPrice('');
      setCategory('');
      setImageUrl(null);
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      setError(err.message || 'Failed to add menu item');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`p-4 border rounded-lg shadow-sm ${className}`}>
      <h2 className="text-xl font-semibold mb-4">Add Menu Item</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Name (Hindi or English)
          </label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="लड्डू / Laddu"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Price (₹)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="99.00"
              className="w-full p-2 border rounded"
              required
              min="0"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Category</option>
              <option value="starters">Starters</option>
              <option value="main">Main Course</option>
              <option value="desserts">Desserts</option>
              <option value="beverages">Beverages</option>
              <option value="specials">Specials</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Image (Hindi filenames supported)
          </label>
          
          <HindiImageUploader
            bucketName="menu-items"
            onUploadSuccess={handleImageUploaded}
            onUploadError={(err) => setError(err.message)}
            maxFileSizeMB={2}
            acceptedFileTypes="image/png,image/jpeg,image/jpg"
            useOriginalName={true}
          />
        </div>

        {error && <div className="text-red-500">{error}</div>}
        {success && (
          <div className="text-green-600">Menu item added successfully!</div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting || !imageUrl}
            className={`px-6 py-2 rounded ${
              isSubmitting || !imageUrl
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {isSubmitting ? 'Adding...' : 'Add Menu Item'}
          </button>
        </div>
      </form>
    </div>
  );
}