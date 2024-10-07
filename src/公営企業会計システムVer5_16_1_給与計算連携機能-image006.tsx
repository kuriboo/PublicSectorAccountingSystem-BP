// components/KyuuyoDataImport.tsx

import React from 'react';

type KyuuyoDataImportProps = {
  accountTypeCode: string;
  accountTypeName: string;
  paymentDate: string;
  initiationDate: string;
  onImportClick: () => void;
  onClearClick: () => void;
  onCloseClick: () => void;
};

const KyuuyoDataImport: React.FC<KyuuyoDataImportProps> = ({
  accountTypeCode,
  accountTypeName,
  paymentDate,
  initiationDate,
  onImportClick,
  onClearClick,
  onCloseClick,
}) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <header className="bg-blue-500 text-white p-4 rounded-t-md">
        <h1 className="text-lg">給与データ取込</h1>
      </header>
      
      <div className="bg-gray-100 p-6">
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span>会計区分:</span>
            <input 
              type="text" 
              value={accountTypeCode} 
              className="border p-1 text-center w-8" 
              readOnly 
            />
            <span>{accountTypeName}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="mb-2">
            <span>支給日:</span> <span className="border-b">{paymentDate}</span>
          </div>
          <div>
            <span>起案日:</span> <span className="border-b">{initiationDate}</span>
          </div>
        </div>

        <button 
          className="bg-gray-300 text-black px-4 py-2 rounded mb-4" 
          onClick={onImportClick}
        >
          給与データ取込み
        </button>

        <div className="border-t border-gray-300 py-4">
          <h2 className="font-bold mb-2">処理概要</h2>
          <p>
            支給日とファイル日付が同じ給与支給データを対象にして、給与データの取込みをします。
            決定データの起案日は、画面で登録した起案日となります。
          </p>
        </div>
      </div>
      
      <footer className="flex justify-end space-x-3 p-4 bg-gray-200 rounded-b-md">
        <button 
          className="bg-gray-300 text-black px-4 py-2 rounded" 
          onClick={onClearClick}
        >
          クリア
        </button>
        <button 
          className="bg-gray-300 text-black px-4 py-2 rounded" 
          onClick={onCloseClick}
        >
          終了
        </button>
      </footer>
    </div>
  );
};

export default KyuuyoDataImport;
```