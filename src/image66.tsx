import React from 'react';

type TableRow = {
  label: string;
  values: {
    A: string;
    B: string;
    C: string;
    total: string;
  };
};

interface Props {
  rows: TableRow[];
}

const TaxCalculationTable: React.FC<Props> = ({ rows }) => {
  return (
    <div className="overflow-auto">
      <table className="min-w-full bg-white border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2">項目</th>
            <th className="border border-gray-200 p-2">A</th>
            <th className="border border-gray-200 p-2">B</th>
            <th className="border border-gray-200 p-2">C</th>
            <th className="border border-gray-200 p-2">合計</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-200 p-2">{row.label}</td>
              <td className="border border-gray-200 p-2">{row.values.A}</td>
              <td className="border border-gray-200 p-2">{row.values.B}</td>
              <td className="border border-gray-200 p-2">{row.values.C}</td>
              <td className="border border-gray-200 p-2">{row.values.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxCalculationTable;
