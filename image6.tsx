```tsx
// BudgetDetailEditor.tsx

import React from 'react';

// 型定義
type BudgetDetailEditorProps = {
  fiscalYear: string;
  budgetItemCode: string;
  shorthand: string;
  taxDivision: string;
  consumptionTax: string;
  revenueDivision: string;
  economicDivision: string;
  unpaidDivision: string;
  calculationFlag: '税抜' | '税込';
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BudgetDetailEditor: React.FC<BudgetDetailEditorProps> = ({
  fiscalYear,
  budgetItemCode,
  shorthand,
  taxDivision,
  consumptionTax,
  revenueDivision,
  economicDivision,
  unpaidDivision,
  calculationFlag,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between">
        <span>年度: {fiscalYear}</span>
        <span>予算科目コード: {budgetItemCode}</span>
        <span>略名: {shorthand}</span>
      </div>

      <div className="my-4">
        <label className="block">税区分</label>
        <input type="text" value={taxDivision} className="border rounded p-1" />

        <label className="block mt-2">消費税</label>
        <input type="text" value={consumptionTax} className="border rounded p-1" />

        <label className="block mt-2">未払計上区分</label>
        <input type="text" value={unpaidDivision} className="border rounded p-1" />

        <label className="block mt-2">積算基礎税込フラグ</label>
        <div>
          <label>
            <input type="radio" checked={calculationFlag === '税抜'} /> 税抜
          </label>
          <label className="ml-2">
            <input type="radio" checked={calculationFlag === '税込'} /> 税込
          </label>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white py-1 px-3 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 text-black py-1 px-3 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="bg-red-500 text-white py-1 px-3 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetDetailEditor;
```