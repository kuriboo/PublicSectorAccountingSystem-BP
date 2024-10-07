import React from 'react';

// 型定義
type ShipmentInputProps = {
  processingDate: string;
  departmentNumber: string;
  budgetPermission: string;
  workLocation: string;
  items: Array<{
    itemCode: string;
    itemName: string;
    specification: string;
    quantity: number;
    unit: string;
    plannedShipmentDate: string;
    unitPrice: number;
  }>;
  totalAmount: number;
  onRegister?: () => void;
  onDelete?: () => void;
};

// コンポーネント
const ShipmentInput: React.FC<ShipmentInputProps> = ({
  processingDate,
  departmentNumber,
  budgetPermission,
  workLocation,
  items,
  totalAmount,
  onRegister,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-white shadow-md">
      {/* 処理年月日 */}
      <div className="mb-4">
        <label className="block font-bold">処理年月日:</label>
        <input type="text" value={processingDate} className="border p-2 w-full" readOnly />
      </div>

      {/* 所属 */}
      <div className="mb-4">
        <label className="block font-bold">所属:</label>
        <input type="text" value={departmentNumber} className="border p-2 w-full" readOnly />
      </div>

      {/* 予算編成最高権限 */}
      <div className="mb-4">
        <label className="block font-bold">予算編成最高権限:</label>
        <input type="text" value={budgetPermission} className="border p-2 w-full" readOnly />
      </div>

      {/* 工事名場所 */}
      <div className="mb-4">
        <label className="block font-bold">工事名場所:</label>
        <input type="text" value={workLocation} className="border p-2 w-full" readOnly />
      </div>

      {/* テーブル */}
      <table className="w-full border">
        <thead>
          <tr className="bg-blue-200">
            <th className="border p-2">品番</th>
            <th className="border p-2">品名</th>
            <th className="border p-2">規格</th>
            <th className="border p-2">数量</th>
            <th className="border p-2">単位</th>
            <th className="border p-2">出庫予定日</th>
            <th className="border p-2">単価</th>
            <th className="border p-2">金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{item.itemCode}</td>
              <td className="border p-2">{item.itemName}</td>
              <td className="border p-2">{item.specification}</td>
              <td className="border p-2">{item.quantity}</td>
              <td className="border p-2">{item.unit}</td>
              <td className="border p-2">{item.plannedShipmentDate}</td>
              <td className="border p-2">{item.unitPrice.toLocaleString()}</td>
              <td className="border p-2">{(item.unitPrice * item.quantity).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 合計金額 */}
      <div className="mt-4 font-bold text-right">
        <span>金額合計: {totalAmount.toLocaleString()} 円</span>
      </div>

      {/* ボタン */}
      <div className="mt-4 flex justify-end">
        <button onClick={onRegister} className="bg-green-500 text-white p-2 mx-2 rounded">
          登録
        </button>
        <button onClick={onDelete} className="bg-red-500 text-white p-2 mx-2 rounded">
          削除
        </button>
      </div>
    </div>
  );
};

export default ShipmentInput;