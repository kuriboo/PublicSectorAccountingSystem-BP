import React from 'react';

// Props type definition
type RangeFormProps = {
  startValue: string;
  endValue: string;
  onStartValueChange: (value: string) => void;
  onEndValueChange: (value: string) => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onExitClick: () => void;
};

const RangeForm: React.FC<RangeFormProps> = ({
  startValue,
  endValue,
  onStartValueChange,
  onEndValueChange,
  onOkClick,
  onClearClick,
  onExitClick,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
      <h1 className="text-xl font-bold text-center mb-4">支払分割指示マスタリスト作成</h1>
      <div className="border p-4 mb-4">
        <h2 className="font-semibold mb-2">範囲指定</h2>
        <div className="flex items-center mb-2">
          <span className="mr-2">分割元相手先</span>
          <input
            type="text"
            className="border p-1 flex-grow"
            value={startValue}
            onChange={(e) => onStartValueChange(e.target.value)}
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            className="border p-1 flex-grow"
            value={endValue}
            onChange={(e) => onEndValueChange(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onOkClick}
        >
          OK
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={onClearClick}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onExitClick}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default RangeForm;
```