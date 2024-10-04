import React from 'react';

type SegmentData = {
  segmentCode: string;
  segmentName: string;
  taxExcludedAmount: number;
  consumptionTax: number;
  taxIncludedAmount: number;
  compositionRatio: number;
};

interface SegmentTableProps {
  title: string;
  year: string;
  segments: SegmentData[];
}

const SegmentTable: React.FC<SegmentTableProps> = ({ title, year, segments }) => {
  return (
    <div className="p-4 bg-white border rounded shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-700">{year}</p>
      <table className="min-w-full mt-4 border-collapse">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-2 border">施設決裁統セグメント</th>
            <th className="p-2 border">施設決裁統セグメント名</th>
            <th className="p-2 border">税抜額</th>
            <th className="p-2 border">消費税額</th>
            <th className="p-2 border">税込額</th>
            <th className="p-2 border">構成比率(%)</th>
          </tr>
        </thead>
        <tbody>
          {segments.map((segment, index) => (
            <tr key={index} className="even:bg-gray-100">
              <td className="p-2 border text-center">{segment.segmentCode}</td>
              <td className="p-2 border text-center">{segment.segmentName}</td>
              <td className="p-2 border text-right">{segment.taxExcludedAmount.toLocaleString()}</td>
              <td className="p-2 border text-right">{segment.consumptionTax.toLocaleString()}</td>
              <td className="p-2 border text-right">{segment.taxIncludedAmount.toLocaleString()}</td>
              <td className="p-2 border text-right">{segment.compositionRatio.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SegmentTable;