// Import necessary libraries
import React from 'react';

// Define TypeScript types for props
interface FinanceFormProps {
  year: string;
  caseCount: number;
  paymentAmount: number;
  onChangeYear: (value: string) => void;
  onChangeCaseCount: (value: number) => void;
  onChangePaymentAmount: (value: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Create a functional component with TailwindCSS styling
const FinanceForm: React.FC<FinanceFormProps> = ({
  year,
  caseCount,
  paymentAmount,
  onChangeYear,
  onChangeCaseCount,
  onChangePaymentAmount,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      {/* Title */}
      <h1 className="text-lg font-bold mb-4">集金収納入力金額登録</h1>

      {/* Year */}
      <div className="mb-4">
        <label className="block mb-2">年度</label>
        <input
          type="text"
          value={year}
          onChange={(e) => onChangeYear(e.target.value)}
          className="border py-1 px-2"
        />
      </div>

      {/* Case Count */}
      <div className="mb-4">
        <label className="block mb-2">件数</label>
        <input
          type="number"
          value={caseCount}
          onChange={(e) => onChangeCaseCount(Number(e.target.value))}
          className="border py-1 px-2"
        />
      </div>

      {/* Payment Amount */}
      <div className="mb-4">
        <label className="block mb-2">収納金額</label>
        <input
          type="number"
          value={paymentAmount}
          onChange={(e) => onChangePaymentAmount(Number(e.target.value))}
          className="border py-1 px-2"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-1 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black py-1 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-red-500 text-white py-1 px-4 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FinanceForm;
