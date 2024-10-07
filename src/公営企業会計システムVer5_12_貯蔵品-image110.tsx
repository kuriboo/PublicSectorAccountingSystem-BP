import React from 'react';

// 型定義
interface TableData {
  code: string;
  name: string;
  spec: string;
}

interface Props {
  data: TableData[];
  onSearch: (searchTerm: string) => void;
  onClear: () => void;
  onCancel: () => void;
}

const ProductSearch: React.FC<Props> = ({ data, onSearch, onClear, onCancel }) => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <label className="mr-2">品名</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-1 flex-grow"
        />
        <button onClick={handleSearch} className="ml-2 px-4 py-2 bg-gray-300 rounded">表示</button>
      </div>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-gray-100">品番コード</th>
            <th className="border px-4 py-2 bg-gray-100">品名</th>
            <th className="border px-4 py-2 bg-gray-100">規格</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.code}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.spec}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button onClick={onClear} className="mr-2 px-4 py-2 bg-gray-300 rounded">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default ProductSearch;
```