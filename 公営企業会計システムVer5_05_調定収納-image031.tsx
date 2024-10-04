```tsx
import React from 'react';

type SearchConditionsProps = {
  year: string;
  officeFrom: string;
  officeTo: string;
  periodFrom: string;
  periodTo: string;
  type: string;
  numberFrom: number;
  numberTo: number;
  summary: string;
  showDetails: () => void;
  displayResults: () => void;
  clearFields: () => void;
  exit: () => void;
};

const SearchConditions: React.FC<SearchConditionsProps> = ({
  year,
  officeFrom,
  officeTo,
  periodFrom,
  periodTo,
  type,
  numberFrom,
  numberTo,
  summary,
  showDetails,
  displayResults,
  clearFields,
  exit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-xl font-bold text-center">調定・収納内容照会</h1>
      </div>
      
      {/* Search Conditions */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium">年度</label>
          <input type="text" className="mt-1 block w-full" value={year} readOnly />
        </div>
        <div>
          <label className="block text-sm font-medium">起案所属</label>
          <input type="text" className="mt-1 block w-full" value={officeFrom} readOnly />
        </div>
        <div>
          <label className="block text-sm font-medium">調定日</label>
          <input type="text" className="mt-1 block w-full" value={`${periodFrom} ~ ${periodTo}`} readOnly />
        </div>
        <div>
          <label className="block text-sm font-medium">調定番号</label>
          <input
            type="text"
            className="mt-1 block w-full"
            value={`${numberFrom} ~ ${numberTo}`}
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium">種別</label>
          <input type="text" className="mt-1 block w-full" value={type} readOnly />
        </div>
        <div>
          <label className="block text-sm font-medium">摘要</label>
          <input type="text" className="mt-1 block w-full" value={summary} readOnly />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={showDetails}>
          調定同表示
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={displayResults}>
          表示
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded" onClick={clearFields}>
          クリア
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={exit}>
          終了
        </button>
      </div>
    </div>
  );
};

export default SearchConditions;
```