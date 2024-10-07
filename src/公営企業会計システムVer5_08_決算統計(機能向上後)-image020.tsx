import React from 'react';

type SegmentMasterProps = {
  year: string;
  entries: Array<{
    businessType: string;
    facility: string;
    decisionSegment: string;
    facilityDecisionSegment: string;
    name: string;
  }>;
  onOk: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const SegmentMaster: React.FC<SegmentMasterProps> = ({ year, entries, onOk, onClear, onEnd }) => {
  return (
    <div className="p-4">
      <div className="bg-blue-100 p-2 rounded-lg mb-4">
        <h2 className="text-xl font-bold">施設決統セグメントマスタ</h2>
        <div className="flex items-center justify-between">
          <span className="font-semibold">決算統計処理年度:</span>
          <span>{year}年度</span>
        </div>
      </div>

      <table className="w-full table-auto border-collapse mb-4">
        <thead>
          <tr className="bg-blue-200">
            <th className="border px-2 py-1">業種・事業</th>
            <th className="border px-2 py-1">施設</th>
            <th className="border px-2 py-1">決統セグメント</th>
            <th className="border px-2 py-1">施設決統セグメント</th>
            <th className="border px-2 py-1">名称</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="border px-2 py-1">{entry.businessType}</td>
              <td className="border px-2 py-1">{entry.facility}</td>
              <td className="border px-2 py-1">{entry.decisionSegment}</td>
              <td className="border px-2 py-1">{entry.facilityDecisionSegment}</td>
              <td className="border px-2 py-1">{entry.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex space-x-2">
        <button onClick={onOk} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-200 px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onEnd} className="bg-gray-200 px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default SegmentMaster;
