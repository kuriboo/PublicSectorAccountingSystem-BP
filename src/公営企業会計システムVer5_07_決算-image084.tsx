import React from 'react';

// TypeScript型定義
type AccountingPeriodSelectorProps = {
  accountingYear: string;
  onChangeYear: (year: string) => void;
  taxationPeriodStart: string;
  taxationPeriodEnd: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AccountingPeriodSelector: React.FC<AccountingPeriodSelectorProps> = ({
  accountingYear,
  onChangeYear,
  taxationPeriodStart,
  taxationPeriodEnd,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">会計年度</label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={accountingYear}
            onChange={(e) => onChangeYear(e.target.value)}
            className="border rounded p-2"
          />
          <span className="text-gray-700">年度</span>
        </div>
      </div>
      <div className="mb-4">
        <span className="block font-medium text-gray-700">課税期間</span>
        <div className="flex items-center space-x-2">
          <span>{taxationPeriodStart}</span>
          <span>〜</span>
          <span>{taxationPeriodEnd}</span>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingPeriodSelector;
