```tsx
import React from 'react';

type TableProps = {
  title: string;
  fields: { name: string; type: string }[];
  className?: string;
};

const TableComponent: React.FC<TableProps> = ({ title, fields, className }) => {
  return (
    <div className={`border rounded shadow p-4 ${className}`}>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="border-b py-1 text-left">Field</th>
            <th className="border-b py-1 text-left">Type</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index}>
              <td className="border-b py-1">{field.name}</td>
              <td className="border-b py-1">{field.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;

// Example usage
/*
<TableComponent 
  title="TKSSBNMT 単位粗大分類マスタ"
  fields={[
    { name: 'PK TKSSKNENDO', type: 'number' },
    { name: 'PK TKSSLNBND', type: 'char' },
    { name: 'NM', type: 'varchar2' }
  ]}
/>
*/
```