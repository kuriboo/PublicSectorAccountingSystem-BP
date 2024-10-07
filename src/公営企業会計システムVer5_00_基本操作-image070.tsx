import React from 'react';

// TypeScriptの型定義
interface FileExplorerProps {
  files: { name: string; date: string; description: string }[];
  onFileSelect: (fileName: string) => void;
}

const FileExplorer: React.FC<FileExplorerProps> = ({ files, onFileSelect }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">ファイルエクスプローラー</h2>
      <ul className="space-y-2">
        {files.map((file, index) => (
          <li
            key={index}
            className="p-2 bg-white border rounded shadow hover:bg-blue-50 cursor-pointer"
            onClick={() => onFileSelect(file.name)}
          >
            <div className="flex justify-between">
              <span className="font-medium">{file.name}</span>
              <span className="text-sm text-gray-500">{file.date}</span>
            </div>
            <p className="text-sm text-gray-600">{file.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileExplorer;
