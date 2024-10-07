// CalendarComponent.tsx
import React, { FC } from 'react';

// 型定義
type CalendarComponentProps = {
  yearOptions: string[];
  selectedYear: string;
  onYearChange: (year: string) => void;
  checkedGroups: string[];
  onGroupChange: (group: string) => void;
  checkedDays: string[];
  onDayChange: (day: string) => void;
  holidayOption: string;
  onHolidayOptionChange: (option: string) => void;
  onCreate: () => void;
  onDelete: () => void;
};

const CalendarComponent: FC<CalendarComponentProps> = ({
  yearOptions,
  selectedYear,
  onYearChange,
  checkedGroups,
  onGroupChange,
  checkedDays,
  onDayChange,
  holidayOption,
  onHolidayOptionChange,
  onCreate,
  onDelete,
}) => {
  return (
    <div className="p-4">
      <div className="bg-purple-200 p-2 mb-4">
        <h1 className="text-lg font-bold">カレンダー</h1>
      </div>

      <div className="mb-4">
        <label htmlFor="year" className="block mb-2">
          年度:
        </label>
        <select
          id="year"
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
          className="border p-2"
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <h2 className="font-bold">団体</h2>
        <label>
          <input
            type="checkbox"
            value="行政市水道部料企課"
            checked={checkedGroups.includes('行政市水道部料企課')}
            onChange={() => onGroupChange('行政市水道部料企課')}
            className="mr-2"
          />
          行政市水道部料企課
        </label>
        <label className="ml-4">
          <input
            type="checkbox"
            value="指定金融機関"
            checked={checkedGroups.includes('指定金融機関')}
            onChange={() => onGroupChange('指定金融機関')}
            className="mr-2"
          />
          指定金融機関
        </label>
      </div>

      <div className="mb-4">
        <h2 className="font-bold">休日指定</h2>
        <div className="flex">
          {['月', '火', '水', '木', '金', '土', '日'].map((day) => (
            <label key={day} className="mr-4">
              <input
                type="checkbox"
                value={day}
                checked={checkedDays.includes(day)}
                onChange={() => onDayChange(day)}
                className="mr-2"
              />
              {day}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-bold">祝日指定</h2>
        <div>
          {['個別設定', 'クリア', 'コピー', 'CSV取り込み'].map((option) => (
            <label key={option} className="block">
              <input
                type="radio"
                value={option}
                checked={holidayOption === option}
                onChange={() => onHolidayOptionChange(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <button onClick={onCreate} className="bg-blue-500 text-white py-2 px-4 rounded">
          作成
        </button>
        <button onClick={onDelete} className="bg-red-500 text-white py-2 px-4 rounded">
          削除
        </button>
      </div>
    </div>
  );
};

export default CalendarComponent;
