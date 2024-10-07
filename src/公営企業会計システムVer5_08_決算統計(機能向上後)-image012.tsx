import React, { FC } from 'react';
import 'tailwindcss/tailwind.css';

// TypeScriptの型定義
interface FormProps {
  fiscalYear: string;
  businessCode: string;
  balanceType: string;
  costSegment: string;
  handleSubmit: () => void;
  handleClear: () => void;
}

const AccountingForm: FC<FormProps> = ({
  fiscalYear,
  businessCode,
  balanceType,
  costSegment,
  handleSubmit,
  handleClear,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">決算統計表項目別金額集計マスタ</h2>
      
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <label className="w-24">年度:</label>
          <input type="text" className="border p-2 rounded" value={fiscalYear} readOnly />
        </div>
        
        <div className="flex items-center space-x-2">
          <label className="w-24">事業コード:</label>
          <input type="text" className="border p-2 rounded" value={businessCode} readOnly />
        </div>
        
        <div className="flex items-center space-x-2">
          <label className="w-24">損益計算書:</label>
          <input type="text" className="border p-2 rounded" value={balanceType} readOnly />
        </div>
        
        <div className="flex items-center space-x-2">
          <label className="w-24">決算セグメント:</label>
          <input type="text" className="border p-2 rounded" value={costSegment} readOnly />
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            onClick={handleSubmit}
          >
            OK
          </button>
          <button
            className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700"
            onClick={handleClear}
          >
            クリア
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountingForm;
```