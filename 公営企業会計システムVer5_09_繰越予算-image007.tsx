```tsx
import React from 'react';

// 定義するプロパティの型
type BudgetFormProps = {
  year: string;
  budgetNumber: string;
  budgetItem: string;
  budgetDetail: string;
  amountWithoutTax: string;
  amountWithTax: string;
  onRegister: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  budgetNumber,
  budgetItem,
  budgetDetail,
  amountWithoutTax,
  amountWithTax,
  onRegister,
  onClear,
  onFinish
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-lg font-bold text-purple-900 mb-4">予算科目別繰越額</h1>
      
      <div className="mb-4">
        <label className="mr-2">会計年度:</label>
        <input type="text" value={year} className="border px-2" readOnly />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2">
        <div>
          <label className="mr-2">予算款:</label>
          <input type="text" value={budgetNumber} className="border px-2" readOnly />
        </div>
        
        <div>
          <label className="mr-2">予算項:</label>
          <input type="text" value={budgetItem} className="border px-2" readOnly />
        </div>

        <div>
          <label className="mr-2">予算明細:</label>
          <input type="text" value={budgetDetail} className="border px-2" readOnly />
        </div>

        <div>
          <label className="mr-2">繰越税抜金額:</label>
          <input type="text" value={amountWithoutTax} className="border px-2" readOnly />
        </div>

        <div>
          <label className="mr-2">繰越消費税額:</label>
          <input type="text" value={amountWithTax} className="border px-2" readOnly />
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={onRegister} className="bg-blue-500 text-white px-4 py-2 rounded">登録</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onFinish} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetForm;
```