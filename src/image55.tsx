// types.ts
export interface SpreadsheetRow {
  date: string;
  description: string;
  amount: number;
  tax?: number;
}

// Spreadsheet.tsx
import React from 'react';
import { SpreadsheetRow } from './types';

interface SpreadsheetProps {
  data: SpreadsheetRow[];
}

const Spreadsheet: React.FC<SpreadsheetProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 px-4 py-2">Date</th>
            <th className="w-1/3 px-4 py-2">Description</th>
            <th className="w-1/3 px-4 py-2">Amount</th>
            <th className="w-1/3 px-4 py-2">Tax</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center border-b">
              <td className="px-4 py-2">{row.date}</td>
              <td className="px-4 py-2">{row.description}</td>
              <td className="px-4 py-2">{row.amount.toLocaleString()}</td>
              <td className="px-4 py-2">{row.tax ? `${row.tax}%` : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;

// Usage Example:
// import React from 'react';
// import Spreadsheet, { SpreadsheetRow } from './Spreadsheet';

// const data: SpreadsheetRow[] = [
//   { date: '2023/8/24', description: 'Transfer', amount: 1000, tax: 8 },
//   { date: '2023/8/25', description: 'Transfer', amount: 2000 },
// ];

// const App = () => (
//   <div className="p-4">
//     <Spreadsheet data={data} />
//   </div>
// );

// export default App;
```