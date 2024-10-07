// DepartmentSearch.tsx
import React, { useState, ChangeEvent } from 'react';
import 'tailwindcss/tailwind.css';

// 型定義
interface Department {
  code: string;
  name: string;
}

interface DepartmentSearchProps {
  departments: Department[];
  onSearch: (query: string) => void;
  onSelect: (code: string) => void;
}

const DepartmentSearch: React.FC<DepartmentSearchProps> = ({ departments, onSearch, onSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // 検索クエリ変更時の処理
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  // 部署選択時の処理
  const handleSelect = (code: string) => {
    onSelect(code);
  };

  return (
    <div className="border rounded p-4 bg-gray-100">
      <h2 className="text-lg font-bold mb-2">部門検索</h2>
      <input 
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        className="border rounded w-full p-2 mb-4"
        placeholder="検索文字列"
      />
      <table className="table-auto w-full bg-white">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2">コード</th>
            <th className="p-2">名称</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(department => (
            <tr 
              key={department.code}
              className="hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(department.code)}
            >
              <td className="p-2">{department.code}</td>
              <td className="p-2">{department.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">表示</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">クリア</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">キャンセル</button>
      </div>
    </div>
  );
}

export default DepartmentSearch;
```