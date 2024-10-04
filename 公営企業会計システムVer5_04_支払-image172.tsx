```tsx
import React from 'react';

type BudgetComponentProps = {
  startDate: string;
  endDate: string;
  startBudgetCode: string;
  endBudgetCode: string;
  minAmount: number;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const BudgetComponent: React.FC<BudgetComponentProps> = ({
  startDate,
  endDate,
  startBudgetCode,
  endBudgetCode,
  minAmount,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-bold mb-4">範囲指定</h3>
      <div className="mb-4">
        <label className="mr-2">作表年月日</label>
        <input type="text" value={startDate} readOnly className="border rounded p-1" /> ~
        <input type="text" value={endDate} readOnly className="border rounded p-1 ml-2" />
      </div>
      <div className="mb-4">
        <label className="mr-2">予算科目</label>
        <input type="text" value={startBudgetCode} readOnly className="border rounded p-1" /> ~
        <input type="text" value={endBudgetCode} readOnly className="border rounded p-1 ml-2" />
      </div>
      <div className="mb-4">
        <label className="mr-2">金額</label>
        <input type="text" value={minAmount.toLocaleString()} readOnly className="border rounded p-1" /> 円以上
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetComponent;
```