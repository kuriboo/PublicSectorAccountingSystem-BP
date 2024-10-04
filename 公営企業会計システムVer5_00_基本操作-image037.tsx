```tsx
// Import necessary modules
import React from 'react';

// Define Props type
interface AccountSearchProps {
  date: string;
  startDate: string;
  endDate: string;
  description: string;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleStartDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEndDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescriptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// AccountSearch Component
const AccountSearch: React.FC<AccountSearchProps> = ({
  date,
  startDate,
  endDate,
  description,
  handleDateChange,
  handleStartDateChange,
  handleEndDateChange,
  handleDescriptionChange,
}) => {
  // Render component
  return (
    <div className="p-4">
      {/* Search Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold">負担番号検索</h1>
      </div>

      {/* Date Inputs */}
      <div className="flex items-center space-x-2 mb-4">
        <label className="font-semibold">処理日</label>
        <input 
          type="text" 
          value={date} 
          onChange={handleDateChange} 
          className="border p-1"
        />
        <span>～</span>
        <input 
          type="text" 
          value={startDate} 
          onChange={handleStartDateChange} 
          className="border p-1"
        />
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label className="font-semibold">摘要・工事名場所</label>
        <input 
          type="text" 
          value={description} 
          onChange={handleDescriptionChange} 
          className="border p-1 w-full"
        />
      </div>

      {/* Search Button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        表示
      </button>
    </div>
  );
};

export default AccountSearch;
```