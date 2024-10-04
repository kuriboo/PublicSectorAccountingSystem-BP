```tsx
import React from 'react';

// Propsの型定義
type ReceiptFormProps = {
  receiptDate: string;
  fiscalYear: string;
  transactionDate: string;
  debtor: string;
  summary: string;
  amount: number;
  onAddRow: () => void;
  onDeleteRow: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ReceiptForm: React.FC<ReceiptFormProps> = ({
  receiptDate,
  fiscalYear,
  transactionDate,
  debtor,
  summary,
  amount,
  onAddRow,
  onDeleteRow,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white">
      <div className="mb-4">
        <h1 className="text-xl font-bold">集合収納受付</h1>
      </div>
      <table className="w-full mb-4 border-collapse border border-gray-300">
        <tbody>
          <tr>
            <td className="p-2 border border-gray-300">収納受付日</td>
            <td className="p-2 border border-gray-300">
              <input type="text" value={receiptDate} className="w-full p-1 border" readOnly />
            </td>
            <td className="p-2 border border-gray-300">
              <button className="p-2 bg-white border rounded" onClick={onAddRow}>行追加</button>
            </td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-300">年度</td>
            <td className="p-2 border border-gray-300">
              <input type="text" value={fiscalYear} className="w-full p-1 border" readOnly />
            </td>
            <td className="p-2 border border-gray-300">
              <button className="p-2 bg-white border rounded" onClick={onDeleteRow}>行削除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="p-2 border border-gray-300">納付書番号</th>
            <th className="p-2 border border-gray-300">伝票日付</th>
            <th className="p-2 border border-gray-300">納入期限</th>
            <th className="p-2 border border-gray-300">債務者</th>
            <th className="p-2 border border-gray-300">摘要</th>
            <th className="p-2 border border-gray-300">金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-gray-300">5</td>
            <td className="p-2 border border-gray-300">{transactionDate}</td>
            <td className="p-2 border border-gray-300"></td>
            <td className="p-2 border border-gray-300">{debtor}</td>
            <td className="p-2 border border-gray-300">{summary}</td>
            <td className="p-2 border border-gray-300">{amount.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={onSubmit}>OK</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={onClear}>クリア</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onExit}>終了</button>
      </div>
    </div>
  );
};

export default ReceiptForm;
```