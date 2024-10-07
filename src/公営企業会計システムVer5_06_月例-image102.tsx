import React from 'react';

type AccountingFormProps = {
  startDate: string;
  endDate: string;
  startAccountCode: string;
  endAccountCode: string;
  includeAccounting: boolean;
  onChange: (key: string, value: any) => void;
  onSubmit: () => void;
};

const AccountingForm: React.FC<AccountingFormProps> = ({
  startDate,
  endDate,
  startAccountCode,
  endAccountCode,
  includeAccounting,
  onChange,
  onSubmit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <div className="mb-4">
        <label className="block font-bold">伝票日付</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={startDate}
            className="border rounded px-2 py-1"
            onChange={(e) => onChange('startDate', e.target.value)}
          />
          <span>~</span>
          <input
            type="text"
            value={endDate}
            className="border rounded px-2 py-1"
            onChange={(e) => onChange('endDate', e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-bold">仕訳科目</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={startAccountCode}
            className="border rounded px-2 py-1"
            onChange={(e) => onChange('startAccountCode', e.target.value)}
          />
          <span>~</span>
          <input
            type="text"
            value={endAccountCode}
            className="border rounded px-2 py-1"
            onChange={(e) => onChange('endAccountCode', e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-bold">決算仕訳</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              checked={includeAccounting}
              onChange={() => onChange('includeAccounting', true)}
            />
            <span className="ml-1">含む</span>
          </label>
          <label>
            <input
              type="radio"
              checked={!includeAccounting}
              onChange={() => onChange('includeAccounting', false)}
            />
            <span className="ml-1">含まない</span>
          </label>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onSubmit}
      >
        CSV出力
      </button>
    </div>
  );
};

export default AccountingForm;
