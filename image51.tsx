```tsx
// Import necessary libraries
import React from 'react';

// Define TypeScript types for props
interface ConsumptionTaxDetailsProps {
  budgetName: string;
  startDate: string;
  endDate: string;
  items: {
    name: string;
    issuedDate: string;
    taxRate: number;
    taxableAmount: number;
    taxAmount: number;
    inclusiveAmount: number;
    description?: string;
  }[];
}

const ConsumptionTaxDetails: React.FC<ConsumptionTaxDetailsProps> = ({
  budgetName,
  startDate,
  endDate,
  items,
}) => {
  return (
    <div className="p-4 bg-white shadow-md">
      {/* Header Section */}
      <div className="text-center border-b">
        <h2 className="text-lg font-bold">消費税計算明細書</h2>
        <p>{budgetName}</p>
        <p className="text-sm">{`(${startDate} から ${endDate} まで)`}</p>
      </div>

      {/* Table Section */}
      <table className="w-full mt-4 text-sm">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="p-2">予算／細所／例目</th>
            <th className="p-2">経理日付</th>
            <th className="p-2">税率(%)</th>
            <th className="p-2">課税額</th>
            <th className="p-2">消費税額</th>
            <th className="p-2">税込金額</th>
            <th className="p-2">摘要</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.issuedDate}</td>
              <td className="p-2 text-center">{item.taxRate}</td>
              <td className="p-2 text-right">{item.taxableAmount.toLocaleString()}</td>
              <td className="p-2 text-right">{item.taxAmount.toLocaleString()}</td>
              <td className="p-2 text-right">{item.inclusiveAmount.toLocaleString()}</td>
              <td className="p-2">{item.description || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsumptionTaxDetails;
```