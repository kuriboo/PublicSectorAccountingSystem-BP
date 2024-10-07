import React from 'react';

type DataTableProps = {
  year: string;
  businessCode: string;
  businessType: string;
  tableNumber: string;
  facility?: string;
  currencyUnit: string;
  data: {
    line: number;
    column: number;
    itemName: string;
    tableAggregate: string;
    beforeAdjustment: string;
    adjustment: string;
    afterAdjustment: string;
  }[];
};

const DataTable: React.FC<DataTableProps> = ({
  year,
  businessCode,
  businessType,
  tableNumber,
  facility,
  currencyUnit,
  data,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg">
      <header className="bg-blue-600 text-white p-2 rounded-md mb-4">
        <h1 className="text-lg">決算統計数値保守</h1>
      </header>
      <div className="flex items-center space-x-4 mb-4">
        <div>
          <label>年度:</label>
          <span className="ml-2">{year}</span>
        </div>
        <div>
          <label>業種・事業コード:</label>
          <span className="ml-2">{businessCode}</span>
          <span className="ml-2">{businessType}</span>
        </div>
        <div>
          <label>表　番号:</label>
          <span className="ml-2">{tableNumber}</span>
        </div>
        {facility && (
          <div>
            <label>施設:</label>
            <span className="ml-2">{facility}</span>
          </div>
        )}
      </div>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">行</th>
            <th className="border p-2">列</th>
            <th className="border p-2">項目名</th>
            <th className="border p-2">表内集計</th>
            <th className="border p-2">保守前集計額</th>
            <th className="border p-2">調整額</th>
            <th className="border p-2">保守後金額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border p-2 text-center">{row.line}</td>
              <td className="border p-2 text-center">{row.column}</td>
              <td className="border p-2">{row.itemName}</td>
              <td className="border p-2 text-right">{row.tableAggregate}</td>
              <td className="border p-2 text-right">{row.beforeAdjustment}</td>
              <td className="border p-2 text-right">{row.adjustment}</td>
              <td className="border p-2 text-right">{row.afterAdjustment}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="mt-4 text-gray-700 text-right">
        単位: {currencyUnit}
      </footer>
    </div>
  );
};

export default DataTable;
```