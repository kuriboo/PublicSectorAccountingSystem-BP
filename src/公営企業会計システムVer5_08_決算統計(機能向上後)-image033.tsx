// components/BudgetProcessing.tsx
import React from 'react';

type BudgetRowProps = {
  code: string;
  name: string;
  taxAmount: number;
  consumptionTax: number;
  totalAmount: number;
  roundedTaxAmount: number;
  roundedConsumptionTax: number;
  roundedTotalAmount: number;
};

type BudgetProcessingProps = {
  title: string;
  updatedAt: string;
  rows: BudgetRowProps[];
};

const BudgetRow: React.FC<BudgetRowProps> = ({
  code,
  name,
  taxAmount,
  consumptionTax,
  totalAmount,
  roundedTaxAmount,
  roundedConsumptionTax,
  roundedTotalAmount,
}) => (
  <tr>
    <td>{code}</td>
    <td>{name}</td>
    <td>{taxAmount.toLocaleString()}</td>
    <td>{consumptionTax.toLocaleString()}</td>
    <td>{totalAmount.toLocaleString()}</td>
    <td>{roundedTaxAmount.toLocaleString()}</td>
    <td>{roundedConsumptionTax.toLocaleString()}</td>
    <td>{roundedTotalAmount.toLocaleString()}</td>
    <td>
      <select className="border rounded">
        <option>四捨五入</option>
      </select>
    </td>
  </tr>
);

const BudgetProcessing: React.FC<BudgetProcessingProps> = ({ title, updatedAt, rows }) => (
  <div className="p-4 bg-white rounded-md shadow-md">
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-xl font-semibold">{title}</h1>
      <span>{updatedAt}</span>
    </div>
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th>予算コード</th>
          <th>予算名称</th>
          <th>税抜額(円)</th>
          <th>消費税額(円)</th>
          <th>税込額(円)</th>
          <th>税抜額(千円)</th>
          <th>消費税額(千円)</th>
          <th>税込額(千円)</th>
          <th>端数調整</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <BudgetRow key={row.code} {...row} />
        ))}
      </tbody>
    </table>
    <div className="mt-4">
      {/* Other controls would go here */}
      <button className="bg-gray-500 text-white px-4 py-2 rounded mr-2">OK</button>
      <button className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
    </div>
  </div>
);

export default BudgetProcessing;
```

```tsx
// Example of using the BudgetProcessing component
import BudgetProcessing from './components/BudgetProcessing';

const data = [
  {
    code: "001",
    name: "公営下水道事業収益",
    taxAmount: 886624415,
    consumptionTax: 20687544,
    totalAmount: 907311959,
    roundedTaxAmount: 886624,
    roundedConsumptionTax: 20688,
    roundedTotalAmount: 907312,
  },
  // More rows can be added here
];

const App = () => (
  <BudgetProcessing
    title="決算統計千円丸め処理"
    updatedAt="令和03年11月14日"
    rows={data}
  />
);

export default App;
```