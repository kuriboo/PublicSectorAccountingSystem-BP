import React from 'react';

type PropertyRecord = {
  date: string;
  description: string;
  area: number;
  value: number;
};

type PropertyTableProps = {
  records: PropertyRecord[];
  onEdit: (record: PropertyRecord) => void;
  onDelete: (record: PropertyRecord) => void;
  onDetail: (record: PropertyRecord) => void;
};

const PropertyTable: React.FC<PropertyTableProps> = ({ records, onEdit, onDelete, onDetail }) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <div className="flex mb-4">
        <h2 className="flex-grow text-xl font-bold">土地総括保守</h2>
        <button className="ml-2 py-1 px-3 bg-gray-300 rounded" onClick={() => { /* Implement action */ }}>編集</button>
        <button className="ml-2 py-1 px-3 bg-gray-300 rounded" onClick={() => { /* Implement action */ }}>行削除</button>
        <button className="ml-2 py-1 px-3 bg-gray-300 rounded" onClick={() => { /* Implement action */ }}>明細編集</button>
      </div>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border px-4 py-2">異動年月日</th>
            <th className="border px-4 py-2">総括摘要</th>
            <th className="border px-4 py-2">総面積</th>
            <th className="border px-4 py-2">総価額</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="bg-white hover:bg-gray-100">
              <td className="border px-4 py-2">{record.date}</td>
              <td className="border px-4 py-2">{record.description}</td>
              <td className="border px-4 py-2">{record.area}</td>
              <td className="border px-4 py-2">{record.value.toLocaleString()}</td>
              <td className="border px-4 py-2">
                <button className="mr-2 text-blue-500" onClick={() => onEdit(record)}>編集</button>
                <button className="mr-2 text-red-500" onClick={() => onDelete(record)}>削除</button>
                <button className="text-green-500" onClick={() => onDetail(record)}>明細</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyTable;
