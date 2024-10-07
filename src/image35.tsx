import React from 'react';

type SearchCriteriaProps = {
  year: number;
  dateFrom: string;
  dateTo: string;
  transferAmountMin: number;
  transferAmountMax: number;
  onChange: (field: string, value: string | number) => void;
  onSubmit: () => void;
  onReset: () => void;
};

const SearchCriteria: React.FC<SearchCriteriaProps> = ({
  year,
  dateFrom,
  dateTo,
  transferAmountMin,
  transferAmountMax,
  onChange,
  onSubmit,
  onReset,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">年度</label>
        <input
          type="number"
          value={year}
          onChange={(e) => onChange('year', parseInt(e.target.value))}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">振替日</label>
        <input
          type="date"
          value={dateFrom}
          onChange={(e) => onChange('dateFrom', e.target.value)}
          className="border border-gray-300 p-2 rounded mr-2"
        />
        <span className="mr-2">〜</span>
        <input
          type="date"
          value={dateTo}
          onChange={(e) => onChange('dateTo', e.target.value)}
          className="border border-gray-300 p-2 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">振替金額</label>
        <input
          type="number"
          value={transferAmountMin}
          onChange={(e) => onChange('transferAmountMin', parseInt(e.target.value))}
          className="border border-gray-300 p-2 rounded w-24 mr-2"
        />
        <span className="mr-2">〜</span>
        <input
          type="number"
          value={transferAmountMax}
          onChange={(e) => onChange('transferAmountMax', parseInt(e.target.value))}
          className="border border-gray-300 p-2 rounded w-24"
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={onSubmit}
          className="mr-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-700"
        >
          表示
        </button>
        <button
          onClick={onReset}
          className="bg-gray-500 text-white py-1 px-4 rounded hover:bg-gray-700"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default SearchCriteria;