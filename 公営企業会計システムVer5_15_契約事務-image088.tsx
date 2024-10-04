```tsx
import React from 'react';

// Props type definition
interface DataProcessingProps {
  year: string;
  onCsvImport: () => void;
  content: string;
  setContent: (value: string) => void;
  onConfirm: () => void;
  onClear: () => void;
  onFinish: () => void;
}

const DataProcessing: React.FC<DataProcessingProps> = ({
  year,
  onCsvImport,
  content,
  setContent,
  onConfirm,
  onClear,
  onFinish
}) => {
  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md">
      {/* Header Section */}
      <header className="bg-gray-200 p-2 rounded text-center text-xl font-medium">
        入札結果取扱準備処理
      </header>
      
      {/* Year and Options */}
      <div className="my-4">
        <span className="text-gray-700">年度: 平成{year}</span>
      </div>
      
      {/* Buttons Section */}
      <div className="flex space-x-2">
        <button onClick={onCsvImport} className="bg-blue-500 text-white px-4 py-2 rounded">
          CSV取込
        </button>
      </div>
      
      {/* Content Section */}
      <div className="my-4">
        <div className="flex items-center">
          <label className="text-gray-700">内容: </label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="ml-2 px-2 py-1 border rounded w-full"
          />
        </div>
      </div>
      
      {/* Performing Actions */}
      <div className="flex space-x-2 mt-4">
        <button onClick={onConfirm} className="bg-green-500 text-white px-4 py-2 rounded">
          確定
        </button>
        <button onClick={onClear} className="bg-yellow-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onFinish} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default DataProcessing;
```