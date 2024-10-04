```tsx
import React from 'react';

interface DocumentCopyComponentProps {
  processingYear: string;
  description: string;
  onOk: () => void;
  onExit: () => void;
}

const DocumentCopyComponent: React.FC<DocumentCopyComponentProps> = ({ 
  processingYear, 
  description, 
  onOk, 
  onExit 
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <header className="bg-blue-200 p-2 rounded-t-md text-lg font-semibold">
        収益費用明細書名称コピー
      </header>
      <div className="p-4">
        <div className="mb-4">
          <label className="block font-medium mb-1">処理概要</label>
          <div className="bg-white border border-gray-300 p-2 rounded-md">
            <p className="text-blue-500">{description}</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="font-medium">年度</label>
          <select className="ml-2 border border-gray-300 p-1 rounded-md" value={processingYear}>
            <option value="平成29">{processingYear}</option>
          </select>
        </div>
        <div className="flex justify-end space-x-2">
          <button 
            onClick={onOk} 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            OK
          </button>
          <button 
            onClick={onExit} 
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentCopyComponent;
```