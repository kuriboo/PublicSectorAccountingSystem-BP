import React from 'react';

type BudgetDetailProps = {
  fiscalYear: string;
  budgetType: string;
  budgetNumber: string;
  budgetItem: string;
  budgetSection: string;
  budgetSubsection: string;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const BudgetDetail: React.FC<BudgetDetailProps> = ({
  fiscalYear,
  budgetType,
  budgetNumber,
  budgetItem,
  budgetSection,
  budgetSubsection,
  onRegister,
  onEdit,
  onDelete,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-white border rounded shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">会計別予算明細性質</h2>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <label className="w-1/4 font-medium">会計年度: </label>
          <input type="text" className="w-3/4 p-2 border rounded" value={fiscalYear} readOnly />
        </div>

        <div className="flex items-center">
          <label className="w-1/4 font-medium">会計予算性質区分: </label>
          <input type="text" className="w-3/4 p-2 border rounded" value={budgetType} readOnly />
        </div>

        <div className="flex items-center">
          <label className="w-1/4 font-medium">予算数: </label>
          <input type="text" className="w-3/4 p-2 border rounded" value={budgetNumber} readOnly />
        </div>

        <div className="flex items-center">
          <label className="w-1/4 font-medium">予算項: </label>
          <input type="text" className="w-3/4 p-2 border rounded" value={budgetItem} readOnly />
        </div>

        <div className="flex items-center">
          <label className="w-1/4 font-medium">予算節: </label>
          <input type="text" className="w-3/4 p-2 border rounded" value={budgetSection} readOnly />
        </div>

        <div className="flex items-center">
          <label className="w-1/4 font-medium">予算細節: </label>
          <input type="text" className="w-3/4 p-2 border rounded" value={budgetSubsection} readOnly />
        </div>
      </div>

      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={onRegister} className="bg-blue-500 text-white px-4 py-2 rounded">登録</button>
        <button onClick={onEdit} className="bg-gray-500 text-white px-4 py-2 rounded">編集</button>
        <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">削除</button>
        <button onClick={onClear} className="bg-yellow-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onFinish} className="bg-green-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetDetail;
```