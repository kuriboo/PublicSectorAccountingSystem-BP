```tsx
import React from 'react';

type BudgetEvaluationFormProps = {
  year: string;
  budgetType: string;
  budgetDivision: number;
  finalEstimate: string;
  amountCategory: string;
  printLevel: string;
  accountCategory: string;
  rangeStart: string;
  rangeEnd: string;
  budgetStart: string;
  budgetEnd: string;
  onCsvExport: () => void;
  onClear: () => void;
  onClose: () => void;
};

const BudgetEvaluationForm: React.FC<BudgetEvaluationFormProps> = ({
  year,
  budgetType,
  budgetDivision,
  finalEstimate,
  amountCategory,
  printLevel,
  accountCategory,
  rangeStart,
  rangeEnd,
  budgetStart,
  budgetEnd,
  onCsvExport,
  onClear,
  onClose,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h1 className="text-lg font-bold mb-4">予算査定一覧表</h1>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>年度</label>
          <input type="text" value={year} className="block w-full border" readOnly />
        </div>
        <div>
          <label>予算種成</label>
          <input type="text" value={budgetType} className="block w-full border" readOnly />
        </div>
        <div>
          <label>予算種成区分</label>
          <select value={budgetDivision} className="block w-full border">
            <option value={1}>当初予算</option>
            {/* 他の選択肢も追加可能 */}
          </select>
        </div>
        <div>
          <label>最終査定値</label>
          <input type="text" value={finalEstimate} className="block w-full border" readOnly />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label>金額種別</label>
          <input type="radio" name="amountCategory" checked={amountCategory === '税込'} readOnly />
          <label>税込</label>
          <input type="radio" name="amountCategory" checked={amountCategory === '税抜'} readOnly />
          <label>税抜</label>
          <input type="radio" name="amountCategory" checked={amountCategory === '消費税'} readOnly />
          <label>消費税</label>
        </div>
        <div>
          <label>印字レベル</label>
          <input type="radio" name="printLevel" checked={printLevel === '節'} readOnly />
          <label>節</label>
          <input type="radio" name="printLevel" checked={printLevel === '細節'} readOnly />
          <label>細節</label>
        </div>
        <div>
          <label>帳票種別</label>
          <input type="radio" name="accountCategory" checked={accountCategory === '科目別'} readOnly />
          <label>科目別</label>
          <input type="radio" name="accountCategory" checked={accountCategory === '所属別'} readOnly />
          <label>所属別</label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>範囲指定 所属</label>
          <input type="text" value={rangeStart} className="block w-full border" readOnly />
          <input type="text" value={rangeEnd} className="block w-full border" readOnly />
        </div>
        <div>
          <label>範囲指定 予算科目</label>
          <input type="text" value={budgetStart} className="block w-full border" readOnly />
          <input type="text" value={budgetEnd} className="block w-full border" readOnly />
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={onCsvExport} className="bg-blue-500 text-white p-2 rounded">CSV出力</button>
        <button onClick={onClear} className="bg-gray-500 text-white p-2 rounded">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetEvaluationForm;
```