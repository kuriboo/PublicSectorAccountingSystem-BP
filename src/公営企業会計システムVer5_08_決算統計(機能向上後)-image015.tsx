// Import necessary libraries
import React from 'react';

// Define types for component props
type BudgetMasterProps = {
  year: string;
  subject: string;
  segmentOptions: Array<{ value: string; label: string }>;
  data: Array<{
    change: string;
    type: string;
    code: string;
    section: string;
    subsection: string;
    details: string;
    segmentName: string;
    attribute?: string;
  }>;
};

// Define the BudgetMaster component
const BudgetMaster: React.FC<BudgetMasterProps> = ({
  year,
  subject,
  segmentOptions,
  data,
}) => {

  return (
    <div className="p-4 w-full">
      {/* Header */}
      <div className="mb-4 text-center text-xl font-bold bg-blue-200 py-2 rounded">
        科目別振替性質紐づけマスタ
      </div>
      <div className="flex items-center mb-4">
        {/* Year Selector */}
        <span className="mr-2">令和</span>
        <input
          type="text"
          value={year}
          className="border p-1 mr-4 w-12"
          readOnly
        />
        <span className="mr-4">年度</span>

        {/* Subject Selector */}
        <button className="border p-1 mr-4">{subject}</button>

        {/* Segment Selector */}
        <select className="border p-1">
          {segmentOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-blue-100">
              <th className="border px-4 py-2">変更</th>
              <th className="border px-4 py-2">種別</th>
              <th className="border px-4 py-2">科目コード</th>
              <th className="border px-4 py-2">節</th>
              <th className="border px-4 py-2">細節</th>
              <th className="border px-4 py-2">明細</th>
              <th className="border px-4 py-2">セグメント名</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{row.change}</td>
                <td className="border px-4 py-2">{row.type}</td>
                <td className="border px-4 py-2">{row.code}</td>
                <td className="border px-4 py-2">{row.section}</td>
                <td className="border px-4 py-2">{row.subsection}</td>
                <td className="border px-4 py-2">{row.details}</td>
                <td className="border px-4 py-2">{row.segmentName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BudgetMaster;
