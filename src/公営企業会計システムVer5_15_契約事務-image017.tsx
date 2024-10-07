import React from 'react';

type IndustryRow = {
  code: string;
  name: string;
  rank: number;
  price: number;
  sales: number;
  ownerPoints: number;
  customerPoints: number;
  totalPoints: number;
};

type IndustryTableProps = {
  data: IndustryRow[];
  onRowClick?: (code: string) => void;
};

const IndustryTable: React.FC<IndustryTableProps> = ({ data, onRowClick }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">業種コード</th>
            <th className="border p-2">業種名称</th>
            <th className="border p-2">順位</th>
            <th className="border p-2">格付</th>
            <th className="border p-2">売上高</th>
            <th className="border p-2">主観</th>
            <th className="border p-2">客観</th>
            <th className="border p-2">総合点</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.code}
              className="hover:bg-gray-100 cursor-pointer"
              onClick={() => onRowClick && onRowClick(row.code)}
            >
              <td className="border p-2 text-center">{row.code}</td>
              <td className="border p-2">{row.name}</td>
              <td className="border p-2 text-center">{row.rank}</td>
              <td className="border p-2 text-center">{row.price}</td>
              <td className="border p-2 text-center">{row.sales}</td>
              <td className="border p-2 text-center">{row.ownerPoints}</td>
              <td className="border p-2 text-center">{row.customerPoints}</td>
              <td className="border p-2 text-center">{row.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IndustryTable;
