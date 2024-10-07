import React from 'react';

type DataTableProps = {
  data: { no: number; text: string }[];
  onRowRemove: (no: number) => void;
  selectedText: string;
  onTextChange: (text: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
};

const DataTable: React.FC<DataTableProps> = ({
  data,
  onRowRemove,
  selectedText,
  onTextChange,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4">
      <button className="bg-gray-300 p-2 rounded mb-2">編集</button>
      <button className="bg-gray-300 p-2 rounded ml-2 mb-2" onClick={() => onRowRemove(1)}>行削除</button>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">文言</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
              <td className="border px-4 py-2">{row.no}</td>
              <td className="border px-4 py-2">{row.text}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <label className="block mb-2">文言</label>
        <input
          className="border w-full p-2"
          value={selectedText}
          onChange={(e) => onTextChange(e.target.value)}
        />

        <button className="bg-gray-300 p-2 rounded mt-2" onClick={onConfirm}>行確定</button>
        <button className="bg-gray-300 p-2 rounded ml-2 mt-2" onClick={onCancel}>行キャンセル</button>
      </div>
    </div>
  );
};

export default DataTable;
