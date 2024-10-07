import React from 'react';

// TypeScriptの型定義
type Transaction = {
  date: string;
  type: string;
  number: number;
  amount: string;
  summary: string;
};

type TransactionHistoryProps = {
  year: string;
  slipNumber: number;
  usageDivision: string;
  transactions: Transaction[];
  onDetailClick: () => void;
  onReissueClick: () => void;
  onCancelClick: () => void;
};

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  year,
  slipNumber,
  usageDivision,
  transactions,
  onDetailClick,
  onReissueClick,
  onCancelClick
}) => {
  return (
    <div className="border rounded-lg p-4 bg-white max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">流用先用履歴</h2>
      </div>
      <div className="mb-2">
        <p>令和{year}年度</p>
        <p>伝票番号: {slipNumber}</p>
        <p>流用先用区分: {usageDivision}</p>
        <button
          className="px-4 py-2 bg-gray-200 rounded mt-2"
          onClick={onDetailClick}
        >
          詳細
        </button>
      </div>
      <table className="w-full text-left table-auto mb-4">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-2">起票日</th>
            <th className="p-2">種別</th>
            <th className="p-2">伝票No</th>
            <th className="p-2">金額</th>
            <th className="p-2">摘要</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
            >
              <td className="p-2">{transaction.date}</td>
              <td className="p-2">{transaction.type}</td>
              <td className="p-2">{transaction.number}</td>
              <td className="p-2">{transaction.amount}</td>
              <td className="p-2">{transaction.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={onReissueClick}
        >
          再発行
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={onCancelClick}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default TransactionHistory;
