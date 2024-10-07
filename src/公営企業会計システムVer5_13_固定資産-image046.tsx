import React, { FC, useState } from 'react';

// TypeScript interface for component props
interface FinanceRow {
  code: string;
  name: string;
  division: string;
  amount: number;
}

interface FinanceTableProps {
  data: FinanceRow[];
  onSubmit: (data: FinanceRow[]) => void;
}

// FinanceTable component using Tailwind CSS for styling
const FinanceTable: FC<FinanceTableProps> = ({ data, onSubmit }) => {
  const [editData, setEditData] = useState<FinanceRow | null>(null);

  // Update editData state when editing a row
  const onEditClick = (row: FinanceRow) => {
    setEditData(row);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (editData) {
      const updatedData = data.map((item) =>
        item.code === editData.code ? editData : item
      );
      onSubmit(updatedData);
      setEditData(null);
    }
  };

  return (
    <div className="p-4">
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">財源コード</th>
            <th className="border p-2">財源名称</th>
            <th className="border p-2">償却区分</th>
            <th className="border p-2">財源金額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.code} className="border">
              <td className="p-2">{row.code}</td>
              <td className="p-2">{row.name}</td>
              <td className="p-2">{row.division}</td>
              <td className="p-2 text-right">{row.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {editData && (
        <div className="mt-4">
          <h2 className="font-bold mb-2">財源編集</h2>
          <input
            type="text"
            className="border p-1 m-1"
            value={editData.code}
            readOnly
          />
          <input
            type="text"
            className="border p-1 m-1"
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          />
          <input
            type="text"
            className="border p-1 m-1"
            value={editData.division}
            onChange={(e) => setEditData({ ...editData, division: e.target.value })}
          />
          <input
            type="number"
            className="border p-1 m-1"
            value={editData.amount}
            onChange={(e) => setEditData({ ...editData, amount: Number(e.target.value) })}
          />
          <button
            className="bg-blue-500 text-white p-2 m-1"
            onClick={handleSubmit}
          >
            行確定
          </button>
          <button
            className="bg-gray-300 p-2 m-1"
            onClick={() => setEditData(null)}
          >
            行キャンセル
          </button>
        </div>
      )}
    </div>
  );
};

export default FinanceTable;