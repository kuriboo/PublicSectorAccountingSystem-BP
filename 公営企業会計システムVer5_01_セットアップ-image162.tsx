```tsx
import React from 'react';

// Props definition for the component
type Props = {
  data: { no: number; name: string }[];  // Array of objects with 'no' and 'name'
  onConfirm: (name: string) => void;     // Function to call on confirm
  onCancel: () => void;                  // Function to call on cancel
};

// The main component definition
const CustomTable: React.FC<Props> = ({ data, onConfirm, onCancel }) => {
  const [selectedName, setSelectedName] = React.useState<string>('');

  // Handles selection changes in the list
  const handleSelectionChange = (name: string) => {
    setSelectedName(name);
  };

  return (
    <div className="p-4">
      {/* Table to display data */}
      <table className="w-full mb-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-2 border border-gray-300">No</th>
            <th className="p-2 border border-gray-300">名称</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.no}
              className="cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelectionChange(item.name)}
            >
              <td className="p-2 border border-gray-300">{item.no}</td>
              <td className="p-2 border border-gray-300">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Input to show selected name */}
      <div className="mb-4">
        <label className="mr-2">名称:</label>
        <input
          type="text"
          className="border p-1"
          value={selectedName}
          readOnly
        />
      </div>

      {/* Buttons for actions */}
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onConfirm(selectedName)}
        >
          行確定
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default CustomTable;
```