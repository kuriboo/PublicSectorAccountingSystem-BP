```tsx
import React from 'react';

// TypeScript props interface
interface ImportDataProps {
  // Props to customize text content
  title?: string;
  description?: string;
  note?: string;
  // Handlers for button actions
  onFileSelect?: () => void;
  onClear?: () => void;
  onFinish?: () => void;
}

// Functional component with Tailwind CSS styling
const ImportDataComponent: React.FC<ImportDataProps> = ({
  title = "固定資産マスタデータ取込",
  description = "・以下のマスタをファイルから取込、登録を行います。",
  note = "取込ファイルを指定してください。",
  onFileSelect,
  onClear,
  onFinish,
}) => {
  return (
    <div className="max-w-xl mx-auto bg-gray-100 p-4 rounded shadow">
      <h1 className="text-xl font-bold text-blue-600 mb-4">{title}</h1>
      <div className="bg-white p-4 rounded border">
        <p className="mb-4">{description}</p>
        <ul className="list-disc list-inside mb-4">
          <li>単価名称マスタ</li>
          <li>単価細分マスタ</li>
          <li>年度別評価性マスタ</li>
          <li>固定資産部マスタ</li>
          {/* Add more items as needed */}
        </ul>
        <p className="text-sm mb-4">{note}</p>
        <div className="flex items-center mb-4">
          <button 
            className="bg-gray-300 p-2 rounded mr-4 hover:bg-gray-400" 
            onClick={onFileSelect}
          >
            ファイル
          </button>
          <span className="text-sm text-gray-600">C:\...</span>
        </div>
        <div className="flex justify-end space-x-4">
          <button 
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700" 
            onClick={onFinish}
          >
            OK
          </button>
          <button 
            className="bg-gray-300 p-2 rounded hover:bg-gray-400" 
            onClick={onClear}
          >
            クリア
          </button>
          <button 
            className="bg-gray-300 p-2 rounded hover:bg-gray-400" 
            onClick={onFinish}
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportDataComponent;
```