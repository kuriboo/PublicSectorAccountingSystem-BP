import React from 'react';

// TypeScript types for the component properties
type TransactionFormProps = {
  budgetCode?: string;
  debitCode?: string;
  creditCode?: string;
  showRatio?: boolean;
  onOk?: () => void;
  onClear?: () => void;
  onCancel?: () => void;
};

const TransactionForm: React.FC<TransactionFormProps> = ({
  budgetCode = "10000",
  debitCode = "02001 01 001 0001 給料",
  creditCode = "65201 0201 0003 0001 〇〇課 役所･普",
  showRatio = true,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md w-full max-w-lg">
      <div className="mb-4">
        <span className="text-lg font-bold">仕訳コード</span>: {budgetCode} <span>予算仕訳R</span>
      </div>
      <div className="mb-2 flex justify-between">
        <span className="font-bold">借方</span>
        <span className="font-bold">貸方</span>
      </div>
      <div className="mb-4 flex justify-between">
        <div className="w-1/2 border p-2">{debitCode}</div>
        <div className="w-1/2 border p-2">{creditCode}</div>
      </div>
      {showRatio && (
        <div className="mb-4 flex items-center">
          <label className="mr-2">
            <input type="radio" name="ratio" defaultChecked /> 構成比
          </label>
          <input type="text" className="border p-1 w-16 mr-2" disabled />
          <span>%</span>
          <label className="ml-4 mr-2">
            <input type="radio" name="ratio" /> 残り全て
          </label>
          <label className="ml-4">
            <input type="radio" name="ratio" /> 集計対象外
          </label>
        </div>
      )}
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-blue-600 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-gray-300 text-black px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default TransactionForm;