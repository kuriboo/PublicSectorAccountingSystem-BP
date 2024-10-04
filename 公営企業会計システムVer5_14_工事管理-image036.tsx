```tsx
import React from 'react';

type FormProps = {
  materialName: string;
  materialCode: string;
  specName: string;
  specCode: string;
  quantity: number;
  unit: string;
  asset: string;
  subSection: string;
  detail: string;
  amount: number;
  year: string;
  routeNumber: number;
  oldProjectNumber: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const FormComponent: React.FC<FormProps> = ({
  materialName,
  materialCode,
  specName,
  specCode,
  quantity,
  unit,
  asset,
  subSection,
  detail,
  amount,
  year,
  routeNumber,
  oldProjectNumber,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">材料名称</label>
        <input
          type="text"
          value={`${materialCode} ${materialName}`}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">規格名称</label>
        <input
          type="text"
          value={`${specCode} ${specName}`}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>
      <div className="mb-4 flex items-center">
        <label className="block text-sm font-bold mb-1 mr-2">数量・単位</label>
        <input
          type="number"
          value={quantity}
          className="border rounded p-2 mr-2"
          readOnly
        />
        <span>{unit}</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">固定資産節</label>
        <input
          type="text"
          value={asset}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">細節</label>
        <input
          type="text"
          value={subSection}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">明細</label>
        <input
          type="text"
          value={detail}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>
      <div className="mb-4 flex items-center">
        <label className="block text-sm font-bold mb-1 mr-2">税抜金額</label>
        <input
          type="number"
          value={amount}
          className="border rounded p-2"
          readOnly
        />
      </div>
      <div className="mb-4 flex items-center">
        <label className="block text-sm font-bold mb-1 mr-2">布設年度</label>
        <input
          type="text"
          value={year}
          className="border rounded p-2 mr-2"
          readOnly
        />
      </div>
      <div className="mb-4 flex items-center">
        <label className="block text-sm font-bold mb-1 mr-2">路線番号</label>
        <input
          type="number"
          value={routeNumber}
          className="border rounded p-2"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">旧工事番号</label>
        <input
          type="text"
          value={oldProjectNumber}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default FormComponent;
```