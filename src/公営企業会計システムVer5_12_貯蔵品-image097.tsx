import React from 'react';

type UnitPriceFormProps = {
  locationCode: string;
  unitCode: string;
  unitName: string;
  unitSpecification: string;
  startDate: string;
  price: number;
  onRegister: () => void;
  onCorrect: () => void;
  onDelete: () => void;
};

const UnitPriceForm: React.FC<UnitPriceFormProps> = ({
  locationCode,
  unitCode,
  unitName,
  unitSpecification,
  startDate,
  price,
  onRegister,
  onCorrect,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      {/* Title */}
      <h1 className="text-xl font-bold text-center mb-4">
        貯蔵単価金額マスタ保守
      </h1>
      {/* Action Buttons */}
      <div className="flex justify-center mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mx-2"
          onClick={onRegister}
        >
          登録
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded mx-2"
          onClick={onCorrect}
        >
          訂正
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded mx-2"
          onClick={onDelete}
        >
          削除
        </button>
      </div>
      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">保管場所</label>
          <input
            type="text"
            value={locationCode}
            readOnly
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block">単価コード</label>
          <input
            type="text"
            value={unitCode}
            readOnly
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block">単価名称</label>
          <input
            type="text"
            value={unitName}
            readOnly
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block">単価規格</label>
          <input
            type="text"
            value={unitSpecification}
            readOnly
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block">適用開始年月日</label>
          <input
            type="text"
            value={startDate}
            readOnly
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block">単価</label>
          <input
            type="number"
            value={price}
            readOnly
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default UnitPriceForm;
```