import React from 'react';

// Props type definition
type EstimateRequestProps = {
  fiscalYear: string;
  department: string;
  section: string;
  detail: string;
  amount: number;
  taxIncludedAmount: number;
  consumptionTax: number;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

// EstimateRequest component
const EstimateRequest: React.FC<EstimateRequestProps> = ({
  fiscalYear,
  department,
  section,
  detail,
  amount,
  taxIncludedAmount,
  consumptionTax,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-lg">
      <h2 className="text-lg font-bold mb-4">当初科目別見積要求登録</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3>年度: {fiscalYear}</h3>
          <p>付番: {department}</p>
          <p>節: {section}</p>
          <p>細節: {detail}</p>
        </div>
        <div>
          <p>税込金額: {taxIncludedAmount.toLocaleString()}円</p>
          <p>消費税: {consumptionTax.toLocaleString()}円</p>
          <p>金額: {amount.toLocaleString()}円</p>
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        <button className="bg-blue-500 text-white rounded px-4 py-2" onClick={onRegister}>
          登録
        </button>
        <button className="bg-yellow-500 text-white rounded px-4 py-2" onClick={onEdit}>
          訂正
        </button>
        <button className="bg-red-500 text-white rounded px-4 py-2" onClick={onDelete}>
          行削除
        </button>
      </div>
    </div>
  );
};

export default EstimateRequest;
```