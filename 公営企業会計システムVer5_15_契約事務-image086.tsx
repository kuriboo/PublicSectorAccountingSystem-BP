```tsx
import React from 'react';

// TypeScript interface for component props
interface CsvIntegrationProps {
  title?: string;
  onAddRow?: () => void;
  onDeleteRow?: () => void;
  onExportCsv?: () => void;
}

// CSV Integration Component
const CsvIntegration: React.FC<CsvIntegrationProps> = ({
  title = "CSV連携一時格納保守",
  onAddRow,
  onDeleteRow,
  onExportCsv,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      {/* Header */}
      <h1 className="text-xl font-bold text-blue-700">{title}</h1>

      {/* CSV Integration Options */}
      <div className="my-4">
        <label className="mr-4">
          連携区分: 
          <input type="radio" name="csv-type" defaultChecked className="ml-2" /> 業者情報取込
          <input type="radio" name="csv-type" className="ml-2" /> 入札結果取込
        </label>
      </div>

      {/* Temporary Storage Name */}
      <div className="my-4">
        <span className="mr-2">一時格納名:</span>
        <select className="p-1 border rounded">
          <option>入札履歴テーブル</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex space-x-2 mb-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded" onClick={onAddRow}>
          行追加
        </button>
        <button className="bg-red-300 hover:bg-red-400 text-black py-1 px-4 rounded" onClick={onDeleteRow}>
          行削除
        </button>
      </div>

      {/* Data Table */}
      <div className="border overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border">1</th>
              <th className="px-4 py-2 border"></th>
              <th className="px-4 py-2 border"></th>
              <th className="px-4 py-2 border"></th>
              <th className="px-4 py-2 border"></th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder row */}
            <tr>
              <td className="border px-4 py-2 text-center"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CSV Export Button */}
      <div className="mt-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded" onClick={onExportCsv}>
          CSV出力
        </button>
      </div>
    </div>
  );
};

export default CsvIntegration;
```