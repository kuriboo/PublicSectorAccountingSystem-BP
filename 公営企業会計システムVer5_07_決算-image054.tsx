```tsx
import React from 'react';

// Props type definition
interface KeisanHoukokuProps {
  title: string;
  dateRange: { start: string; end: string };
  budgetRange: { start: string; end: string };
  isDetailed: boolean;
  taxInclusive: boolean;
  onExport: () => void;
  onClear: () => void;
  onClose: () => void;
}

const KeisanHoukokuComponent: React.FC<KeisanHoukokuProps> = ({
  title,
  dateRange,
  budgetRange,
  isDetailed,
  taxInclusive,
  onExport,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 shadow border rounded-lg">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="mb-4">
        <label>作表日付: </label>
        <span className="ml-2">{dateRange.start} ～ {dateRange.end}</span>
      </div>
      <div className="mb-4">
        <label>予算科目: </label>
        <span className="ml-2">{budgetRange.start} ～ {budgetRange.end}</span>
      </div>
      <div className="mb-4">
        <label>細節印字: </label>
        <span className="ml-2">{isDetailed ? 'あり' : 'なし'}</span>
      </div>
      <div className="mb-4">
        <label>集計区分: </label>
        <span className="ml-2">{taxInclusive ? '税込' : '税抜'}</span>
      </div>
      <div className="flex space-x-4">
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onExport}>Excel出力</button>
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClear}>クリア</button>
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>終了</button>
      </div>
    </div>
  );
};

export default KeisanHoukokuComponent;
```