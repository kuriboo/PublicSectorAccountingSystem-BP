// components/FileSelector.tsx
import React from 'react';

// TypeScript interface for component props
interface FileSelectorProps {
  label: string;
  onSelectFile: (file: File) => void;
  className?: string;
}

const FileSelector: React.FC<FileSelectorProps> = ({ label, onSelectFile, className }) => {

  // Handle file selection
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      onSelectFile(files[0]); // Pass the selected file to the parent component
    }
  };

  return (
    <div className={`file-selector-container ${className}`}>
      {/* File input field with label */}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input 
        type="file" 
        onChange={handleChange} 
        className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1" 
      />
    </div>
  );
};

export default FileSelector;