// Import necessary libraries
import React from 'react';

// Define TypeScript interface for props
interface SearchFormProps {
  fiscalYear: string;
  bookingNumber: string;
  onBookingNumberChange: (value: string) => void;
  onSearch: () => void;
}

// SearchForm component definition
const SearchForm: React.FC<SearchFormProps> = ({
  fiscalYear,
  bookingNumber,
  onBookingNumberChange,
  onSearch,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">検索条件設定</h2>
      <div className="mb-4">
        <label className="block mb-2">
          年度: 
          <input 
            type="text" 
            value={fiscalYear} 
            readOnly 
            className="ml-2 border px-2 py-1 rounded-md"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          振替番号: 
          <input 
            type="text" 
            value={bookingNumber} 
            onChange={(e) => onBookingNumberChange(e.target.value)}
            className="ml-2 border px-2 py-1 rounded-md"
          />
        </label>
      </div>
      <button 
        onClick={onSearch} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        表示
      </button>
    </div>
  );
};

export default SearchForm;
