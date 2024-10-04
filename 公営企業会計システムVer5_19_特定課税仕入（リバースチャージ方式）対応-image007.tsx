```tsx
import React from 'react';

type Props = {
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  year: string;
  startDate: string;
  endDate: string;
  onDisplay: () => void;
};

const InvoiceManagement: React.FC<Props> = ({
  onRegister,
  onEdit,
  onDelete,
  year,
  startDate,
  endDate,
  onDisplay,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-xl font-bold mb-4">特定課税仕入伝票管理入力</h1>

      {/* Year Selection */}
      <div className="mb-4">
        <label className="font-semibold mr-2">年度:</label>
        <select value={year} className="border rounded px-2 py-1">
          <option>平成27</option>
          <option>平成28</option>
          {/* More options as needed */}
        </select>
      </div>

      {/* Date Inputs */}
      <div className="mb-4">
        <label className="font-semibold mr-2">伝票日付:</label>
        <input type="date" value={startDate} className="border rounded px-2 py-1 mr-2" />
        ～
        <input type="date" value={endDate} className="border rounded px-2 py-1 ml-2" />
      </div>

      {/* Action Buttons */}
      <div className="mb-4 space-x-2">
        <button onClick={onRegister} className="bg-blue-500 text-white px-4 py-2 rounded">登録</button>
        <button onClick={onEdit} className="bg-green-500 text-white px-4 py-2 rounded">訂正</button>
        <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">削除</button>
      </div>

      {/* Checkbox */}
      <div className="mb-4">
        <label className="font-semibold">
          <input type="checkbox" className="mr-2" />
          課税の支出予算執行かつ税額0円の伝票のみ抽出
        </label>
      </div>

      {/* Display Button */}
      <button onClick={onDisplay} className="bg-purple-500 text-white px-4 py-2 rounded">表示</button>
    </div>
  );
};

export default InvoiceManagement;
```