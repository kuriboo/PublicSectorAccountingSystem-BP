import React from 'react';

// 定義するPropsの型
interface ProductDetailFormProps {
  defaultUnitPrice?: number;
  defaultQuantity?: number;
  defaultTaxRate?: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const ProductDetailForm: React.FC<ProductDetailFormProps> = ({
  defaultUnitPrice = 13230,
  defaultQuantity = 1,
  defaultTaxRate = 0,
  onOk,
  onClear,
  onCancel
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg">
      <div className="mb-4">
        <span className="font-bold">商品税込区分:</span>
        <span className="ml-2">税込</span>
        <span className="ml-8">税抜</span>
      </div>

      <div className="mb-4">
        <div className="flex items-center">
          <label className="mr-2">単価:</label>
          <input type="text" className="border rounded p-2 flex-1" defaultValue={defaultUnitPrice} />
        </div>
      </div>

      <div className="mb-4">
        <label>適用開始日: </label>
        <input type="date" className="border rounded p-2" />
      </div>

      <div className="mb-4">
        <label>単位名:</label>
        <input type="text" className="border rounded p-2 w-full" />
      </div>

      <div className="mb-4">
        <label>単位:</label>
        <input type="text" className="border rounded p-2 w-full" defaultValue="本" />
      </div>

      <div className="mb-4 flex items-center">
        <label className="mr-2">数量:</label>
        <input type="number" defaultValue={defaultQuantity} className="border rounded p-2 w-16" />
        <span className="mx-2">x 単価</span>
        <input type="text" className="border rounded p-2 w-24" defaultValue={defaultUnitPrice} readOnly />
        <span className="mx-2">= 金額：</span>
        <input type="text" className="border rounded p-2 flex-1" readOnly defaultValue={defaultUnitPrice * defaultQuantity} />
      </div>

      <div className="mb-4 flex items-center">
        <label className="mr-2">他税率:</label>
        <input type="number" defaultValue={defaultTaxRate} className="border rounded p-2 w-16" />
        <span className="mx-2">%</span>
        <label className="mr-2">他税額:</label>
        <input type="text" className="border rounded p-2 flex-1" readOnly defaultValue={0} />
      </div>

      <div className="flex justify-end space-x-4">
        <button onClick={onOk} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">クリア</button>
        <button onClick={onCancel} className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default ProductDetailForm;
