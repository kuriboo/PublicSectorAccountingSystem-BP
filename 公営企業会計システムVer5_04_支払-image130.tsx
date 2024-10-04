```tsx
import React from 'react';

// Prop types definition
type PaymentInfoProps = {
  decisionYear: string;
  decisionNo: number;
  paymentDate: string;
  paymentMethod: string;
  payee: string;
  actualAmount: string;
  decisionAmount: string;
  baseAmount: string;
  taxAmount: string;
  bankName: string;
  branchName: string;
  accountType: string;
  accountNumber: string;
  accountHolder: string;
  onConfirm: () => void;
  onCancel: () => void;
  onTransferClick: () => void;
};

const PaymentInfo: React.FC<PaymentInfoProps> = ({
  decisionYear,
  decisionNo,
  paymentDate,
  paymentMethod,
  payee,
  actualAmount,
  decisionAmount,
  baseAmount,
  taxAmount,
  bankName,
  branchName,
  accountType,
  accountNumber,
  accountHolder,
  onConfirm,
  onCancel,
  onTransferClick,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">支払情報変更入力</h2>
        <div className="flex justify-between">
          <div>
            <div>支出決定: {decisionYear} 年度 決定番号: {decisionNo}</div>
            <div>支払日: {paymentDate}</div>
            <div>支払方法: {paymentMethod}</div>
            <div>支払先: {payee}</div>
            <div>実支払額計: {actualAmount}</div>
          </div>
          <div className="text-right">
            <div>決定額: {decisionAmount}</div>
            <div>本体額: {baseAmount}</div>
            <div>消費税額: {taxAmount}</div>
          </div>
        </div>
      </div>

      <div className="mb-4 border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">振込口座・支払金額</h3>
        <div>
          <div>銀行: {bankName}</div>
          <div>支店: {branchName}</div>
          <div>種別: {accountType}</div>
          <div>口座番号: {accountNumber}</div>
          <div>名義人: {accountHolder}</div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button 
          onClick={onTransferClick} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          振込先
        </button>
        <button 
          onClick={onConfirm} 
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          行確定
        </button>
        <button 
          onClick={onCancel} 
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default PaymentInfo;
```