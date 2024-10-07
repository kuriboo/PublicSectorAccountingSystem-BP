import React from 'react';

// 型定義
type Record = {
  status: string;
  department: string;
  startDate: string;
  type: string;
  category: string;
  number: string;
  adjustmentDate: string;
  closing: string;
  issue: string;
  collectionDate: string;
  note: string;
};

type DataTableProps = {
  records: Record[];
};

const DataTable: React.FC<DataTableProps> = ({ records }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-blue-700">
        <tr>
          {['電子決裁状況', '所属', '起票日', '種別', '区分', '伝票No.', '調定日', '締め', '発行', '収納日', '摘要'].map((header) => (
            <th
              key={header}
              className="px-4 py-2 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {records.map((record, index) => (
          <tr key={index}>
            <td className="px-4 py-2 text-sm font-medium text-gray-900">{record.status}</td>
            <td className="px-4 py-2 text-sm text-gray-500">{record.department}</td>
            <td className="px-4 py-2 text-sm text-gray-500">{record.startDate}</td>
            <td className="px-4 py-2 text-sm text-gray-500">{record.type}</td>
            <td className="px-4 py-2 text-sm text-gray-500">{record.category}</td>
            <td className="px-4 py-2 text-sm text-gray-500">{record.number}</td>
            <td className="px-4 py-2 text-sm text-gray-500">{record.adjustmentDate}</td>
            <td className="px-4 py-2 text-sm text-gray-500">{record.closing}</td>
            <td className="px-4 py-2 text-sm text-gray-500">{record.issue}</td>
            <td className="px-4 py-2 text-sm text-gray-500">{record.collectionDate}</td>
            <td className="px-4 py-2 text-sm text-gray-500">{record.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
```