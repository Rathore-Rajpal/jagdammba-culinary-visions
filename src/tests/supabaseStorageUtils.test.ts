import { describe, it, expect } from 'vitest';
import { getSafeSupabaseUrl, encodeSupabasePath } from '../lib/supabaseStorageUtils';

// Mock the environment variables
vi.mock('../lib/supabaseClient', () => ({
  supabase: {}
}));

// Mock import.meta.env
const originalEnv = import.meta.env;
import.meta.env = {
  ...originalEnv,
  VITE_SUPABASE_URL: 'https://ynkjxqxzkktojebpxnnq.supabase.co'
};

describe('supabaseStorageUtils', () => {
  describe('getSafeSupabaseUrl', () => {
    it('should properly encode Hindi characters in filenames', () => {
      const bucketName = 'menu-items';
      const hindiFileName = 'लड्डू.png';
      
      const url = getSafeSupabaseUrl(bucketName, hindiFileName);
      
      // Check that URL contains encoded Hindi characters
      expect(url).toContain('%E0%A4%B2%E0%A4%A1%E0%A5%8D%E0%A4%A1%E0%A5%82.png');
      expect(url).toEqual(
        'https://ynkjxqxzkktojebpxnnq.supabase.co/storage/v1/object/public/menu-items/%E0%A4%B2%E0%A4%A1%E0%A5%8D%E0%A4%A1%E0%A5%82.png'
      );
    });

    it('should handle empty inputs gracefully', () => {
      expect(getSafeSupabaseUrl('', 'test.jpg')).toBe('');
      expect(getSafeSupabaseUrl('bucket', '')).toBe('');
    });

    it('should work with regular ASCII filenames too', () => {
      const url = getSafeSupabaseUrl('photos', 'image123.jpg');
      expect(url).toEqual(
        'https://ynkjxqxzkktojebpxnnq.supabase.co/storage/v1/object/public/photos/image123.jpg'
      );
    });
  });

  describe('encodeSupabasePath', () => {
    it('should encode just the filename part of a full path', () => {
      const fullPath = 'menu-items/समोसा.jpg';
      const url = encodeSupabasePath(fullPath);
      
      expect(url).toContain('menu-items');
      expect(url).toContain('%E0%A4%B8%E0%A4%AE%E0%A5%8B%E0%A4%B8%E0%A4%BE.jpg');
      expect(url).not.toContain('समोसा.jpg');
    });
    
    it('should handle empty paths', () => {
      expect(encodeSupabasePath('')).toBe('');
    });
  });
});