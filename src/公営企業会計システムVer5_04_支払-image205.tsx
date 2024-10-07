import React from 'react';

type BudgetDetailProps = {
  budgetItem: string;
  budgetDept: string;
  budgetSubDept: string;
  budgetDetail: string;
  taxClass: string;
  consumptionTaxRate: string;
  items: {
    name: string;
    specification: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    amount: number;
  }[];
  onCancel: () => void;
};

const BudgetDetail: React.FC<BudgetDetailProps> = ({
  budgetItem,
  budgetDept,
  budgetSubDept,
  budgetDetail,
  taxClass,
  consumptionTaxRate,
  items,
  onCancel
}) => {
  return (
    <div className="border p-4 w-full max-w-2xl mx-auto bg-white shadow-md">
      {/* Budget Information */}
      <section className="mb-4">
        <h2 className="font-bold text-lg">予算科目</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>予算項目: {budgetItem}</li>
          <li>予算節: {budgetDept}</li>
          <li>予算細節: {budgetSubDept}</li>
          <li>予算明細: {budgetDetail}</li>
        </ul>
      </section>

      {/* Tax Information */}
      <section className="mb-4">
        <h3 className="font-bold text-lg">税区分</h3>
        <p className="text-sm">{taxClass}</p>
        <h3 className="font-bold text-lg mt-2">消費税率</h3>
        <p className="text-sm">{consumptionTaxRate}</p>
      </section>

      {/* Item Table */}
      <section className="overflow-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="border px-4 py-2">単価名称</th>
              <th className="border px-4 py-2">規格名称</th>
              <th className="border px-4 py-2">数量</th>
              <th className="border px-4 py-2">単位</th>
              <th className="border px-4 py-2">単価</th>
              <th className="border px-4 py-2">金額</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="even:bg-gray-100 odd:bg-white">
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.specification}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">{item.unit}</td>
                <td className="border px-4 py-2">{item.unitPrice.toFixed(2)}</td>
                <td className="border px-4 py-2">{item.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Cancel Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetDetail;
```