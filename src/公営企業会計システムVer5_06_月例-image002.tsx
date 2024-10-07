import React from 'react';

// TypeScriptの型定義
type PaymentEntryProps = {
  slipDate?: string;
  accountCode?: string;
  summary?: string;
  debitAmount?: number;
  creditAmount?: number;
  consumptionTaxRate?: number;
  taxIncludedAmount?: number;
  onSave?: () => void;
  onClear?: () => void;
  onClose?: () => void;
};

const PaymentEntry: React.FC<PaymentEntryProps> = ({
  slipDate = '令和5年08月04日',
  accountCode = '',
  summary = '',
  debitAmount = 0,
  creditAmount = 0,
  consumptionTaxRate = 0,
  taxIncludedAmount = 0,
  onSave,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
      {/* 伝票日付 */}
      <div className="mb-2">
        <label htmlFor="slipDate" className="block font-semibold">伝票日付</label>
        <input 
          type="text" 
          id="slipDate" 
          value={slipDate} 
          className="w-full px-2 py-1 border border-gray-300 rounded" 
          readOnly 
        />
      </div>

      {/* 仕訳コード */}
      <div className="mb-2">
        <label htmlFor="accountCode" className="block font-semibold">仕訳コード</label>
        <input 
          type="text" 
          id="accountCode" 
          value={accountCode} 
          className="w-full px-2 py-1 border border-gray-300 rounded" 
          readOnly 
        />
      </div>

      {/* 摘要 */}
      <div className="mb-2">
        <label htmlFor="summary" className="block font-semibold">摘要</label>
        <input 
          type="text" 
          id="summary" 
          value={summary} 
          className="w-full px-2 py-1 border border-gray-300 rounded" 
          readOnly 
        />
      </div>

      {/* 借方金額 */}
      <div className="mb-2">
        <label htmlFor="debitAmount" className="block font-semibold">借方金額</label>
        <input 
          type="number" 
          id="debitAmount" 
          value={debitAmount} 
          className="w-full px-2 py-1 border border-gray-300 rounded" 
          readOnly 
        />
      </div>

      {/* 貸方金額 */}
      <div className="mb-2">
        <label htmlFor="creditAmount" className="block font-semibold">貸方金額</label>
        <input 
          type="number" 
          id="creditAmount" 
          value={creditAmount} 
          className="w-full px-2 py-1 border border-gray-300 rounded" 
          readOnly 
        />
      </div>

      {/* 消費税率 */}
      <div className="mb-2">
        <label htmlFor="consumptionTaxRate" className="block font-semibold">消費税率</label>
        <input 
          type="number" 
          id="consumptionTaxRate" 
          value={consumptionTaxRate} 
          className="w-full px-2 py-1 border border-gray-300 rounded" 
          readOnly 
        />
      </div>

      {/* 税込金額 */}
      <div className="mb-2">
        <label htmlFor="taxIncludedAmount" className="block font-semibold">税込金額</label>
        <input 
          type="number" 
          id="taxIncludedAmount" 
          value={taxIncludedAmount} 
          className="w-full px-2 py-1 border border-gray-300 rounded" 
          readOnly 
        />
      </div>

      {/* ボタン */}
      <div className="mt-4 flex space-x-2">
        <button onClick={onSave} className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded">クリア</button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default PaymentEntry;
