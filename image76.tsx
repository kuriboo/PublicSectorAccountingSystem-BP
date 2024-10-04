```tsx
import React from 'react';

// TypeScript型定義
interface BusinessFilterProps {
  years: string[];
  selectedYear: string;
  onYearChange: (year: string) => void;
  divisions: string[];
  selectedDivision: string;
  onDivisionChange: (division: string) => void;
  businessTypes: string[];
  selectedBusinessTypes: string[];
  onBusinessTypeChange: (businessType: string[]) => void;
  onSearchClick: () => void;
  onClearClick: () => void;
  onCloseClick: () => void;
}

const BusinessFilter: React.FC<BusinessFilterProps> = ({
  years,
  selectedYear,
  onYearChange,
  divisions,
  selectedDivision,
  onDivisionChange,
  businessTypes,
  selectedBusinessTypes,
  onBusinessTypeChange,
  onSearchClick,
  onClearClick,
  onCloseClick,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <div className="flex space-x-4 mb-4">
        {/* 年度セレクトボックス */}
        <div>
          <label>年度: </label>
          <select 
            value={selectedYear} 
            onChange={e => onYearChange(e.target.value)} 
            className="border p-2 rounded"
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        
        {/* 受付区分セレクトボックス */}
        <div>
          <label>受付区分: </label>
          <select 
            value={selectedDivision} 
            onChange={e => onDivisionChange(e.target.value)} 
            className="border p-2 rounded"
          >
            {divisions.map(division => (
              <option key={division} value={division}>{division}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 業種チェックボックス */}
      <div className="mb-4">
        <label>業種: </label>
        <div className="border p-2 rounded overflow-y-scroll h-32">
          {businessTypes.map(businessType => (
            <div key={businessType}>
              <input 
                type="checkbox" 
                checked={selectedBusinessTypes.includes(businessType)}
                onChange={() => {
                  if (selectedBusinessTypes.includes(businessType)) {
                    onBusinessTypeChange(selectedBusinessTypes.filter(bt => bt !== businessType));
                  } else {
                    onBusinessTypeChange([...selectedBusinessTypes, businessType]);
                  }
                }} 
              />
              <span>{businessType}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ボタン */}
      <div className="flex space-x-4">
        <button onClick={onSearchClick} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClearClick} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onCloseClick} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default BusinessFilter;
```