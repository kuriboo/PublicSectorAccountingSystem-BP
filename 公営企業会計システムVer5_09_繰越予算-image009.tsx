```tsx
import React from 'react';

// 型定義
interface YearSelectorProps {
  year: number;
  onChange: (year: number) => void;
  onOk: () => void;
  onCancel: () => void;
}

const YearSelector: React.FC<YearSelectorProps> = ({ year, onChange, onOk, onCancel }) => {
  // 年の選択を変更
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = parseInt(e.target.value, 10);
    onChange(selectedYear);
  };

  // 年のオプションを生成
  const generateYearOptions = (start: number, count: number) => {
    return Array.from({ length: count }, (_, index) => start + index).map((year) => (
      <option key={year} value={year}>
        平成{year}
      </option>
    ));
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">繰越予算確定処理</h1>
      <div className="mb-6">
        <label className="mr-2">
          <select
            value={year}
            onChange={handleYearChange}
            className="border rounded px-2 py-1"
          >
            {generateYearOptions(29, 10)}
          </select>
        </label>
        <span className="ml-2">年度の繰越データを次年度へ繰越します。</span>
      </div>
      <div className="flex justify-end">
        <button
          onClick={onOk}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          OK
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default YearSelector;
```