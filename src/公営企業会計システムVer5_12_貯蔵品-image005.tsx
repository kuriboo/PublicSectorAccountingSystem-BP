import React from 'react';

// Type definitions for component props
interface ProductDetailsProps {
  productCode: string;
  productName: string;
  specification: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  amount: number;
  stockQuantity: number;
  stockAmount: number;
  entries: {
    date: string;
    quantity: number;
    unitPrice: number;
    amount: number;
  }[];
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productCode,
  productName,
  specification,
  quantity,
  unit,
  unitPrice,
  amount,
  stockQuantity,
  stockAmount,
  entries,
  onConfirm,
  onClear,
  onCancel
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <div className="text-xl font-bold mb-4">未発注入庫明細編集</div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-bold mb-1">品番</label>
          <input
            type="text"
            value={productCode}
            readOnly
            className="w-full border p-2 mb-4"
          />
          
          <label className="block font-bold mb-1">品名</label>
          <p className="mb-4">{productName}</p>
          
          <label className="block font-bold mb-1">規格</label>
          <p className="mb-4">{specification}</p>
        </div>
        <div>
          <label className="block font-bold mb-1">数量</label>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-full border p-2 mb-4"
          />
          
          <label className="block font-bold mb-1">単位</label>
          <p className="mb-4">{unit}</p>
          
          <label className="block font-bold mb-1">単価</label>
          <input
            type="text"
            value={unitPrice}
            readOnly
            className="w-full border p-2 mb-4"
          />
        </div>
      </div>

      <div className="my-4">
        <label className="block font-bold mb-1">金額</label>
        <input
          type="text"
          value={amount}
          readOnly
          className="w-full border p-2"
        />
      </div>
      
      <div className="flex justify-between my-4">
        <p>現在庫数量: {stockQuantity}</p>
        <p>現在庫金額: {stockAmount}</p>
      </div>
      
      <table className="w-full border-t mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border-b">入庫日</th>
            <th className="p-2 border-b">数量</th>
            <th className="p-2 border-b">単価</th>
            <th className="p-2 border-b">金額</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border-b">{entry.date}</td>
              <td className="p-2 border-b">{entry.quantity}</td>
              <td className="p-2 border-b">{entry.unitPrice}</td>
              <td className="p-2 border-b">{entry.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="flex justify-end mt-6 space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
```