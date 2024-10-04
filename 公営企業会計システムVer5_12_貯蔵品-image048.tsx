```tsx
import React from 'react';

// データの型定義
type InventoryData = {
  date: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
};

type InventoryProps = {
  location: string;
  itemCode: string;
  itemName: string;
  specification: string;
  unit: string;
  stockQuantity: number;
  data: InventoryData[];
};

// 在庫照会コンポーネント
const InventoryComponent: React.FC<InventoryProps> = ({
  location,
  itemCode,
  itemName,
  specification,
  unit,
  stockQuantity,
  data,
}) => {
  return (
    <div className="p-4 bg-gray-50 border rounded shadow-lg">
      <div className="flex justify-between border-b pb-2 mb-2">
        <div>
          <h2 className="text-xl font-bold">入庫日別在庫照会</h2>
          <div className="mt-2">
            <div>保管場所: <span className="font-semibold">{location}</span></div>
            <div>品番: <span className="font-semibold">{itemCode}</span></div>
            <div>品名: <span>{itemName}</span></div>
            <div>規格: <span>{specification}</span></div>
            <div>単位: <span>{unit}</span></div>
          </div>
        </div>
        <div className="text-right">
          <div>在庫数量: <span className="font-semibold">{stockQuantity.toFixed(2)}</span></div>
        </div>
      </div>

      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4">入庫日</th>
            <th className="py-2 px-4">単価</th>
            <th className="py-2 px-4">在庫数</th>
            <th className="py-2 px-4">在庫金額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={`bg-${index % 2 === 0 ? 'gray-200' : 'white'}`}>
              <td className="border py-1 px-2">{item.date}</td>
              <td className="border py-1 px-2">{item.unitPrice.toFixed(2)}</td>
              <td className="border py-1 px-2">{item.quantity.toFixed(2)}</td>
              <td className="border py-1 px-2">{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="font-bold">
            <td className="py-1 px-2">合計</td>
            <td className="py-1 px-2"></td>
            <td className="py-1 px-2">
              {data.reduce((sum, item) => sum + item.quantity, 0).toFixed(2)}
            </td>
            <td className="py-1 px-2">
              {data.reduce((sum, item) => sum + item.totalPrice, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default InventoryComponent;
```