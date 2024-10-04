```tsx
import React from 'react';

// 型定義
interface BudgetEntryInputProps {
  fiscalYear: string;
  budgetTypeCode: string;
  budgetTypeDescription: string;
  sections: {
    sectionCode: string;
    sectionName: string;
    amount: number;
    taxAdjustment: number;
  }[];
  onSearch: () => void;
  onEdit: (sectionCode: string) => void;
}

const BudgetEntryInput: React.FC<BudgetEntryInputProps> = ({
  fiscalYear,
  budgetTypeCode,
  budgetTypeDescription,
  sections,
  onSearch,
  onEdit
}) => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-xl font-bold">予算科目調整入力</h1>
      </div>
      <div className="mb-4">
        <label className="block text-sm">
          年度
          <span className="ml-2">{fiscalYear}</span>
        </label>
        <label className="block text-sm">
          予算種成区分
          <span className="ml-2">{budgetTypeDescription}</span>
        </label>
      </div>
      <div className="mb-4">
        <button
          onClick={onSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          検索
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 border-b">借方科目</th>
            <th className="py-2 border-b">貸方科目</th>
            <th className="py-2 border-b">税抜調整額</th>
            <th className="py-2 border-b">消費税金額</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 border-b">{section.sectionName}</td>
              <td className="py-2 border-b">{section.sectionName}</td>
              <td className="py-2 border-b">{section.amount.toLocaleString()}</td>
              <td className="py-2 border-b">{section.taxAdjustment.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          onClick={() => onEdit('001')}
          className="mr-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          編集
        </button>
      </div>
    </div>
  );
};

export default BudgetEntryInput;
```