import React, { useState } from 'react';

// Type definition for props
type LocationSearchProps = {
  locations: { code: string; name: string }[];
  onSelect: (code: string) => void;
  onClear: () => void;
};

const LocationSearch: React.FC<LocationSearchProps> = ({ locations, onSelect, onClear }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter function for matching locations with the search term
  const filteredLocations = locations.filter(location =>
    location.name.includes(searchTerm)
  );

  return (
    <div className="w-full max-w-md p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          保管場所名称
        </label>
        <div className="flex mt-1">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded"
          />
          <button
            onClick={() => setSearchTerm('')}
            className="ml-2 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
          >
            表示
          </button>
        </div>
      </div>

      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2 bg-blue-100">保管場所コード</th>
            <th className="border p-2 bg-blue-100">名称</th>
          </tr>
        </thead>
        <tbody>
          {filteredLocations.map(location => (
            <tr key={location.code}>
              <td className="border p-2">{location.code}</td>
              <td className="border p-2">{location.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={onClear}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          クリア
        </button>
        <button
          onClick={() => onSelect(searchTerm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={() => onSelect('')}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default LocationSearch;