import { useState } from 'react';

type CalendarProps = {
  year: number;
  onSelectDate: (date: string) => void;
};

const Calendar: React.FC<CalendarProps> = ({ year, onSelectDate }) => {
  const [selectedMonth, setSelectedMonth] = useState<number>(4);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [description, setDescription] = useState<string>('');
  const [dayType, setDayType] = useState<string>('weekday');

  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
    const selectedDate = `${year}/04/${String(day).padStart(2, '0')}`;
    onSelectDate(selectedDate);
  };

  return (
    <div className="p-4 border">
      {/* Year and Month Selection */}
      <div className="flex items-center mb-4">
        <span className="mr-2">令和{year}年</span>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
          className="border p-1"
        >
          <option value={4}>4</option>
          {/* Add more months as needed */}
        </select>
        <span className="ml-2">月</span>
      </div>

      {/* Calendar */}
      <table className="w-full mb-4 border">
        <thead>
          <tr>
            <th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Render days with placeholders for alignment */}
            {Array.from({ length: 30 }).map((_, index) => (
              <td
                key={index}
                className={`p-2 border ${selectedDay === index + 1 ? 'bg-blue-300' : ''}`}
                onClick={() => handleDaySelect(index + 1)}
              >
                {index + 1}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* Date Detail */}
      <div className="mb-4">
        <div className="mb-2">日付: 令和{year}年04月{selectedDay ?? '--'}日</div>
        <div className="mb-2">
          <span>区分:</span>
          <label className="ml-2">
            <input
              type="radio"
              name="dayType"
              checked={dayType === 'weekday'}
              onChange={() => setDayType('weekday')}
            />
            平日
          </label>
          <label className="ml-2">
            <input
              type="radio"
              name="dayType"
              checked={dayType === 'holiday'}
              onChange={() => setDayType('holiday')}
            />
            休日
          </label>
          <label className="ml-2">
            <input
              type="radio"
              name="dayType"
              checked={dayType === 'special'}
              onChange={() => setDayType('special')}
            />
            祝日
          </label>
        </div>
        <div className="mb-2">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="説明"
            className="w-full border p-1"
          />
        </div>
        <button className="border p-2 bg-gray-200">設定</button>
      </div>

      {/* Preset Dates */}
      <div className="flex justify-between">
        <div>
          <div className="font-bold mb-2">行政市水道部料金課</div>
          <ul className="list-disc pl-5">
            <li>2020/04/01</li>
            {/* Add more preset dates if needed */}
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">指定金融機関</div>
          <ul className="list-disc pl-5">
            <li>2020/04/02</li>
            {/* Add more preset dates if needed */}
          </ul>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="border p-2 bg-gray-200 mr-2">OK</button>
        <button className="border p-2 bg-gray-200">キャンセル</button>
      </div>
    </div>
  );
};

export default Calendar;
