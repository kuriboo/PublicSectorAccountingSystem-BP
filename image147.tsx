```tsx
import React, { useState, ChangeEvent } from 'react';

// Props type definition for the component
interface DepartmentSearchProps {
  data: { code: string; name: string }[];
  onOk: (selected: { code: string; name: string } | null) => void;
  onCancel: () => void;
}

const DepartmentSearch: React.FC<DepartmentSearchProps> = ({ data, onOk, onCancel }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  // Handler for search term changes
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filtered list based on the search term
  const filteredData = data.filter((item) =>
    item.name.includes(searchTerm)
  );

  // Handler for table row selection
  const handleRowSelect = (code: string) => {
    setSelectedCode(code);
  };

  // Handler for OK button click
  const handleOk = () => {
    const selected = data.find((item) => item.code === selectedCode) || null;
    onOk(selected);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">検索文字列</label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button className="mt-2 p-2 border rounded bg-gray-200">表示</button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-200">
            <th className="border p-2">コード</th>
            <th className="border p-2">名称</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr
              key={item.code}
              className={`cursor-pointer ${selectedCode === item.code ? 'bg-gray-300' : ''}`}
              onClick={() => handleRowSelect(item.code)}
            >
              <td className="border p-2">{item.code}</td>
              <td className="border p-2">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <button onClick={handleOk} className="p-2 bg-blue-500 text-white rounded mr-2">
          OK
        </button>
        <button onClick={() => setSearchTerm('')} className="p-2 bg-gray-500 text-white rounded mr-2">
          クリア
        </button>
        <button onClick={onCancel} className="p-2 bg-red-500 text-white rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default DepartmentSearch;
```