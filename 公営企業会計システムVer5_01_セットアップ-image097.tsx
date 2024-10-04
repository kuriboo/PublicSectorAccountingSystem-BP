```tsx
import React from 'react';

type ComponentProps = {
  year: string;
  rangeStart: number;
  rangeEnd: number;
  onYearChange: (year: string) => void;
  onRangeChange: (start: number, end: number) => void;
  onExecute: () => void;
  onClear: () => void;
  onExit: () => void;
};

const CashFlowComponent: React.FC<ComponentProps> = ({
  year,
  rangeStart,
  rangeEnd,
  onYearChange,
  onRangeChange,
  onExecute,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h1 className="text-lg mb-2">キャッシュ・フロー計算書集計マスタリスト作成</h1>
      <div className="mb-4">
        <label className="block mb-1">会計年度</label>
        <input 
          type="text" 
          value={year} 
          onChange={(e) => onYearChange(e.target.value)}
          className="border rounded p-1 w-full"
        />
      </div>

      <fieldset className="border p-4 mb-4">
        <legend className="text-sm">範囲指定</legend>
        <div className="flex mb-2">
          <label className="mr-4">
            <input type="radio" name="category" value="execution" />
            実行
          </label>
          <label>
            <input type="radio" name="category" value="budget" />
            予算
          </label>
        </div>
        <div className="flex mb-2">
          <label className="mr-4">
            <input type="radio" name="method" value="indirect" />
            間接法
          </label>
          <label>
            <input type="radio" name="method" value="direct" />
            直接法
          </label>
        </div>
        <div className="flex items-center">
          <label className="mr-2">集計番号</label>
          <input 
            type="number" 
            value={rangeStart} 
            onChange={(e) => onRangeChange(parseInt(e.target.value, 10), rangeEnd)}
            className="border rounded p-1 w-16 mr-2"
          />
          <span>~</span>
          <input 
            type="number" 
            value={rangeEnd} 
            onChange={(e) => onRangeChange(rangeStart, parseInt(e.target.value, 10))}
            className="border rounded p-1 w-16 ml-2"
          />
        </div>
      </fieldset>

      <div className="flex justify-end space-x-2">
        <button onClick={onExecute} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
          クリア
        </button>
        <button onClick={onExit} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
          終了
        </button>
      </div>
    </div>
  );
};

export default CashFlowComponent;
```