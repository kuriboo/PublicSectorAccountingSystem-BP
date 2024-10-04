```tsx
import React from 'react';

// TypeScriptの型定義
interface BudgetExecutionStatusProps {
  title: string;
  date: string;
  businessSubjectStart: number;
  businessSubjectEnd: number;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

const BudgetExecutionStatus: React.FC<BudgetExecutionStatusProps> = ({
  title,
  date,
  businessSubjectStart,
  businessSubjectEnd,
  onOk,
  onClear,
  onClose
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      {/* ヘッダー */}
      <h1 className="text-lg font-bold text-center mb-4">{title}</h1>

      {/* 作表日 */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">作表日:</label>
        <p className="bg-blue-100 rounded px-2 py-1">{date}</p>
      </div>

      {/* 範囲指定 */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">範囲指定:</label>
        <div className="flex items-center space-x-2">
          <button className="bg-purple-500 text-white px-4 py-2 rounded">事業科目</button>
          <input
            type="number"
            value={businessSubjectStart}
            readOnly
            className="w-16 px-2 py-1 border rounded"
          />
          <span>~</span>
          <input
            type="number"
            value={businessSubjectEnd}
            readOnly
            className="w-16 px-2 py-1 border rounded"
          />
          <button className="bg-purple-500 text-white px-4 py-2 rounded">事業科目</button>
        </div>
      </div>

      {/* ボタン群 */}
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-green-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-yellow-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetExecutionStatus;
```