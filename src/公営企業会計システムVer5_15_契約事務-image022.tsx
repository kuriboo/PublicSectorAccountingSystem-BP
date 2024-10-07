import React from 'react';

type BusinessTypeSelectorProps = {
  years: string[];
  receptionSections: string[];
  businessTypes: string[];
  selectedYear: string;
  selectedSection: string;
  selectedTypes: string[];
  onYearChange: (year: string) => void;
  onSectionChange: (section: string) => void;
  onTypesChange: (types: string[]) => void;
}

const BusinessTypeSelector: React.FC<BusinessTypeSelectorProps> = ({
  years,
  receptionSections,
  businessTypes,
  selectedYear,
  selectedSection,
  selectedTypes,
  onYearChange,
  onSectionChange,
  onTypesChange
}) => {
  const handleTypeToggle = (type: string) => {
    if (selectedTypes.includes(type)) {
      onTypesChange(selectedTypes.filter(t => t !== type));
    } else {
      onTypesChange([...selectedTypes, type]);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg w-full max-w-xl">
      {/* Year Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">年度</label>
        <select
          value={selectedYear}
          onChange={e => onYearChange(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Reception Section Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">受付区分</label>
        <select
          value={selectedSection}
          onChange={e => onSectionChange(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {receptionSections.map((section) => (
            <option key={section} value={section}>{section}</option>
          ))}
        </select>
      </div>

      {/* Business Types Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">業種</label>
        <div className="mt-2 border border-gray-300 rounded-md max-h-40 overflow-y-auto">
          {businessTypes.map((type) => (
            <div key={type} className="flex items-center pl-3 pr-4 py-2 bg-white hover:bg-gray-50">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeToggle(type)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-600">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessTypeSelector;