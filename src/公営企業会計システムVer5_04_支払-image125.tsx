import React from "react";

type RowData = {
  decisionNumber: number;
  correctionCount: number;
  decision: boolean;
  recipient: string;
  payer: string;
  description: string;
  decisionAmount: number;
  confirmedDate: string;
  processingDate: string;
};

type DataTableProps = {
  data: RowData[];
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="p-4 rounded-md shadow-lg">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-blue-500">
          <tr>
            <th className="py-2 px-4 text-left text-white">決定番号</th>
            <th className="py-2 px-4 text-left text-white">訂正回数</th>
            <th className="py-2 px-4 text-left text-white">決裁</th>
            <th className="py-2 px-4 text-left text-white">受渡</th>
            <th className="py-2 px-4 text-left text-white">支払先</th>
            <th className="py-2 px-4 text-left text-white">摘要</th>
            <th className="py-2 px-4 text-left text-white">決定額</th>
            <th className="py-2 px-4 text-left text-white">支払確定日</th>
            <th className="py-2 px-4 text-left text-white">処理年月日</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{row.decisionNumber}</td>
              <td className="py-2 px-4">{row.correctionCount}</td>
              <td className="py-2 px-4">{row.decision ? "○" : "×"}</td>
              <td className="py-2 px-4">{row.recipient}</td>
              <td className="py-2 px-4">{row.payer}</td>
              <td className="py-2 px-4">{row.description}</td>
              <td className="py-2 px-4">{row.decisionAmount.toLocaleString()}</td>
              <td className="py-2 px-4">{row.confirmedDate}</td>
              <td className="py-2 px-4">{row.processingDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
