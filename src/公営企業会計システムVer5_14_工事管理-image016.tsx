import React, { ChangeEvent } from 'react';

// Prop types definition
interface ConstructionSearchProps {
  yearAd: number;
  yearHeisei: number;
  searchType: string;
  searchTerm: string;
  locationCode: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleLocationChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchClick: () => void;
  handleResetClick: () => void;
}

// ConstructionSearch component
const ConstructionSearch: React.FC<ConstructionSearchProps> = ({
  yearAd,
  yearHeisei,
  searchType,
  searchTerm,
  locationCode,
  handleSearchChange,
  handleLocationChange,
  handleSearchClick,
  handleResetClick,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {/* Year and Office Selection */}
      <div className="flex items-center mb-4">
        <span className="mr-2">工事台帳年度 平成{yearHeisei} 年度</span>
        <input
          type="text"
          value={locationCode}
          onChange={handleLocationChange}
          className="ml-2 p-1 border rounded w-24"
        />
      </div>

      {/* Search Method Selection */}
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            name="searchType"
            value="name"
            checked={searchType === 'name'}
            onChange={handleSearchChange}
          />
          工事名称検索
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="searchType"
            value="location"
            checked={searchType === 'location'}
            onChange={handleSearchChange}
          />
          工事場所検索
        </label>
        {/* Additional radio buttons can be added in a similar way */}
      </div>

      {/* Search Term Input */}
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border rounded"
          placeholder="工事名称"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 text-white py-1 px-4 rounded"
          onClick={handleSearchClick}
        >
          表示
        </button>
        <button
          className="bg-gray-500 text-white py-1 px-4 rounded"
          onClick={handleResetClick}
        >
          クリア
        </button>
        <button className="bg-red-500 text-white py-1 px-4 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default ConstructionSearch;
```