```tsx
import React from 'react';

// TypeScriptの型定義
type DateRangeSelectorProps = {
  startDate: string;
  endDate: string;
  onDateChange: (startDate: string, endDate: string) => void;
  partnerFrom: string;
  partnerTo: string;
  onPartnerChange: (partnerFrom: string, partnerTo: string) => void;
  showUnresolvedOnly: boolean;
  onShowUnresolvedOnlyChange: (value: boolean) => void;
  onOk: () => void;
  onClear: () => void;
  onEnd: () => void;
};

// Next.js + TypeScriptコンポーネント
const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  startDate,
  endDate,
  onDateChange,
  partnerFrom,
  partnerTo,
  onPartnerChange,
  showUnresolvedOnly,
  onShowUnresolvedOnlyChange,
  onOk,
  onClear,
  onEnd
}) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded">
      <h2 className="text-gray-700 text-lg mb-4">範囲指定</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700">処理年月日</label>
        <input 
          type="text" 
          value={startDate} 
          onChange={(e) => onDateChange(e.target.value, endDate)}
          className="border p-2 rounded mr-2"
        />
        <span>~</span>
        <input 
          type="text" 
          value={endDate} 
          onChange={(e) => onDateChange(startDate, e.target.value)}
          className="border p-2 rounded ml-2"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">相手先</label>
        <input 
          type="text" 
          value={partnerFrom} 
          onChange={(e) => onPartnerChange(e.target.value, partnerTo)}
          className="border p-2 rounded mr-2"
        />
        <span>~</span>
        <input 
          type="text" 
          value={partnerTo} 
          onChange={(e) => onPartnerChange(partnerFrom, e.target.value)}
          className="border p-2 rounded ml-2"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">作表区分</label>
        <label className="flex items-center">
          <input 
            type="radio" 
            checked={showUnresolvedOnly} 
            onChange={() => onShowUnresolvedOnlyChange(true)} 
          />
          <span className="ml-2">未決定負担のみ</span>
        </label>
        <label className="flex items-center">
          <input 
            type="radio" 
            checked={!showUnresolvedOnly} 
            onChange={() => onShowUnresolvedOnlyChange(false)} 
          />
          <span className="ml-2">すべて</span>
        </label>
      </div>
      
      <div className="flex justify-end">
        <button className="bg-purple-500 text-white p-2 rounded mr-2" onClick={onOk}>OK</button>
        <button className="bg-gray-300 text-black p-2 rounded mr-2" onClick={onClear}>クリア</button>
        <button className="bg-red-500 text-white p-2 rounded" onClick={onEnd}>終了</button>
      </div>
    </div>
  );
};

export default DateRangeSelector;
```