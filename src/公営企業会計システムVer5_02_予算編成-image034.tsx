// Import statements
import React from 'react';

// TypeScript types
type EstimateRequestProps = {
  year: string;
  department: string;
  budgetAttributes: {
    taxDivision: string;
    division: string;
    basis: string;
  };
  amounts: {
    before: number;
    after: number;
    tax: number;
    total: number;
  };
  onRegister: () => void;
  onCorrect: () => void;
  onDelete: () => void;
};

// EstimateRequest component
const EstimateRequest: React.FC<EstimateRequestProps> = ({
  year,
  department,
  budgetAttributes,
  amounts,
  onRegister,
  onCorrect,
  onDelete,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-gray-100">
      <h2 className="text-xl font-bold mb-4">補正科目別見積要求登録</h2>
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block font-semibold">年度: {year}</label>
          <label className="block font-semibold">所属: {department}</label>
        </div>
        <div>
          <span className="block font-semibold">予算明細属性</span>
          <div className="border p-2 bg-white">
            <p>税区分: {budgetAttributes.taxDivision}</p>
            <p>区分: {budgetAttributes.division}</p>
            <p>積算基礎: {budgetAttributes.basis}</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <span className="block font-semibold">未登録 (単位: 円)</span>
        <p>補正前: {amounts.before.toLocaleString()}</p>
        <p>税 徴: {amounts.tax.toLocaleString()}</p>
        <p>補正後: {amounts.after.toLocaleString()}</p>
        <p>税込合計: {amounts.total.toLocaleString()}</p>
      </div>

      <div className="flex justify-end space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onRegister}>
          登録
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={onCorrect}>
          訂正
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onDelete}>
          削除
        </button>
      </div>
    </div>
  );
};

export default EstimateRequest;
```