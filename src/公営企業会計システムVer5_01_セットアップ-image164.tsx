import React from 'react';

interface DataItem {
  screenId: string;
  voucherId: string;
  name: string;
  displayName: string;
  voucher: string;
  linked: boolean;
}

interface DataTableProps {
  data: DataItem[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">画面ID</th>
            <th className="px-4 py-2 border-b">帳票ID</th>
            <th className="px-4 py-2 border-b">名称</th>
            <th className="px-4 py-2 border-b">表示件名</th>
            <th className="px-4 py-2 border-b">帳票</th>
            <th className="px-4 py-2 border-b">連携有無</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2 border-b">{item.screenId}</td>
              <td className="px-4 py-2 border-b">{item.voucherId}</td>
              <td className="px-4 py-2 border-b">{item.name}</td>
              <td className="px-4 py-2 border-b">{item.displayName}</td>
              <td className="px-4 py-2 border-b">{item.voucher}</td>
              <td className="px-4 py-2 border-b">{item.linked ? '有' : '無'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
