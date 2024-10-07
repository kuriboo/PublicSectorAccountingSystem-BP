// components/CustomForm.tsx
import React, { useState } from 'react';

interface CustomFormProps {
  tableNameOptions: string[];
  onAddRow: () => void;
  onRemoveRow: () => void;
  onSave: () => void;
  onClear: () => void;
  onExit: () => void;
}

const CustomForm: React.FC<CustomFormProps> = ({
  tableNameOptions,
  onAddRow,
  onRemoveRow,
  onSave,
  onClear,
  onExit,
}) => {
  const [selectedTable, setSelectedTable] = useState<string>(tableNameOptions[0]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <div className="mb-2">
        <span className="font-bold">連携区分:</span>
        <label className="ml-2">
          <input type="radio" name="integrationType" value="業者情報取り込み" defaultChecked />
          業者情報取り込み
        </label>
        <label className="ml-2">
          <input type="radio" name="integrationType" value="入札結果取り込み" />
          入札結果取り込み
        </label>
      </div>

      <div className="mb-4">
        <span className="font-bold">一時格納名:</span>
        <select
          className="ml-2 border border-gray-400 rounded"
          value={selectedTable}
          onChange={(e) => setSelectedTable(e.target.value)}
        >
          {tableNameOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex space-x-2 mb-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onAddRow}
        >
          行追加
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onRemoveRow}
        >
          行削除
        </button>
      </div>

      {/* Table for data entry */}
      <div className="mb-4 border border-gray-400 rounded overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">#</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b p-2">1</td>
              {/* Add more cells as needed */}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex space-x-2">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={onSave}
        >
          CSV出力
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default CustomForm;
```