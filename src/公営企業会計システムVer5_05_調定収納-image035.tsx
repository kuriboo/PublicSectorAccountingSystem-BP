// components/DateRangeSelector.tsx
import React from 'react';
import { format } from 'date-fns';
import ja from 'date-fns/locale/ja';

// Type definitions for component props
interface DateRangeSelectorProps {
  startDate: Date;
  endDate: Date;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  // Format date to Japanese era format (Heisei)
  const formatDate = (date: Date) => format(date, 'GGGGy年MM月dd日', { locale: ja });

  return (
    <div className="p-4 border rounded-md shadow-sm bg-gray-100 w-full max-w-md">
      <div className="text-lg font-bold mb-2">範囲指定</div>
      <div className="flex items-center mb-4">
        <label className="mr-2">収納日</label>
        <input
          type="date"
          value={format(startDate, 'yyyy-MM-dd')}
          onChange={(e) => onStartDateChange(new Date(e.target.value))}
          className="border border-gray-300 rounded p-1"
        />
        <span className="mx-2">〜</span>
        <input
          type="date"
          value={format(endDate, 'yyyy-MM-dd')}
          onChange={(e) => onEndDateChange(new Date(e.target.value))}
          className="border border-gray-300 rounded p-1"
        />
      </div>
      <div className="text-blue-700">
        {formatDate(startDate)} 〜 {formatDate(endDate)}
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">クリア</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">終了</button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">OK</button>
      </div>
    </div>
  );
};

export default DateRangeSelector;
```