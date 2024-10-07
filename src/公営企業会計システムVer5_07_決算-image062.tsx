// Import necessary modules from React and Next.js
import React from 'react';

// Define the type for a single row in the table
type IncomeRow = {
  code: string;
  name: string;
  specifiedAmount: number;
  unspecifiedAmount: number;
};

// Define the type for component props
type IncomeTableProps = {
  budgetSummary: {
    mainIncome: string;
    businessIncome: string;
    otherIncome: string;
    miscellaneousIncome: string;
    specifiedTotal: number;
    unspecifiedTotal: number;
    taxExemptTotal: number;
  };
  incomeRows: IncomeRow[];
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// Define a functional component using the defined props type
const IncomeTable: React.FC<IncomeTableProps> = ({
  budgetSummary,
  incomeRows,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white border rounded-md shadow">
      <div className="mb-4">
        <h1 className="text-lg font-bold mb-2">特定収入項目内訳入力</h1>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {/* Display budget summary */}
          <div>
            <div>予算款: {budgetSummary.mainIncome}</div>
            <div>予算項目: {budgetSummary.businessIncome}</div>
            <div>予算目: {budgetSummary.otherIncome}</div>
            <div>予算節: {budgetSummary.miscellaneousIncome}</div>
          </div>
          <div>
            <div>特定収入額: {budgetSummary.specifiedTotal} 円</div>
            <div>特定収入以外の額: {budgetSummary.unspecifiedTotal} 円</div>
            <div>不課税額合計: {budgetSummary.taxExemptTotal} 円</div>
          </div>
        </div>
      </div>

      {/* Table of income details */}
      <table className="w-full bg-blue-100 text-sm mb-4">
        <thead>
          <tr className="bg-blue-200">
            <th>特定収入項目コード</th>
            <th>特定収入項目名称</th>
            <th>特定収入額</th>
            <th>特定収入以外の額</th>
          </tr>
        </thead>
        <tbody>
          {incomeRows.map((row, index) => (
            <tr key={index} className="text-center">
              <td>{row.code}</td>
              <td>{row.name}</td>
              <td>{row.specifiedAmount}</td>
              <td>{row.unspecifiedAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons for actions */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onOk}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default IncomeTable;
```