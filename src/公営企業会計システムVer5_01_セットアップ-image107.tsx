// Import necessary modules and types
import React from 'react';

// Define the props type
interface DocumentMasterListProps {
  title: string;
  department: string;
  officer: string;
  date: string;
  yearList: string[];
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
}

const DocumentMasterList: React.FC<DocumentMasterListProps> = ({
  title,
  department,
  officer,
  date,
  yearList,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white rounded shadow">
      {/* Header section */}
      <div className="bg-blue-500 text-white p-2 rounded">
        <h1 className="text-xl">{title}</h1>
        <div className="text-right">
          <p>{department}</p>
          <p>{officer}</p>
          <p>{date}</p>
        </div>
      </div>

      {/* Main content section */}
      <div className="my-6">
        <label className="inline-block mr-2">年度</label>
        <select className="border px-2 py-1">
          {yearList.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Footer buttons */}
      <div className="flex justify-end space-x-2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

// Export the component
export default DocumentMasterList;
```