import React from 'react';

// TypeScriptの型定義
type RangeSelectorProps = {
  startYear: number;
  endYear: number;
  onSelect: (value: string) => void;
  onClear: () => void;
  onClose: () => void;
};

const RangeSelector: React.FC<RangeSelectorProps> = ({
  startYear,
  endYear,
  onSelect,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4">
      {/* 年度選択 */}
      <div className="mb-4">
        <label htmlFor="year" className="text-sm text-gray-700 mr-2">
          年度
        </label>
        <select id="year" className="border">
          {Array.from(
            { length: endYear - startYear + 1 },
            (_, i) => startYear + i
          ).map((year) => (
            <option key={year} value={year}>
              平成 {year}
            </option>
          ))}
        </select>
      </div>

      {/* 範囲指定 */}
      <div className="border p-4 mb-4">
        <p className="mb-2">範囲指定</p>
        <div className="flex items-center">
          <button className="bg-purple-200 py-1 px-3 rounded-md mr-2">
            所属
          </button>
          <input
            type="text"
            placeholder="0000000"
            className="border py-1 px-2 mr-2"
          />
          <span className="mx-2">~</span>
          <button className="bg-purple-200 py-1 px-3 rounded-md mr-2">
            所属
          </button>
          <input
            type="text"
            placeholder="9999999"
            className="border py-1 px-2"
          />
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 text-white py-1 px-3 rounded-md"
          onClick={() => onSelect("選択された値")}
        >
          OK
        </button>
        <button
          className="bg-gray-300 py-1 px-3 rounded-md"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 py-1 px-3 rounded-md"
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default RangeSelector;
```