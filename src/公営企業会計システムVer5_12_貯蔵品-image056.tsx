import React from 'react';

interface InputFormProps {
  date: string;
  startCode: string;
  endCode: string;
  onDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onStartCodeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEndCodeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onExitClick: () => void;
}

const InputForm: React.FC<InputFormProps> = ({
  date,
  startCode,
  endCode,
  onDateChange,
  onStartCodeChange,
  onEndCodeChange,
  onOkClick,
  onClearClick,
  onExitClick,
}) => {
  return (
    <div className="container mx-auto mt-10 p-8 border border-gray-300 rounded shadow-md">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">工事別使用材料明細表作成</h1>
      <div className="border-t border-gray-300 pt-4">
        <div className="mb-4">
          <label className="block text-lg text-blue-800 mb-2">日付</label>
          <input
            type="text"
            value={date}
            onChange={onDateChange}
            className="w-full border border-gray-400 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg text-blue-800 mb-2">工事名場所</label>
          <div className="flex items-center">
            <input
              type="text"
              value={startCode}
              onChange={onStartCodeChange}
              className="w-full border border-gray-400 p-2 rounded mr-2"
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              value={endCode}
              onChange={onEndCodeChange}
              className="w-full border border-gray-400 p-2 rounded"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onOkClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            OK
          </button>
          <button
            onClick={onClearClick}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            クリア
          </button>
          <button
            onClick={onExitClick}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            終了
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
```