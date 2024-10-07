import React from 'react';

// Props type definition
type ReportFormProps = {
  startDate: string;
  endDate: string;
  onGenerateCSV: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ReportForm: React.FC<ReportFormProps> = ({
  startDate,
  endDate,
  onGenerateCSV,
  onClear,
  onClose,
}) => {
  return (
    <div className="bg-gray-100 p-8 max-w-lg mx-auto rounded-md shadow-md">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-xl font-bold text-center text-blue-800">
          継続費に関する調書
        </h1>
      </div>

      {/* Date Range Inputs */}
      <div className="flex justify-center items-center mb-6">
        <div className="flex flex-col items-center mr-4">
          <label className="font-semibold mb-2">事業科目</label>
          <input
            type="text"
            value={startDate}
            readOnly
            className="border p-2 rounded w-20 text-center"
          />
        </div>

        <span className="mx-4">~</span>

        <div className="flex flex-col items-center ml-4">
          <label className="font-semibold mb-2">事業科目</label>
          <input
            type="text"
            value={endDate}
            readOnly
            className="border p-2 rounded w-20 text-center"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={onGenerateCSV}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportForm;