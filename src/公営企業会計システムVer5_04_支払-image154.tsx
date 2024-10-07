import React from 'react';
import 'tailwindcss/tailwind.css';

type PaymentInputProps = {
  fiscalYear: string;
  decisionNumber: number;
  summary: string;
  department: string;
  details: string;
  taxAmount: number;
  paymentAmount: number;
  consumptionTax: number;
  onClose: () => void;
  onClear: () => void;
  onOk: () => void;
};

const PaymentInput: React.FC<PaymentInputProps> = ({
  fiscalYear,
  decisionNumber,
  summary,
  department,
  details,
  taxAmount,
  paymentAmount,
  consumptionTax,
  onClose,
  onClear,
  onOk,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <header className="text-2xl text-center mb-4">工事 前払振替入力</header>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">精算処理日:</label>
          <input type="date" className="border rounded px-2 py-1 w-full" />
        </div>
        <div>
          <label className="block mb-1">年度:</label>
          <input
            type="text"
            value={fiscalYear}
            className="border rounded px-2 py-1 w-full"
            readOnly
          />
        </div>
        <div>
          <label className="block mb-1">決定番号:</label>
          <input
            type="number"
            value={decisionNumber}
            className="border rounded px-2 py-1 w-full"
            readOnly
          />
        </div>
        <div>
          <label className="block mb-1">摘要:</label>
          <input
            type="text"
            value={summary}
            className="border rounded px-2 py-1 w-full"
          />
        </div>
      </div>
      <div className="mb-4">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">予算節</th>
              <th className="px-4 py-2">予算細節</th>
              <th className="px-4 py-2">税</th>
              <th className="px-4 py-2">振替額</th>
              <th className="px-4 py-2">消費額</th>
              <th className="px-4 py-2">明細摘要</th>
              <th className="px-4 py-2">予算明細</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">{department}</td>
              <td className="border px-4 py-2">{details}</td>
              <td className="border px-4 py-2">{taxAmount}</td>
              <td className="border px-4 py-2">{paymentAmount}</td>
              <td className="border px-4 py-2">{consumptionTax}</td>
              <td className="border px-4 py-2">{summary}</td>
              <td className="border px-4 py-2">{details}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={onOk} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default PaymentInput;
```