```tsx
// components/PayrollDataImport.tsx

import React from 'react';

type PayrollDataImportProps = {
  accountType: string;
  paymentDate: string;
  startDate: string;
  onImportClick: () => void;
  onClearClick: () => void;
  onExitClick: () => void;
};

const PayrollDataImport: React.FC<PayrollDataImportProps> = ({
  accountType,
  paymentDate,
  startDate,
  onImportClick,
  onClearClick,
  onExitClick,
}) => {
  return (
    <div className="mx-auto max-w-xl p-4 space-y-4 border rounded shadow-md bg-gray-100">
      <h1 className="text-lg font-bold text-purple-800">給与データ取込</h1>
      
      <div className="space-y-2">
        <div className="flex items-center">
          <span className="w-24">会計区分</span>
          <input type="text" value={accountType} className="border p-1" readOnly />
        </div>

        <div className="flex items-center">
          <span className="w-24">支給日</span>
          <input type="text" value={paymentDate} className="border p-1" readOnly />
        </div>

        <div className="flex items-center">
          <span className="w-24">起案日</span>
          <input type="text" value={startDate} className="border p-1" readOnly />
        </div>
      </div>

      <div>
        <button 
          onClick={onImportClick} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          給与データ取込み
        </button>
      </div>

      <div className="p-4 bg-white border rounded">
        <h2 className="text-sm font-semibold text-blue-800">処理概要</h2>
        <p className="text-xs text-gray-700">
          支給日とファイル内各データの支給日が同じに給与支給データを対象にして、給与データの取込を行います。
          また、支給日とファイル内各データの日が同じに控除データの取込を行います。
          決定データの起案日は、画面で登録した起案日となります。
        </p>
      </div>

      <div className="flex space-x-4">
        <button 
          onClick={onClearClick} 
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-500">
          クリア
        </button>
        <button 
          onClick={onExitClick} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
          終了
        </button>
      </div>
    </div>
  );
};

export default PayrollDataImport;
```