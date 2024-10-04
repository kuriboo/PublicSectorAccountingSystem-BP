import React from 'react';

interface BudgetEntryFormProps {
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
  sectionCode: string;
  budgetItems: BudgetItem[];
  consumptionTaxRate: number;
}

interface BudgetItem {
  code: string;
  name: string;
  specName: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  amount: number;
}

const BudgetEntryForm: React.FC<BudgetEntryFormProps> = ({
  onSubmit,
  onClear,
  onCancel,
  sectionCode,
  budgetItems,
  consumptionTaxRate,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      <div className="flex justify-between mb-4">
        <div>
          <span className="mr-2 text-lg">予算部</span>
          <span className="text-lg">{sectionCode}</span>
        </div>
        <div>
          <button className="mr-2 p-2 bg-blue-500 text-white rounded" onClick={onSubmit}>OK</button>
          <button className="mr-2 p-2 bg-gray-300 text-black rounded" onClick={onClear}>クリア</button>
          <button className="p-2 bg-red-500 text-white rounded" onClick={onCancel}>キャンセル</button>
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h3 className="text-xl font-bold mb-2">予算残情報</h3>
        <div className="grid grid-cols-2 gap-2">
          <div>予算現額: 1,237,000</div>
          <div>負担累計: 10,000</div>
          <div>負担残額: 1,227,000</div>
          <div>予定累計: 0</div>
          <div>予定残額: 1,227,000</div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="taxRate" className="mr-2">消費税率:</label>
        <input type="number" id="taxRate" value={consumptionTaxRate} className="border p-1" readOnly />%
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">単価コード</th>
            <th className="border p-2">単価名称</th>
            <th className="border p-2">規格名称</th>
            <th className="border p-2">数量</th>
            <th className="border p-2">単位</th>
            <th className="border p-2">単価</th>
            <th className="border p-2">金額</th>
          </tr>
        </thead>
        <tbody>
          {budgetItems.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border p-2">{item.code}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.specName}</td>
              <td className="border p-2">{item.quantity}</td>
              <td className="border p-2">{item.unit}</td>
              <td className="border p-2">{item.unitPrice.toLocaleString()}</td>
              <td className="border p-2">{item.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetEntryForm;