```tsx
import React, { useState } from 'react';

// TypeScript types for props
type ReportComponentProps = {
  startDate: string;
  endDate: string;
  onCsvExport: () => void;
  onClear: () => void;
  onExit: () => void;
};

// React component using Tailwind CSS
const ReportComponent: React.FC<ReportComponentProps> = ({
  startDate,
  endDate,
  onCsvExport,
  onClear,
  onExit,
}) => {
  const [target, setTarget] = useState<string>('全体');

  return (
    <div className="p-4 border shadow bg-white">
      <div className="text-lg font-bold text-blue-800 mb-4">月次損益計算書</div>
      <div className="mb-4">
        <span className="font-bold">範囲指定</span>
      </div>
      <div className="mb-4">
        <label className="font-bold">作表日</label>
        <div className="flex items-center">
          <span className="mr-2">{startDate}</span>
          <span>~</span>
          <span className="ml-2">{endDate}</span>
        </div>
      </div>
      <div className="mb-4">
        <div className="font-bold">集計対象</div>
        <div className="flex items-center">
          <label className="mr-4">
            <input
              type="radio"
              value="全体"
              checked={target === '全体'}
              onChange={(e) => setTarget(e.target.value)}
              className="mr-1"
            />
            全体
          </label>
          <label className="mr-4">
            <input
              type="radio"
              value="ブロック"
              checked={target === 'ブロック'}
              onChange={(e) => setTarget(e.target.value)}
              className="mr-1"
            />
            ブロック
          </label>
          <label>
            <input
              type="radio"
              value="セグメント"
              checked={target === 'セグメント'}
              onChange={(e) => setTarget(e.target.value)}
              className="mr-1"
            />
            セグメント
          </label>
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={onCsvExport}
          className="px-4 py-2 bg-gray-200 border rounded"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-200 border rounded"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="px-4 py-2 bg-gray-200 border rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportComponent;
```