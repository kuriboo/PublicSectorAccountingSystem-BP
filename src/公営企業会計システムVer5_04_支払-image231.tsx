// Import necessary modules and types
import React from 'react';

// Define the Prop types
type SearchComponentProps = {
  title: string;
  searchPlaceholder: string;
  onSearch: (query: string) => void;
  onClear: () => void;
};

// Functional component definition
const SearchComponent: React.FC<SearchComponentProps> = ({
  title,
  searchPlaceholder,
  onSearch,
  onClear,
}) => {
  const [query, setQuery] = React.useState('');

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {/* Input section for Year */}
      <div className="flex justify-between mb-4">
        <div>
          <label className="block text-sm mb-1">年度</label>
          <input
            type="text"
            className="border rounded px-2 py-1 w-full"
            placeholder="例: 令和02"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-1 rounded mt-5">
          科目検索
        </button>
      </div>

      {/* Input section for additional fields */}
      <div className="flex mb-4">
        <div className="flex-1 mr-2">
          <label className="block text-sm mb-1">節</label>
          <input type="text" className="border rounded px-2 py-1 w-full" />
        </div>
        <div className="flex-1 mr-2">
          <label className="block text-sm mb-1">細節</label>
          <input type="text" className="border rounded px-2 py-1 w-full" />
        </div>
        <div className="flex-1">
          <label className="block text-sm mb-1">明細</label>
          <input type="text" className="border rounded px-2 py-1 w-full" />
        </div>
      </div>

      {/* Search input */}
      <div className="mb-4">
        <input
          type="text"
          className="border rounded w-full px-2 py-1"
          placeholder={searchPlaceholder}
          value={query}
          onChange={handleInputChange}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2">
        <button
          className="bg-gray-300 text-black px-4 py-1 rounded"
          onClick={() => setQuery('')}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 text-black px-4 py-1 rounded"
          onClick={onClear}
        >
          キャンセル
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded"
          onClick={handleSearch}
        >
          表示
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
```