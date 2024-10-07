import React from 'react';

type PriceSettingProps = {
  startDate: string;
  price: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const PriceSetting: React.FC<PriceSettingProps> = ({ startDate, price, onOk, onClear, onCancel }) => {
  return (
    <div className="p-4 border rounded shadow-lg w-80">
      <h2 className="font-bold mb-4">新製品単価設定</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">適用開始年月日</label>
        <input
          type="text"
          value={startDate}
          readOnly
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">単価</label>
        <input
          type="text"
          value={price.toLocaleString('ja-JP', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          readOnly
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        />
      </div>
      <div className="flex justify-between">
        <button onClick={onOk} className="bg-gray-300 px-4 py-2 rounded shadow hover:bg-gray-400">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded shadow hover:bg-gray-400">
          クリア
        </button>
        <button onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded shadow hover:bg-gray-400">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PriceSetting;
```