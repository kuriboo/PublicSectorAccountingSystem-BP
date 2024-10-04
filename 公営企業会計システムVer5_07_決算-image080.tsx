```tsx
// components/IncomeUpdateForm.tsx
import React from 'react';

// TypeScriptの型定義
type IncomeUpdateFormProps = {
  fiscalYear: string;
  decisionFrom: number;
  decisionTo: number;
  budgetFrom: string;
  budgetTo: string;
  taxAmount: number;
  onDisplay: () => void;
  onConfirm: () => void;
  onOK: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const IncomeUpdateForm: React.FC<IncomeUpdateFormProps> = ({
  fiscalYear,
  decisionFrom,
  decisionTo,
  budgetFrom,
  budgetTo,
  taxAmount,
  onDisplay,
  onConfirm,
  onOK,
  onClear,
  onEnd
}) => {
  return (
    <div className="p-4">
      <div className="bg-blue-200 p-2 mb-4">
        <h1 className="text-xl">収入区分一括更新</h1>
      </div>
      <div className="border p-4 mb-4">
        {/* 検索フィルタ */}
        <div className="flex gap-4 mb-2">
          <div>
            <label>決定年度:</label>
            <span className="ml-2">{fiscalYear}</span>
          </div>
          <div>
            <label>決定番号:</label>
            <input type="number" value={decisionFrom} className="ml-2 border" />
            <span className="mx-2">～</span>
            <input type="number" value={decisionTo} className="border" />
          </div>
        </div>
        <div className="flex gap-4 mb-2">
          <div>
            <label>予算科目:</label>
            <input type="text" value={budgetFrom} className="ml-2 border" />
            <span className="mx-2">～</span>
            <input type="text" value={budgetTo} className="border" />
          </div>
          <div>
            <label>税込金額:</label>
            <input type="number" value={taxAmount} className="border" />
          </div>
        </div>
        <button className="bg-gray-200 px-4 py-2 mt-2" onClick={onDisplay}>表示</button>
      </div>
      <div className="border p-4 mb-4">
        {/* 収入区分一括設定 */}
        <div className="flex gap-4 mb-2">
          <select className="border">
            <option value="詳細">詳細</option>
          </select>
          <button className="bg-gray-200 px-4 py-1" onClick={onConfirm}>確定</button>
        </div>
        <p>確定ボタンを押下すると、表示されている全ての伝票の収入区分を一括で設定します。</p>
        <p>確定後、必ずOKボタンで更新してください。</p>
      </div>
      <div className="flex justify-end gap-4">
        <button className="bg-blue-500 text-white px-4 py-1" onClick={onOK}>OK</button>
        <button className="bg-gray-200 px-4 py-1" onClick={onClear}>クリア</button>
        <button className="bg-gray-200 px-4 py-1" onClick={onEnd}>終了</button>
      </div>
    </div>
  );
};

export default IncomeUpdateForm;
```