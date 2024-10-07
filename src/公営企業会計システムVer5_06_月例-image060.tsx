import React from 'react';

// プロパティの型定義
type ChecklistFormProps = {
  date: string;
  startCode: string;
  endCode: string;
  onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onStartCodeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEndCodeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ChecklistForm: React.FC<ChecklistFormProps> = ({
  date,
  startCode,
  endCode,
  onDateChange,
  onStartCodeChange,
  onEndCodeChange,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl text-purple-700 mb-4">予算残額チェックリスト作成</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2">作表年月</label>
        <input
          type="text"
          value={date}
          onChange={onDateChange}
          className="w-full border rounded px-3 py-1"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">予算科目</label>
        <input
          type="text"
          value={startCode}
          onChange={onStartCodeChange}
          className="w-full border rounded px-3 py-1"
        />
      </div>
      <div className="mb-4 flex items-center">
        <span className="mx-2">~</span>
        <input
          type="text"
          value={endCode}
          onChange={onEndCodeChange}
          className="w-full border rounded px-3 py-1"
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded shadow"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-red-500 text-white px-4 py-2 rounded shadow"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ChecklistForm;
```