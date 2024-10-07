import React from 'react';

type InventoryRecord = {
  date: string;
  quantity: number;
  unitPrice: number;
  fiscalYear: string;
  entryNumber: number;
};

type InventoryTableProps = {
  records: InventoryRecord[];
};

const InventoryTable: React.FC<InventoryTableProps> = ({ records }) => {
  return (
    <div className="p-4">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">入庫日</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">数量</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">単価</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">当初入庫年度</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100">当初入庫番号</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-gray-200">{record.date}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.quantity.toFixed(2)}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.unitPrice.toFixed(2)}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.fiscalYear}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.entryNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

type InventoryFormProps = {
  fiscalYear?: string;
  entryNumber?: number;
  quantity?: number;
  unitPrice?: number;
  entryDate?: string;
};

const InventoryForm: React.FC<InventoryFormProps> = ({
  fiscalYear = '令和5年', // Default value
  entryNumber = 0,
  quantity = 0,
  unitPrice = 0,
  entryDate = '2023年10月10日'
}) => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">当初入庫年度</label>
        <input
          type="text"
          value={fiscalYear}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">数量</label>
          <input
            type="number"
            value={quantity}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">単価</label>
          <input
            type="number"
            value={unitPrice}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
            step="0.01"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">当初入庫番号</label>
          <input
            type="number"
            value={entryNumber}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">入庫日</label>
          <input
            type="text"
            value={entryDate}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export { InventoryTable, InventoryForm };
```