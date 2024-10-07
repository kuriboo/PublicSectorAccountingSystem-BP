import React from 'react';

interface PaymentSettingsProps {
  sectionCode: string;
  subsectionCode: string;
  detailCode: string;
  onSearch: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const PaymentSettings: React.FC<PaymentSettingsProps> = ({
  sectionCode,
  subsectionCode,
  detailCode,
  onSearch,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md max-w-md mx-auto">
      <h1 className="text-lg font-bold mb-4">支払科目設定</h1>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">節</label>
        <input
          type="text"
          value={sectionCode}
          readOnly
          className="mt-1 border border-gray-300 focus:ring focus:ring-blue-300 shadow-sm rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">細節</label>
        <input
          type="text"
          value={subsectionCode}
          readOnly
          className="mt-1 border border-gray-300 focus:ring focus:ring-blue-300 shadow-sm rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">明細</label>
        <input
          type="text"
          value={detailCode}
          readOnly
          className="mt-1 border border-gray-300 focus:ring focus:ring-blue-300 shadow-sm rounded-md p-2 w-full"
        />
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          科目検索
        </button>
        <button
          onClick={onSubmit}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          クリア
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PaymentSettings;
