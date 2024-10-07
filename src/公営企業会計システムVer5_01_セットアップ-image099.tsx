// Import statements
import React from 'react';

// Define prop types using TypeScript
interface FinancialPlanningProps {
  fiscalYear: number;
  collectionNumber?: string;
  itemDetails?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onSubmit?: () => void;
}

// Reusable component definition
const FinancialPlanningForm: React.FC<FinancialPlanningProps> = ({
  fiscalYear,
  collectionNumber = '',
  itemDetails = '',
  onEdit,
  onDelete,
  onSubmit
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto border rounded-md shadow-md bg-white">
      {/* Header */}
      <h2 className="text-lg font-bold mb-4">資金計画書ファイル</h2>

      {/* Fiscal Year Input */}
      <div className="mb-3">
        <label className="block text-sm font-medium">会計年度</label>
        <input
          type="number"
          value={fiscalYear}
          className="border rounded p-2 w-full"
          readOnly
        />
      </div>

      {/* Collection Number Input */}
      <div className="mb-3">
        <label className="block text-sm font-medium">集計番号</label>
        <input
          type="text"
          value={collectionNumber}
          className="border rounded p-2 w-full"
          placeholder="Enter collection number"
        />
      </div>

      {/* Item Details Input */}
      <div className="mb-3">
        <label className="block text-sm font-medium">項目名称</label>
        <input
          type="text"
          value={itemDetails}
          className="border rounded p-2 w-full"
          placeholder="Enter item details"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button
          onClick={onEdit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          編集
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white p-2 rounded"
        >
          行削除
        </button>
        <button
          onClick={onSubmit}
          className="bg-green-500 text-white p-2 rounded"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default FinancialPlanningForm;
```