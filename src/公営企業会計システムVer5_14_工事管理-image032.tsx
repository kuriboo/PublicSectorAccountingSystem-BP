import React, { FC } from 'react';

// 型定義
interface CompletionCheckProps {
  yearLabel: string;
  yearValue: string;
  summaryText: string;
  allOptionLabel: string;
  completedOnlyLabel: string;
  okButtonLabel: string;
  clearButtonLabel: string;
  closeButtonLabel: string;
}

// コンポーネント定義
const CompletionCheck: FC<CompletionCheckProps> = ({
  yearLabel,
  yearValue,
  summaryText,
  allOptionLabel,
  completedOnlyLabel,
  okButtonLabel,
  clearButtonLabel,
  closeButtonLabel,
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded shadow-lg bg-white max-w-lg">
      <h1 className="text-xl font-bold mb-4 text-blue-900">完成工事データチェック</h1>
      
      <div className="mb-4">
        <label className="font-bold">{yearLabel}</label>
        <span className="ml-4">{yearValue}</span>
      </div>
      
      <div className="mb-4">
        <h2 className="font-bold">処理概要</h2>
        <p className="pl-4">{summaryText}</p>
      </div>
      
      <div className="mb-4">
        <span className="font-bold">一覧表区分：</span>
        <input type="radio" id="all" name="listOption" className="ml-2" />
        <label htmlFor="all" className="ml-1">{allOptionLabel}</label>
        <input type="radio" id="completedOnly" name="listOption" className="ml-4" />
        <label htmlFor="completedOnly" className="ml-1">{completedOnlyLabel}</label>
      </div>
      
      <div className="flex justify-end space-x-4 mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">{okButtonLabel}</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">{clearButtonLabel}</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">{closeButtonLabel}</button>
      </div>
    </div>
  );
};

export default CompletionCheck;
```