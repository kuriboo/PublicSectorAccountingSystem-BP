```tsx
// components/InspectionForm.tsx

import React, { useState } from 'react';

interface InspectionFormProps {
  items: Array<{ id: string; name: string; points: number }>;
  onConfirm: (selectedId: string, points: number) => void;
  onCancel: () => void;
  onCalculate: () => void;
}

const InspectionForm: React.FC<InspectionFormProps> = ({
  items,
  onConfirm,
  onCancel,
  onCalculate,
}) => {
  const [selectedId, setSelectedId] = useState(items[0]?.id || '');
  const [points, setPoints] = useState(items[0]?.points || 0);

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">検査項目</h2>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          検査項目区分
        </label>
        <select
          className="w-full border border-gray-300 rounded p-2"
          value={selectedId}
          onChange={(e) => {
            const selectedItem = items.find(item => item.id === e.target.value);
            setSelectedId(e.target.value);
            setPoints(selectedItem?.points || 0);
          }}
        >
          {items.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          検査点数
        </label>
        <input
          type="number"
          className="w-full border border-gray-300 rounded p-2"
          value={points}
          onChange={(e) => setPoints(parseFloat(e.target.value))}
        />
      </div>
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => onConfirm(selectedId, points)}
        >
          行確定
        </button>
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          onClick={() => onCancel()}
        >
          行キャンセル
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => onCalculate()}
        >
          自動計算
        </button>
      </div>
    </div>
  );
};

export default InspectionForm;
```