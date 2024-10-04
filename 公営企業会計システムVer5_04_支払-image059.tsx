```tsx
import React from 'react';

interface BudgetFormProps {
  budgetCode: string;
  detailCode: string;
  subDetailCode: string;
  estimatedAmount: number;
  taxableAmount: number;
  taxRate: number;
  consumptionTax: number;
  onSearchClick: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
  showFullScreen: boolean;
  toggleFullScreen: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  budgetCode,
  detailCode,
  subDetailCode,
  estimatedAmount,
  taxableAmount,
  taxRate,
  consumptionTax,
  onSearchClick,
  onSubmit,
  onClear,
  onCancel,
  showFullScreen,
  toggleFullScreen,
}) => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md">
      <h1 className="text-lg font-bold mb-4">予定支出負担科目登録（一般）</h1>
      <div className="mb-4">
        <h2 className="font-medium">予算科目</h2>
        <div className="grid grid-cols-3 gap-2">
          <input type="text" value={budgetCode} readOnly className="border p-2" />
          <input type="text" value={detailCode} readOnly className="border p-2" />
          <input type="text" value={subDetailCode} readOnly className="border p-2" />
        </div>
        <button onClick={onSearchClick} className="mt-2 px-4 py-2 bg-blue-500 text-white">
          科目検索
        </button>
      </div>

      <div className="mb-4">
        <h2 className="font-medium">税区分</h2>
        <p className="p-2 border">課税</p>
      </div>

      <div className="mb-4">
        <h2 className="font-medium">予定額</h2>
        <input type="text" value={estimatedAmount.toLocaleString()} readOnly className="border p-2" />
      </div>

      <div className="mb-4">
        <h2 className="font-medium">税抜額</h2>
        <input type="text" value={taxableAmount.toLocaleString()} readOnly className="border p-2" />
      </div>

      <div className="mb-4">
        <h2 className="font-medium">消費税率</h2>
        <input type="text" value={`${taxRate} %`} readOnly className="border p-2" />
      </div>

      <div className="mb-4">
        <h2 className="font-medium">消費税額</h2>
        <input type="text" value={consumptionTax.toLocaleString()} readOnly className="border p-2" />
      </div>

      <div className="mt-4 flex space-x-2">
        <button onClick={onSubmit} className="px-4 py-2 bg-green-500 text-white">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-yellow-500 text-white">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white">キャンセル</button>
      </div>

      <div className="mt-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={showFullScreen}
            onChange={toggleFullScreen}
            className="form-checkbox"
          />
          <span className="ml-2">金額画面表示</span>
        </label>
      </div>
    </div>
  );
};

export default BudgetForm;
```