import React from 'react';

// TypeScript interface for component props
interface AssetSearchProps {
  onSubmit: (searchParams: any) => void; // Define the type of search parameters appropriately
  onCancel: () => void;
}

// Main component
const AssetSearch: React.FC<AssetSearchProps> = ({ onSubmit, onCancel }) => {
  // Example of state definitions for search fields
  const [searchParams, setSearchParams] = React.useState({
    code: '',
    level: 'detailed', // Default to 'detailed'
    searchString: '',
  });

  // Example of a change handler for input fields
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  // Example of form submission
  const handleSubmit = () => {
    onSubmit(searchParams);
  };

  return (
    <div className="p-4 bg-gray-100">
      {/* Search Fields */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        {['クラス', '項', '目', '節', '細節', '明細'].map((label, index) => (
          <div key={index} className="flex items-center">
            <label className="w-24">{label}</label>
            <input
              name={`field${index}`}
              type="text"
              className="border p-1 flex-1"
              onChange={handleInputChange}
            />
          </div>
        ))}
        <div className="flex items-center">
          <label className="w-24">検索文字列</label>
          <input
            name="searchString"
            type="text"
            className="border p-1 flex-1"
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Level Selection */}
      <div className="mb-4">
        <label className="block mb-2">検索レベル</label>
        {['省レベル', '項レベル', '目レベル', '節レベル', '細節レベル', '明細レベル'].map((level, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              name="level"
              value={level}
              checked={searchParams.level === level}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label>{level}</label>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white" onClick={handleSubmit}>
          確定
        </button>
        <button className="px-4 py-2 bg-gray-300" onClick={onCancel}>
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default AssetSearch;