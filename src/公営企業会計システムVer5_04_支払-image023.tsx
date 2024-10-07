// Import necessary libraries
import React from 'react';

// Define the type for the component's props
interface SummaryInputProps {
  title: string;
  year: string;
  summary: string;
  items: { id: number; name: string; spec: string; counterpart: string; amount: number; tax: number; date: string }[];
  totalAmount: number;
  totalTax: number;
  onAddRowClick: () => void;
  onDeleteRowClick: () => void;
  onOkClick: () => void;
  onClearClick: () => void;
}

// Create the component
const SummaryInput: React.FC<SummaryInputProps> = ({
  title,
  year,
  summary,
  items,
  totalAmount,
  totalTax,
  onAddRowClick,
  onDeleteRowClick,
  onOkClick,
  onClearClick
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Header */}
      <h2 className="text-lg font-bold">{title}</h2>

      {/* Year and Summary */}
      <div className="my-4">
        <div className="flex items-center">
          <span className="font-bold mr-2">年度:</span>
          <span>{year}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="font-bold mr-2">代表摘要:</span>
          <span>{summary}</span>
        </div>
      </div>

      {/* Items Table */}
      <table className="min-w-full bg-white shadow-md rounded my-6">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">伝票番号</th>
            <th className="py-2 px-4 border-b">名称</th>
            <th className="py-2 px-4 border-b">規格</th>
            <th className="py-2 px-4 border-b">相手先</th>
            <th className="py-2 px-4 border-b">金額</th>
            <th className="py-2 px-4 border-b">消費税</th>
            <th className="py-2 px-4 border-b">支払日</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.id}</td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.spec}</td>
              <td className="py-2 px-4 border-b">{item.counterpart}</td>
              <td className="py-2 px-4 border-b">{item.amount.toLocaleString()}</td>
              <td className="py-2 px-4 border-b">{item.tax.toLocaleString()}</td>
              <td className="py-2 px-4 border-b">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="flex justify-between mt-4">
        <div>
          <h3>合計金額: {totalAmount.toLocaleString()}</h3>
          <h3>合計消費税: {totalTax.toLocaleString()}</h3>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2 mt-4">
        <button onClick={onAddRowClick} className="bg-blue-500 text-white px-4 py-2 rounded">行追加</button>
        <button onClick={onDeleteRowClick} className="bg-red-500 text-white px-4 py-2 rounded">行削除</button>
        <button onClick={onOkClick} className="bg-green-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClearClick} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
      </div>
    </div>
  );
};

export default SummaryInput;
