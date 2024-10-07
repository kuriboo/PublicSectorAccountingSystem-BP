// import necessary packages
import React from 'react';

type Props = {
  startDate: string;
  endDate: string;
  startNumber: string;
  endNumber: string;
  displayData: {
    date: string;
    category: string;
    type: string;
    number: string;
    description: string;
    amount: number;
  }[];
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const AccountingComponent: React.FC<Props> = ({
  startDate,
  endDate,
  startNumber,
  endNumber,
  displayData,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">収納日締処理（伝票単位）</h2>
      
      <div className="mb-4">
        <label className="block font-semibold">収納日</label>
        <input type="text" value={startDate} readOnly className="border-b-2 mr-2" />
        <span>~</span>
        <input type="text" value={endDate} readOnly className="border-b-2 ml-2" />
      </div>
      
      <div className="mb-4">
        <label className="block font-semibold">所属</label>
        <input type="text" value={startNumber} readOnly className="border-b-2 mr-2" />
        <span>~</span>
        <input type="text" value={endNumber} readOnly className="border-b-2 ml-2" />
      </div>

      {/* Table for displaying data */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">収納日</th>
            <th>所属</th>
            <th>種別</th>
            <th>伝票番号</th>
            <th>摘要</th>
            <th>合計金額</th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((data, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{data.date}</td>
              <td className="px-4">{data.category}</td>
              <td className="px-4">{data.type}</td>
              <td className="px-4">{data.number}</td>
              <td className="px-4">{data.description}</td>
              <td className="px-4">{data.amount.toLocaleString('ja-JP')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded"
          onClick={onCancel}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingComponent;
```