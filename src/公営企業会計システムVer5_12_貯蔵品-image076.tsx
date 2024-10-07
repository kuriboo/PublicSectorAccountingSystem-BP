import React from 'react';

type InventoryInputProps = {
  date: string;
  location: string;
  department: string;
  startItemNumber: string;
  endItemNumber: string;
  itemList: {
    code: string;
    name: string;
    spec: string;
    currentHeight: number;
    shelfHeight: number;
    locationCode: string;
    decrease: number;
  }[];
  onDisplay: () => void;
  onClear: () => void;
  onClose: () => void;
};

const InventoryInput: React.FC<InventoryInputProps> = ({
  date,
  location,
  department,
  startItemNumber,
  endItemNumber,
  itemList,
  onDisplay,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-md">
      <h1 className="text-xl font-bold mb-4">棚卸結果入力</h1>
      
      <div className="flex items-center mb-4">
        <label className="mr-2">棚卸年月日:</label>
        <span className="p-2 bg-gray-100">{date}</span>
      </div>
      
      <div className="flex items-center mb-4">
        <label className="mr-2">保管場所:</label>
        <span className="p-2 bg-gray-100">{location}</span>
      </div>
      
      <div className="flex items-center mb-4">
        <label className="mr-2">所属:</label>
        <span className="p-2 bg-gray-100">{department}</span>
      </div>

      <div className="flex items-center mb-4">
        <label className="mr-2">品番:</label>
        <span className="p-2 bg-gray-100">{startItemNumber}</span>
        <span className="mx-2">~</span>
        <span className="p-2 bg-gray-100">{endItemNumber}</span>
      </div>
      
      <button
        className="bg-blue-500 text-white px-4 py-2 mr-2"
        onClick={onDisplay}
      >
        表示
      </button>
      
      <button
        className="bg-gray-500 text-white px-4 py-2 mr-2"
        onClick={onClear}
      >
        クリア
      </button>
      
      <button
        className="bg-red-500 text-white px-4 py-2"
        onClick={onClose}
      >
        終了
      </button>

      <table className="mt-4 w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">品番</th>
            <th className="border-b p-2">品名</th>
            <th className="border-b p-2">規格</th>
            <th className="border-b p-2">現在高</th>
            <th className="border-b p-2">棚卸高</th>
            <th className="border-b p-2">保管場所コード</th>
            <th className="border-b p-2">減減</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((item) => (
            <tr key={item.code}>
              <td className="border-b p-2">{item.code}</td>
              <td className="border-b p-2">{item.name}</td>
              <td className="border-b p-2">{item.spec}</td>
              <td className="border-b p-2">{item.currentHeight.toLocaleString()}</td>
              <td className="border-b p-2">{item.shelfHeight.toLocaleString()}</td>
              <td className="border-b p-2">{item.locationCode}</td>
              <td className="border-b p-2">{item.decrease.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryInput;
```