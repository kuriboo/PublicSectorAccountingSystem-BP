```tsx
import React, { FC } from 'react';

type YearDropdownProps = {
  selectedYear: string;
  years: string[];
  onChange: (year: string) => void;
};

const YearDropdown: FC<YearDropdownProps> = ({ selectedYear, years, onChange }) => {
  return (
    <select
      value={selectedYear}
      onChange={(e) => onChange(e.target.value)}
      className="rounded border-gray-300 p-1"
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

type SummaryProps = {
  title: string;
  description: string;
  onSelectYear: (year: string) => void;
};

const SummaryComponent: FC<SummaryProps> = ({ title, description, onSelectYear }) => {
  const years = ['令和001', '令和002', '令和003'];

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-blue-200 p-2 rounded-t">
        <h1 className="text-lg font-bold">{title}</h1>
      </div>
      <div className="bg-white p-4 border rounded-b">
        <div className="mb-4">
          <YearDropdown selectedYear={years[1]} years={years} onChange={onSelectYear} />
        </div>
        <div className="mb-4">
          <h2 className="font-bold mb-2">処理概要</h2>
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex justify-between">
          <button className="bg-gray-300 hover:bg-gray-400 py-1 px-4 rounded">OK</button>
          <button className="bg-gray-300 hover:bg-gray-400 py-1 px-4 rounded">クリア</button>
          <button className="bg-gray-300 hover:bg-gray-400 py-1 px-4 rounded">終了</button>
        </div>
      </div>
    </div>
  );
};

export default SummaryComponent;
```