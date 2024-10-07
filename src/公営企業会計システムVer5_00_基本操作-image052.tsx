// CsvTable.tsx
import React from 'react';

// CSV data type definition with optional customization fields
type CsvDataProps = {
  year?: string;
  category?: string;
  topCode?: string;
  itemCode?: string;
  subsectionCode?: string;
  customClass?: string; // Tailwind CSS custom class
};

// CSV Table component
const CsvTable: React.FC<{ data: CsvDataProps[] }> = ({ data }) => {
  return (
    <div className={`overflow-x-auto ${data[0]?.customClass || ''}`}>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left px-4 py-2">会計年度</th>
            <th className="text-left px-4 py-2">予算科目</th>
            <th className="text-left px-4 py-2">項目コード</th>
            <th className="text-left px-4 py-2">目コード</th>
            <th className="text-left px-4 py-2">細目コード</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{row.year}</td>
              <td className="px-4 py-2">{row.category}</td>
              <td className="px-4 py-2">{row.topCode}</td>
              <td className="px-4 py-2">{row.itemCode}</td>
              <td className="px-4 py-2">{row.subsectionCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CsvTable;
```