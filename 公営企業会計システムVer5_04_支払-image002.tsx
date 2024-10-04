```tsx
import React from 'react';

// タイプ定義
interface Props {
  processingDate: string;
  decisionDivision: string;
  contractMethod: string;
  deliveryDate: string;
  summary: string;
  budgetSection: string;
  amount: string;
  taxIncluded: boolean;
  totalAmount: string;
  bodyAmount: string;
  taxAmount: string;
  onRegister: () => void;
  onCorrect: () => void;
  onRemove: () => void;
}

// コンポーネント定義
const BudgetInputForm: React.FC<Props> = ({
  processingDate,
  decisionDivision,
  contractMethod,
  deliveryDate,
  summary,
  budgetSection,
  amount,
  taxIncluded,
  totalAmount,
  bodyAmount,
  taxAmount,
  onRegister,
  onCorrect,
  onRemove,
}) => {
  return (
    <div className="p-4 border rounded shadow-md max-w-lg mx-auto bg-white">
      <h2 className="text-lg font-bold border-b pb-2 mb-4">予定支出負担入力</h2>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">予定処理日</label>
        <input type="text" value={processingDate} className="w-full p-2 border rounded" readOnly />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">決裁区分</label>
        <input type="text" value={decisionDivision} className="w-full p-2 border rounded" readOnly />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">契約方法</label>
        <input type="text" value={contractMethod} className="w-full p-2 border rounded" readOnly />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">納期年月日</label>
        <input type="text" value={deliveryDate} className="w-full p-2 border rounded" readOnly />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">摘要</label>
        <input type="text" value={summary} className="w-full p-2 border rounded" readOnly />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">予算節</label>
        <input type="text" value={budgetSection} className="w-full p-2 border rounded" readOnly />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">金額帳票印字</label>
        <div className="flex items-center">
          <input type="checkbox" checked={taxIncluded} className="mr-2" readOnly />
          <span>有</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">合計予定額</label>
        <input type="text" value={totalAmount} className="w-full p-2 border rounded" readOnly />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">合計本体額</label>
        <input type="text" value={bodyAmount} className="w-full p-2 border rounded" readOnly />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">合計消費税額</label>
        <input type="text" value={taxAmount} className="w-full p-2 border rounded" readOnly />
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={onRegister} className="px-4 py-2 bg-blue-500 text-white rounded shadow">
          登録
        </button>
        <button onClick={onCorrect} className="px-4 py-2 bg-yellow-500 text-white rounded shadow">
          訂正
        </button>
        <button onClick={onRemove} className="px-4 py-2 bg-red-500 text-white rounded shadow">
          削除
        </button>
      </div>
    </div>
  );
};

export default BudgetInputForm;
```