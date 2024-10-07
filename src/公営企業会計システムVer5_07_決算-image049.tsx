import React from 'react';

type KeieiBunsekiProps = {
  reportDate: string;
  startCode: string;
  endCode: string;
  summaryDate: string;
  onCsvExport: () => void;
  onClear: () => void;
  onOk: () => void;
  onExit: () => void;
};

const KeieiBunseki: React.FC<KeieiBunsekiProps> = ({
  reportDate,
  startCode,
  endCode,
  summaryDate,
  onCsvExport,
  onClear,
  onOk,
  onExit,
}) => {
  return (
    <div className="p-4 space-y-4 border-2 rounded-md shadow-md">
      {/* Header */}
      <h2 className="text-2xl font-bold text-purple-700">経営分析表</h2>

      {/* Range Specification */}
      <div className="border p-4 rounded-md">
        <h3 className="font-semibold text-purple-700">範囲指定</h3>
        <div className="mt-2">
          <div className="flex items-center justify-between">
            <span>作表日</span>
            <span>{reportDate}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span>分析コード</span>
            <div className="flex">
              <input
                type="text"
                value={startCode}
                disabled
                className="border p-1 mr-2 w-16 text-center"
              />
              <span>~</span>
              <input
                type="text"
                value={endCode}
                disabled
                className="border p-1 ml-2 w-16 text-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="border p-4 rounded-md">
        <h3 className="font-semibold text-purple-700">処理概要</h3>
        <p className="mt-2">経営分析表を作成します。</p>
        <p className="mt-2">集計日時: {summaryDate}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <button
          onClick={onCsvExport}
          className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
        >
          CSV出力
        </button>
        <button
          onClick={onOk}
          className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default KeieiBunseki;
