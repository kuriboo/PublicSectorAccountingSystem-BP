import React from 'react';

interface Props {
  yearOptions: string[];
  budgetOptions: string[];
  sectionOptions: string[];
  details: {
    rowNumber: number;
    detailNumber: string;
    subDetail: string;
    description: string;
    amountThousand: number;
    amountYen: number;
  }[];
}

const BudgetAdjustment: React.FC<Props> = ({
  yearOptions,
  budgetOptions,
  sectionOptions,
  details,
}) => {
  return (
    <div className="p-4">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">説明欄訂正</h1>

      {/* Form Section */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <div className="mb-2">
          <label className="block mb-1">年度</label>
          <select className="border p-2 w-full">
            {yearOptions.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="block mb-1">予算編成区分</label>
          <select className="border p-2 w-full">
            {budgetOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table Section */}
      <table className="w-full table-auto border-collapse mb-4">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border p-2">行番号</th>
            <th className="border p-2">細節</th>
            <th className="border p-2">明細</th>
            <th className="border p-2">説明欄</th>
            <th className="border p-2">金額(千円)</th>
            <th className="border p-2">金額(円)</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.rowNumber} className="bg-white">
              <td className="border p-2">{detail.rowNumber}</td>
              <td className="border p-2">{detail.detailNumber}</td>
              <td className="border p-2">{detail.subDetail}</td>
              <td className="border p-2">{detail.description}</td>
              <td className="border p-2">{detail.amountThousand}</td>
              <td className="border p-2">{detail.amountYen}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons Section */}
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">前データ</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">次データ</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetAdjustment;
