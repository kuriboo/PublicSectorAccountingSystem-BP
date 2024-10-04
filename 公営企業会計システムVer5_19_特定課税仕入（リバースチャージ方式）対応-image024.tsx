```tsx
import React from 'react';

type TableData = {
  taxPeriod: string;
  name: string;
  section1: {
    taxableSalesTotal: number;
    taxFreeSales: number;
    nonTaxableSales: number;
    effectiveSales: number;
  };
  section2: {
    taxablePurchaseTotal: number;
    purchaseExpenses: number;
  };
};

type TaxTableProps = {
  data: TableData;
  className?: string;
};

const TaxTable: React.FC<TaxTableProps> = ({ data, className }) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">課税期間</th>
            <td className="border border-gray-300 px-4 py-2">{data.taxPeriod}</td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2">氏名又は名称</th>
            <td className="border border-gray-300 px-4 py-2">{data.name}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border border-gray-300 px-4 py-2">課税売上計</th>
            <td className="border border-gray-300 px-4 py-2">{data.section1.taxableSalesTotal.toLocaleString()}</td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2">免税売上額</th>
            <td className="border border-gray-300 px-4 py-2">{data.section1.taxFreeSales.toLocaleString()}</td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2">非課税売上額</th>
            <td className="border border-gray-300 px-4 py-2">{data.section1.nonTaxableSales.toLocaleString()}</td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2">課税仕入に係る支払額</th>
            <td className="border border-gray-300 px-4 py-2">{data.section2.taxablePurchaseTotal.toLocaleString()}</td>
          </tr>
          <tr>
            <th className="border border-gray-300 px-4 py-2">仕入経費</th>
            <td className="border border-gray-300 px-4 py-2">{data.section2.purchaseExpenses.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaxTable;
```