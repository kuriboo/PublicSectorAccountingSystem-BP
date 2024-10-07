import React from 'react';

type PaymentEntry = {
  decisionNumber: number;
  settled: boolean;
  paymentDestination: string;
  description: string;
  decisionAmount: number;
  paymentDate: string;
  processingYearMonth: string;
};

type PaymentFormProps = {
  entries: PaymentEntry[];
  onEntrySelect: (decisionNumber: number) => void;
  onOK: () => void;
  onClear: () => void;
  onExit: () => void;
};

const PaymentForm: React.FC<PaymentFormProps> = ({ entries, onEntrySelect, onOK, onClear, onExit }) => {
  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-md">
      <header className="mb-4">
        <h1 className="text-xl font-bold text-center">出納受渡解除入力</h1>
      </header>
      <table className="w-full mb-4 table-auto border-collapse">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border px-4 py-2">決定番号</th>
            <th className="border px-4 py-2">済</th>
            <th className="border px-4 py-2">支払先</th>
            <th className="border px-4 py-2">摘要</th>
            <th className="border px-4 py-2">決定額</th>
            <th className="border px-4 py-2">支払日</th>
            <th className="border px-4 py-2">処理年月日</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.decisionNumber} className="hover:bg-gray-100 cursor-pointer" onClick={() => onEntrySelect(entry.decisionNumber)}>
              <td className="border px-4 py-2">{entry.decisionNumber}</td>
              <td className="border px-4 py-2">{entry.settled ? '済' : ''}</td>
              <td className="border px-4 py-2">{entry.paymentDestination}</td>
              <td className="border px-4 py-2">{entry.description}</td>
              <td className="border px-4 py-2">{entry.decisionAmount.toLocaleString()}</td>
              <td className="border px-4 py-2">{entry.paymentDate}</td>
              <td className="border px-4 py-2">{entry.processingYearMonth}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end space-x-2">
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded" onClick={onOK}>OK</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded" onClick={onClear}>クリア</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded" onClick={onExit}>終了</button>
      </div>
    </div>
  );
};

export default PaymentForm;