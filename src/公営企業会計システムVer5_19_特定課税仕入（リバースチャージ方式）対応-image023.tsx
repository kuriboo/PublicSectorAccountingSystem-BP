import React from 'react';

// プロパティの型定義
type TaxCalculationTableProps = {
  title: string;
  taxData: {
    section: string;
    taxBasePart3: number;
    taxBasePart4: number;
    taxBasePart6: number;
    total: number;
  }[];
};

const TaxCalculationTable: React.FC<TaxCalculationTableProps> = ({ title, taxData }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">区分</th>
            <th className="border border-gray-300 px-4 py-2">税率3%適用分</th>
            <th className="border border-gray-300 px-4 py-2">税率4%適用分</th>
            <th className="border border-gray-300 px-4 py-2">税率6.3%適用分</th>
            <th className="border border-gray-300 px-4 py-2">税率部分小計</th>
          </tr>
        </thead>
        <tbody>
          {taxData.map((data, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{data.section}</td>
              <td className="border border-gray-300 px-4 py-2">
                {data.taxBasePart3.toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {data.taxBasePart4.toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {data.taxBasePart6.toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {data.total.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxCalculationTable;
```