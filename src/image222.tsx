import React from 'react';

// TypeScript Props Definition
type PrintModalProps = {
  items: { name: string; checked: boolean }[];
  onReprintChange: (value: boolean) => void;
  onNumberChange: (type: 'change' | 'correction', value: number) => void;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// React Component
const PrintModal: React.FC<PrintModalProps> = ({
  items,
  onReprintChange,
  onNumberChange,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="w-96 p-4 border rounded-md bg-white shadow-md">
      <h2 className="mb-3 text-lg font-bold">印刷対象帳票名</h2>
      <ul className="mb-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center mb-1">
            <input
              type="checkbox"
              checked={item.checked}
              className="mr-2"
              // Here, you can also implement onChange if needed
            />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      <div className="mb-3">
        <span className="mr-3">再発行</span>
        <label className="mr-3">
          <input
            type="radio"
            name="reprint"
            onChange={() => onReprintChange(true)}
          />
          有
        </label>
        <label>
          <input
            type="radio"
            name="reprint"
            onChange={() => onReprintChange(false)}
          />
          無
        </label>
      </div>
      <div className="mb-3">
        <span className="mr-3">変更回数指定</span>
        <input
          type="number"
          className="border p-1 mr-3"
          onChange={(e) =>
            onNumberChange('change', Number(e.target.value))
          }
        />
        指定無
      </div>
      <div className="mb-3">
        <span className="mr-3">訂正回数指定</span>
        <input
          type="number"
          className="border p-1 mr-3"
          onChange={(e) =>
            onNumberChange('correction', Number(e.target.value))
          }
        />
        指定
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="bg-gray-300 p-2 rounded"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="bg-gray-300 p-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 p-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PrintModal;
```