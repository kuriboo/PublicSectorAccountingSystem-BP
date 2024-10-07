import React from 'react';

type TableProps = {
  data: {
    type: string;
    pointsLower: number;
    pointsUpper: number;
  }[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
};

const EditableTable: React.FC<TableProps> = ({ data, onEdit, onDelete }) => {
  return (
    <div className="p-4">
      <table className="w-full table-fixed border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="w-1/3 border border-gray-300 bg-gray-200 p-2">業種</th>
            <th className="w-1/3 border border-gray-300 bg-gray-200 p-2">点数下限 (から)</th>
            <th className="w-1/3 border border-gray-300 bg-gray-200 p-2">点数上限 (まで)</th>
            <th className="w-1/6 border border-gray-300 bg-gray-200 p-2">アクション</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{row.type}</td>
              <td className="border border-gray-300 p-2">{row.pointsLower}</td>
              <td className="border border-gray-300 p-2">{row.pointsUpper}</td>
              <td className="border border-gray-300 p-2">
                <button
                  className="mr-2 bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => onEdit(index)}
                >
                  詳細編集
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => onDelete(index)}
                >
                  行削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;
```