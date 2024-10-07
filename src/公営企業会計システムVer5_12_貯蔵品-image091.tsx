// Component.tsx
import React, { useState } from 'react';
import { FC } from 'react';

type Props = {
  title: string;
  onOk: () => void;
  onCancel: () => void;
  onClear: () => void;
};

const InventoryAdjustment: FC<Props> = ({ title, onOk, onCancel, onClear }) => {
  const [selectedOption, setSelectedOption] = useState<string>('processing');

  return (
    <div className="border p-4 bg-white max-w-lg mx-auto shadow-md">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <div className="flex space-x-4 mb-4">
        <label>
          <input
            type="radio"
            name="adjustmentOption"
            value="processing"
            checked={selectedOption === 'processing'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          按分処理
        </label>
        <label>
          <input
            type="radio"
            name="adjustmentOption"
            value="removal"
            checked={selectedOption === 'removal'}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          按分処理解除
        </label>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold">対象年月</h2>
        {/* Here you can add a dropdown or a date picker component */}
      </div>
      <div className="border p-2 mb-4 h-48">
        <label>
          <input type="checkbox" />
          全選択
        </label>
        {/* Here, a list/table of items can be dynamically loaded */}
      </div>
      <div className="text-xs text-gray-600 mb-4">
        複数保管場所、同一品番、移動平均法で管理している貯蔵品について、在庫数量に応じて ...
      </div>
      <div className="flex space-x-4 justify-end">
        <button className="bg-gray-200 px-4 py-2 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onOk}>
          OK
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onCancel}>
          終了
        </button>
      </div>
    </div>
  );
};

export default InventoryAdjustment;