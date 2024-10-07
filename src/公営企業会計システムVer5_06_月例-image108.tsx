// Import necessary modules and types
import React from 'react';

type FormProps = {
  startDate: string;
  endDate: string;
  debitStart: string;
  debitEnd: string;
  detailStart: string;
  detailEnd: string;
  onCsvExport: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AccountForm: React.FC<FormProps> = ({
  startDate,
  endDate,
  debitStart,
  debitEnd,
  detailStart,
  detailEnd,
  onCsvExport,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-8 bg-white shadow rounded">
      {/* Form Header */}
      <div className="flex justify-between mb-4">
        <span className="font-bold text-lg">範囲指定</span>
      </div>

      {/* Date Range Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">作表日</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={startDate}
            className="block w-full p-2 border border-gray-300 rounded"
            readOnly
          />
          <span className="self-center">~</span>
          <input
            type="text"
            value={endDate}
            className="block w-full p-2 border border-gray-300 rounded"
            readOnly
          />
        </div>
      </div>

      {/* Debit Range Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">仕訳科目</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={debitStart}
            className="block w-full p-2 border border-gray-300 rounded"
            readOnly
          />
          <span className="self-center">~</span>
          <input
            type="text"
            value={debitEnd}
            className="block w-full p-2 border border-gray-300 rounded"
            readOnly
          />
        </div>
      </div>

      {/* Detail Range Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">仕訳細節</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={detailStart}
            className="block w-full p-2 border border-gray-300 rounded"
            readOnly
          />
          <span className="self-center">~</span>
          <input
            type="text"
            value={detailEnd}
            className="block w-full p-2 border border-gray-300 rounded"
            readOnly
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          className="bg-gray-200 p-2 rounded hover:bg-gray-300"
          onClick={onCsvExport}
        >
          CSV出力
        </button>
        <button
          className="bg-gray-200 p-2 rounded hover:bg-gray-300"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-200 p-2 rounded hover:bg-gray-300"
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountForm;
