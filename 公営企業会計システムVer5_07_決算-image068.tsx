```tsx
// components/TaxAdjustmentTable.tsx
import React from 'react';

interface TableRow {
  name: string;
  collectionAmountTaxExcluded: number;
  collectionAmountTaxIncluded: number;
  adjustmentTaxExcluded: number;
  adjustmentTaxIncluded: number;
  totalTaxExcluded: number;
  totalTaxIncluded: number;
}

interface TaxAdjustmentTableProps {
  rows: TableRow[];
}

const TaxAdjustmentTable: React.FC<TaxAdjustmentTableProps> = ({ rows }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="text-lg font-bold mb-2">税区分集計額調整</div>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2">調整項目名</th>
            <th className="border border-gray-200 p-2">集計額(税抜額)</th>
            <th className="border border-gray-200 p-2">集計額(税額)</th>
            <th className="border border-gray-200 p-2">調整額(税抜額)</th>
            <th className="border border-gray-200 p-2">調整額(税額)</th>
            <th className="border border-gray-200 p-2">合計額(税抜額)</th>
            <th className="border border-gray-200 p-2">合計額(税額)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={"bg-blue-50 even:bg-white"}>
              <td className="border border-gray-200 p-2">{row.name}</td>
              <td className="border border-gray-200 p-2">{row.collectionAmountTaxExcluded}</td>
              <td className="border border-gray-200 p-2">{row.collectionAmountTaxIncluded}</td>
              <td className="border border-gray-200 p-2 text-red-500">{row.adjustmentTaxExcluded}</td>
              <td className="border border-gray-200 p-2 text-red-500">{row.adjustmentTaxIncluded}</td>
              <td className="border border-gray-200 p-2">{row.totalTaxExcluded}</td>
              <td className="border border-gray-200 p-2">{row.totalTaxIncluded}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxAdjustmentTable;
```

```tsx
// Example usage in a page component
import React from 'react';
import TaxAdjustmentTable from './components/TaxAdjustmentTable';

const ExamplePage: React.FC = () => {
  const tableData = [
    {
      name: "課税仕入",
      collectionAmountTaxExcluded: 17273,
      collectionAmountTaxIncluded: 1727,
      adjustmentTaxExcluded: -7000,
      adjustmentTaxIncluded: -700,
      totalTaxExcluded: 10273,
      totalTaxIncluded: 1027
    },
    // Additional rows can be added here
  ];

  return (
    <div className="container mx-auto mt-5">
      <TaxAdjustmentTable rows={tableData} />
    </div>
  );
};

export default ExamplePage;
```