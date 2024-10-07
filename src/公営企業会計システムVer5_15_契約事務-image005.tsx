// EmployeeTable.tsx
import React from 'react';
import 'tailwindcss/tailwind.css';

// TypeScript interface for the component props
interface EmployeeTableProps {
  employees: { type: string; count: number }[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
  onAdd: (type: string, count: number) => void;
  onCancel: () => void;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({
  employees,
  onEdit,
  onDelete,
  onAdd,
  onCancel,
}) => {
  // Local state to handle new entry form
  const [newType, setNewType] = React.useState('');
  const [newCount, setNewCount] = React.useState(0);

  return (
    <div className="p-4">
      {/* Table */}
      <table className="min-w-full bg-white shadow-md rounded my-6">
        <thead>
          <tr>
            <th className="bg-blue-500 text-white text-left py-3 px-4 rounded-tl-md">職員種別</th>
            <th className="bg-blue-500 text-white text-right py-3 px-4 rounded-tr-md">職員数</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index} className="border-t">
              <td className="py-3 px-4 text-left">{employee.type}</td>
              <td className="py-3 px-4 text-right">{employee.count}</td>
              <td className="py-3 px-4 text-right">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-sm py-1 px-2 rounded mr-2"
                  onClick={() => onEdit(index)}
                >
                  明細編集
                </button>
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-sm py-1 px-2 rounded"
                  onClick={() => onDelete(index)}
                >
                  行削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form for adding new employee */}
      <div className="border p-4 mt-6">
        <div className="flex mb-4">
          <label className="w-1/3 flex items-center">職員種別</label>
          <input
            type="text"
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            className="w-2/3 border rounded p-2"
          />
        </div>
        <div className="flex mb-4">
          <label className="w-1/3 flex items-center">職員数</label>
          <input
            type="number"
            value={newCount}
            onChange={(e) => setNewCount(Number(e.target.value))}
            className="w-2/3 border rounded p-2"
          />
        </div>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-sm py-1 px-4 rounded mr-2"
          onClick={() => {
            onAdd(newType, newCount);
            setNewType('');
            setNewCount(0);
          }}
        >
          行確定
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-sm py-1 px-4 rounded"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>

      {/* Bottom buttons */}
      <div className="flex justify-end mt-6">
        <button className="bg-gray-300 hover:bg-gray-400 text-sm py-1 px-4 rounded mr-2">OK</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-sm py-1 px-4 rounded mr-2">クリア</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-sm py-1 px-4 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default EmployeeTable;
```