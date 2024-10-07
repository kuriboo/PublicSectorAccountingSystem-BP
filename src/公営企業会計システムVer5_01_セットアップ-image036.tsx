import React from 'react';

// TypeScript interface for component props
interface AccountingFormProps {
  yearOptions: string[];
  onYearChange: (year: string) => void;
  startAccountCode: string;
  endAccountCode: string;
  onStartAccountCodeChange: (code: string) => void;
  onEndAccountCodeChange: (code: string) => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

const AccountingForm: React.FC<AccountingFormProps> = ({
  yearOptions,
  onYearChange,
  startAccountCode,
  endAccountCode,
  onStartAccountCodeChange,
  onEndAccountCodeChange,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <div className="text-xl font-bold mb-4">仕訳科目マスタリスト作成</div>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">年度</label>
        <select
          className="border rounded w-full p-2"
          onChange={(e) => onYearChange(e.target.value)}
        >
          {yearOptions.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">範囲指定</label>
        <div className="flex items-center">
          <input
            type="text"
            value={startAccountCode}
            onChange={(e) => onStartAccountCodeChange(e.target.value)}
            className="border rounded p-2 w-1/2"
          />
          <span className="mx-2">〜</span>
          <input
            type="text"
            value={endAccountCode}
            onChange={(e) => onEndAccountCodeChange(e.target.value)}
            className="border rounded p-2 w-1/2"
          />
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded" onClick={onOk}>
          OK
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded" onClick={onClose}>
          終了
        </button>
      </div>
    </div>
  );
}

export default AccountingForm;
