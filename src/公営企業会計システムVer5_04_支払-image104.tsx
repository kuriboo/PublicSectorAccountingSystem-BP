import React from 'react';

type DecisionComponentProps = {
  decisionDateStart: string;
  decisionDateEnd: string;
  rangeStart: string;
  rangeEnd: string;
  targetOption: 'excluding' | 'including' | 'all';
  onConfirm: () => void;
  onClear: () => void;
  onExit: () => void;
};

const DecisionComponent: React.FC<DecisionComponentProps> = ({
  decisionDateStart,
  decisionDateEnd,
  rangeStart,
  rangeEnd,
  targetOption,
  onConfirm,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">振替伝票決裁確定</h2>
      <div className="mb-4 p-4 border">
        <h3 className="text-md font-semibold mb-2">範囲指定</h3>
        <div className="flex items-center mb-2">
          <label className="mr-2">決裁確定日:</label>
          <input
            type="text"
            value={decisionDateStart}
            readOnly
            className="border px-2 py-1 mr-2"
          />
          <span>~</span>
          <input
            type="text"
            value={decisionDateEnd}
            readOnly
            className="border px-2 py-1 ml-2"
          />
        </div>
        <div className="flex items-center">
          <button className="mr-2 bg-blue-200 px-4 py-1 rounded">所属</button>
          <input
            type="text"
            value={rangeStart}
            readOnly
            className="border px-2 py-1 mr-2"
          />
          <span>~</span>
          <input
            type="text"
            value={rangeEnd}
            readOnly
            className="border px-2 py-1 ml-2"
          />
        </div>
      </div>

      <div className="mb-4 p-4 border">
        <h3 className="text-md font-semibold mb-2">対象</h3>
        <div className="flex items-center">
          <label className="mr-2">
            <input
              type="radio"
              name="target"
              value="excluding"
              checked={targetOption === 'excluding'}
              readOnly
            />
            給与連携以外
          </label>
          <label className="mr-2">
            <input
              type="radio"
              name="target"
              value="including"
              checked={targetOption === 'including'}
              readOnly
            />
            給与連携
          </label>
          <label>
            <input
              type="radio"
              name="target"
              value="all"
              checked={targetOption === 'all'}
              readOnly
            />
            すべて
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={onConfirm}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default DecisionComponent;
```