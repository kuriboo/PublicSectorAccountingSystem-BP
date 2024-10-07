// FileSelector.tsx
import React from 'react';

// TypeScriptの型定義
interface FileSelectorProps {
  fileName: string;
  fileTypes: string[];
  onSave: () => void;
}

const FileSelector: React.FC<FileSelectorProps> = ({ fileName, fileTypes, onSave }) => {
  return (
    <div className="flex flex-col p-4 border rounded shadow-md bg-gray-100">
      <div className="flex items-center mb-4">
        <span className="font-bold text-lg mr-2">ファイル名:</span>
        <input 
          type="text" 
          value={fileName} 
          readOnly 
          className="border p-2 rounded flex-grow"
        />
      </div>
      <div className="flex items-center mb-4">
        <span className="font-bold text-lg mr-2">ファイルの種類:</span>
        <select className="border p-2 rounded flex-grow">
          {fileTypes.map(type => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>
      <button 
        onClick={onSave} 
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        保存
      </button>
    </div>
  );
}

const ExampleUsage: React.FC = () => {
  const handleSave = () => {
    // 保存ボタンがクリックされたときの処理
    console.log('ファイルを保存しました');
  };

  return (
    <FileSelector 
      fileName="11_予算住民科目コード一覧110904result.csv"
      fileTypes={["Microsoft Excel CSV ファイル (*.csv)"]}
      onSave={handleSave}
    />
  );
};

export default ExampleUsage;
