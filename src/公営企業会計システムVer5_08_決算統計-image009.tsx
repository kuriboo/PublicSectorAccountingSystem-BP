// Import necessary libraries and types
import React from 'react';

// Define the prop types for the component
interface ReportFormProps {
  fiscalYear: string;
  fromAccountCode: string;
  toAccountCode: string;
  isDetailPrinted: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

// ReportForm component
const ReportForm: React.FC<ReportFormProps> = ({
  fiscalYear,
  fromAccountCode,
  toAccountCode,
  isDetailPrinted,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Form Header */}
      <h1 className="text-xl font-bold mb-4">資本的収支に関する調べ</h1>
      <div className="mb-4">
        <label className="mr-2">年度</label>
        <span>{fiscalYear}</span>
      </div>

      {/* Range Specification Section */}
      <div className="border p-4 mb-4">
        <div className="mb-4">
          <label className="mr-2">予算科目</label>
          <input type="text" value={fromAccountCode} readOnly className="border p-1" />
          <span className="mx-2">~</span>
          <input type="text" value={toAccountCode} readOnly className="border p-1" />
        </div>
        <div>
          <label className="mr-2">細節印字</label>
          <input type="radio" checked={isDetailPrinted} readOnly className="mr-1" />あり
          <input type="radio" checked={!isDetailPrinted} readOnly className="ml-2 mr-1" />なし
        </div>
      </div>

      {/* Processing Summary */}
      <div className="border p-4 mb-4">
        <p>決算統計報告明細書を作成します。</p>
        <p>※あらかじめ1000円丸め処理を行ってください。</p>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ReportForm;
```