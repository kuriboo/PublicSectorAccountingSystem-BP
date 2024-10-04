```tsx
import React from 'react';

// Defined types for the component properties
interface ResultProcessingProps {
  year: string;
  csvFile: string;
  content: string;
  onEdit: () => void;
  onDelete: () => void;
  onImport: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const ResultProcessing: React.FC<ResultProcessingProps> = ({
  year,
  csvFile,
  content,
  onEdit,
  onDelete,
  onImport,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between mb-4 p-4 bg-purple-100 rounded">
        <h1 className="text-xl">入札結果取込準備処理</h1>
        <div className="text-xs">
          <p>行政市水道事業会計 総務課 予算・会計担当 ぎょうせいたろう</p>
          <p>{year}年08月05日</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <button onClick={onEdit} className="mr-2 p-2 bg-gray-200 rounded">明細編集</button>
        <button onClick={onDelete} className="p-2 bg-gray-200 rounded">行削除</button>
      </div>
      <table className="w-full mb-4 border">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">CSVファイル</th>
            <th className="p-2">内容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">{csvFile}</td>
            <td className="border p-2">{content}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center mb-4">
        <button onClick={onImport} className="p-2 bg-gray-200 rounded">CSV取込</button>
        <div className="ml-4">
          <span>内容</span>
          <input type="text" value={content} readOnly className="ml-2 p-1 border rounded bg-purple-100" />
        </div>
      </div>
      <div className="flex justify-end">
        <button onClick={onConfirm} className="mr-2 p-2 bg-gray-200 rounded">行確定</button>
        <button onClick={onCancel} className="mr-2 p-2 bg-gray-200 rounded">行キャンセル</button>
        <button className="mr-2 p-2 bg-gray-200 rounded">OK</button>
        <button className="mr-2 p-2 bg-gray-200 rounded">クリア</button>
        <button className="mr-2 p-2 bg-gray-200 rounded">終了</button>
      </div>
    </div>
  );
};

export default ResultProcessing;
```