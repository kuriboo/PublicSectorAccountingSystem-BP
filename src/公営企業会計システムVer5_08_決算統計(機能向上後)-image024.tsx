// Import necessary libraries
import React from 'react';

// Define TypeScript types for the component props
interface ExportFormProps {
  era: string;
  category: string;
  range: string;
  target: string;
  onSearch: () => void;
  onExportCSV: () => void;
  onClear: () => void;
}

// Define the component
const ExportForm: React.FC<ExportFormProps> = ({
  era,
  category,
  range,
  target,
  onSearch,
  onExportCSV,
  onClear,
}) => {
  return (
    <div className="p-5 bg-white shadow-lg rounded-lg space-y-5">
      {/* Era Selection */}
      <div className="flex items-center space-x-2">
        <label htmlFor="era" className="font-bold">Era:</label>
        <select id="era" className="border rounded p-2" value={era}>
          <option value="令和02">令和02</option>
          <option value="令和03">令和03</option>
        </select>
      </div>

      {/* Output Category */}
      <div className="space-y-2">
        <div className="font-bold">出力区分</div>
        <div className="space-x-4">
          <label>
            <input type="radio" name="category" value="集計" checked={category === "集計"} />
            決算金額集計
          </label>
          <label>
            <input type="radio" name="category" value="処理" checked={category === "処理"} />
            決算統計千円丸め処理
          </label>
          <label>
            <input type="radio" name="category" value="分析" checked={category === "分析"} />
            決算統計分析データ
          </label>
        </div>
      </div>

      {/* Range Specification */}
      <div className="space-y-2">
        <div className="font-bold">範囲指定</div>
        <div className="flex items-center space-x-4">
          <label>
            <input type="radio" name="range" value="予算科目" checked={range === "予算科目"} />
            予算科目
          </label>
          <label>
            <input type="radio" name="range" value="仕訳科目" checked={range === "仕訳科目"} />
            仕訳科目
          </label>
          <button onClick={onSearch} className="bg-blue-500 text-white rounded px-3 py-1">
            科目検索
          </button>
          <input type="text" className="border rounded p-2 mx-2"/>
          <span>~</span>
          <input type="text" className="border rounded p-2 mx-2"/>
        </div>
      </div>

      {/* Target Selection */}
      <div className="space-y-2">
        <div className="font-bold">集計対象</div>
        <div className="space-x-4">
          <label>
            <input type="radio" name="target" value="全体" checked={target === "全体"} />
            全体
          </label>
          <label>
            <input type="radio" name="target" value="ブロック" checked={target === "ブロック"} />
            ブロック
          </label>
          <label>
            <input type="radio" name="target" value="セグメント" checked={target === "セグメント"} />
            セグメント
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button onClick={onExportCSV} className="bg-green-500 text-white rounded px-4 py-2">
          CSV出力
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white rounded px-4 py-2">
          クリア
        </button>
      </div>
    </div>
  );
};

export default ExportForm;
```