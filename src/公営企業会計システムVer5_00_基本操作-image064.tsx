import React from 'react';

// Define the type for the props
interface TableRowProps {
  label: string;
  code: string;
}

// Reusable TableRow component
const TableRow: React.FC<TableRowProps> = ({ label, code }) => {
  return (
    <div className="flex">
      <div className="w-1/2 bg-blue-800 text-white p-2">
        {label}
      </div>
      <div className="w-1/2 bg-gray-200 p-2">
        {code}
      </div>
    </div>
  );
};

// Define the type for the props
interface CodeTableProps {
  rows: { label: string; code: string }[];
}

// Main component
export const CodeTable: React.FC<CodeTableProps> = ({ rows }) => {
  return (
    <div className="border border-gray-400">
      {rows.map((row, index) => (
        <TableRow key={index} label={row.label} code={row.code} />
      ))}
    </div>
  );
};

// Example usage of the CodeTable component
const data = [
  { label: '会計年度 (半角西暦)', code: '' },
  { label: '「予算」または「仕訳」', code: '' },
  { label: '款コード', code: '次年度款コード' },
  { label: '項コード', code: '次年度項コード' },
  { label: '目コード', code: '次年度目コード' },
  { label: '節コード', code: '次年度節コード' },
  { label: '細節コード', code: '次年度細節コード' },
  { label: '明細コード', code: '次年度明細コード' },
];

// Wrap the CodeTable inside a component to display
const App: React.FC = () => {
  return <CodeTable rows={data} />;
};

export default App;
```