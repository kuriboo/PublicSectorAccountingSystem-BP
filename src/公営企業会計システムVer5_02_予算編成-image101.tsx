// Import necessary packages
import React, { useState } from 'react';

// Define the component props types
interface CsvUploaderProps {
  onUpload: (data: string[][]) => void; // Callback function when CSV is uploaded
  buttonTextUpload?: string; // Customizable button text for upload
  buttonTextClear?: string;  // Customizable button text for clear
}

// CsvUploader component definition
const CsvUploader: React.FC<CsvUploaderProps> = ({
  onUpload,
  buttonTextUpload = 'CSV取込',
  buttonTextClear = 'クリア',
}) => {
  const [csvData, setCsvData] = useState<string[][]>([]);

  // Function to handle file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const lines = text.trim().split('\n').map(line => line.split(','));
      setCsvData(lines);
      onUpload(lines);
    };
    reader.readAsText(file);
  };

  // Function to clear CSV data
  const clearData = () => {
    setCsvData([]);
    onUpload([]);
  };

  return (
    <div className="p-4">
      {/* File input for CSV uploading */}
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="mb-2"
      />
      <div className="flex space-x-2">
        {/* Upload button */}
        <button
          onClick={() => document.querySelector('input[type="file"]')?.click()}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          {buttonTextUpload}
        </button>
        {/* Clear button */}
        <button
          onClick={clearData}
          className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
        >
          {buttonTextClear}
        </button>
      </div>
    </div>
  );
};

export default CsvUploader;
```