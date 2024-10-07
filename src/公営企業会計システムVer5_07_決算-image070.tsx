// Import necessary libraries
import React from 'react';

// Define TypeScript Props for the component
interface RevenueInputProps {
  year: string;
  sections: string[];
  subSections: string[];
  details: string[];
  entries: { month: string; revenue: number; }[];
  total: number;
  onSubmit: (data: { month: string; revenue: number; }) => void;
  onClear: () => void;
  onExit: () => void;
}

// Define the RevenueInput component
const RevenueInput: React.FC<RevenueInputProps> = ({
  year,
  sections,
  subSections,
  details,
  entries,
  total,
  onSubmit,
  onClear,
  onExit
}) => {
  // Internal state for form inputs
  const [month, setMonth] = React.useState('');
  const [revenue, setRevenue] = React.useState<number | ''>('');

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <h1 className="text-xl font-bold">科目別特定収入額修正入力</h1>
        <div className="flex items-center space-x-4">
          <span className="font-semibold">会計年度:</span>
          <span>{year}年度</span>
        </div>
        <div className="flex space-x-4">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col">
              <span className="font-semibold">{section}</span>
            </div>
          ))}
        </div>
        <div>
          {subSections.map((subSection, index) => (
            <span key={index}>{subSection}</span>
          ))}
        </div>
        <div>
          {details.map((detail, index) => (
            <span key={index}>{detail}</span>
          ))}
        </div>
      </div>

      <table className="table-auto w-full mb-4 border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border p-2">集計月</th>
            <th className="border p-2">特定収入額</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="border p-2">{entry.month}</td>
              <td className="border p-2">{entry.revenue.toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mb-4">
        <span>合計額: {total.toLocaleString()}円</span>
      </div>

      <div className="mb-4">
        <h2 className="font-bold mb-2">月別特定収入額入力</h2>
        <div className="flex space-x-2 mb-2">
          <label className="font-semibold">集計月</label>
          <input
            type="text"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="border p-1 rounded"
          />
        </div>
        <div className="flex space-x-2">
          <label className="font-semibold">特定収入額</label>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value ? parseInt(e.target.value) : '')}
            className="border p-1 rounded"
          />
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => onSubmit({ month, revenue: revenue || 0 })}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          行確定
        </button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default RevenueInput;
```