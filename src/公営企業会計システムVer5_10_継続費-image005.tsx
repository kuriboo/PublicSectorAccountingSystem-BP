import React from 'react';

type Props = {
  baseYear?: string;
  startCode?: string;
  endCode?: string;
  onExport?: () => void;
  onClear?: () => void;
  onExit?: () => void;
};

const CalculationComponent: React.FC<Props> = ({
  baseYear = '平成29',
  startCode = '00',
  endCode = '99',
  onExport,
  onClear,
  onExit
}) => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">継続費繰越計算書</h1>
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <label className="mr-2">基準年度</label>
          <select value={baseYear} className="border px-2 py-1">
            {/* Options can be populated dynamically */}
            <option value="平成29">平成29</option>
          </select>
          <span className="ml-2">年度</span>
        </div>

        <div className="flex items-center">
          <label className="mr-2">事業コード</label>
          <input
            type="text"
            value={startCode}
            className="border px-2 py-1 w-16"
          />
          <span className="mx-2">〜</span>
          <input
            type="text"
            value={endCode}
            className="border px-2 py-1 w-16"
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={onExport}
        >
          CSV出力
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default CalculationComponent;