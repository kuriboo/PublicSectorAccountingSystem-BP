// components/KanrenShuushiComponent.tsx

import React from 'react';

// 型定義
interface KanrenShuushiProps {
  year: string;
  projectName: string;
  workspaceNumber: string;
  selection: {
    relatedCategory: string;
    collectionCategory: string;
    year: string;
    number: number;
    amount: number;
  }[];
  onSelectionChange: (index: number, field: string, value: string | number) => void;
}

const KanrenShuushiComponent: React.FC<KanrenShuushiProps> = ({
  year,
  projectName,
  workspaceNumber,
  selection,
  onSelectionChange,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Header */}
      <div className="bg-blue-200 p-2 rounded mb-4">
        <h1 className="text-xl font-bold">関連収支設定</h1>
      </div>

      {/* Project Information */}
      <div className="mb-4">
        <p>工事会帳年度: {year}</p>
        <p>工事名: {projectName}</p>
        <p>工事場所: {workspaceNumber}</p>
      </div>

      {/* Selection List */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">関連区分</th>
            <th className="py-2 px-4 border">収支区分</th>
            <th className="py-2 px-4 border">年度</th>
            <th className="py-2 px-4 border">番号</th>
            <th className="py-2 px-4 border">税抜金額</th>
          </tr>
        </thead>
        <tbody>
          {selection.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">
                <input
                  type="text"
                  value={item.relatedCategory}
                  onChange={(e) => onSelectionChange(index, 'relatedCategory', e.target.value)}
                  className="w-full"
                />
              </td>
              <td className="py-2 px-4 border">
                <input
                  type="text"
                  value={item.collectionCategory}
                  onChange={(e) => onSelectionChange(index, 'collectionCategory', e.target.value)}
                  className="w-full"
                />
              </td>
              <td className="py-2 px-4 border">
                <input
                  type="text"
                  value={item.year}
                  onChange={(e) => onSelectionChange(index, 'year', e.target.value)}
                  className="w-full"
                />
              </td>
              <td className="py-2 px-4 border">
                <input
                  type="number"
                  value={item.number}
                  onChange={(e) => onSelectionChange(index, 'number', parseInt(e.target.value, 10))}
                  className="w-full"
                />
              </td>
              <td className="py-2 px-4 border">
                <input
                  type="number"
                  value={item.amount}
                  onChange={(e) => onSelectionChange(index, 'amount', parseInt(e.target.value, 10))}
                  className="w-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KanrenShuushiComponent;
