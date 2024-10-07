import React from 'react';

interface FormProps {
  date: string;
  description: string;
  debitCategory: string;
  debitDetail: string;
  creditCategory: string;
  creditDetail: string;
  taxRate: number;
  taxAmount: number;
  deductionAmount: number;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const FormComponent: React.FC<FormProps> = ({
  date,
  description,
  debitCategory,
  debitDetail,
  creditCategory,
  creditDetail,
  taxRate,
  taxAmount,
  deductionAmount,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <form className="p-4 space-y-4 bg-gray-100 rounded shadow-md">
      {/* Date Input */}
      <div className="flex items-center space-x-2">
        <label className="text-gray-700">伝票日付:</label>
        <input
          type="text"
          value={date}
          className="border p-2 rounded"
        />
      </div>
      
      {/* Description Input */}
      <div>
        <label className="block text-gray-700">摘要:</label>
        <input
          type="text"
          value={description}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Debit and Credit Information */}
      <div className="flex space-x-8">
        <div>
          <h3 className="text-gray-700">借方</h3>
          <div>
            <label>科目:</label>
            <input
              type="text"
              value={debitCategory}
              className="border p-2 rounded"
            />
          </div>
          <div>
            <label>細節:</label>
            <input
              type="text"
              value={debitDetail}
              className="border p-2 rounded"
            />
          </div>
        </div>
        <div>
          <h3 className="text-gray-700">貸方</h3>
          <div>
            <label>科目:</label>
            <input
              type="text"
              value={creditCategory}
              className="border p-2 rounded"
            />
          </div>
          <div>
            <label>細節:</label>
            <input
              type="text"
              value={creditDetail}
              className="border p-2 rounded"
            />
          </div>
        </div>
      </div>

      {/* Tax Information */}
      <div className="flex items-center space-x-4">
        <div>
          <label className="text-gray-700">消費税率:</label>
          <input
            type="number"
            value={taxRate}
            className="border p-2 rounded"
          />
          <span>%</span>
        </div>
        <div>
          <label className="text-gray-700">税込金額:</label>
          <input
            type="number"
            value={taxAmount}
            className="border p-2 rounded"
          />
        </div>
        <div>
          <label className="text-gray-700">税抜金額:</label>
          <input
            type="number"
            value={deductionAmount}
            className="border p-2 rounded"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button type="button" onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button type="button" onClick={onClear} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">クリア</button>
        <button type="button" onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </form>
  );
};

export default FormComponent;