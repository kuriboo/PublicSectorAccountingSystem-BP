import React from 'react';

type RowData = {
  id: number;
  division: string;
  increaseDecrease: string;
  budgetItem: string;
  name: string;
  department: string;
  amount: number;
};

type TableProps = {
  rows: RowData[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const DataTable: React.FC<TableProps> = ({ rows, onEdit, onDelete }) => {
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 border-b">流用番号</th>
            <th className="py-2 border-b">区分</th>
            <th className="py-2 border-b">増減</th>
            <th className="py-2 border-b">予算科目</th>
            <th className="py-2 border-b">名称</th>
            <th className="py-2 border-b">所属</th>
            <th className="py-2 border-b">流用金額</th>
            <th className="py-2 border-b">操作</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="py-2 border-b text-center">{row.id}</td>
              <td className="py-2 border-b text-center">{row.division}</td>
              <td className="py-2 border-b text-center">{row.increaseDecrease}</td>
              <td className="py-2 border-b text-center">{row.budgetItem}</td>
              <td className="py-2 border-b">{row.name}</td>
              <td className="py-2 border-b text-center">{row.department}</td>
              <td className="py-2 border-b text-right">{row.amount.toLocaleString()}</td>
              <td className="py-2 border-b text-center">
                <button
                  className="mr-2 text-blue-500"
                  onClick={() => onEdit(row.id)}
                >
                  編集
                </button>
                <button
                  className="text-red-500"
                  onClick={() => onDelete(row.id)}
                >
                  削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
```