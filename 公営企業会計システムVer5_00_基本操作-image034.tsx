```tsx
// components/Calendar.tsx
import React from 'react';

// 型定義
interface CalendarProps {
  year: number;
  month: number;
  selectedDate?: number;
  onDateSelect?: (date: number) => void;
}

const Calendar: React.FC<CalendarProps> = ({ year, month, selectedDate, onDateSelect }) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  
  // 日付の配列を生成
  const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="border p-4 max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <button className="text-sm">{'<'}</button>
        <span>{`${year}年${month}月`}</span>
        <button className="text-sm">{'>'}</button>
      </div>
      <table className="w-full text-center">
        <thead>
          <tr>
            {['日', '月', '火', '水', '木', '金', '土'].map(day => (
              <th key={day} className="p-1">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {dates.map(date => (
              <td key={date} className={`p-2 ${selectedDate === date ? 'border bg-blue-200' : ''}`}>
                <button onClick={() => onDateSelect && onDateSelect(date)}>
                  {date}
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className="flex items-center mt-2">
        <input type="checkbox" id="today" className="mr-2" />
        <label htmlFor="today">今日: {new Date().toLocaleDateString()}</label>
      </div>
    </div>
  );
};

export default Calendar;
```