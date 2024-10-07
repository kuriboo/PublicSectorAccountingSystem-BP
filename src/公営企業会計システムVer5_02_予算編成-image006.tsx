// components/NewFiscalYearCSVExport.tsx
import React from 'react';

interface NewFiscalYearCSVExportProps {
  fiscalYear: string;
  startRange: string;
  endRange: string;
  onCSVExport: () => void;
  onClear: () => void;
  onExit: () => void;
}

const NewFiscalYearCSVExport: React.FC<NewFiscalYearCSVExportProps> = ({
  fiscalYear,
  startRange,
  endRange,
  onCSVExport,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">新年度予算科目CSV出力</h1>
      
      <div className="flex mb-6">
        <div className="mr-4">
          <label className="font-semibold">新年度</label>
          <input
            type="text"
            value={fiscalYear}
            readOnly
            className="ml-2 p-1 border border-gray-300"
          />
        </div>
      </div>

      <div className="mb-6 border border-gray-300 p-4">
        <h2 className="font-semibold mb-2">範囲指定</h2>
        <div className="flex items-center">
          <label className="mr-2">所属</label>
          <input
            type="text"
            value={startRange}
            readOnly
            className="mr-2 p-1 border border-gray-300"
          />
          <span>〜</span>
          <input
            type="text"
            value={endRange}
            readOnly
            className="ml-2 p-1 border border-gray-300"
          />
          <label className="ml-2">所属</label>
        </div>
      </div>

      <div className="mb-6 border border-gray-300 p-4">
        <h2 className="font-semibold mb-2">処理概要</h2>
        <p>
          新年度の当初予算データをExcelで入力するための、予算科目の一覧をCSVファイルで出力します。 出力したCSVファイルは、「予算積算基礎入力用シート」で使用します。
        </p>
      </div>

      <div className="flex space-x-4">
        <button onClick={onCSVExport} className="px-4 py-2 bg-blue-500 text-white rounded">CSV出力</button>
        <button onClick={onClear} className="px-4 py-2 bg-yellow-500 text-white rounded">クリア</button>
        <button onClick={onExit} className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default NewFiscalYearCSVExport;