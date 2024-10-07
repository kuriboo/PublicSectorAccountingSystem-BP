import React from 'react';

type ItemInputProps = {
  taxType: '税込' | '抜'; // 単価税区分を選択
  unitName: string; // 単価名称
  specificationName?: string; // 規格名称
  quantity: number; // 数量
  unitPrice: number; // 単価
  startDate: string; // 適用開始日
  onConfirm: () => void; // OKボタンのクリックハンドラ
  onClear: () => void; // クリアボタンのクリックハンドラ
  onCancel: () => void; // キャンセルボタンのクリックハンドラ
};

const ItemInput: React.FC<ItemInputProps> = ({
  taxType,
  unitName,
  specificationName = '',
  quantity,
  unitPrice,
  startDate,
  onConfirm,
  onClear,
  onCancel,
}) => {
  const calculateTotal = () => quantity * unitPrice;

  return (
    <div className="p-4 rounded border shadow-md w-1/2 mx-auto">
      <h2 className="text-lg font-bold mb-4">物品税込区分</h2>
      <div className="mb-4">
        <label className="block mb-1">単価名称</label>
        <input
          type="text"
          value={unitName}
          readOnly
          className="border p-2 w-full mb-2"
        />
        <label className="block mb-1">規格名称</label>
        <input
          type="text"
          value={specificationName}
          readOnly
          className="border p-2 w-full"
        />
      </div>
      <h3 className="text-lg font-bold mb-2">単価内容</h3>
      <div className="border p-4 mb-4">
        <label className="block mb-1">単価税区分</label>
        <div className="flex items-center mb-2">
          <label className="mr-2">税込</label>
          <input
            type="radio"
            checked={taxType === '税込'}
            readOnly
            className="mr-4"
          />
          <label className="mr-2">抜</label>
          <input
            type="radio"
            checked={taxType === '抜'}
            readOnly
          />
        </div>
        <label className="block mb-1">適用開始日</label>
        <input
          type="text"
          value={startDate}
          readOnly
          className="border p-2 w-full mb-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">数量</label>
        <input
          type="number"
          value={quantity}
          readOnly
          className="border p-2 w-full mb-2"
        />
        <label className="block mb-1">単価</label>
        <input
          type="number"
          value={unitPrice}
          readOnly
          className="border p-2 w-full"
        />
        <div className="mt-2">
          = 合計 <span className="font-bold">{calculateTotal()}</span>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onConfirm} className="bg-blue-500 text-white p-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-black p-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-gray-300 text-black p-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default ItemInput;
