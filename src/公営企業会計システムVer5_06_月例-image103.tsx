import React from 'react';

// TypeScriptの型定義
type AccountingFormProps = {
  startDate: string;
  endDate: string;
  includeOption: boolean;
  onDateChange: (startDate: string, endDate: string) => void;
  onIncludeChange: (include: boolean) => void;
  onExport: () => void;
  onClear: () => void;
  onFinish: () => void;
};

// 再利用可能なコンポーネント
const AccountingForm: React.FC<AccountingFormProps> = ({
  startDate,
  endDate,
  includeOption,
  onDateChange,
  onIncludeChange,
  onExport,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4">
      <div className="bg-blue-100 p-2 rounded-lg mb-4">
        <h2 className="text-lg font-bold">月次会計残高試算表</h2>
      </div>
      <div className="border p-4">
        <h3 className="font-semibold">範囲指定</h3>
        <div className="mt-2">
          <label className="block text-sm font-medium mb-1">当月集計日付</label>
          <input
            type="text"
            value={startDate}
            onChange={(e) => onDateChange(e.target.value, endDate)}
            className="border rounded p-1 mr-2"
            placeholder="開始日"
          />
          <span className="mx-2">〜</span>
          <input
            type="text"
            value={endDate}
            onChange={(e) => onDateChange(startDate, e.target.value)}
            className="border rounded p-1"
            placeholder="終了日"
          />
        </div>
        <div className="mt-4">
          <label className="font-semibold block">決算仕訳</label>
          <label className="inline-flex items-center mt-1">
            <input
              type="radio"
              name="include-option"
              checked={includeOption}
              onChange={() => onIncludeChange(true)}
              className="form-radio"
            />
            <span className="ml-2">含む</span>
          </label>
          <label className="inline-flex items-center ml-4 mt-1">
            <input
              type="radio"
              name="include-option"
              checked={!includeOption}
              onChange={() => onIncludeChange(false)}
              className="form-radio"
            />
            <span className="ml-2">含まない</span>
          </label>
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={onExport}
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
        >
          クリア
        </button>
        <button
          onClick={onFinish}
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingForm;
