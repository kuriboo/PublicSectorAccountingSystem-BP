import React from 'react';

// TypeScriptの型定義
interface PaymentConfirmationProps {
  title: string;
  startDate: string;
  endDate: string;
  companyRangeFrom: string;
  companyRangeTo: string;
  documents: DocumentItem[];
}

interface DocumentItem {
  id: string;
  recipient: string;
  description: string;
  actualPaymentAmount: number;
  decisionAmount: number;
  checked: boolean;
}

const PaymentConfirmation: React.FC<PaymentConfirmationProps> = ({
  title,
  startDate,
  endDate,
  companyRangeFrom,
  companyRangeTo,
  documents,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      
      <div className="mb-4">
        <label className="block">
          支払日:
          <span className="ml-2">{`${startDate} ~ ${endDate}`}</span>
        </label>
        <label className="block">
          起案所属:
          <span className="ml-2">{`${companyRangeFrom} ~ ${companyRangeTo}`}</span>
        </label>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border p-2">決定番号</th>
            <th className="border p-2">支払先</th>
            <th className="border p-2">摘要</th>
            <th className="border p-2">実支払額</th>
            <th className="border p-2">決定額</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, index) => (
            <tr key={index} className="even:bg-gray-200">
              <td className="border p-2">
                <input type="checkbox" checked={doc.checked} readOnly className="mr-2" />
                {doc.id}
              </td>
              <td className="border p-2">{doc.recipient}</td>
              <td className="border p-2">{doc.description}</td>
              <td className="border p-2">{doc.actualPaymentAmount.toLocaleString()}</td>
              <td className="border p-2">{doc.decisionAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button className="mx-2 px-4 py-2 bg-gray-300 rounded">クリア</button>
        <button className="mx-2 px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
```