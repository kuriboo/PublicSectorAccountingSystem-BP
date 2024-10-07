import React from 'react';

// Define types for props
type Props = {
  storageNumber: string;
  startDate: string;
  endDate: string;
  data: {
    category: string;
    date: string;
    slipNumber: number;
    quantity: number;
    unitPrice: number;
    amount: number;
    stockAfter: number;
  }[];
};

const StorageReport: React.FC<Props> = ({ storageNumber, startDate, endDate, data }) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex justify-between items-center bg-blue-100 p-2 rounded-md">
        <h1 className="text-lg font-bold">貯蔵品受払簿照会</h1>
        <input 
          type="text" 
          value={storageNumber} 
          readOnly 
          className="border border-gray-300 p-1 rounded-md text-center"
          style={{ width: '100px' }}
        />
      </div>
      <div className="my-4">
        <div className="flex items-center space-x-2 text-sm">
          <span>日付</span>
          <input 
            type="text" 
            value={startDate} 
            readOnly 
            className="border border-gray-300 p-1 rounded-md"
          />
          <span>〜</span>
          <input 
            type="text" 
            value={endDate} 
            readOnly 
            className="border border-gray-300 p-1 rounded-md"
          />
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 border">区分名</th>
            <th className="px-4 py-2 border">入出庫日</th>
            <th className="px-4 py-2 border">伝票番号</th>
            <th className="px-4 py-2 border">数量</th>
            <th className="px-4 py-2 border">単価</th>
            <th className="px-4 py-2 border">金額</th>
            <th className="px-4 py-2 border">在庫数</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{row.category}</td>
              <td className="border px-4 py-2">{row.date}</td>
              <td className="border px-4 py-2">{row.slipNumber}</td>
              <td className="border px-4 py-2">{row.quantity.toFixed(2)}</td>
              <td className="border px-4 py-2">{row.unitPrice.toLocaleString()}</td>
              <td className="border px-4 py-2">{row.amount.toLocaleString()}</td>
              <td className="border px-4 py-2">{row.stockAfter.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StorageReport;
