import React from 'react';

// TypeScript interface for the component props
interface ExcelTableProps {
  data: Array<{ [key: string]: string | number }>;
  className?: string;
}

// Function to render the column headers dynamically
const renderHeaders = (data: Array<{ [key: string]: string | number }>) => {
  if (data.length === 0) return null;
  return Object.keys(data[0]).map((key) => (
    <th key={key} className="border px-4 py-2">
      {key}
    </th>
  ));
};

// Function to render table rows dynamically
const renderRows = (data: Array<{ [key: string]: string | number }>) => {
  return data.map((row, index) => (
    <tr key={index} className="hover:bg-gray-100">
      {Object.values(row).map((value, i) => (
        <td key={i} className="border px-4 py-2">
          {value}
        </td>
      ))}
    </tr>
  ));
};

// Reusable component definition
const ExcelTable: React.FC<ExcelTableProps> = ({ data, className }) => {
  return (
    <table className={`min-w-full bg-white ${className}`}>
      <thead>
        <tr className="bg-gray-200">
          {renderHeaders(data)}
        </tr>
      </thead>
      <tbody>
        {renderRows(data)}
      </tbody>
    </table>
  );
};

// Sample data to mimic the Excel spreadsheet
const sampleData = [
  { ColumnA: '支出', ColumnB: '不課税支出', ColumnC: '収益的支出', ColumnD: '3', ColumnE: '不課税', ColumnF: '1137468' },
  { ColumnA: '支出', ColumnB: '不課税支出', ColumnC: '収益的支出', ColumnD: '3', ColumnE: '不課税', ColumnF: '213006' },
  // Add more data as necessary...
];

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Excel Table</h1>
      <ExcelTable data={sampleData} className="border-2 border-gray-300" />
    </div>
  );
};

export default App;
