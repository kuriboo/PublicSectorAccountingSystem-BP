import React from 'react';

// Propsの型定義
interface UnpaidListFormProps {
  counterpartyStart: string;
  counterpartyEnd: string;
  decisionStartDate: string;
  decisionEndDate: string;
  paymentDueDate: string;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

const UnpaidListForm: React.FC<UnpaidListFormProps> = ({
  counterpartyStart,
  counterpartyEnd,
  decisionStartDate,
  decisionEndDate,
  paymentDueDate,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <h1 className="text-xl font-bold">未払金一覧表（工事）作成</h1>
      </div>
      
      <div className="border p-4">
        {/* 範囲指定 */}
        <section className="mb-4">
          <h2 className="mb-2">範囲指定</h2>

          <div className="flex mb-2">
            <span>相手先</span>
            <input
              type="text"
              value={counterpartyStart}
              readOnly
              className="border ml-2 mr-4 px-2 py-1"
            />
            <span>~</span>
            <input
              type="text"
              value={counterpartyEnd}
              readOnly
              className="border ml-4 px-2 py-1"
            />
          </div>

          <div className="flex mb-2">
            <span>決定処理日</span>
            <input
              type="text"
              value={decisionStartDate}
              readOnly
              className="border ml-2 mr-4 px-2 py-1"
            />
            <span>~</span>
            <input
              type="text"
              value={decisionEndDate}
              readOnly
              className="border ml-4 px-2 py-1"
            />
          </div>

          <div className="flex mb-2">
            <span>支払予定日</span>
            <input
              type="text"
              value={paymentDueDate}
              readOnly
              className="border ml-2 px-2 py-1"
            />
            <span> 以降</span>
          </div>
        </section>
        
        {/* ボタン類 */}
        <div className="flex justify-end space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onOk}>
            OK
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClear}>
            クリア
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnpaidListForm;
