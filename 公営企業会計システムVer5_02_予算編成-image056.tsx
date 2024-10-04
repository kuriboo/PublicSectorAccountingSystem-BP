```tsx
import React from 'react';

// Define the props type
interface PlanningFormProps {
  fiscalYear: number;
  budgetFormationCategory: string[];
  pastFiscalYear: number;
  departmentStart: string;
  departmentEnd: string;
  itemStart: string;
  itemEnd: string;
  reserveRate: number;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const PlanningForm: React.FC<PlanningFormProps> = ({
  fiscalYear,
  budgetFormationCategory,
  pastFiscalYear,
  departmentStart,
  departmentEnd,
  itemStart,
  itemEnd,
  reserveRate,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* 対象予算 */}
      <div className="mb-4 p-4 border">
        <h2 className="font-bold">対象予算</h2>
        <div>
          <label>会計年度: </label>
          <span>{`平成${fiscalYear}年度`}</span>
        </div>
        <div>
          <label>予算編成区分: </label>
          <select className="ml-2 border">
            {budgetFormationCategory.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 対象実績 */}
      <div className="mb-4 p-4 border">
        <h2 className="font-bold">対象実績</h2>
        <div>
          <label>過年度実績: </label>
          <span>{`平成${pastFiscalYear}年度`}</span>
        </div>
      </div>

      {/* 作成範囲 */}
      <div className="mb-4 p-4 border">
        <h2 className="font-bold">作成範囲</h2>
        <div>
          <label>所属: </label>
          <input
            type="text"
            className="ml-2 border"
            value={departmentStart}
            readOnly
          />
          <span> ~ </span>
          <input
            type="text"
            className="ml-2 border"
            value={departmentEnd}
            readOnly
          />
        </div>
        <div>
          <label>予算科目: </label>
          <input
            type="text"
            className="ml-2 border"
            value={itemStart}
            readOnly
          />
          <span> ~ </span>
          <input
            type="text"
            className="ml-2 border"
            value={itemEnd}
            readOnly
          />
        </div>
      </div>

      {/* 保留率 */}
      <div className="mb-4 p-4 border">
        <h2 className="font-bold">保留率</h2>
        <div>
          <label>保留率: </label>
          <input
            type="number"
            className="ml-2 border"
            value={reserveRate}
            readOnly
            step="0.01"
          />
          <span>%</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-yellow-500 text-white">
          クリア
        </button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white">
          終了
        </button>
      </div>
    </div>
  );
};

export default PlanningForm;
```