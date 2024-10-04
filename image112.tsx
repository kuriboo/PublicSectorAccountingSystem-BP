```tsx
// Required imports
import React from 'react';

// TypeScript type definitions for props
type TableProps = {
  data: {
    code: string;
    name: string;
    notes: string;
  }[];
  highlightedCodes?: string[];
};

const CustomTable: React.FC<TableProps> = ({ data, highlightedCodes = [] }) => {
  return (
    <table className="table-auto w-full border border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2">コード</th>
          <th className="border px-4 py-2">名称</th>
          <th className="border px-4 py-2">備考</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ code, name, notes }) => (
          <tr
            key={code}
            className={
              highlightedCodes.includes(code) ? 'bg-red-100' : 'bg-white'
            }
          >
            <td className="border px-4 py-2">{code}</td>
            <td className="border px-4 py-2">{name}</td>
            <td className="border px-4 py-2">{notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
```