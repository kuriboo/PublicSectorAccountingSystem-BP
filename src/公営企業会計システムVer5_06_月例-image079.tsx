import React from 'react';

type Segment = {
  id: string;
  name: string;
  standardAmount: number;
  provisionalAmount: number;
};

type SegmentsTableProps = {
  year: number;
  taxRate: number;
  segments: Segment[];
  onConfirm: (segmentId: string) => void;
  onCancel: (segmentId: string) => void;
};

const SegmentsTable: React.FC<SegmentsTableProps> = ({
  year,
  taxRate,
  segments,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-md bg-white shadow-md">
      <header className="flex justify-between items-center mb-4">
        <h1 className="font-bold">セグメント別調整額内訳</h1>
        <div>
          <span>平成{year} 年度</span>
          <span className="ml-4">消費税率 {taxRate} %</span>
        </div>
      </header>

      <button className="mb-2 px-4 py-2 bg-gray-700 text-white rounded">編集</button>

      <table className="table-auto w-full text-left mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">セグメント</th>
            <th className="px-4 py-2">略名称</th>
            <th className="px-4 py-2">調整額 (課税標準額)</th>
            <th className="px-4 py-2">調整額 (仮払消費税額)</th>
          </tr>
        </thead>
        <tbody>
          {segments.map((segment) => (
            <tr key={segment.id}>
              <td className="border px-4 py-2">{segment.id}</td>
              <td className="border px-4 py-2">{segment.name}</td>
              <td className="border px-4 py-2">
                {segment.standardAmount.toLocaleString()}
              </td>
              <td className="border px-4 py-2">
                {segment.provisionalAmount.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="flex justify-between items-center">
        <div>
          <p>総合計</p>
          <p>調整額 (課税標準額): {segments.reduce((sum, seg) => sum + seg.standardAmount, 0).toLocaleString()}</p>
          <p>調整額 (仮払消費税額): {segments.reduce((sum, seg) => sum + seg.provisionalAmount, 0).toLocaleString()}</p>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => onConfirm('id')} className="px-4 py-2 bg-blue-500 text-white rounded">行確定</button>
          <button onClick={() => onCancel('id')} className="px-4 py-2 bg-red-500 text-white rounded">行キャンセル</button>
        </div>
      </footer>
    </div>
  );
}

export default SegmentsTable;
```