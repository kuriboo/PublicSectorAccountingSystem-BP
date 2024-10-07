import React from 'react';

type BudgetItem = {
  name: string;
  spec: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  totalPrice: number;
};

type BudgetComponentProps = {
  budgetCode: string;
  budgetSection: string;
  budgetDetail: string;
  taxDivision: string;
  incomeDivision: string;
  taxRate: number;
  items: BudgetItem[];
  onSearchClick: () => void;
  onSubmitClick: () => void;
  onClearClick: () => void;
  onCancelClick: () => void;
};

const BudgetComponent: React.FC<BudgetComponentProps> = ({
  budgetCode,
  budgetSection,
  budgetDetail,
  taxDivision,
  incomeDivision,
  taxRate,
  items,
  onSearchClick,
  onSubmitClick,
  onClearClick,
  onCancelClick
}) => {
  return (
    <div className="p-4 border border-gray-300 rounded">
      <div className="mb-4">
        {/* Budget Information */}
        <div className="flex justify-between mb-2">
          <div>
            <div>予算科目</div>
            <div>{budgetCode}</div>
            <div>{budgetSection}</div>
            <div>{budgetDetail}</div>
          </div>
          <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={onSearchClick}>
            科目検索
          </button>
        </div>
        <div className="mb-2">
          <label>税区分: </label>
          <span>{taxDivision}</span>
          <label>収入区分: </label>
          <span>{incomeDivision}</span>
        </div>
        <div className="mb-4">
          <label>消費税率: </label>
          <span>{taxRate}%</span>
        </div>
      </div>
      
      {/* Items Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border">単価名称</th>
            <th className="border">規格名称</th>
            <th className="border">数量</th>
            <th className="border">単位</th>
            <th className="border">単価</th>
            <th className="border">金額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border">{item.name}</td>
              <td className="border">{item.spec}</td>
              <td className="border">{item.quantity}</td>
              <td className="border">{item.unit}</td>
              <td className="border">{item.unitPrice}</td>
              <td className="border">{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Actions */}
      <div className="flex justify-end mt-4">
        <button className="bg-green-500 text-white px-3 py-1 mx-1 rounded" onClick={onSubmitClick}>
          OK
        </button>
        <button className="bg-yellow-500 text-white px-3 py-1 mx-1 rounded" onClick={onClearClick}>
          クリア
        </button>
        <button className="bg-red-500 text-white px-3 py-1 mx-1 rounded" onClick={onCancelClick}>
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetComponent;
