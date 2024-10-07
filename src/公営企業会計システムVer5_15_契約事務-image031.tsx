import React from 'react';

type ProductDetailProps = {
  unitPriceCode: string;
  unitPriceName: string;
  specificationsName: string;
  quantity: number;
  unit: string;
  taxIncluded: number;
  taxExcluded: number;
  consumptionTax: number;
  deliveryLocation: string;
  deliveryDeadlineStart: string;
  deliveryDeadlineEnd: string;
  remarks: string;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const ProductDetail: React.FC<ProductDetailProps> = ({
  unitPriceCode,
  unitPriceName,
  specificationsName,
  quantity,
  unit,
  taxIncluded,
  taxExcluded,
  consumptionTax,
  deliveryLocation,
  deliveryDeadlineStart,
  deliveryDeadlineEnd,
  remarks,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="flex mb-4">
        <div className="w-1/2 pr-4">
          <label htmlFor="unitPriceCode" className="block font-semibold">単価名称コード</label>
          <input type="text" id="unitPriceCode" value={unitPriceCode} readOnly className="block w-full p-2 border"/>
        </div>
        <div className="w-1/2 pl-4">
          <label htmlFor="unitPriceName" className="block font-semibold">単価名称</label>
          <input type="text" id="unitPriceName" value={unitPriceName} readOnly className="block w-full p-2 border"/>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="specificationsName" className="block font-semibold">規格名称</label>
        <input type="text" id="specificationsName" value={specificationsName} readOnly className="block w-full p-2 border"/>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 pr-4">
          <label htmlFor="quantity" className="block font-semibold">数量</label>
          <input type="number" id="quantity" value={quantity} readOnly className="block w-full p-2 border" />
        </div>
        <div className="w-1/2 pl-4">
          <label htmlFor="unit" className="block font-semibold">単位</label>
          <input type="text" id="unit" value={unit} readOnly className="block w-full p-2 border"/>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/3 pr-2">
          <label className="block font-semibold">単価</label>
          <div>税込額: {taxIncluded}</div>
          <div>税抜額: {taxExcluded}</div>
          <div>消費税額: {consumptionTax}</div>
        </div>
        <div className="w-2/3 pl-2">
          {/* Implement additional fields or layout within this section if needed */}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="deliveryLocation" className="block font-semibold">納入場所</label>
        <input type="text" id="deliveryLocation" value={deliveryLocation} readOnly className="block w-full p-2 border"/>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 pr-4">
          <label htmlFor="deliveryDeadlineStart" className="block font-semibold">納入期限</label>
          <input type="text" id="deliveryDeadlineStart" value={deliveryDeadlineStart} readOnly className="block w-full p-2 border"/>
        </div>
        <div className="w-1/2 pl-4">
          <input type="text" id="deliveryDeadlineEnd" value={deliveryDeadlineEnd} readOnly className="block w-full p-2 border"/>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="remarks" className="block font-semibold">備考</label>
        <textarea id="remarks" value={remarks} readOnly className="block w-full p-2 border"/>
      </div>
      <div className="flex justify-end">
        <button onClick={onConfirm} className="bg-blue-500 text-white py-2 px-4 mr-2 rounded">行確定</button>
        <button onClick={onClear} className="bg-gray-300 text-black py-2 px-4 mr-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-gray-300 text-black py-2 px-4 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default ProductDetail;
