// Import necessary libraries and styles
import React from 'react';
import 'tailwindcss/tailwind.css';

// Define the type for component props
type BudgetRegistrationProps = {
  year: string;
  department: string;
  sections: Array<{ code: string; name: string }>;
  detail: string;
  taxBase: number;
  consumptionTax: number;
  total: number;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

// Create a functional component
const BudgetRegistration: React.FC<BudgetRegistrationProps> = ({
  year,
  department,
  sections,
  detail,
  taxBase,
  consumptionTax,
  total,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 max-w-2xl mx-auto bg-white rounded shadow-md">
      {/* Header Section */}
      <div className="mb-4">
        <h1 className="text-lg font-bold">当初科目別査定登録</h1>
      </div>

      {/* Information Section */}
      <div className="mb-4">
        <div className="flex justify-between">
          <span className="text-sm">年度: {year}</span>
          <span className="text-sm">部署: {department}</span>
        </div>
      </div>

      {/* Section Details */}
      <div className="mb-4">
        <div className="border p-2">
          {sections.map((section, index) => (
            <div key={index} className="flex justify-between mb-2">
              <span>{section.code}</span>
              <span>{section.name}</span>
            </div>
          ))}
          <span className="block">明細: {detail}</span>
        </div>
      </div>

      {/* Tax Details */}
      <div className="mb-4">
        <div className="border p-2">
          <div className="flex justify-between">
            <span>税抜金額:</span>
            <span>{taxBase.toLocaleString()} 円</span>
          </div>
          <div className="flex justify-between">
            <span>消費税:</span>
            <span>{consumptionTax.toLocaleString()} 円</span>
          </div>
          <div className="flex justify-between">
            <span>税込合計:</span>
            <span>{total.toLocaleString()} 円</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button onClick={onRegister} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">登録</button>
        <button onClick={onEdit} className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">訂正</button>
        <button onClick={onDelete} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">削除</button>
      </div>
    </div>
  );
};

export default BudgetRegistration;
