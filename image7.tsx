```tsx
import React from 'react';

type BudgetMasterProps = {
  fiscalYear: string;
  itemCode: string;
  itemName: string;
  handleDisplay: () => void;
  handleSave: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
};

const BudgetMaster: React.FC<BudgetMasterProps> = ({
  fiscalYear,
  itemCode,
  itemName,
  handleDisplay,
  handleSave,
  handleEdit,
  handleDelete
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">年度</label>
        <input
          type="text"
          value={fiscalYear}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">予算科目番号</label>
        <input
          type="text"
          value={itemCode}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">名称</label>
        <input
          type="text"
          value={itemName}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={handleDisplay}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          表示
        </button>
        <button
          onClick={handleSave}
          className="mr-2 px-4 py-2 bg-green-500 text-white rounded-md"
        >
          登録
        </button>
        <button
          onClick={handleEdit}
          className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded-md"
        >
          訂正
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          削除
        </button>
      </div>
      <div>
        <button className="mr-2 px-4 py-2 bg-gray-300 text-black rounded-md">
          前データ
        </button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded-md">
          次データ
        </button>
      </div>
    </div>
  );
};

export default BudgetMaster;
```