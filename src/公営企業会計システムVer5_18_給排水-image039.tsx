import React, { useState } from 'react';

// TypeScript 型定義 for Props
type AddressSearchProps = {
  prefectures: string[];
  onSubmit: (address: string, prefecture: string, zip: string) => void;
};

// AddressSearchコンポーネント
const AddressSearch: React.FC<AddressSearchProps> = ({ prefectures, onSubmit }) => {
  const [address, setAddress] = useState('');
  const [selectedPrefecture, setSelectedPrefecture] = useState(prefectures[0]);
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = () => {
    onSubmit(address, selectedPrefecture, zipCode);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">住所</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">都道府県</label>
        <select
          value={selectedPrefecture}
          onChange={(e) => setSelectedPrefecture(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        >
          {prefectures.map((prefecture) => (
            <option key={prefecture} value={prefecture}>
              {prefecture}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">郵便番号</label>
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        表示
      </button>
    </div>
  );
};

export default AddressSearch;
```