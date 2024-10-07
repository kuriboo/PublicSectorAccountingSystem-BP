import React from 'react';

// Prop types definition
interface ManagementTableProps {
  title: string;
  options: string[];
  onRegister: () => void;
  onDelete: () => void;
  dataList: { category: string; id: string }[];
}

// Functional component
const ManagementTable: React.FC<ManagementTableProps> = ({
  title,
  options,
  onRegister,
  onDelete,
  dataList,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 shadow-md rounded-lg">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-lg font-bold">{title}</h1>
      </div>
      
      {/* Form section */}
      <div className="mb-4">
        <div className="flex justify-around items-center mb-2">
          <label htmlFor="category" className="mr-2">区分</label>
          <select id="category" className="border p-1">
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-around items-center mb-2">
          <label htmlFor="id" className="mr-2">ID</label>
          <input type="text" id="id" className="border p-1" />
        </div>
        <div className="flex justify-around">
          <button onClick={onRegister} className="bg-blue-500 text-white px-4 py-2 rounded">
            登録
          </button>
          <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">
            削除
          </button>
        </div>
      </div>
      
      {/* Data table */}
      <div className="border-t pt-4">
        <table className="min-w-full">
          <thead>
            <tr className="text-left bg-gray-200">
              <th className="p-2">区分</th>
              <th className="p-2">ID</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((data, index) => (
              <tr key={index} className="bg-white">
                <td className="p-2 border">{data.category}</td>
                <td className="p-2 border">{data.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagementTable;
