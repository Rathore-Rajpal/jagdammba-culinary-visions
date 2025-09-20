import React, { useState, useRef } from 'react';
import { uploadFileWithUnicodeName, uploadMenuItemImage } from '../lib/supabaseUploadUtils';

interface ImageUploaderProps {
  bucketName: string;
  prefixPath?: string;
  onUploadSuccess?: (url: string, path: string) => void;
  onUploadError?: (error: Error) => void;
  maxFileSizeMB?: number;
  acceptedFileTypes?: string;
  useOriginalName?: boolean;
  className?: string;
}

export default function HindiImageUploader({
  bucketName,
  prefixPath = '',
  onUploadSuccess,
  onUploadError,
  maxFileSizeMB = 5,
  acceptedFileTypes = 'image/*',
  useOriginalName = true,
  className = '',
}: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setErrorMsg(null);
    setUploadedUrl(null);

    if (!files || files.length === 0) {
      setSelectedFile(null);
      return;
    }

    const file = files[0];

    // Check file size
    const fileSizeInMB = file.size / (1024 * 1024);
    if (fileSizeInMB > maxFileSizeMB) {
      setErrorMsg(`File size exceeds ${maxFileSizeMB}MB limit`);
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setErrorMsg('Please select a file first');
      return;
    }

    setIsUploading(true);
    setErrorMsg(null);

    try {
      const { path, error, url } = await uploadFileWithUnicodeName(
        bucketName,
        selectedFile,
        prefixPath,
        useOriginalName
      );

      if (error) {
        throw error;
      }

      if (url) {
        setUploadedUrl(url);
        if (onUploadSuccess && path) {
          onUploadSuccess(url, path);
        }
      } else {
        throw new Error('Upload succeeded but no URL was returned');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Upload failed');
      if (onUploadError) {
        onUploadError(err);
      }
    } finally {
      setIsUploading(false);
    }
  };

  const resetUploader = () => {
    setSelectedFile(null);
    setUploadedUrl(null);
    setErrorMsg(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex items-center gap-2">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={acceptedFileTypes}
          disabled={isUploading}
          className="flex-1"
        />
        <button
          onClick={handleUpload}
          disabled={!selectedFile || isUploading}
          className={`px-4 py-2 rounded ${
            !selectedFile || isUploading
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
        {selectedFile && (
          <button
            onClick={resetUploader}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Reset
          </button>
        )}
      </div>

      {selectedFile && (
        <div className="text-sm">
          <strong>Selected:</strong> {selectedFile.name} (
          {(selectedFile.size / (1024 * 1024)).toFixed(2)}MB)
        </div>
      )}

      {errorMsg && <div className="text-red-500">{errorMsg}</div>}

      {uploadedUrl && (
        <div className="mt-4 space-y-2">
          <div className="text-green-600 font-semibold">Upload successful!</div>
          
          <div className="bg-gray-100 p-2 rounded text-sm break-all">
            <strong>URL:</strong> {uploadedUrl}
          </div>
          
          <div className="mt-2">
            <strong>Preview:</strong>
            <img
              src={uploadedUrl}
              alt="Uploaded file"
              className="mt-2 max-h-48 max-w-full object-contain border rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}