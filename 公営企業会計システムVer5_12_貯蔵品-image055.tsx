```tsx
import React from 'react';

// 型定義
type DateRangeProps = {
  startDate: string;
  endDate: string;
  onChange: (startDate: string, endDate: string) => void;
};

const DateRangeInput: React.FC<DateRangeProps> = ({ startDate, endDate, onChange }) => {
  return (
    <div className="flex space-x-2">
      <input
        type="text"
        value={startDate}
        onChange={(e) => onChange(e.target.value, endDate)}
        className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span>〜</span>
      <input
        type="text"
        value={endDate}
        onChange={(e) => onChange(startDate, e.target.value)}
        className="border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

// 主なコンポーネント型定義
type ReportFormProps = {
  initialStartDate: string;
  initialEndDate: string;
};

const ReportForm: React.FC<ReportFormProps> = ({ initialStartDate, initialEndDate }) => {
  const [startDate, setStartDate] = React.useState(initialStartDate);
  const [endDate, setEndDate] = React.useState(initialEndDate);

  const handleDateChange = (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-xl font-bold mb-4">入出庫合計表作成</h1>
      <div className="mb-4">
        <h2 className="font-semibold">入出庫合計表範囲入力</h2>
        <div className="mb-2">
          <button className="bg-blue-500 text-white py-1 px-2 rounded">決裁区分</button>
        </div>
        <div className="border p-2">
          <label className="block mb-2">入出庫年月</label>
          <DateRangeInput startDate={startDate} endDate={endDate} onChange={handleDateChange} />
        </div>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold">出力区分</h2>
        <div className="border p-2">
          <div className="flex items-center space-x-2">
            <input type="radio" name="outputType" id="shozoku" />
            <label htmlFor="shozoku">所属別</label>
            <input type="radio" name="outputType" id="zenta" />
            <label htmlFor="zenta">全体</label>
            <input type="radio" name="outputType" id="kankyobetsu" />
            <label htmlFor="kankyobetsu">保管場所別</label>
          </div>
          <DateRangeInput startDate={startDate} endDate={endDate} onChange={handleDateChange} />
        </div>
      </div>
      <div className="flex space-x-2">
        <button className="bg-gray-300 text-black py-1 px-4 rounded">OK</button>
        <button className="bg-gray-300 text-black py-1 px-4 rounded">クリア</button>
        <button className="bg-gray-300 text-black py-1 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default ReportForm;
```