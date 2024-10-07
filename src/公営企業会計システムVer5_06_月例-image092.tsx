import React from 'react';

interface CashFlowComponentProps {
  yearMonth: string;
  segmentOptions: string[];
  onSegmentChange: (segment: string) => void;
  onYearMonthChange: (yearMonth: string) => void;
  onConfirm: () => void;
  onClear: () => void;
  onExit: () => void;
}

const CashFlowComponent: React.FC<CashFlowComponentProps> = ({
  yearMonth,
  segmentOptions,
  onSegmentChange,
  onYearMonthChange,
  onConfirm,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold text-blue-800 mb-4">キャッシュ・フロー 計算書集計</h1>
      <div className="border p-4 bg-white mb-4">
        <h2 className="font-semibold mb-2">範囲指定</h2>
        <div className="mb-4">
          <label className="block mb-1">集計年月</label>
          <input
            type="text"
            value={yearMonth}
            onChange={(e) => onYearMonthChange(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1">セグメント</label>
          <select
            onChange={(e) => onSegmentChange(e.target.value)}
            className="border p-2 w-full"
          >
            {segmentOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="border p-4 bg-white mb-4">
        <p>
          「キャッシュ・フロー計算書マスタ保守」の集計設定に基づいて、指定した集計年月までに発生した伝票を集計します。
          集計された伝票の一覧は「キャッシュ・フロー集計伝票CSV作成」画面でCSV出力することができます。
          また、「キャッシュ・フロー伝票集計先格入力」画面でも確認することができます。
          同画面では、手動で伝票を集計し加算・減算を行い、キャッシュ・フローの金額を調整することも可能です。
        </p>
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onConfirm} className="px-4 py-2 bg-blue-600 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-200 text-black rounded">
          クリア
        </button>
        <button onClick={onExit} className="px-4 py-2 bg-red-600 text-white rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default CashFlowComponent;
