import React from 'react';

// TypeScriptの型定義
type Props = {
  startBudget?: string;
  endBudget?: string;
  decisionDateStart?: string;
  decisionDateEnd?: string;
  paymentDate?: string;
  onConfirm: () => void;
  onClear: () => void;
  onEnd: () => void;
};

// 再利用可能なコンポーネント
const PaymentListForm: React.FC<Props> = ({
  startBudget = '000000000',
  endBudget = '999999999',
  decisionDateStart = '平成31年04月01日',
  decisionDateEnd = '令和02年03月31日',
  paymentDate = '令和02年04月01日',
  onConfirm,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-xl bg-purple-200 py-2 text-center">未払金一覧表(予算)作成</h1>
      <div className="border p-4 mt-4">
        <h2 className="text-lg">範囲指定</h2>
        <div className="mt-2">
          <label className="mr-2">予算節</label>
          <input className="border p-1" type="text" defaultValue={startBudget} />
          <span className="mx-2">~</span>
          <input className="border p-1" type="text" defaultValue={endBudget} />
        </div>
        <div className="mt-4">
          <div>
            <span className="mr-2">決定処理日</span>
            <input className="border p-1" type="text" defaultValue={decisionDateStart} />
            <span className="mx-2">~</span>
            <input className="border p-1" type="text" defaultValue={decisionDateEnd} />
          </div>
          <div className="mt-2">
            <span className="mr-2">支払予定日</span>
            <input className="border p-1" type="text" defaultValue={`${paymentDate} 以降`} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-200 px-4 py-2 m-1" onClick={onConfirm}>OK</button>
        <button className="bg-red-200 px-4 py-2 m-1" onClick={onClear}>クリア</button>
        <button className="bg-gray-200 px-4 py-2 m-1" onClick={onEnd}>終了</button>
      </div>
    </div>
  );
};

export default PaymentListForm;
```