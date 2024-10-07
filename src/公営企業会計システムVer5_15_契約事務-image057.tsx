// components/ItemDetail.tsx
import React from 'react';

type ItemDetailProps = {
  itemNameCode: string;
  itemName: string;
  specificationCode: string;
  specificationName: string;
  quantity: number;
  unit: string;
  priceIncludingTax: number;
  priceExcludingTax: number;
  consumptionTax: number;
  totalIncludingTax: number;
  totalExcludingTax: number;
  totalConsumptionTax: number;
  importingLocation: string;
  periodFrom: string;
  periodTo: string;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const ItemDetail: React.FC<ItemDetailProps> = ({
  itemNameCode,
  itemName,
  specificationCode,
  specificationName,
  quantity,
  unit,
  priceIncludingTax,
  priceExcludingTax,
  consumptionTax,
  totalIncludingTax,
  totalExcludingTax,
  totalConsumptionTax,
  importingLocation,
  periodFrom,
  periodTo,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-bold">単価名称コード: {itemNameCode}</h2>
        <p>単価名称: {itemName}</p>
        <p>規格名称コード: {specificationCode}</p>
        <p>規格名称: {specificationName}</p>
        <p>数量: {quantity}</p>
        <p>単位: {unit}</p>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-2">
        <div>
          <h3 className="font-bold">単価</h3>
          <p>税込額: {priceIncludingTax.toLocaleString()}</p>
          <p>税抜額: {priceExcludingTax.toLocaleString()}</p>
          <p>消費税額: {consumptionTax.toLocaleString()}</p>
        </div>
        <div>
          <h3 className="font-bold">総値</h3>
          <p>税込額: {totalIncludingTax.toLocaleString()}</p>
          <p>税抜額: {totalExcludingTax.toLocaleString()}</p>
          <p>消費税額: {totalConsumptionTax.toLocaleString()}</p>
        </div>
      </div>
      <div className="mb-4">
        <p>搬入場所: {importingLocation}</p>
        <p>期限: {periodFrom} 〜 {periodTo}</p>
      </div>
      <div className="flex space-x-2">
        <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">行確定</button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default ItemDetail;
