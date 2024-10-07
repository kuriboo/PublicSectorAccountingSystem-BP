import React from 'react';

// Define the types for the component props
interface TableProps {
  title: string;
  fields: { name: string; type: string }[];
  className?: string;
}

const DataTable: React.FC<TableProps> = ({ title, fields, className }) => {
  return (
    <div className={`p-4 bg-gray-100 shadow-md ${className}`}>
      {/* Table title */}
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      {/* Table content */}
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Field</th>
            <th className="border border-gray-300 p-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{field.name}</td>
              <td className="border border-gray-300 p-2">{field.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Example usage
const ExampleUsage: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <DataTable
        title="1051 ATMT 相手先マスタ"
        fields={[
          { name: 'KJATFG', type: 'char' },
          { name: 'KJATCD', type: 'char' },
          { name: 'APSTMMD', type: 'Date' },
          { name: 'NM1', type: 'varchar2' },
          { name: 'NM2', type: 'varchar2' },
          { name: 'SNM1', type: 'varchar2' },
          { name: 'PNNM1', type: 'varchar2' },
          { name: 'ADD1', type: 'varchar2' },
          { name: 'ADD2', type: 'varchar2' },
          { name: 'TELNUM', type: 'varchar2' },
          { name: 'FAXNUM', type: 'varchar2' },
        ]}
      />
      {/* Add more DataTable components as needed */}
    </div>
  );
};

export default ExampleUsage;
```