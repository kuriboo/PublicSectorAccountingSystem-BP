// Import necessary modules
import React from 'react';
import 'tailwindcss/tailwind.css';

// Define types for component props
type Industry = {
  code: string;
  name: string;
};

type SelectListProps = {
  industries: Industry[];
  year: string;
  acceptedType: string;
  contractorNumber: string;
  onYearChange: (year: string) => void;
  onAcceptedTypeChange: (type: string) => void;
  onContractorNumberChange: (number: string) => void;
  onIndustrySelect: (industry: Industry) => void;
};

// Define the SelectList component
const SelectList: React.FC<SelectListProps> = ({
  industries,
  year,
  acceptedType,
  contractorNumber,
  onYearChange,
  onAcceptedTypeChange,
  onContractorNumberChange,
  onIndustrySelect,
}) => {
  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h1 className="text-lg font-bold mb-4">業者別指名一覧表</h1>

      {/* Year Selection */}
      <div className="mb-4">
        <label className="mr-2">年度:</label>
        <input
          type="text"
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      {/* Accepted Type Selection */}
      <div className="mb-4">
        <label className="mr-2">受付区分:</label>
        <select
          value={acceptedType}
          onChange={(e) => onAcceptedTypeChange(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">選択してください</option>
          {/* Add options dynamically if needed */}
        </select>
      </div>

      {/* Industry List */}
      <div className="mb-4">
        <label className="mr-2">業種:</label>
        <select
          className="border p-2 rounded"
          onChange={(e) =>
            onIndustrySelect(
              industries.find((item) => item.code === e.target.value) || industries[0]
            )
          }
        >
          {industries.map((industry) => (
            <option key={industry.code} value={industry.code}>
              {industry.code}: {industry.name}
            </option>
          ))}
        </select>
      </div>

      {/* Contractor Number Input */}
      <div className="mb-4">
        <label className="mr-2">業者:</label>
        <input
          type="text"
          value={contractorNumber}
          onChange={(e) => onContractorNumberChange(e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white p-2 rounded">OK</button>
        <button className="bg-gray-500 text-white p-2 rounded">クリア</button>
        <button className="bg-red-500 text-white p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default SelectList;
```