import React from 'react';

type TableData = {
  date: string;
  responsibilityNumber: number;
  paymentType: string;
  amount: number;
  description: string;
};

type MyComponentProps = {
  title: string;
  tables: TableData[];
  onSearch: () => void;
};

const MyComponent: React.FC<MyComponentProps> = ({ title, tables, onSearch }) => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h1 className="text-lg font-semibold mb-4">{title}</h1>
      
      <div className="flex items-center mb-4">
        <input 
          type="text" 
          placeholder="検索"
          className="border rounded py-2 px-3 mr-2 flex-1"
        />
        <button 
          onClick={onSearch} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          表示
        </button>
      </div>
      
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">処理日</th>
            <th className="border px-4 py-2">負担番号</th>
            <th className="border px-4 py-2">支払種別</th>
            <th className="border px-4 py-2">負担額</th>
            <th className="border px-4 py-2">摘要</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row.date}</td>
              <td className="border px-4 py-2">{row.responsibilityNumber}</td>
              <td className="border px-4 py-2">{row.paymentType}</td>
              <td className="border px-4 py-2 text-right">{row.amount.toLocaleString()}</td>
              <td className="border px-4 py-2">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyComponent;
