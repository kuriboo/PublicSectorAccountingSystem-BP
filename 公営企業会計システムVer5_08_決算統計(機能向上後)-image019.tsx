```tsx
import React from 'react';

// 型定義
type TableData = {
  industryCode: string;
  facility: string;
  segmentCode: string;
  segmentName: string;
}[];

type SegmentMasterProps = {
  data: TableData;
  year: string;
  onConfirm: () => void;
  onCancel: () => void;
};

// 再利用可能なコンポーネント
const SegmentMaster: React.FC<SegmentMasterProps> = ({ data, year, onConfirm, onCancel }) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* ヘッダー */}
      <div className="bg-blue-200 text-lg font-bold p-2">施設決裁セグメントマスタ</div>
      {/* 年度選択 */}
      <div className="flex justify-between items-center my-2">
        <div className="text-sm">決算統計処理年度: {year}年度</div>
        <div className="space-x-2">
          <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={onConfirm}>確定</button>
          <button className="bg-gray-300 text-black px-4 py-1 rounded" onClick={onCancel}>キャンセル</button>
        </div>
      </div>
      {/* テーブル */}
      <table className="w-full bg-white border">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border">業種・事業</th>
            <th className="border">施設</th>
            <th className="border">決裁セグメント</th>
            <th className="border">名称</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border">{row.industryCode}</td>
              <td className="border">{row.facility}</td>
              <td className="border">{row.segmentCode}</td>
              <td className="border">{row.segmentName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SegmentMaster;
```