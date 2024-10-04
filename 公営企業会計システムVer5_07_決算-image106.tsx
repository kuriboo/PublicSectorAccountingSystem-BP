import React from 'react';

// TypeScriptの型定義
interface CalculationSheetProps {
  fiscalYear: string;
  taxPeriodStart: string;
  taxPeriodEnd: string;
  calculationMethod: string;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
}

const CalculationSheet: React.FC<CalculationSheetProps> = ({
  fiscalYear,
  taxPeriodStart,
  taxPeriodEnd,
  calculationMethod,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-gray-100">
      {/* タイトル */}
      <div className="text-xl font-bold text-white bg-purple-500 p-2 rounded">
        調整後税額の計算表(計算表5)
      </div>

      {/* 範囲指定 */}
      <div className="mt-4 border p-2 bg-white rounded">
        <h2 className="font-bold text-blue-700">範囲指定</h2>
        <div className="mt-2">
          <span className="font-semibold">会計年度:</span>
          <span className="ml-2">{fiscalYear}年度</span>
        </div>
        <div className="mt-2">
          <span className="font-semibold">課税期間:</span>
          <span className="ml-2">{taxPeriodStart}</span>
          <span className="mx-2">〜</span>
          <span>{taxPeriodEnd}</span>
        </div>
      </div>

      {/* 計算方法 */}
      <div className="mt-4 border p-2 bg-white rounded">
        <h2 className="font-bold text-blue-700">計算方法</h2>
        <div className="mt-2">
          <span className="font-semibold">仕入控除税額計算:</span>
          <span className="ml-2">{calculationMethod}</span>
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end mt-4 gap-2">
        <button 
          className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded"
          onClick={onExit}
        >
          終了
        </button>
        <button 
          className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded"
          onClick={onOk}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CalculationSheet;