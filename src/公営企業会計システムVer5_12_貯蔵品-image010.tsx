import React from 'react';

// 定義するために、タイプを作成します
type OrderInputProps = {
  processingDate: string;
  fiscalYear: string;
  estimatedNumber: number;
  belonging: string;
  responsibilityLocation: string;
  workSite: string;
  deliveryDate: string;
  orderItems: Array<{
    itemNumber: string;
    itemName: string;
    specifications: string;
    quantity: number;
    unit: string;
    unitPrice: number;
  }>;
  totalAmount: number;
  includeTax: boolean;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

// 再利用可能なコンポーネントを作成します
const OrderInput: React.FC<OrderInputProps> = ({
  processingDate,
  fiscalYear,
  estimatedNumber,
  belonging,
  responsibilityLocation,
  workSite,
  deliveryDate,
  orderItems,
  totalAmount,
  includeTax,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="text-2xl font-bold">発注予定入力</div>
      <div className="flex justify-between">
        <div>
          <div>処理年月日: {processingDate}</div>
          <div>年度: {fiscalYear}</div>
        </div>
        <div>
          <button onClick={onRegister} className="bg-blue-500 text-white px-4 py-2 rounded">
            登録
          </button>
          <button onClick={onEdit} className="bg-yellow-500 text-white px-4 py-2 rounded mx-2">
            訂正
          </button>
          <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">
            削除
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div>所属: {belonging}</div>
          <div>工事名/場所: {workSite}</div>
        </div>
        <div>
          <div>見積依頼番号: {estimatedNumber}</div>
          <div>納期: {deliveryDate}</div>
        </div>
      </div>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">品番</th>
            <th className="border px-4 py-2">品名</th>
            <th className="border px-4 py-2">規格</th>
            <th className="border px-4 py-2">数量</th>
            <th className="border px-4 py-2">単位</th>
            <th className="border px-4 py-2">単価</th>
            <th className="border px-4 py-2">金額</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.itemNumber}</td>
              <td className="border px-4 py-2">{item.itemName}</td>
              <td className="border px-4 py-2">{item.specifications}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
              <td className="border px-4 py-2">{item.unit}</td>
              <td className="border px-4 py-2">{item.unitPrice.toLocaleString()}</td>
              <td className="border px-4 py-2">{(item.unitPrice * item.quantity).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <div>
          <input type="checkbox" checked={includeTax} readOnly />
          <label className="ml-2">帳票金額印字（含む）</label>
        </div>
        <div className="text-xl font-semibold">
          合計金額: {totalAmount.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default OrderInput;
