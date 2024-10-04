```tsx
import React from 'react';

// 型定義
interface ComparisonReportProps {
  fiscalYear: number;
  objectType: '全体' | '範囲指定';
  startCode: string;
  endCode: string;
  onOk: () => void;
  onClear: () => void;
  onFinish: () => void;
}

const ComparisonReport: React.FC<ComparisonReportProps> = ({
  fiscalYear,
  objectType,
  startCode,
  endCode,
  onOk,
  onClear,
  onFinish
}) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">比較損益計算書</h2>

      <div className="border p-4 mb-4">
        <h3 className="font-semibold mb-2">範囲指定</h3>
        
        <div className="flex items-center mb-2">
          <span className="mr-2">作表年度</span>
          <span className="border px-2 py-1">{`平成${fiscalYear}`}</span>
        </div>

        <div className="flex items-center mb-2">
          <span className="mr-2">作成対象</span>
          <span className="mr-2">{objectType}</span>
        </div>

        <div className="flex items-center">
          <span className="mr-2">節コード</span>
          <input 
            type="text" 
            value={startCode}
            className="border px-2 py-1 mr-2"
            readOnly
          />
          <span className="mr-2">~</span>
          <input 
            type="text" 
            value={endCode}
            className="border px-2 py-1"
            readOnly
          />
        </div>
      </div>

      <div className="border p-4">
        <h3 className="font-semibold mb-2">処理概要</h3>
        <p className="text-sm mb-2">
          過去4年分の金額と構成比率を算出した収益費目の比較表を税抜金額で作成します。
        </p>
        <ul className="list-disc list-inside text-sm">
          <li>作表対象を全体とした場合、作表年度に執行していない科目も出力対象とします。</li>
          <li>作表対象を範囲指定とした場合、作表年度に執行している科目のみを出力対象とします。</li>
        </ul>
      </div>

      <div className="flex justify-end space-x-2 mt-4">
        <button 
          onClick={onOk} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          クリア
        </button>
        <button 
          onClick={onFinish} 
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
}

export default ComparisonReport;
```