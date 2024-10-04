```tsx
import React from 'react';

// TypeScriptの型定義
type BudgetComponentProps = {
  fiscalYear: string;
  budgetType: string;
  finalInspection: string;
  method: string;
  onOkClick: () => void;
  onCancelClick: () => void;
};

// 再利用可能なコンポーネント
const BudgetComponent: React.FC<BudgetComponentProps> = ({
  fiscalYear,
  budgetType,
  finalInspection,
  method,
  onOkClick,
  onCancelClick,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md w-full max-w-lg mx-auto">
      <div className="bg-blue-200 text-blue-800 p-2 rounded-t-md">
        <h1 className="text-xl font-semibold">予算資産譲渡等対価額算出</h1>
      </div>
      <div className="p-4 border-t">
        <div className="mb-4">
          <h2 className="font-bold border-b mb-2">範囲指定</h2>
          <div className="flex justify-between">
            <span>会計年度</span>
            <span>{fiscalYear}</span>
          </div>
          <div className="flex justify-between">
            <span>予算編成区分</span>
            <span>{budgetType}</span>
          </div>
          <div className="flex justify-between">
            <span>最終査定値</span>
            <span>{finalInspection}</span>
          </div>
        </div>
        <div>
          <h2 className="font-bold border-b mb-2">計算方法</h2>
          <div className="flex justify-between">
            <span>税額計算(売上)</span>
            <span>{method}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
          onClick={onCancelClick}
        >
          終了
        </button>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={onOkClick}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default BudgetComponent;
```