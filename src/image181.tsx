import React from 'react';

// TypeScriptの型定義
type TableColumn = {
  id: string;
  header: string;
  accessor: string;
};

type TableProps = {
  columns: TableColumn[];
  data: Record<string, string | number>[];
};

const DataTable: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto border rounded-md">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 border-b">
            {columns.map((column) => (
              <th key={column.id} className="text-left py-2 px-3 text-sm font-semibold text-gray-700">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              {columns.map((column) => (
                <td key={column.id} className="py-2 px-3 text-sm text-gray-600">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
```

```tsx
// Sample Usage
import React from 'react';
import DataTable from './DataTable';

const columns = [
  { id: '1', header: '予算部コード', accessor: 'budgetCode' },
  { id: '2', header: '予算細部コード', accessor: 'detailCode' },
  { id: '3', header: '予算節名', accessor: 'budgetName' },
  { id: '4', header: '緯越件数', accessor: 'cases' },
  { id: '5', header: '緯越金額', accessor: 'amount' },
];

const data = [
  { budgetCode: '001 01 001', detailCode: '0001', budgetName: '水道使用料', cases: 256, amount: '276,789,839' },
  { budgetCode: '001 01 C001', detailCode: '0002', budgetName: '分担金', cases: 24, amount: '3,754,080' },
  // ここにさらにデータを追加...
];

const ExampleComponent = () => {
  return (
    <div className="p-4">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ExampleComponent;
```