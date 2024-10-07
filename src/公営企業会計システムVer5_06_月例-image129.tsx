import React from 'react';

// TypeScript types for the component props
interface StatementProps {
  startDate: string;
  endDate: string;
  locationStart: string;
  locationEnd: string;
  budgetStart: string;
  budgetEnd: string;
  taxRate: number;
  isTaxReduced: boolean;
  targetGroup: '全体' | 'ブロック' | 'セグメント';
  onCsvOutput: () => void;
  onClear: () => void;
  onFinish: () => void;
}

const StatementComponent: React.FC<StatementProps> = ({
  startDate,
  endDate,
  locationStart,
  locationEnd,
  budgetStart,
  budgetEnd,
  taxRate,
  isTaxReduced,
  targetGroup,
  onCsvOutput,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">消費税計算明細書</h2>
      
      <div className="mb-4">
        <label className="mr-2">伝票日付:</label>
        <input type="date" value={startDate} className="border p-1 mr-2"/>
        <input type="date" value={endDate} className="border p-1"/>
      </div>
      
      <div className="mb-4">
        <label className="mr-2">所属:</label>
        <input type="text" value={locationStart} className="border p-1 mr-2 w-20"/>
        <input type="text" value={locationEnd} className="border p-1 w-20"/>
      </div>

      <div className="mb-4">
        <label className="mr-2">予算科目:</label>
        <input type="text" value={budgetStart} className="border p-1 mr-2 w-20"/>
        <input type="text" value={budgetEnd} className="border p-1 w-20"/>
      </div>
      
      <div className="mb-4">
        <label className="mr-2">税率:</label>
        <input type="number" value={taxRate} className="border p-1 w-12 mr-2"/>%
        <input type="checkbox" checked={isTaxReduced} className="ml-2"/> 軽減税率
      </div>
      
      <div className="mb-4">
        <label>集計対象:</label>
        <div>
          <input type="radio" checked={targetGroup === '全体'} className="mr-1"/>全体
          <input type="radio" checked={targetGroup === 'ブロック'} className="mr-1 ml-2"/>ブロック
          <input type="radio" checked={targetGroup === 'セグメント'} className="mr-1 ml-2"/>セグメント
        </div>
      </div>
      
      <div className="flex space-x-4 mt-4">
        <button onClick={onCsvOutput} className="px-4 py-2 bg-gray-300 rounded">CSV出力</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded">クリア</button>
        <button onClick={onFinish} className="px-4 py-2 bg-gray-300 rounded">終了</button>
      </div>
    </div>
  );
};

export default StatementComponent;
