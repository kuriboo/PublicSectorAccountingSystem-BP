import React from 'react';

// TypeScriptの型定義
type FileType = {
  name: string;
  icon: string;
};

type FileListProps = {
  files: FileType[];
};

// ファイルリストコンポーネント
const FileList: React.FC<FileListProps> = ({ files }) => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* ファイルを順にマッピング */}
      {files.map((file, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* アイコン表示 */}
          <img
            src={file.icon}
            alt={file.name}
            className="w-12 h-12 mb-2"
          />
          {/* ファイル名表示 */}
          <span className="text-xs text-center">{file.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FileList;

// 使用例
// <FileList
//   files={[
//     { name: 'メイン.txt', icon: '/icons/txt-icon.png' },
//     { name: 'アル_03基本操作.pdf', icon: '/icons/pdf-icon.png' },
//     { name: 'アル_01セットアップ.pdf', icon: '/icons/pdf-icon.png' },
//     // 更にファイルを追加
//   ]}
// />
```