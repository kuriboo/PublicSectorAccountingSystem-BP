```tsx
import React from 'react';

// 定義するプロパティの型
type FormComponentProps = {
  era?: string;
  years?: string[];
  selectedYear?: string;
  segments?: { code: string; description: string }[];
  onYearChange?: (year: string) => void;
  onSegmentSearch?: () => void;
  onClear?: () => void;
  onCancel?: () => void;
};

const FormComponent: React.FC<FormComponentProps> = ({
  era = '令和',
  years = ['令和29', '令和28', '令和27'],
  selectedYear = '令和29',
  segments = [
    { code: '001 01 01 01', description: '水道料金' },
    { code: '0001', description: '水道料金' },
    { code: '0002', description: '水道料金(旧税率)' },
  ],
  onYearChange,
  onSegmentSearch,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      {/* 年度選択部分 */}
      <div className="flex items-center mb-4">
        <span className="mr-2">{era}</span>
        <select
          className="px-2 py-1 border rounded"
          value={selectedYear}
          onChange={(e) => onYearChange && onYearChange(e.target.value)}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* 科目情報部分 */}
      <div className="mb-4">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center mb-1">
            <span className="w-24">{segment.code}</span>
            <span className="w-full">{segment.description}</span>
          </div>
        ))}
        <button
          onClick={onSegmentSearch}
          className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          科目検索
        </button>
      </div>

      {/* ボタン部分 */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onClear}
          className="px-4 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```