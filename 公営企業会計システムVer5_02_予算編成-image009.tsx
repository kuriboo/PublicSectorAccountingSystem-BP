```tsx
// Import necessary libraries
import React from 'react';

// Define prop types
interface RequestFormProps {
  fiscalYear: string;
  budgetDivision: string;
  currentBudget: string;
  previousYearAmount: string;
  priorYearAmount: string;
  rangeStart: string;
  rangeEnd: string;
  onSubmit: () => void;
  onClear: () => void;
  onEnd: () => void;
}

const RequestForm: React.FC<RequestFormProps> = ({
  fiscalYear,
  budgetDivision,
  currentBudget,
  previousYearAmount,
  priorYearAmount,
  rangeStart,
  rangeEnd,
  onSubmit,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-bold mb-4">見積要求書 (記入用) 作成</h2>

      <div className="mb-4">
        <label className="block font-semibold">年度</label>
        <input type="text" defaultValue={fiscalYear} className="border p-2 rounded" />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">予算編成区分</label>
        <input type="text" defaultValue={budgetDivision} className="border p-2 rounded" />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">決算額印字</label>
        <div>
          <input type="radio" name="amount" id="current" defaultChecked />
          <label htmlFor="current" className="ml-2">当初予算</label>
          <input type="text" defaultValue={currentBudget} className="border p-2 ml-2 rounded" />
        </div>

        <div>
          <input type="radio" name="amount" id="previous" />
          <label htmlFor="previous" className="ml-2">前年度決算見込額</label>
          <input type="text" defaultValue={previousYearAmount} className="border p-2 ml-2 rounded" />
        </div>

        <div>
          <input type="radio" name="amount" id="prior" />
          <label htmlFor="prior" className="ml-2">前々年度決算額</label>
          <input type="text" defaultValue={priorYearAmount} className="border p-2 ml-2 rounded" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">範囲指定</label>
        <div className="flex">
          <input type="text" defaultValue={rangeStart} className="border p-2 mr-2 rounded" placeholder="範囲開始" />
          <span className="p-2">~</span>
          <input type="text" defaultValue={rangeEnd} className="border p-2 ml-2 rounded" placeholder="範囲終了" />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white py-2 px-4 rounded">クリア</button>
        <button onClick={onEnd} className="bg-red-500 text-white py-2 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default RequestForm;
```