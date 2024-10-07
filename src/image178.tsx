import React from 'react';

// TypeScript type definition for the component props
type DataRangeComponentProps = {
  year: number;
  setYear: (year: number) => void;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

// Reusable component for the data range input fields
const DataRangeComponent: React.FC<DataRangeComponentProps> = ({
  year,
  setYear,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4">
      {/* Header section */}
      <div className="bg-blue-100 px-2 py-1 text-blue-700 rounded shadow-md">
        <h1 className="text-lg">データ権限個別設定マスタリスト作成</h1>
      </div>

      {/* Year selection */}
      <div className="my-4">
        <label htmlFor="year" className="mr-2">年度:</label>
        <select
          id="year"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="border border-gray-300 rounded p-1"
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={year - i}>{year - i}</option>
          ))}
        </select>
      </div>

      {/* Range specification */}
      <div className="border rounded p-4 shadow-md">
        <h2 className="font-bold mb-2">範囲指定</h2>
        
        {['所属', '担当コード', 'APグループコード', '操作可能所属'].map((label, index) => (
          <div key={index} className="flex items-center mb-2">
            <button className="bg-gray-200 px-3 py-1 mr-2 rounded">{label}</button>
            <input type="text" defaultValue="0000000" className="border rounded p-1 flex-1 mr-2" />
            <span>~</span>
            <input type="text" defaultValue="9999999" className="border rounded p-1 flex-1 ml-2" />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={onOk} className="bg-gray-300 rounded px-4 py-2 hover:bg-gray-400">OK</button>
        <button onClick={onClear} className="bg-gray-300 rounded px-4 py-2 hover:bg-gray-400">クリア</button>
        <button onClick={onExit} className="bg-gray-300 rounded px-4 py-2 hover:bg-gray-400">終了</button>
      </div>
    </div>
  );
};

export default DataRangeComponent;
```