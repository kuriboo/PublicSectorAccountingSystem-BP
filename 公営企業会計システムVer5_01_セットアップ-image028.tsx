```tsx
import React from 'react';

interface AccountingEntryProps {
  fiscalYear: string;
  divisionCode: string;
  accountCode: string;
  subAccountCode: string;
  accountName: string;
  subAccountName: string;
  onSearch: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const AccountingEntry: React.FC<AccountingEntryProps> = ({
  fiscalYear,
  divisionCode,
  accountCode,
  subAccountCode,
  accountName,
  subAccountName,
  onSearch,
  onEdit,
  onDelete
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex items-center">
        <label className="mr-2">会計年度:</label>
        <input
          type="text"
          value={fiscalYear}
          className="border rounded p-1"
          readOnly
        />
      </div>
      <div className="my-4">
        <label className="mr-2">仕訳性質区分:</label>
        <input
          type="text"
          value={divisionCode}
          className="border rounded p-1"
          readOnly
        />
      </div>
      <div className="my-4">
        <label className="mr-2">仕訳部:</label>
        <input
          type="text"
          value={accountCode}
          className="border rounded p-1"
          readOnly
        />
      </div>
      <div className="my-4">
        <label className="mr-2">仕訳細部:</label>
        <input
          type="text"
          value={subAccountCode}
          className="border rounded p-1"
          readOnly
        />
      </div>
      <div className="my-4">
        <label className="mr-2">仕訳名称:</label>
        <input
          type="text"
          value={accountName}
          className="border rounded p-1"
          readOnly
        />
      </div>
      <div className="my-4">
        <label className="mr-2">仕訳明細語名:</label>
        <input
          type="text"
          value={subAccountName}
          className="border rounded p-1"
          readOnly
        />
      </div>
      <div className="flex space-x-2">
        {/* Button to search */}
        <button
          onClick={onSearch}
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          科目検索
        </button>
        {/* Button to edit */}
        <button
          onClick={onEdit}
          className="bg-green-500 text-white rounded px-4 py-2"
        >
          編集
        </button>
        {/* Button to delete */}
        <button
          onClick={onDelete}
          className="bg-red-500 text-white rounded px-4 py-2"
        >
          行削除
        </button>
      </div>
    </div>
  );
};

export default AccountingEntry;
```