```tsx
import React from 'react';

// 型定義
type BudgetDetail = {
  itemName: string;
  specificationName: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  amount: number;
};

type BudgetFormProps = {
  budgetCode: string;
  budgetDetailCode: string;
  consumptionTaxRate: number;
  budgetAmount: number;
  taxExcludedAmount: number;
  consumptionTax: number;
  budgetItems: BudgetDetail[];
  onRegister: () => void;
  onEdit: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  budgetCode,
  budgetDetailCode,
  consumptionTaxRate,
  budgetAmount,
  taxExcludedAmount,
  consumptionTax,
  budgetItems,
  onRegister,
  onEdit,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* 予算科目と予算部詳細 */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block">予算科目: {budgetCode}</label>
          <label className="block">予算細節: {budgetDetailCode}</label>
        </div>
        <div>
          <label className="block">予定額: {budgetAmount}</label>
          <label className="block">税抜金額: {taxExcludedAmount}</label>
          <label className="block">消費税額: {consumptionTax}</label>
        </div>
      </div>

      {/* 消費税率 */}
      <div className="my-4">
        <label className="mr-2">消費税率:</label>
        <span>{consumptionTaxRate}%</span>
      </div>

      {/* ボタン */}
      <div className="flex space-x-2 my-4">
        <button onClick={onRegister} className="px-4 py-2 bg-blue-500 text-white rounded">登録</button>
        <button onClick={onEdit} className="px-4 py-2 bg-green-500 text-white rounded">訂正</button>
        <button onClick={onSubmit} className="px-4 py-2 bg-gray-500 text-white rounded">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-yellow-500 text-white rounded">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded">キャンセル</button>
      </div>

      {/* 物品一覧 */}
      <table className="min-w-full bg-white border">
        <thead className="bg-gray-100">
          <tr>
            <th className="w-1/5 border">単価名称</th>
            <th className="w-1/5 border">規格名称</th>
            <th className="w-1/5 border">数量</th>
            <th className="w-1/5 border">単位</th>
            <th className="w-1/5 border">単価</th>
            <th className="w-1/5 border">金額</th>
          </tr>
        </thead>
        <tbody>
          {budgetItems.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border">{item.itemName}</td>
              <td className="border">{item.specificationName}</td>
              <td className="border">{item.quantity}</td>
              <td className="border">{item.unit}</td>
              <td className="border">{item.unitPrice.toLocaleString()}</td>
              <td className="border">{item.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetForm;
```