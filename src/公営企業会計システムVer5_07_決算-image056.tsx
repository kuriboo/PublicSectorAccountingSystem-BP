import React from 'react';

// 型定義
interface FiscalPeriodProps {
  fiscalYear: string;
  periodStart: string;
  periodEnd: string;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

const FiscalPeriodComponent: React.FC<FiscalPeriodProps> = ({
  fiscalYear,
  periodStart,
  periodEnd,
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-lg font-bold text-blue-800">調整前課税仕入等税額算出表</h1>
      <div className="mt-6">
        <div className="bg-white p-4 shadow-md">
          <div className="mb-2 font-bold text-blue-900">範囲指定</div>
          <div className="flex items-center">
            <label className="mr-2">会計年度</label>
            <input
              type="text"
              value={fiscalYear}
              className="border rounded p-1 mr-4"
              readOnly
            />
            <span className="mr-4">〜</span>
            <label className="mr-2">課税期間</label>
            <input
              type="text"
              value={periodStart}
              className="border rounded p-1 mr-2"
              readOnly
            />
            <span className="mr-2">〜</span>
            <input
              type="text"
              value={periodEnd}
              className="border rounded p-1"
              readOnly
            />
          </div>
          <div className="mt-6 flex justify-end space-x-2">
            <button
              onClick={onOk}
              className="bg-gray-300 rounded px-4 py-2"
            >
              OK
            </button>
            <button
              onClick={onClear}
              className="bg-gray-300 rounded px-4 py-2"
            >
              クリア
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 rounded px-4 py-2"
            >
              終了
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiscalPeriodComponent;
```