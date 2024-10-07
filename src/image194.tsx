// components/SessionManagement.tsx
import React from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface SessionManagementProps {
  fiscalYear: string;
  largeCategory: string;
  largeCategoryLabel: string;
  mediumCategory: string;
  mediumCategoryLabel: string;
  smallCategory: string;
  smallCategoryLabel: string;
  limitNumber: number;
  onFiscalYearChange: (value: string) => void;
  onLargeCategoryChange: (value: string) => void;
  onMediumCategoryChange: (value: string) => void;
  onSmallCategoryChange: (value: string) => void;
  onLimitNumberChange: (value: number) => void;
  fiscalYearOptions: DropdownOption[];
}

const SessionManagement: React.FC<SessionManagementProps> = ({
  fiscalYear,
  largeCategory,
  largeCategoryLabel,
  mediumCategory,
  mediumCategoryLabel,
  smallCategory,
  smallCategoryLabel,
  limitNumber,
  onFiscalYearChange,
  onLargeCategoryChange,
  onMediumCategoryChange,
  onSmallCategoryChange,
  onLimitNumberChange,
  fiscalYearOptions,
}) => {

  return (
    <div className="p-4 bg-white shadow-md">
      <h2 className="text-lg font-bold">セッション管理保存</h2>
      <div className="my-4">
        <label className="block mb-2">会計年度</label>
        <select
          value={fiscalYear}
          onChange={(e) => onFiscalYearChange(e.target.value)}
          className="border p-2 rounded"
        >
          {fiscalYearOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <div className="my-4">
        <label className="block mb-2">大分類</label>
        <input
          type="text"
          value={largeCategory}
          onChange={(e) => onLargeCategoryChange(e.target.value)}
          className="border p-2 rounded"
        />
        <span className="ml-2">{largeCategoryLabel}</span>
      </div>

      <div className="my-4">
        <label className="block mb-2">中分類</label>
        <input
          type="text"
          value={mediumCategory}
          onChange={(e) => onMediumCategoryChange(e.target.value)}
          className="border p-2 rounded"
        />
        <span className="ml-2">{mediumCategoryLabel}</span>
      </div>

      <div className="my-4">
        <label className="block mb-2">小分類</label>
        <input
          type="text"
          value={smallCategory}
          onChange={(e) => onSmallCategoryChange(e.target.value)}
          className="border p-2 rounded"
        />
        <span className="ml-2">{smallCategoryLabel}</span>
      </div>

      <div className="my-4">
        <label className="block mb-2">制限数</label>
        <input
          type="number"
          value={limitNumber}
          onChange={(e) => onLimitNumberChange(Number(e.target.value))}
          className="border p-2 rounded"
        />
      </div>

      <div className="flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default SessionManagement;
```