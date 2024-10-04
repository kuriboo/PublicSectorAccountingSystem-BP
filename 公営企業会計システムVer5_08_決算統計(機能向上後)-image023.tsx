```tsx
import React from 'react';

type DataRow = {
  confirmation: string;
  subjectCode: string;
  subjectName: string;
  segmentName: string;
  taxAmountYen: number;
  consumptionTaxYen: number;
  taxAmountThousandYen: number;
  consumptionTaxThousandYen: number;
  totalAmount: number;
};

type DataTableProps = {
  data: DataRow[];
  onDisplay: () => void;
  onClear: () => void;
};

const DataTable: React.FC<DataTableProps> = ({ data, onDisplay, onClear }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-4">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={onDisplay}
          >
            表示
          </button>
        </div>
        <div className="space-x-4">
          <button 
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={onClear}
          >
            クリア
          </button>
        </div>
      </div>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr>
            {[
              '確認',
              '科目コード',
              '科目名',
              'セグメント名',
              '税抜額(円)',
              '消費税額(円)',
              '税抜額(千円)',
              '消費税額(千円)',
              '税込額(円)'
            ].map((header) => (
              <th key={header} className="border px-4 py-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="border px-4 py-2">{row.confirmation}</td>
              <td className="border px-4 py-2">{row.subjectCode}</td>
              <td className="border px-4 py-2">{row.subjectName}</td>
              <td className="border px-4 py-2">{row.segmentName}</td>
              <td className="border px-4 py-2">{row.taxAmountYen.toLocaleString()}</td>
              <td className="border px-4 py-2">{row.consumptionTaxYen.toLocaleString()}</td>
              <td className="border px-4 py-2">{row.taxAmountThousandYen.toLocaleString()}</td>
              <td className="border px-4 py-2">{row.consumptionTaxThousandYen.toLocaleString()}</td>
              <td className="border px-4 py-2">{row.totalAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
```