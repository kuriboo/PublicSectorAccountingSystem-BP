// Import necessary libraries
import React from 'react';

// Define the properties expected by the component
type RecordSearchProps = {
  issueYear: string;
  processingDate: string;
  division: string;
  subdivision: string;
  chargeAmountMin: number;
  chargeAmountMax: number;
  detailedAmountMin: number;
  detailedAmountMax: number;
};

// Create the RecordSearch component
const RecordSearch: React.FC<RecordSearchProps> = ({
  issueYear,
  processingDate,
  division,
  subdivision,
  chargeAmountMin,
  chargeAmountMax,
  detailedAmountMin,
  detailedAmountMax,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      {/* Date and selection section */}
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block text-sm font-medium">年度</label>
          <input value={issueYear} readOnly className="mt-1 p-2 bg-white border rounded" />
        </div>
        <div className="mr-4">
          <label className="block text-sm font-medium">処理日</label>
          <input value={processingDate} readOnly className="mt-1 p-2 bg-white border rounded" />
        </div>
      </div>

      {/* Amount input section */}
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block text-sm font-medium">決定額</label>
          <input
            type="number"
            placeholder="0"
            className="mt-1 p-2 bg-white border rounded"
            min={chargeAmountMin}
            max={chargeAmountMax}
          />
        </div>
        <div className="mr-4">
          <label className="block text-sm font-medium">明細金額</label>
          <input
            type="number"
            placeholder="0"
            className="mt-1 p-2 bg-white border rounded"
            min={detailedAmountMin}
            max={detailedAmountMax}
          />
        </div>
      </div>

      {/* Table of records */}
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">処理日</th>
            <th className="py-2 px-4 border-b">決定番号</th>
            <th className="py-2 px-4 border-b">支払種別</th>
            <th className="py-2 px-4 border-b">決定額</th>
            <th className="py-2 px-4 border-b">摘要</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr>
            <td className="py-2 px-4 border-b">29/08/17</td>
            <td className="py-2 px-4 border-b">97</td>
            <td className="py-2 px-4 border-b">工事（負担無）</td>
            <td className="py-2 px-4 border-b">10,000</td>
            <td className="py-2 px-4 border-b">修繕工事実施設計委託料</td>
          </tr>
          {/* Additional rows can be added here */}
        </tbody>
      </table>
    </div>
  );
};

export default RecordSearch;