// Import necessary modules
import React from 'react';

// Define TypeScript interfaces for props
interface YearSelectorProps {
  currentYear: string;
  newYear: string;
  onYearChange: (year: string) => void;
}

interface SummaryProps {
  summary: string;
  lastUpdate: string;
}

// YearSelector component definition
const YearSelector: React.FC<YearSelectorProps> = ({ currentYear, newYear, onYearChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <span>本年度</span>
      <input
        type="text"
        value={currentYear}
        className="border p-1 rounded"
        readOnly
      />
      <span>年度</span>
      <span>新年度</span>
      <input
        type="text"
        value={newYear}
        onChange={(e) => onYearChange(e.target.value)}
        className="border p-1 rounded"
      />
      <span>年度</span>
    </div>
  );
};

// Summary component definition
const Summary: React.FC<SummaryProps> = ({ summary, lastUpdate }) => {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold">処理概要</h2>
      <p>{summary}</p>
      <p className="text-xs mt-4">最終更新日時: {lastUpdate}</p>
    </div>
  );
};

// Main Component
const DataCreationComponent: React.FC = () => {
  const handleYearChange = (year: string) => {
    console.log('New Year Selected:', year);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold text-purple-700">次年度繰越データ作成</h1>
      {/* Year Selector */}
      <YearSelector
        currentYear="令和02"
        newYear="令和03"
        onYearChange={handleYearChange}
      />
      {/* Summary Component */}
      <Summary
        summary="本年度の入出庫データを集計して、新年度に繰り越します。繰越処理完了後は、本年度の月別入出庫データが削除されます。"
        lastUpdate="令和03年02月19日 10時27分"
      />
      {/* Button Controls */}
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default DataCreationComponent;
```