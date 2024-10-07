import React from 'react';

// 地籍情報の型定義
interface LandInfo {
  id: number;
  date: string;
  type: string;
  name: string;
  landmark: string;
  purpose: string;
  areaMap: number;
  areaSurvey: number;
  amount: number;
}

// コンポーネントのプロパティの型定義
interface LandTableProps {
  landData: LandInfo[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

// 再利用可能なテーブルコンポーネント
const LandTable: React.FC<LandTableProps> = ({ landData, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4">整理番号</th>
            <th className="py-2 px-4">異動年月日</th>
            <th className="py-2 px-4">区分</th>
            <th className="py-2 px-4">土地名</th>
            <th className="py-2 px-4">地番</th>
            <th className="py-2 px-4">地目</th>
            <th className="py-2 px-4">公図面積</th>
            <th className="py-2 px-4">実測面積</th>
            <th className="py-2 px-4">異動価格</th>
            <th className="py-2 px-4">操作</th>
          </tr>
        </thead>
        <tbody>
          {landData.map((land) => (
            <tr key={land.id} className="border-b border-gray-200">
              <td className="py-2 px-4">{land.id}</td>
              <td className="py-2 px-4">{land.date}</td>
              <td className="py-2 px-4">{land.type}</td>
              <td className="py-2 px-4">{land.name}</td>
              <td className="py-2 px-4">{land.landmark}</td>
              <td className="py-2 px-4">{land.purpose}</td>
              <td className="py-2 px-4">{land.areaMap.toFixed(2)}</td>
              <td className="py-2 px-4">{land.areaSurvey.toFixed(2)}</td>
              <td className="py-2 px-4">{land.amount.toLocaleString()}</td>
              <td className="py-2 px-4">
                <button className="mr-2 bg-yellow-500 text-white px-3 py-1 rounded" onClick={() => onEdit(land.id)}>編集</button>
                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => onDelete(land.id)}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LandTable;
