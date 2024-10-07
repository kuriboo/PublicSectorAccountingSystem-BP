// FileSelector.tsx
import React from 'react';

// TypeScriptの型定義
interface FileSelectorProps {
  directoryPath: string; // ディレクトリのパスを指定
  files: string[]; // ファイル名のリスト
  onSelectFile: (fileName: string) => void; // ファイル選択時のコールバック
}

const FileSelector: React.FC<FileSelectorProps> = ({
  directoryPath,
  files,
  onSelectFile,
}) => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
      <div className="text-gray-700 mb-2">
        <span className="font-bold">Directory: </span>{directoryPath}
      </div>
      <ul className="list-disc list-inside">
        {files.map((file, index) => (
          <li
            key={index}
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => onSelectFile(file)}
          >
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileSelector;
```