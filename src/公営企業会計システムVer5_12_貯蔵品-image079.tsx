import React from 'react';

type FormProps = {
  date: string;
  startLocation: string;
  endLocation: string;
  startCode: string;
  endCode: string;
  onDateChange: (date: string) => void;
  onStartLocationChange: (location: string) => void;
  onEndLocationChange: (location: string) => void;
  onStartCodeChange: (code: string) => void;
  onEndCodeChange: (code: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const InventoryForm: React.FC<FormProps> = ({
  date,
  startLocation,
  endLocation,
  startCode,
  endCode,
  onDateChange,
  onStartLocationChange,
  onEndLocationChange,
  onStartCodeChange,
  onEndCodeChange,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 shadow-md rounded">
      {/* Title */}
      <h1 className="text-lg font-bold mb-4">棚卸入出庫伝票作成</h1>

      {/* Date Input */}
      <div className="mb-4">
        <label className="block font-medium">棚卸年月日</label>
        <input
          type="text"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="border p-2 mt-1 block w-full"
        />
      </div>

      {/* Location Range Inputs */}
      <div className="mb-4">
        <label className="block font-medium">保管場所</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={startLocation}
            onChange={(e) => onStartLocationChange(e.target.value)}
            className="border p-2 w-full"
          />
          <span>~</span>
          <input
            type="text"
            value={endLocation}
            onChange={(e) => onEndLocationChange(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
      </div>

      {/* Code Range Inputs */}
      <div className="mb-4">
        <label className="block font-medium">仕訳コード</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={startCode}
            onChange={(e) => onStartCodeChange(e.target.value)}
            className="border p-2 w-full"
          />
          <span>~</span>
          <input
            type="text"
            value={endCode}
            onChange={(e) => onEndCodeChange(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white py-1 px-4 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white py-1 px-4 rounded">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 text-white py-1 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default InventoryForm;
```