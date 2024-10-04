```tsx
import React from 'react';

// TypeScript interface for the component props
interface TaxFormProps {
  startDate: string;
  endDate: string;
  budgetStart: number;
  budgetEnd: number;
  segmentType: '全体' | 'ブロック' | 'セグメント';
  onExportCSV: () => void;
  onClear: () => void;
  onExit: () => void;
}

// Reusable component using Tailwind CSS for styling
const TaxForm: React.FC<TaxFormProps> = ({
  startDate,
  endDate,
  budgetStart,
  budgetEnd,
  segmentType,
  onExportCSV,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">範囲指定</h2>
      <div className="mb-4">
        <label className="block font-medium">
          作表年月
          <div className="flex items-center space-x-2">
            <input type="text" value={startDate} readOnly className="border rounded p-1"/>
            <span>～</span>
            <input type="text" value={endDate} readOnly className="border rounded p-1"/>
          </div>
        </label>
        <label className="block font-medium mt-2">
          予算科目
          <div className="flex items-center space-x-2">
            <input type="number" value={budgetStart} readOnly className="border rounded p-1"/>
            <span>～</span>
            <input type="number" value={budgetEnd} readOnly className="border rounded p-1"/>
          </div>
        </label>
      </div>
      <div className="mb-4">
        <h3 className="font-medium">集計対象</h3>
        <div className="flex items-center space-x-3">
          <input type="radio" id="zenkai" name="segment" checked={segmentType === '全体'} readOnly/>
          <label htmlFor="zenkai">全体</label>
          <input type="radio" id="burokku" name="segment" checked={segmentType === 'ブロック'} readOnly/>
          <label htmlFor="burokku">ブロック</label>
          <input type="radio" id="segumento" name="segment" checked={segmentType === 'セグメント'} readOnly/>
          <label htmlFor="segumento">セグメント</label>
        </div>
      </div>
      <div className="flex space-x-2 mt-4">
        <button onClick={onExportCSV} className="bg-blue-500 text-white p-2 rounded">CSV出力</button>
        <button onClick={onClear} className="bg-gray-500 text-white p-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default TaxForm;
```