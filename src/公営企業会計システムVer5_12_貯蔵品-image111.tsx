import React, { useState } from 'react';

// 型定義
interface ProductData {
  code: string;
  name: string;
  specification: string;
}

interface ProductTableProps {
  products: ProductData[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onOk, onClear, onCancel }) => {
  const [searchName, setSearchName] = useState('');
  const [searchSpec, setSearchSpec] = useState('');

  const handleSearch = () => {
    console.log('検索:', searchName, searchSpec);
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="単価名称"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="単価規格名称"
          value={searchSpec}
          onChange={(e) => setSearchSpec(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded"
        >
          表示
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border border-gray-300 p-2">単価コード</th>
            <th className="border border-gray-300 p-2">単価名称</th>
            <th className="border border-gray-300 p-2">単価規格名称</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{product.code}</td>
              <td className="border border-gray-300 p-2">{product.name}</td>
              <td className="border border-gray-300 p-2">{product.specification}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-green-500 text-white p-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-yellow-500 text-white p-2 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="bg-red-500 text-white p-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
```