```tsx
import React from 'react';

// TypeScript interface for component props
interface BudgetSectionProps {
  projects: Array<{
    name: string;
    code: string;
    usageName: string;
    facilitySegment: string;
    compositionRatio: number;
  }>;
  onConfirm: () => void;
  onCancel: () => void;
}

const BudgetSection: React.FC<BudgetSectionProps> = ({ projects, onConfirm, onCancel }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <table className="w-full mb-4 border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">事業</th>
            <th className="p-2 border">振替コード</th>
            <th className="p-2 border">振替名</th>
            <th className="p-2 border">施設統轄セグメント</th>
            <th className="p-2 border">構成比率(%)</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{project.name}</td>
              <td className="p-2 border">{project.code}</td>
              <td className="p-2 border">{project.usageName}</td>
              <td className="p-2 border">{project.facilitySegment}</td>
              <td className="p-2 border">{project.compositionRatio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={onConfirm}
        >
          行確定
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetSection;
```