import React from 'react';

// データの型定義
type TableRow = {
  status: string;
  category: string;
  startDate: string;
  type: string;
  ticketNo: string;
  transferDate: string;
  close: string;
  delivery: string;
  paymentDate: string;
  description: string;
  amount: number;
};

// プロパティの型定義
type TableProps = {
  data: TableRow[];
};

const DataTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="px-4 py-2">電子決済状況</th>
            <th className="px-4 py-2">所属</th>
            <th className="px-4 py-2">起票日</th>
            <th className="px-4 py-2">種別</th>
            <th className="px-4 py-2">伝票No.</th>
            <th className="px-4 py-2">振替日</th>
            <th className="px-4 py-2">締め</th>
            <th className="px-4 py-2">受渡</th>
            <th className="px-4 py-2">支払日</th>
            <th className="px-4 py-2">摘要</th>
            <th className="px-4 py-2">支払金額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="px-4 py-2">{row.status}</td>
              <td className="px-4 py-2">{row.category}</td>
              <td className="px-4 py-2">{row.startDate}</td>
              <td className="px-4 py-2">{row.type}</td>
              <td className="px-4 py-2">{row.ticketNo}</td>
              <td className="px-4 py-2">{row.transferDate}</td>
              <td className="px-4 py-2">{row.close}</td>
              <td className="px-4 py-2">{row.delivery}</td>
              <td className="px-4 py-2">{row.paymentDate}</td>
              <td className="px-4 py-2">{row.description}</td>
              <td className="px-4 py-2 text-right">{row.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
