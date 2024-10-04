```tsx
import React from 'react';

// Define props types for the component
type ContractInquiryProps = {
  yearOptions: string[];
  typeOptions: string[];
  categories: string[];
  areaOptions: string[];
  onSearch: (filters: { year: string; type: string; category: string; areaStart: string; areaEnd: string; }) => void;
};

const ContractInquiry: React.FC<ContractInquiryProps> = ({ yearOptions, typeOptions, categories, areaOptions, onSearch }) => {
  const [year, setYear] = React.useState(yearOptions[0]);
  const [type, setType] = React.useState(typeOptions[0]);
  const [category, setCategory] = React.useState(categories[0]);
  const [areaStart, setAreaStart] = React.useState(areaOptions[0]);
  const [areaEnd, setAreaEnd] = React.useState(areaOptions[areaOptions.length - 1]);

  const handleSearch = () => {
    onSearch({ year, type, category, areaStart, areaEnd });
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium">実績年度</label>
        <select value={year} onChange={(e) => setYear(e.target.value)} className="block w-full mt-1 border-gray-300 rounded">
          {yearOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">受付区分</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className="block w-full mt-1 border-gray-300 rounded">
          {typeOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">業種</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="block w-full mt-1 border-gray-300 rounded">
          {categories.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">地区</label>
        <div className="flex space-x-2">
          <select value={areaStart} onChange={(e) => setAreaStart(e.target.value)} className="block w-full mt-1 border-gray-300 rounded">
            {areaOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <select value={areaEnd} onChange={(e) => setAreaEnd(e.target.value)} className="block w-full mt-1 border-gray-300 rounded">
            {areaOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button onClick={handleSearch} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          表示
        </button>
      </div>
    </div>
  );
};

export default ContractInquiry;
```