import React from 'react';

type AccountingFormProps = {
  date: string;
  onDateChange: (date: string) => void;
  accountingType: string;
  onAccountingTypeChange: (type: string) => void;
  accountingCodeStart: string;
  accountingCodeEnd: string;
  onAccountingCodeChange: (start: string, end: string) => void;
  assetCodeStart: string;
  assetCodeEnd: string;
  onAssetCodeChange: (start: string, end: string) => void;
  sourceCode: string;
  onSourceCodeChange: (code: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AccountingForm: React.FC<AccountingFormProps> = ({
  date,
  onDateChange,
  accountingType,
  onAccountingTypeChange,
  accountingCodeStart,
  accountingCodeEnd,
  onAccountingCodeChange,
  assetCodeStart,
  assetCodeEnd,
  onAssetCodeChange,
  sourceCode,
  onSourceCodeChange,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">DPD1580 除却一覧表作成</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">作成年月日</label>
        <input
          type="text"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">会計区分</label>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="指定なし"
              checked={accountingType === '指定なし'}
              onChange={(e) => onAccountingTypeChange(e.target.value)}
            />
            <span className="ml-2">指定なし</span>
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              value="会計区分コード"
              checked={accountingType === '会計区分コード'}
              onChange={(e) => onAccountingTypeChange(e.target.value)}
            />
            <span className="ml-2">会計区分コード</span>
          </label>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">会計区分コード</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={accountingCodeStart}
            onChange={(e) => onAccountingCodeChange(e.target.value, accountingCodeEnd)}
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <span>~</span>
          <input
            type="text"
            value={accountingCodeEnd}
            onChange={(e) => onAccountingCodeChange(accountingCodeStart, e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">範囲指定</label>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="mr-2">固定資産科目</span>
            <input
              type="text"
              value={assetCodeStart}
              onChange={(e) => onAssetCodeChange(e.target.value, assetCodeEnd)}
              className="flex-1 p-2 border border-gray-300 rounded"
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              value={assetCodeEnd}
              onChange={(e) => onAssetCodeChange(assetCodeStart, e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded"
            />
          </div>
          
          <div className="flex items-center">
            <span className="mr-2">資産番号</span>
            <input
              type="text"
              value={sourceCode}
              onChange={(e) => onSourceCodeChange(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
          クリア
        </button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingForm;
```