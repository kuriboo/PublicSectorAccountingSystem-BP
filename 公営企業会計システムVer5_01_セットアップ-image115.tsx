```tsx
import React from 'react';

interface FormProps {
  fiscalYear: string;
  expenseType: string;
  statementType: string;
  layout: 'row' | 'column';
  expenseNumber: string;
  itemName: string;
  amountType: string;
  correctionType: string;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const ExpenseForm: React.FC<FormProps> = ({
  fiscalYear,
  expenseType,
  statementType,
  layout,
  expenseNumber,
  itemName,
  amountType,
  correctionType,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h1 className="text-lg font-bold mb-4">費用構成表ファイル</h1>

      <div className="mb-4">
        <label className="block">会計年度</label>
        <input
          type="text"
          value={fiscalYear}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block">費用構成区分</label>
        <input
          type="text"
          value={expenseType}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block">合計明細区分</label>
        <input
          type="text"
          value={statementType}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>

      <div className="mb-4">
        <div className="flex items-center">
          <input
            type="radio"
            id="row"
            name="layout"
            checked={layout === 'row'}
            className="mr-2"
            readOnly
          />
          <label htmlFor="row" className="mr-4">行</label>
          <input
            type="radio"
            id="column"
            name="layout"
            checked={layout === 'column'}
            className="mr-2"
            readOnly
          />
          <label htmlFor="column">列</label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block">費用構成表番号</label>
        <input
          type="text"
          value={expenseNumber}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block">項目名称</label>
        <input
          type="text"
          value={itemName}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block">金額印字区分</label>
        <input
          type="text"
          value={amountType}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block">改行区分</label>
        <input
          type="text"
          value={correctionType}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>

      <div className="flex space-x-4">
        <button onClick={onRegister} className="px-4 py-2 bg-blue-500 text-white rounded">
          登録
        </button>
        <button onClick={onEdit} className="px-4 py-2 bg-gray-500 text-white rounded">
          編集
        </button>
        <button onClick={onDelete} className="px-4 py-2 bg-red-500 text-white rounded">
          削除
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
```