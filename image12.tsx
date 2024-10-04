```tsx
import React from "react";

// TypeScript interfaces for props
interface BudgetFormProps {
  onSubmit: () => void;
  onClear: () => void;
  onEnd: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({ onSubmit, onClear, onEnd }) => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">予算科目マスタ</h2>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {/* Various input fields */}
        <div>
          <label className="block text-sm">年度</label>
          <input type="text" className="block w-full border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-sm">次年度予算項目</label>
          <input type="text" className="block w-full border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-sm">改訂区分</label>
          <input type="text" className="block w-full border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-sm">金額印字区分</label>
          <select className="block w-full border-gray-300 rounded">
            <option>名称・金額印字せず</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* More input fields */}
        <div>
          <label className="block text-sm">予算区分</label>
          <input type="text" className="block w-full border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-sm">作表編番号</label>
          <input type="text" className="block w-full border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-sm">費用区分</label>
          <input type="text" className="block w-full border-gray-300 rounded" />
        </div>
      </div>

      <div className="flex justify-between">
        {/* Buttons */}
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onSubmit}>
          OK
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={onClear}>
          クリア
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onEnd}>
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
```