import React from 'react';

type SegmentData = {
  id: string;
  name: string;
  amount: number;
  ratio: number;
};

type SegmentTableProps = {
  year: string;
  segments: SegmentData[];
  totalAmount: number;
  onOkClick: () => void;
  onClearClick: () => void;
  onCancelClick: () => void;
};

const SegmentTable: React.FC<SegmentTableProps> = ({
  year,
  segments,
  totalAmount,
  onOkClick,
  onClearClick,
  onCancelClick,
}) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <div className="mb-4">
        <span className="font-bold text-lg">{year} 年度</span>
      </div>
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">施設決統セグメント</th>
            <th className="border p-2">施設決統セグメント名</th>
            <th className="border p-2">決算金額</th>
            <th className="border p-2">構成比率(%)</th>
          </tr>
        </thead>
        <tbody>
          {segments.map((segment) => (
            <tr key={segment.id} className="hover:bg-gray-100">
              <td className="border p-2">{segment.id}</td>
              <td className="border p-2">{segment.name}</td>
              <td className="border p-2 text-right">{segment.amount.toLocaleString()}</td>
              <td className="border p-2 text-right">{segment.ratio.toFixed(4)}</td>
            </tr>
          ))}
          <tr className="font-bold bg-gray-100">
            <td colSpan={2} className="border p-2 text-right">合計</td>
            <td className="border p-2 text-right">{totalAmount.toLocaleString()}</td>
            <td className="border p-2 text-right">100.0000</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end space-x-4">
        <button onClick={onOkClick} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClearClick} className="bg-gray-400 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onCancelClick} className="bg-red-500 text-white px-4 py-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default SegmentTable;
```