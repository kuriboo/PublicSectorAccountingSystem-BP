```tsx
import React from 'react';

interface BudgetSheetProps {
  title: string;
  department: string;
  responsiblePerson: string;
  creationDate: string;
  onExportCsv: () => void;
  onClear: () => void;
  onFinish: () => void;
}

const BudgetSheet: React.FC<BudgetSheetProps> = ({
  title,
  department,
  responsiblePerson,
  creationDate,
  onExportCsv,
  onClear,
  onFinish
}) => {
  return (
    <div className="w-full h-full bg-white">
      {/* Title Section */}
      <div className="bg-purple-100 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="text-sm text-right">
          <div>{department}</div>
          <div>{responsiblePerson}</div>
          <div>{creationDate}</div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex justify-center items-center">
        <label className="text-lg mr-2">作表日</label>
        <span className="text-sm border-b border-gray-300">{creationDate}</span>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end p-4 space-x-4">
        <button
          onClick={onExportCsv}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          CSV出力
        </button>
        <button
          onClick={onClear}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          クリア
        </button>
        <button
          onClick={onFinish}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetSheet;
```