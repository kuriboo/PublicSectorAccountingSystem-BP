// Import necessary libraries
import React from 'react';

// Define TypeScript types for props
interface DataRow {
  code1: string;
  code2: string;
  number: number;
  date: string;
  name: string;
  details: string;
  price: string;
  value1: string;
  value2: string;
}

interface DataTableProps {
  data: DataRow[];
}

// DataTable component definition
const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            {['Code1', 'Code2', 'Number', 'Date', 'Name', 'Details', 'Price', 'Value1', 'Value2'].map((header) => (
              <th
                key={header}
                className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((row, index) => (
            <tr key={index} className="even:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">{row.code1}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.code2}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.number}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.date}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.details}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.price}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.value1}</td>
              <td className="py-2 px-4 border-b border-gray-200">{row.value2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Export the component
export default DataTable;
