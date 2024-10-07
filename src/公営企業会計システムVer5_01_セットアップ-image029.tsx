import React from "react";

// TypeScript type definitions for component props
type BudgetDetailProps = {
  fiscalYear: string;
  budgetClass: string;
  budgetCode: string;
  budgetName: string;
  items: BudgetItem[];
  onSearch: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

type BudgetItem = {
  code: string;
  classification: string;
  sectionCode: string;
  summary: string;
  detailCode: string;
  detailName: string;
  subcode: string;
  subname: string;
};

const BudgetDetailComponent: React.FC<BudgetDetailProps> = ({
  fiscalYear,
  budgetClass,
  budgetCode,
  budgetName,
  items,
  onSearch,
  onEdit,
  onDelete,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <label className="mr-2">会計年度:</label>
        <span className="font-bold">{fiscalYear}</span>
      </div>
      <div className="mb-4">
        <div><span className="font-bold">予算性質区分:</span> {budgetClass}</div>
        <div><span className="font-bold">予算節コード:</span> {budgetCode}</div>
        <div><span className="font-bold">予算節略称:</span> {budgetName}</div>
        <button 
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" 
          onClick={onSearch}
        >
          科目検索
        </button>
      </div>
      <table className="w-full bg-white rounded shadow-md mb-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">コード</th>
            <th className="border px-4 py-2">予算性質区分</th>
            <th className="border px-4 py-2">予算節コード</th>
            <th className="border px-4 py-2">予算節略称</th>
            <th className="border px-4 py-2">予算明細コード</th>
            <th className="border px-4 py-2">予算明細略称</th>
            <th className="border px-4 py-2">予算内訳コード</th>
            <th className="border px-4 py-2">予算内訳略称</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.code}>
              <td className="border px-4 py-2">{item.code}</td>
              <td className="border px-4 py-2">{item.classification}</td>
              <td className="border px-4 py-2">{item.sectionCode}</td>
              <td className="border px-4 py-2">{item.summary}</td>
              <td className="border px-4 py-2">{item.detailCode}</td>
              <td className="border px-4 py-2">{item.detailName}</td>
              <td className="border px-4 py-2">{item.subcode}</td>
              <td className="border px-4 py-2">{item.subname}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end space-x-2">
        <button 
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" 
          onClick={onEdit}
        >
          編集
        </button>
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" 
          onClick={onDelete}
        >
          行削除
        </button>
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" 
          onClick={onOk}
        >
          OK
        </button>
        <button 
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600" 
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" 
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetDetailComponent;
