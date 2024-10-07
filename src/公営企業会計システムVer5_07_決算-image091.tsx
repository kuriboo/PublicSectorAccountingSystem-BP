import React from 'react';
import 'tailwindcss/tailwind.css';

type KessanReportProps = {
  startDate: string;
  endDate: string;
  startBudgetCode: string;
  endBudgetCode: string;
  printDetails: boolean;
  taxCategory: 'inclusive' | 'exclusive';
  onExcelExport: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
};

const KessanReport: React.FC<KessanReportProps> = ({
  startDate,
  endDate,
  startBudgetCode,
  endBudgetCode,
  printDetails,
  taxCategory,
  onExcelExport,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h1 className="text-lg font-bold text-blue-800 mb-4">決算報告明細書</h1>
      <div className="mb-4">
        <h2 className="font-medium">範囲指定</h2>
        <div className="flex space-x-4 my-2">
          <div>
            <label>作表日付</label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={startDate}
                readOnly
                className="border p-1"
              />
              <span>～</span>
              <input
                type="text"
                value={endDate}
                readOnly
                className="border p-1"
              />
            </div>
          </div>
          <div>
            <label>予算科目</label>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={startBudgetCode}
                readOnly
                className="border p-1"
              />
              <span>～</span>
              <input
                type="text"
                value={endBudgetCode}
                readOnly
                className="border p-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex space-x-4">
          <div>
            <span>細節印字</span>
            <label className="ml-2">
              <input
                type="radio"
                checked={printDetails}
                readOnly
              />
              あり
            </label>
            <label className="ml-2">
              <input
                type="radio"
                checked={!printDetails}
                readOnly
              />
              なし
            </label>
          </div>
          <div>
            <span>集計区分</span>
            <label className="ml-2">
              <input
                type="radio"
                checked={taxCategory === 'inclusive'}
                readOnly
              />
              税込
            </label>
            <label className="ml-2">
              <input
                type="radio"
                checked={taxCategory === 'exclusive'}
                readOnly
              />
              税抜
            </label>
          </div>
        </div>
      </div>
      <div className="mt-6 flex space-x-4">
        <button onClick={onExcelExport} className="bg-gray-200 p-2 rounded">Excel出力</button>
        <button onClick={onOk} className="bg-gray-200 p-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-200 p-2 rounded">クリア</button>
        <button onClick={onClose} className="bg-gray-200 p-2 rounded">終了</button>
      </div>
    </div>
  );
}

export default KessanReport;
```