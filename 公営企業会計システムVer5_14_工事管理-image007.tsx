```tsx
import React from 'react';

interface SummaryInputProps {
  year: string;
  accountYear: string;
  items: {
    no: number;
    itemName: string;
    specification: string;
    quantity: number;
    unit: string;
    amount: number;
    assetType: string;
    assetName: string;
  }[];
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const SummaryInput: React.FC<SummaryInputProps> = ({
  year,
  accountYear,
  items,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl">材料別とりまとめ入力</h1>
        <div>
          <span>工事台帳年度: {accountYear}</span>
          <span>{year}年度</span>
        </div>
      </div>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 p-2">No.</th>
            <th className="border border-gray-200 p-2">単価名称</th>
            <th className="border border-gray-200 p-2">規格名称</th>
            <th className="border border-gray-200 p-2">合計数量</th>
            <th className="border border-gray-200 p-2">単位</th>
            <th className="border border-gray-200 p-2">合計金額</th>
            <th className="border border-gray-200 p-2">固定資産名称</th>
            <th className="border border-gray-200 p-2">固定資産</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.no}>
              <td className="border border-gray-200 p-2">{item.no}</td>
              <td className="border border-gray-200 p-2">{item.itemName}</td>
              <td className="border border-gray-200 p-2">{item.specification}</td>
              <td className="border border-gray-200 p-2">{item.quantity}</td>
              <td className="border border-gray-200 p-2">{item.unit}</td>
              <td className="border border-gray-200 p-2">{item.amount}</td>
              <td className="border border-gray-200 p-2">{item.assetName}</td>
              <td className="border border-gray-200 p-2">{item.assetType}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={onSubmit}>OK</button>
        <button className="bg-gray-500 text-white px-4 py-2 mr-2" onClick={onClear}>クリア</button>
        <button className="bg-red-500 text-white px-4 py-2" onClick={onExit}>終了</button>
      </div>
    </div>
  );
};

export default SummaryInput;
```