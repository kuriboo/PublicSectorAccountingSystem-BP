import React from 'react';

// Props の型定義
type InputFormProps = {
  startDate: string;
  endDate: string;
  locationCode: string;
  itemCodeStart: string;
  itemCodeEnd: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const InputForm: React.FC<InputFormProps> = ({
  startDate,
  endDate,
  locationCode,
  itemCodeStart,
  itemCodeEnd,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md w-2/3 mx-auto">
      {/* 内部のラベルと入力フィールド */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">入出庫年月</label>
        <div className="flex items-center space-x-2">
          <input type="text" value={startDate} className="border p-2 rounded" readOnly />
          <span>〜</span>
          <input type="text" value={endDate} className="border p-2 rounded" readOnly />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block mb-2 font-semibold">保管場所</label>
        <input type="text" value={locationCode} className="border p-2 rounded w-full" readOnly />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">品番</label>
        <div className="flex items-center space-x-2">
          <input type="text" value={itemCodeStart} className="border p-2 rounded" readOnly />
          <span>〜</span>
          <input type="text" value={itemCodeEnd} className="border p-2 rounded" readOnly />
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white p-2 rounded shadow hover:bg-blue-600">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white p-2 rounded shadow hover:bg-gray-600">
          クリア
        </button>
        <button onClick={onCancel} className="bg-red-500 text-white p-2 rounded shadow hover:bg-red-600">
          終了
        </button>
      </div>
    </div>
  );
};

export default InputForm;
```