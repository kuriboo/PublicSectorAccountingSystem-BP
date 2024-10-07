import React, { FC } from 'react';

// Define TypeScript types for the component props
interface Item {
  code: string;
  name: string;
  abbreviation: string;
}

interface ItemListProps {
  items: Item[];
  onDisplay: (code: string) => void;
}

const ItemList: FC<ItemListProps> = ({ items, onDisplay }) => {
  return (
    <div className="p-4 bg-white border rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">貯蔵品単価名称マスタ</h1>
      
      <div className="mb-4">
        <label htmlFor="singleNameCode" className="block font-medium">
          単価名称コード
        </label>
        <input
          id="singleNameCode"
          type="text"
          className="w-full mt-1 p-2 border rounded"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium">
          名称
        </label>
        <input
          id="name"
          type="text"
          className="w-full mt-1 p-2 border rounded"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="abbreviation" className="block font-medium">
          略名
        </label>
        <input
          id="abbreviation"
          type="text"
          className="w-full mt-1 p-2 border rounded"
        />
      </div>
      
      <button
        className="bg-blue-500 text-white p-2 rounded mb-4"
        onClick={() => onDisplay("")}
      >
        表示
      </button>
      
      <table className="w-full table-auto border">
        <thead>
          <tr>
            <th className="border px-4 py-2">単価名称コード</th>
            <th className="border px-4 py-2">名称</th>
            <th className="border px-4 py-2">略名</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.code}>
              <td className="border px-4 py-2">{item.code}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.abbreviation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex mt-4 justify-end">
        <button className="bg-green-500 text-white p-2 rounded mr-2">
          OK
        </button>
        <button className="bg-gray-500 text-white p-2 rounded mr-2">
          クリア
        </button>
        <button className="bg-red-500 text-white p-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default ItemList;
