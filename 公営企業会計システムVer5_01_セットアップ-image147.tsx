```tsx
// Import necessary modules and types
import React from 'react';

// Define TypeScript types for props
type TableProps = {
  title: string;
  rows: Row[];
};

type Row = {
  key: string;
  type: string;
};

// Define the reusable Table component
const Table: React.FC<TableProps> = ({ title, rows }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="font-bold text-xl mb-2 bg-gray-200 p-2 text-center">{title}</div>
      <ul className="list-none p-4">
        {rows.map((row, index) => (
          <li key={index} className="flex justify-between py-2">
            <span className="font-mono">{row.key}</span>
            <span>{row.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Sample usage with mock data
const SampleComponent: React.FC = () => {
  const tablesData: TableProps[] = [
    {
      title: '1058 S2BMNMT 育屋大分類マスタ',
      rows: [
        { key: '<PK>XNENDO', type: 'number' },
        { key: '<PK>XSLBNCD', type: 'char' },
        { key: 'NM', type: 'varchar2' },
        { key: 'SNM', type: 'varchar2' },
      ],
    },
    {
      title: '1059 S2BMNMT 育屋中分類マスタ',
      rows: [
        { key: '<PK>XNENDO', type: 'number' },
        { key: '<PK>SZLBNCD', type: 'char' },
        { key: 'NM', type: 'varchar2' },
        { key: 'SNM', type: 'varchar2' },
      ],
    },
    // Additional tables can be added here
  ];

  return (
    <div className="flex flex-wrap">
      {tablesData.map((table, index) => (
        <Table key={index} title={table.title} rows={table.rows} />
      ))}
    </div>
  );
};

export default SampleComponent;
```