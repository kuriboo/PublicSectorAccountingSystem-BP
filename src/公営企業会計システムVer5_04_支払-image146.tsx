// Import necessary libraries
import React from 'react';

// Define TypeScript interfaces for the component props
interface PaymentDetailsProps {
  scheduleStartDate: string;
  scheduleEndDate: string;
  fiscalYear: string;
  budgetDepartment: string;
  paymentDept: string;
  decisionNumber: number;
  paymentAmount: number;
  description: string;
  onClear: () => void;
  onExit: () => void;
}

// Reusable and customizable Next.js + TypeScript component
const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  scheduleStartDate,
  scheduleEndDate,
  fiscalYear,
  budgetDepartment,
  paymentDept,
  decisionNumber,
  paymentAmount,
  description,
  onClear,
  onExit,
}) => {
  return (
    <div className="font-sans p-4 shadow-lg rounded-lg bg-gray-50">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4">支払予定明細照会</h2>
      
      {/* Payment Schedule */}
      <div className="mb-4">
        <h3 className="font-semibold">支払予定日</h3>
        <p>{scheduleStartDate} ~ {scheduleEndDate}</p>
      </div>

      {/* Payment Criteria */}
      <div className="mb-4">
        <h3 className="font-semibold">支出科目</h3>
        <p>年度: {fiscalYear}</p>
        <p>予算科目: {budgetDepartment}</p>
        <p>支出科目: {paymentDept}</p>
      </div>

      {/* Payment Summary Table */}
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-200 px-4 py-2">支払予定日</th>
            <th className="border border-gray-200 px-4 py-2">決定番号</th>
            <th className="border border-gray-200 px-4 py-2">支払先</th>
            <th className="border border-gray-200 px-4 py-2">支払額</th>
            <th className="border border-gray-200 px-4 py-2">摘要</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 px-4 py-2">{scheduleStartDate}</td>
            <td className="border border-gray-200 px-4 py-2">{decisionNumber}</td>
            <td className="border border-gray-200 px-4 py-2">ぎょうせい</td>
            <td className="border border-gray-200 px-4 py-2">{paymentAmount.toLocaleString()}円</td>
            <td className="border border-gray-200 px-4 py-2">{description}</td>
          </tr>
        </tbody>
      </table>

      {/* Actions */}
      <div className="mt-4 flex justify-end space-x-4">
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded" 
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded" 
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
