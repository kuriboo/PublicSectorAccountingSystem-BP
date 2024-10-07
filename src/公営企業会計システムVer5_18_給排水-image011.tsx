import React from 'react';

// Define the types for the component props
interface ReceiptFormProps {
  year: number;
  registrationNumber: string;
  summary: string;
  deadline: string;
  installment: {
    section: string;
    subsection: string;
    detail: string;
  };
  adjustmentAmount: number;
  onRegister: () => void;
  onClear: () => void;
  onFinish: () => void;
}

// Define the ReceiptForm component
const ReceiptForm: React.FC<ReceiptFormProps> = ({
  year,
  registrationNumber,
  summary,
  deadline,
  installment,
  adjustmentAmount,
  onRegister,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">納入登録</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">年度</label>
          <input
            type="text"
            value={year}
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            readOnly
          />

          <label className="block text-sm font-medium">調定番号</label>
          <input
            type="text"
            value={registrationNumber}
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            readOnly
          />

          <label className="block text-sm font-medium">摘要</label>
          <input
            type="text"
            value={summary}
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            readOnly
          />

          <label className="block text-sm font-medium">納入期限</label>
          <input
            type="text"
            value={deadline}
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium">入金科目 - 節</label>
          <input
            type="text"
            value={installment.section}
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            readOnly
          />

          <label className="block text-sm font-medium">細節</label>
          <input
            type="text"
            value={installment.subsection}
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            readOnly
          />

          <label className="block text-sm font-medium">明細</label>
          <input
            type="text"
            value={installment.detail}
            className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            readOnly
          />
        </div>
      </div>

      <div className="mt-4">
        <span className="block text-sm font-medium">合計調定金額</span>
        <span className="text-lg font-bold">{adjustmentAmount.toLocaleString()}円</span>
      </div>

      <div className="mt-4 flex justify-end space-x-3">
        <button
          onClick={onRegister}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 px-4 py-2 rounded-lg"
        >
          クリア
        </button>
        <button
          onClick={onFinish}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReceiptForm;
```