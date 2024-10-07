// Import necessary modules
import React from 'react';

// Define the props type
interface DataTableProps {
  data: { no: number; text: string }[];
  onConfirm: (text: string) => void;
  onCancel: () => void;
}

// Component definition
const DataTable: React.FC<DataTableProps> = ({ data, onConfirm, onCancel }) => {
  const [selectedText, setSelectedText] = React.useState<string>('');

  // Handle text selection change
  const handleSelect = (text: string) => {
    setSelectedText(text);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded">
      {/* Table Section */}
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 p-2 bg-blue-600 text-white">No</th>
            <th className="border-b-2 p-2 bg-blue-600 text-white">文言</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.no}
              className="hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(row.text)}
            >
              <td className="border-b p-2">{row.no}</td>
              <td className="border-b p-2">{row.text}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Input and Buttons Section */}
      <div className="flex justify-between items-center p-4">
        <input
          type="text"
          value={selectedText}
          readOnly
          className="flex-1 p-2 bg-blue-100 border rounded mr-2"
        />
        <button
          onClick={() => onConfirm(selectedText)}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded mr-2"
        >
          行確定
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
        >
          行キャンセル
        </button>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end p-4">
        <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded mr-2">
          OK
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded mr-2">
          クリア
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default DataTable;
```