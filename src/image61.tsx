// components/TaxTable.tsx

import React from 'react';

type TaxRow = {
  id: number;
  description: string;
  taxBudgets: number[];
  taxCalculation: string;
  supplement: string;
};

type TaxTableProps = {
  rows: TaxRow[];
};

const TaxTable: React.FC<TaxTableProps> = ({ rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="w-full bg-gray-200 text-gray-800">
            <th className="p-2">No.</th>
            <th className="p-2">項目</th>
            <th className="p-2">税率5%</th>
            <th className="p-2">税率8%</th>
            <th className="p-2">税率8% 課税分</th>
            <th className="p-2">税率10%</th>
            <th className="p-2">合計</th>
            <th className="p-2">計算式</th>
            <th className="p-2">中件算</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="bg-gray-100 border-b border-gray-200">
              <td className="p-2">{row.id}</td>
              <td className="p-2">{row.description}</td>
              {row.taxBudgets.map((budget, index) => (
                <td className="p-2" key={index}>
                  {budget.toLocaleString()}
                </td>
              ))}
              <td className="p-2">{row.taxCalculation}</td>
              <td className="p-2">{row.supplement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxTable;
```

```tsx
// Example usage of the TaxTable component

import React from 'react';
import TaxTable from './TaxTable';

const data = [
  {
    id: 1,
    description: '課税売上高',
    taxBudgets: [290400, 0, 0, 200240, 290400],
    taxCalculation: '290,400 × 8/108',
    supplement: '作成する',
  },
  {
    id: 2,
    description: '税額',
    taxBudgets: [18000, 0, 0, 11200, 29200],
    taxCalculation: '作成する',
    supplement: '作成する',
  },
  // Add more rows as needed
];

const App: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">税表</h1>
      <TaxTable rows={data} />
    </div>
  );
};

export default App;
```