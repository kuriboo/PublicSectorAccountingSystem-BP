import React from 'react';

type ComparisonFormProps = {
  startYear?: string;
  endYear?: string;
  startSectionCode?: string;
  endSectionCode?: string;
  onOK?: () => void;
  onClear?: () => void;
  onExit?: () => void;
};

const ComparisonForm: React.FC<ComparisonFormProps> = ({
  startYear = "平成29",
  endYear = "",
  startSectionCode = "0000000",
  endSectionCode = "999999999",
  onOK,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-6 bg-white border rounded shadow-md w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold text-blue-700 mb-4">比較貸借対照表</h2>
      <div className="mb-4">
        <h3 className="text-md font-semibold text-blue-700">範囲指定</h3>
        <div className="flex space-x-2 mt-2">
          <label className="flex items-center space-x-1">
            <span>作表年度</span>
            <input
              type="text"
              value={startYear}
              className="border rounded px-2 py-1 text-sm w-20"
              readOnly
            />
            <span>年度</span>
          </label>
        </div>
        <div className="flex space-x-2 mt-2">
          <label className="flex items-center space-x-1">
            <span>節コード</span>
            <input
              type="text"
              value={startSectionCode}
              className="border rounded px-2 py-1 text-sm w-24"
              readOnly
            />
            <span>～</span>
          </label>
          <label className="flex items-center space-x-1">
            <span>節コード</span>
            <input
              type="text"
              value={endSectionCode}
              className="border rounded px-2 py-1 text-sm w-24"
              readOnly
            />
          </label>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-md font-semibold text-blue-700">処理概要</h3>
        <p className="mt-2 text-sm">
          過去4年分の金額と構成比率を算出した B/S科目の比較表を税込金額で作成します。
        </p>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onOK}
          className="bg-gray-200 px-4 py-2 rounded shadow hover:bg-gray-300"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-200 px-4 py-2 rounded shadow hover:bg-gray-300"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-gray-200 px-4 py-2 rounded shadow hover:bg-gray-300"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ComparisonForm;