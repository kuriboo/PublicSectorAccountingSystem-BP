import React from "react";

// Define types for the component props
type TableData = {
  date: string;
  location: string;
  type: string;
  number: string;
  description: string;
  amount: number;
  checked: boolean;
};

type Props = {
  title: string;
  startDate: string;
  endDate: string;
  minNumber: string;
  maxNumber: string;
  tableData: TableData[];
  onSearch: () => void;
};

const AccountingComponent: React.FC<Props> = ({
  title,
  startDate,
  endDate,
  minNumber,
  maxNumber,
  tableData,
  onSearch,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      {/* Header */}
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      
      {/* Date and Number Range Inputs */}
      <div className="flex mb-4">
        <div className="flex-1">
          <label>振替日</label>
          <input type="text" value={startDate} className="border p-1 mx-2" />
          <span>~</span>
          <input type="text" value={endDate} className="border p-1 mx-2" />
        </div>
        <div className="flex-1">
          <input type="text" value={minNumber} className="border p-1 mx-2" />
          <span>~</span>
          <input type="text" value={maxNumber} className="border p-1 mx-2" />
        </div>
      </div>

      {/* Table */}
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-200">
            <th className="border border-gray-300">選択</th>
            <th className="border border-gray-300">振替日</th>
            <th className="border border-gray-300">所属</th>
            <th className="border border-gray-300">種別</th>
            <th className="border border-gray-300">伝票番号</th>
            <th className="border border-gray-300">摘要</th>
            <th className="border border-gray-300">合計金額</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300">
                <input type="checkbox" checked={row.checked} readOnly />
              </td>
              <td className="border border-gray-300">{row.date}</td>
              <td className="border border-gray-300">{row.location}</td>
              <td className="border border-gray-300">{row.type}</td>
              <td className="border border-gray-300">{row.number}</td>
              <td className="border border-gray-300">{row.description}</td>
              <td className="border border-gray-300">{row.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button */}
      <div className="mt-4 text-right">
        <button 
          className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
          onClick={onSearch}
        >
          表示
        </button>
      </div>
    </div>
  );
};

export default AccountingComponent;
```