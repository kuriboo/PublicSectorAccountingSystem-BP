import React from 'react';

// プロパティの型定義
interface ReportFormProps {
  startYear: number;
  endYear: number;
  onStartYearChange: (year: number) => void;
  onEndYearChange: (year: number) => void;
  startCode: number;
  endCode: number;
  onStartCodeChange: (code: number) => void;
  onEndCodeChange: (code: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({
  startYear,
  endYear,
  onStartYearChange,
  onEndYearChange,
  startCode,
  endCode,
  onStartCodeChange,
  onEndCodeChange,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 w-full max-w-2xl mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">年度</label>
        <input
          type="number"
          value={startYear}
          onChange={(e) => onStartYearChange(parseInt(e.target.value, 10))}
          className="border rounded p-2 mr-2 w-24"
        />
        ~
        <input
          type="number"
          value={endYear}
          onChange={(e) => onEndYearChange(parseInt(e.target.value, 10))}
          className="border rounded p-2 ml-2 w-24"
        />
      </div>
      <div className="mb-4 border p-4">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">予算科目</label>
          <input
            type="number"
            value={startCode}
            onChange={(e) => onStartCodeChange(parseInt(e.target.value, 10))}
            className="border rounded p-2 mr-2 w-32"
          />
          ~
          <input
            type="number"
            value={endCode}
            onChange={(e) => onEndCodeChange(parseInt(e.target.value, 10))}
            className="border rounded p-2 ml-2 w-32"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">決算報告書集計番号</label>
          <input
            type="number"
            defaultValue={0}
            className="border rounded p-2 mr-2 w-16"
          />
          ~
          <input
            type="number"
            defaultValue={999}
            className="border rounded p-2 ml-2 w-16"
          />
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
```