```tsx
import React from 'react';

// タイプ定義
interface InputFormProps {
  decisionDate?: string;
  approvalDivision?: string;
  meetingDate?: string;
  paymentDate?: string;
  receiptDate?: string;
  abstract?: string;
  paymentDestination?: string;
  paymentMethod?: string;
  invoiceNumber?: string;
  bankName?: string;
  branchName?: string;
  accountNumber?: string;
  nominee?: string;
  taxAmount?: number;
  amountWithoutTax?: number;
  consumptionTax?: number;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const InputForm: React.FC<InputFormProps> = ({
  decisionDate = '',
  approvalDivision = '',
  meetingDate = '',
  paymentDate = '',
  receiptDate = '',
  abstract = '',
  paymentDestination = '',
  paymentMethod = '',
  invoiceNumber = '',
  bankName = '',
  branchName = '',
  accountNumber = '',
  nominee = '',
  taxAmount = 0,
  amountWithoutTax = 0,
  consumptionTax = 0,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 bg-white shadow-md">
      {/* 上部の入力エリア */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block">決定処理日</label>
          <input type="text" value={decisionDate} className="border p-1 w-full" />
        </div>
        <div>
          <label className="block">決裁区分</label>
          <input type="text" value={approvalDivision} className="border p-1 w-full" />
        </div>
        <div>
          <label className="block">会議区分</label>
          <input type="text" value={meetingDate} className="border p-1 w-full" />
        </div>
      </div>

      {/* 中央の入力エリア */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="col-span-2">
          <label className="block">摘要</label>
          <input type="text" value={abstract} className="border p-1 w-full" />
        </div>
        <div>
          <label className="block">支払先</label>
          <input type="text" value={paymentDestination} className="border p-1 w-full" />
        </div>
        <div>
          <label className="block">支払方法</label>
          <input type="text" value={paymentMethod} className="border p-1 w-full" />
        </div>
        <div>
          <label className="block">請求書番号</label>
          <input type="text" value={invoiceNumber} className="border p-1 w-full" />
        </div>
      </div>

      {/* 下部の計算エリア */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block">税込金額</label>
          <input type="number" value={taxAmount} className="border p-1 w-full" readOnly />
        </div>
        <div>
          <label className="block">本体金額</label>
          <input type="number" value={amountWithoutTax} className="border p-1 w-full" readOnly />
        </div>
        <div>
          <label className="block">消費税額</label>
          <input type="number" value={consumptionTax} className="border p-1 w-full" readOnly />
        </div>
      </div>

      {/* ボタンエリア */}
      <div className="flex gap-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white py-1 px-4 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white py-1 px-4 rounded">
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 text-white py-1 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default InputForm;
```