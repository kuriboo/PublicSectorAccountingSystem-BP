import React from 'react';

// プロパティの型定義
type SurveyFormProps = {
  fiscalStartYear: string;
  fiscalEndYear: string;
  startCode: string;
  endCode: string;
  onExportCSV: () => void;
  onClear: () => void;
  onExit: () => void;
};

// フォームコンポーネント
const SurveyForm: React.FC<SurveyFormProps> = ({
  fiscalStartYear,
  fiscalEndYear,
  startCode,
  endCode,
  onExportCSV,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-8 bg-gray-100 rounded shadow-lg">
      <h1 className="text-xl font-bold mb-4">債務負担行為に関する調書</h1>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          基準年度
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={fiscalStartYear}
            className="mt-1 block w-20 py-2 px-3 border border-gray-300 rounded"
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            value={fiscalEndYear}
            className="mt-1 block w-20 py-2 px-3 border border-gray-300 rounded"
            readOnly
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          事業科目
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={startCode}
            className="mt-1 block w-20 py-2 px-3 border border-gray-300 rounded"
            readOnly
          />
          <span>~</span>
          <input
            type="text"
            value={endCode}
            className="mt-1 block w-20 py-2 px-3 border border-gray-300 rounded"
            readOnly
          />
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={onExportCSV}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default SurveyForm;
```