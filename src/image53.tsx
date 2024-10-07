// components/FinancialTable.tsx
import React from 'react';

interface DataRow {
  name: string;
  values: number[];
}

interface FinancialTableProps {
  data: DataRow[];
  currencySymbol?: string;
}

const FinancialTable: React.FC<FinancialTableProps> = ({
  data,
  currencySymbol = ''
}) => {
  return (
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 p-2">名称</th>
          <th colSpan={10} className="border border-gray-400 p-2">金額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="odd:bg-white even:bg-gray-100">
            <td className="border border-gray-400 p-2">{row.name}</td>
            {row.values.map((value, idx) => (
              <td key={idx} className="border border-gray-400 p-2 text-right">
                {currencySymbol}{value.toLocaleString()}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const data = [
    { name: '建設改良費', values: [2100000, 2100000, 0, 2100000, 0, 0, 2000000, 100000] },
    { name: '施設管理費', values: [2100000, 2100000, 0, 2100000, 0, 0, 2000000, 100000] },
    // ... more data rows
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">財務表</h1>
      <FinancialTable data={data} currencySymbol="¥" />
    </div>
  );
};

export default App;
