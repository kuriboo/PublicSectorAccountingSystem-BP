// components/BusinessDivisionTable.tsx

import React from 'react';

// Type definition for the component props
type BusinessDivision = {
  code: string;
  name: string;
};

type BusinessDivisionTableProps = {
  data: BusinessDivision[];
  onEdit: (code: string) => void;
  onAdd: () => void;
  onDelete: (code: string) => void;
};

const BusinessDivisionTable: React.FC<BusinessDivisionTableProps> = ({
  data,
  onEdit,
  onAdd,
  onDelete
}) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <header className="bg-blue-500 text-white text-lg px-4 py-2">
        事業区分マスタ
      </header>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              事業区分CD
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              事業区分名称
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((division) => (
            <tr key={division.code}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {division.code}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {division.name}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button
                  onClick={() => onEdit(division.code)}
                  className="text-blue-700 hover:text-blue-900"
                >
                  編集
                </button>
                <button
                  onClick={() => onDelete(division.code)}
                  className="text-red-700 hover:text-red-900 ml-4"
                >
                  削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end p-4">
        <button
          onClick={onAdd}
          className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          追加
        </button>
      </div>
    </div>
  );
};

export default BusinessDivisionTable;