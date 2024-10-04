```tsx
import React from 'react'

// TypeScriptの型定義
interface ImportComponentProps {
  title: string;
  description: string;
  items: string[];
  fileText: string;
  filePlaceholder: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const ImportComponent: React.FC<ImportComponentProps> = ({
  title,
  description,
  items,
  fileText,
  filePlaceholder,
  onOk,
  onClear,
  onCancel
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-lg mx-auto mt-8">
      <h1 className="text-xl font-bold text-center bg-purple-100 p-2 mb-4">{title}</h1>
      <div className="bg-white p-4 mb-4 border border-gray-300">
        <p className="mb-2">{description}</p>
        <ul className="list-disc pl-5 mb-4">
          {items.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
        <p className="italic">{fileText}</p>
      </div>
      <div className="flex items-center mb-4">
        <label className="mr-2" htmlFor="fileInput">ファイル</label>
        <input 
          id="fileInput"
          type="text"
          placeholder={filePlaceholder}
          className="flex-grow p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button 
          onClick={onOk} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition">
          クリア
        </button>
        <button 
          onClick={onCancel} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          終了
        </button>
      </div>
    </div>
  );
}

export default ImportComponent;

// 使用例
// <ImportComponent 
//   title="固定資産マスタデータ取込"
//   description="以下のマスタ..."
/*   items={["単価名称マスタ", "..." */}
//   fileText="取込ファイルを指定してください。"
//   filePlaceholder="C:\\path\\to\\file.zip"
//   onOk={() => console.log('OK')}
//   onClear={() => console.log('クリア')}
//   onCancel={() => console.log('終了')}
// />
```