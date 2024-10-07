import React from 'react';

// Props interface for the component
interface CalculationComponentProps {
  years: number;
  data: { year: string; count: number }[];
  totalCount: number;
  message: string;
}

// Functional component with Tailwind CSS for styling
const CalculationComponent: React.FC<CalculationComponentProps> = ({
  years,
  data,
  totalCount,
  message,
}) => {
  return (
    <div className="p-4 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">予測償却計算</h1>

      {/* Calculation Years */}
      <div className="mb-6">
        <label className="block text-gray-700">償却計算年数</label>
        <span className="text-blue-500 text-lg">{years} 年分</span>
      </div>

      {/* Data Table */}
      <table className="table-auto w-full mb-6">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="px-4 py-2">償却年月</th>
            <th className="px-4 py-2">更新件数</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="odd:bg-blue-100 even:bg-white">
              <td className="border px-4 py-2">{item.year}</td>
              <td className="border px-4 py-2 text-right">{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Count */}
      <div className="mb-6">
        <span className="text-gray-800">更新総件数</span><br />
        <span className="text-2xl text-blue-500">{totalCount.toLocaleString()}</span>
      </div>

      {/* Message */}
      <div className="p-4 bg-gray-100 border border-gray-300 rounded">
        {message}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end space-x-2 mt-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          エラー確認
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          OK
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          クリア
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default CalculationComponent;
```