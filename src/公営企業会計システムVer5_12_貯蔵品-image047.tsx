import React from 'react';

interface InventoryTableProps {
  title: string;
  storageLocation: string;
  locationCode: string;
  itemCode: string;
  itemName: string;
  spec: string;
  data: Array<{
    date: string;
    expectedArrival: number;
    expectedDeparture: number;
    balance: number;
    difference: number;
    projectName: string;
    operatorName: string;
  }>;
}

const InventoryTable: React.FC<InventoryTableProps> = ({
  title,
  storageLocation,
  locationCode,
  itemCode,
  itemName,
  spec,
  data,
}) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold text-purple-900">{title}</h1>
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <span className="font-bold mr-2">保管場所:</span>
          <span>{locationCode}</span>
          <span className="ml-2">{storageLocation}</span>
        </div>
        <div className="flex items-center">
          <span className="font-bold mr-2">品番:</span>
          <span>{itemCode}</span>
          <span className="ml-2">品名 {itemName}</span>
          <span className="ml-2">規格 {spec}</span>
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 border-b">入出庫日</th>
            <th className="py-2 border-b">入庫予定</th>
            <th className="py-2 border-b">出庫予定</th>
            <th className="py-2 border-b">在庫予定</th>
            <th className="py-2 border-b">不足分</th>
            <th className="py-2 border-b">工事名称</th>
            <th className="py-2 border-b">業者名</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 border-b">{row.date}</td>
              <td className="py-2 border-b">{row.expectedArrival}</td>
              <td className="py-2 border-b">{row.expectedDeparture}</td>
              <td className="py-2 border-b">{row.balance}</td>
              <td className="py-2 border-b">{row.difference}</td>
              <td className="py-2 border-b">{row.projectName}</td>
              <td className="py-2 border-b">{row.operatorName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
```