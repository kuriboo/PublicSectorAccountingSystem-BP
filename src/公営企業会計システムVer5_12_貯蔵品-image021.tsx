import React from 'react';

// Define the types for the component props
interface InventoryInputProps {
  date: string;
  department: string;
  departmentName: string;
  division: string;
  divisionName: string;
  budgetAmount: number;
  burdenAccumulate: number;
  burdenRemaining: number;
  estimateAccumulate: number;
  estimateRemaining: number;
  items: Item[];
}

// Define the type for each inventory item
interface Item {
  number: string;
  name: string;
  standard: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  amount: number;
}

const InventoryInput: React.FC<InventoryInputProps> = ({
  date,
  department,
  departmentName,
  division,
  divisionName,
  budgetAmount,
  burdenAccumulate,
  burdenRemaining,
  estimateAccumulate,
  estimateRemaining,
  items,
}) => {
  return (
    <div className="p-4 bg-gray-100 border rounded-md">
      {/* Header */}
      <div className="text-lg font-bold text-center mb-4">新規出庫入力</div>

      {/* Form Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-semibold">出庫日</label>
          <input type="text" value={date} readOnly className="w-full border rounded px-2 py-1" />
        </div>
        <div>
          <label className="block font-semibold">所属</label>
          <input type="text" value={department} readOnly className="w-full border rounded px-2 py-1" />
        </div>
        <div>
          <label className="block font-semibold">{departmentName}</label>
          <input type="text" value={division} readOnly className="w-full border rounded px-2 py-1" />
        </div>
        <div>
          <label className="block font-semibold">{divisionName}</label>
          <input type="text" value={`[会計R]仮置出庫仕訳`} readOnly className="w-full border rounded px-2 py-1" />
        </div>
      </div>

      {/* Budget Section */}
      <div className="mb-4">
        <label className="block font-semibold">予算額</label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="block">負担累計: {burdenAccumulate}</span>
            <span className="block">負担残: {burdenRemaining}</span>
          </div>
          <div>
            <span className="block">予定累計: {estimateAccumulate}</span>
            <span className="block">予定残額: {estimateRemaining}</span>
          </div>
        </div>
      </div>

      {/* Inventory Items Table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-300">
            <th className="border px-2 py-1">品番</th>
            <th className="border px-2 py-1">品名</th>
            <th className="border px-2 py-1">規格</th>
            <th className="border px-2 py-1">数量</th>
            <th className="border px-2 py-1">単位</th>
            <th className="border px-2 py-1">単価</th>
            <th className="border px-2 py-1">金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{item.number}</td>
              <td className="border px-2 py-1">{item.name}</td>
              <td className="border px-2 py-1">{item.standard}</td>
              <td className="border px-2 py-1">{item.quantity}</td>
              <td className="border px-2 py-1">{item.unit}</td>
              <td className="border px-2 py-1">{item.unitPrice}</td>
              <td className="border px-2 py-1">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Buttons */}
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default InventoryInput;
