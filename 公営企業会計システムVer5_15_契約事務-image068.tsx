```tsx
import React from 'react';

// TypeScriptの型定義
type InspectionItem = {
  id: string;
  category: string;
  score: number;
};

type InspectionFormProps = {
  items: InspectionItem[];
  selectedItemId: string;
  rank: string;
  totalScore: number;
  onCategoryChange: (id: string) => void;
  onScoreChange: (id: string, score: number) => void;
  onConfirm: () => void;
  onCancel: () => void;
  onCalculate: () => void;
};

// 再利用可能なコンポーネント
const InspectionForm: React.FC<InspectionFormProps> = ({
  items,
  selectedItemId,
  rank,
  totalScore,
  onCategoryChange,
  onScoreChange,
  onConfirm,
  onCancel,
  onCalculate,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md space-y-4">
      <h1 className="text-xl font-bold">検査項目</h1>
      <div className="border p-2 rounded-md">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border p-1">検査項目区分</th>
              <th className="border p-1">検査点数</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td className="border p-1">{item.category}</td>
                <td className="border p-1">{item.score.toFixed(3)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-2">
        <div className="flex space-x-2">
          <label>検査項目区分:</label>
          <select
            className="border rounded p-1"
            value={selectedItemId}
            onChange={e => onCategoryChange(e.target.value)}
          >
            {items.map(item => (
              <option key={item.id} value={item.id}>
                {item.category}
              </option>
            ))}
          </select>
          <label>検査点数:</label>
          <input
            type="number"
            className="border rounded p-1 w-20"
            value={items.find(item => item.id === selectedItemId)?.score || ''}
            onChange={e => onScoreChange(selectedItemId, parseFloat(e.target.value) || 0)}
          />
        </div>

        <div className="flex space-x-2">
          <label>検査ランク:</label>
          <input
            type="text"
            className="border rounded p-1 w-40"
            value={rank}
            readOnly
          />
          <label>評点合計:</label>
          <input
            type="text"
            className="border rounded p-1 w-20"
            value={totalScore.toFixed(3)}
            readOnly
          />
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white rounded px-4 py-1"
          onClick={onConfirm}
        >
          行確定
        </button>
        <button
          className="bg-gray-500 text-white rounded px-4 py-1"
          onClick={onCancel}
        >
          行キャンセル
        </button>
        <button
          className="bg-green-500 text-white rounded px-4 py-1"
          onClick={onCalculate}
        >
          自動計算
        </button>
      </div>
    </div>
  );
};

export default InspectionForm;
```