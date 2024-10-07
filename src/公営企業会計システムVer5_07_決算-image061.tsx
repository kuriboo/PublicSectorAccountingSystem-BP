import React from 'react';

// Propsの型定義
interface AccountingFormProps {
  fiscalYear: string;
  onFiscalYearChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

const AccountingForm: React.FC<AccountingFormProps> = ({
  fiscalYear,
  onFiscalYearChange,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-blue-700 text-white p-2 mb-4 rounded-t-lg">
        <h1 className="text-2xl">精算表</h1>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-lg mb-2">会計年度</label>
          <input
            type="text"
            value={fiscalYear}
            onChange={(e) => onFiscalYearChange(e.target.value)}
            className="border p-2 rounded-md w-full"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onSubmit}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            OK
          </button>
          <button
            onClick={onClear}
            className="bg-gray-300 py-2 px-4 rounded"
          >
            クリア
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountingForm;