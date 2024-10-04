```tsx
import React from 'react';

// Props type definition
type YearUpdateProps = {
  currentFiscalYear: string;
  nextFiscalYear: string;
  date: string;
  onConfirm: () => void;
  onCancel: () => void;
};

// YearUpdate component
const YearUpdate: React.FC<YearUpdateProps> = ({
  currentFiscalYear,
  nextFiscalYear,
  date,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-100 border rounded-md">
      {/* Header Section */}
      <header className="bg-blue-200 p-2 rounded-t-md">
        <h1 className="text-lg font-bold text-blue-900">年次更新</h1>
      </header>

      {/* Main Content */}
      <div className="p-4">
        <div className="mb-4">
          <div className="flex justify-between">
            <span>当期会計年度</span>
            <span>{currentFiscalYear}</span>
          </div>
          <div className="flex justify-between">
            <span>次期会計年度</span>
            <span>{nextFiscalYear}</span>
          </div>
        </div>

        <div className="bg-white p-4 border">
          <h2 className="text-md font-bold text-gray-800 mb-2">処理概要</h2>
          <p>
            {currentFiscalYear}年度から{nextFiscalYear}年度へ処理会計年度を更新します。
            借越計算処理終了後に実行して下さい。
          </p>
          <p className="mt-2">
            この処理を行うと{currentFiscalYear}年度の固定資産明細表等の出力はできません。
            決算処理終了後に実行して下さい。
          </p>
        </div>
      </div>

      {/* Footer Buttons */}
      <footer className="flex justify-end p-2 bg-gray-200 rounded-b-md">
        <button
          className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded"
          onClick={onCancel}
        >
          終了
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onConfirm}
        >
          OK
        </button>
      </footer>
    </div>
  );
};

export default YearUpdate;
```