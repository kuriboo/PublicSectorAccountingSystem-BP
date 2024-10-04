import React from 'react';

interface BudgetMasterProps {
  fiscalYear: string;
  budgetName: string;
  nextYearBudgetName: string;
  editSection: string;
  budgetSection: string;
  authorNumber: string;
  flowDivision: string;
  detailSegmentDivision: string;
  expenseSection: string;
  onSearch?: () => void;
  onRegister?: () => void;
  onDelete?: () => void;
  onUpdate?: () => void;
  onClear?: () => void;
  onEnd?: () => void;
}

const BudgetMaster: React.FC<BudgetMasterProps> = ({
  fiscalYear,
  budgetName,
  nextYearBudgetName,
  editSection,
  budgetSection,
  authorNumber,
  flowDivision,
  detailSegmentDivision,
  expenseSection,
  onSearch,
  onRegister,
  onDelete,
  onUpdate,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-white border rounded-md shadow-md">
      <h2 className="text-xl font-bold text-purple-700 mb-4">予算科目マスタ</h2>
      <div className="flex gap-4 mb-4">
        <div className="flex items-center">
          <label className="mr-2">年度:</label>
          <input type="text" value={fiscalYear} readOnly className="border-b" />
        </div>
        <button onClick={onSearch} className="bg-blue-500 text-white px-2 py-1 rounded">
          参照
        </button>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="flex flex-col">
          <label>名称:</label>
          <input type="text" value={budgetName} readOnly className="border-b mb-2" />
        </div>
        <div className="flex flex-col">
          <label>次年度予算科目:</label>
          <input type="text" value={nextYearBudgetName} readOnly className="border-b mb-2" />
        </div>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="flex flex-col">
          <label>改行区分:</label>
          <input type="text" value={editSection} readOnly className="border-b mb-2" />
        </div>
        <div className="flex flex-col">
          <label>予算区分:</label>
          <input type="text" value={budgetSection} readOnly className="border-b mb-2" />
        </div>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="flex flex-col">
          <label>作表番号:</label>
          <input type="text" value={authorNumber} readOnly className="border-b mb-2" />
        </div>
        <div className="flex flex-col">
          <label>流用区分:</label>
          <input type="text" value={flowDivision} readOnly className="border-b mb-2" />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label>細節決裁区分:</label>
        <input type="text" value={detailSegmentDivision} readOnly className="border-b mb-2" />
      </div>
      <div className="flex gap-4 mb-6">
        <div className="flex flex-col">
          <label>費用区分:</label>
          <input type="text" value={expenseSection} readOnly className="border-b mb-2" />
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={onRegister} className="bg-green-500 text-white px-4 py-2 rounded">
          登録・訂正
        </button>
        <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">
          削除
        </button>
        <button onClick={onUpdate} className="bg-yellow-500 text-white px-4 py-2 rounded">
          更新履歴
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onEnd} className="bg-blue-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetMaster;