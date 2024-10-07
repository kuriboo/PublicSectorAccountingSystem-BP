import React from 'react';

type FileInfo = {
  id: number;
  name: string;
  date: string;
};

type AssetManagerProps = {
  assetNumber: string;
  assetName: string;
  files: FileInfo[];
  onFileRegister: (file: FileInfo) => void;
  onFileDelete: (fileId: number) => void;
};

const AssetManager: React.FC<AssetManagerProps> = ({
  assetNumber,
  assetName,
  files,
  onFileRegister,
  onFileDelete,
}) => {
  return (
    <div className="p-4">
      {/* Asset Information */}
      <div className="mb-4">
        <span className="mr-4">資産番号: {assetNumber}</span>
        <span>資産名称: {assetName}</span>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2 mb-4">
        <button className="bg-gray-300 px-2 py-1">明細編集</button>
        <button className="bg-gray-300 px-2 py-1" onClick={() => onFileDelete(1)}>行削除</button>
        <button className="bg-gray-300 px-2 py-1">表示</button>
      </div>

      {/* File Table */}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border border-gray-300 px-2 py-1">資料番号</th>
            <th className="border border-gray-300 px-2 py-1">ファイル名</th>
            <th className="border border-gray-300 px-2 py-1">登録日時</th>
          </tr>
        </thead>
        <tbody>
          {files.map(file => (
            <tr key={file.id} className="text-center">
              <td className="border border-gray-300 px-2 py-1">{file.id}</td>
              <td className="border border-gray-300 px-2 py-1">{file.name}</td>
              <td className="border border-gray-300 px-2 py-1">{file.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* File Registration Section */}
      <div className="mt-4 p-4 border border-gray-300">
        <div className="flex items-center mb-2">
          <span className="mr-4">資料番号</span>
          <button className="bg-gray-300 px-2 py-1">ファイル</button>
        </div>
        <div className="flex space-x-2">
          <button className="bg-gray-300 px-4 py-2">登録</button>
          <button className="bg-gray-300 px-4 py-2">クリア</button>
          <button className="bg-gray-300 px-4 py-2">キャンセル</button>
        </div>
      </div>
    </div>
  );
};

export default AssetManager;
```