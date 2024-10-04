```tsx
import React from 'react';

// ファイル情報の型定義
type FileInfo = {
  name: string;
  lastModified: string;
};

// コンポーネントのプロパティの型定義
interface Props {
  title: string;
  description: string;
  files: FileInfo[];
  onFilter?: (query: string) => void;
}

const FileList: React.FC<Props> = ({ title, description, files, onFilter }) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* タイトル表示 */}
      <h1 className="text-xl font-bold mb-2">{title}</h1>

      {/* 説明文表示 */}
      <p className="mb-4">{description}</p>

      {/* フィルタ入力エリア */}
      {onFilter && (
        <input
          type="text"
          placeholder="フィルタ内容を入力"
          className="mb-4 p-2 border rounded"
          onChange={(e) => onFilter(e.target.value)}
        />
      )}

      {/* ファイルリスト */}
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Last modified</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.name}>
              <td className="border-t py-2">{file.name}</td>
              <td className="border-t py-2">{file.lastModified}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileList;
```