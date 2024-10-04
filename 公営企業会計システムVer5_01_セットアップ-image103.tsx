```tsx
import React from 'react';

// Props type definition for the component
type BudgetSettingProps = {
  items: {
    class: string;
    item: string;
    day: string;
    section: string;
    subsection: string;
    detail: string;
    name: string;
  }[];
  onEdit: () => void;
  onDelete: () => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// Reusable Budget Setting component
const BudgetSetting: React.FC<BudgetSettingProps> = ({
  items,
  onEdit,
  onDelete,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-50 p-4">
      <h2 className="text-lg font-bold mb-4">企業債予算科目</h2>
      <div className="flex mb-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2" onClick={onEdit}>
          編集
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onDelete}>
          行削除
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {['款', '項', '目', '節', '細節', '明細', '予算科目名称'].map((header) => (
              <th key={header} className="py-2 px-4 border-b">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="py-1 px-2 border-b">{item.class}</td>
              <td className="py-1 px-2 border-b">{item.item}</td>
              <td className="py-1 px-2 border-b">{item.day}</td>
              <td className="py-1 px-2 border-b">{item.section}</td>
              <td className="py-1 px-2 border-b">{item.subsection}</td>
              <td className="py-1 px-2 border-b">{item.detail}</td>
              <td className="py-1 px-2 border-b">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 p-4 bg-gray-100">
        <h3 className="font-semibold mb-2">科目入力</h3>
        <input
          type="text"
          className="w-full px-2 py-1 border border-gray-300 mb-2"
          placeholder="予算科目"
        />
        <div className="flex justify-end mt-2">
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded mr-2"
            onClick={onOk}
          >
            行確定
          </button>
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded"
            onClick={onCancel}
          >
            行キャンセル
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={onOk}>
          OK
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={onClear}>
          クリア
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={onCancel}>
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetSetting;
```