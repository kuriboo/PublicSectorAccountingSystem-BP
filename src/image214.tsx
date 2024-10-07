import React from 'react';

type DetailRow = {
  debit: string;
  credit: string;
  amount: number;
  currency: string;
};

type FinancialDetailsProps = {
  title: string;
  details: DetailRow[];
  issueDate: string;
  ticketNumber: string;
  onCancel: () => void;
};

const FinancialDetails: React.FC<FinancialDetailsProps> = ({
  title,
  details,
  issueDate,
  ticketNumber,
  onCancel
}) => {
  return (
    <div className="p-4 border shadow-lg">
      <div className="flex justify-between mb-4">
        <div>
          <span className="font-bold">振替日: </span>{issueDate}
        </div>
        <div>
          <span className="font-bold">伝票No.: </span>{ticketNumber}
        </div>
      </div>
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">借方科目</th>
            <th className="px-4 py-2">貸方科目</th>
            <th className="px-4 py-2">金額</th>
          </tr>
        </thead>
        <tbody>
          {details.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row.debit}</td>
              <td className="border px-4 py-2">{row.credit}</td>
              <td className="border px-4 py-2">{`${row.amount.toLocaleString()} ${row.currency}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button 
        className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
        onClick={onCancel}
      >
        キャンセル
      </button>
    </div>
  );
};

export default FinancialDetails;
```