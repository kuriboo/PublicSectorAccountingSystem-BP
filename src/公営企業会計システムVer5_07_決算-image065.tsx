// components/IncomeEntryForm.tsx

import React from 'react';

type IncomeEntryFormProps = {
  periodStart: string;
  periodEnd: string;
  budgetItem: string;
  noTaxAmount: number;
  specialIncomeItems: { id: string; name: string }[];
  usageMethods: { id: string; method: string }[];
  onSubmit: (data: { incomeItem: string; usageMethod: string; amount: number }) => void;
};

const IncomeEntryForm: React.FC<IncomeEntryFormProps> = ({
  periodStart,
  periodEnd,
  budgetItem,
  noTaxAmount,
  specialIncomeItems,
  usageMethods,
  onSubmit,
}) => {
  const [incomeItem, setIncomeItem] = React.useState('');
  const [usageMethod, setUsageMethod] = React.useState('');
  const [amount, setAmount] = React.useState<number>(0);

  const handleSubmit = () => {
    onSubmit({ incomeItem, usageMethod, amount });
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="flex justify-between mb-4">
        <div>課税期間: {periodStart} ～ {periodEnd}</div>
        <div>予算科目: {budgetItem}</div>
      </div>
      <div className="flex justify-end mb-4">
        <div>不課税収入額: {noTaxAmount.toLocaleString()} 円</div>
      </div>
      <div className="border-t-2 pt-4">
        <div className="mb-4">
          <label className="block mb-1">特定収入項目:</label>
          <select
            className="w-full p-2 border"
            value={incomeItem}
            onChange={e => setIncomeItem(e.target.value)}
          >
            {specialIncomeItems.map(item => (
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">特定収入の使途の特定方法:</label>
          <select
            className="w-full p-2 border"
            value={usageMethod}
            onChange={e => setUsageMethod(e.target.value)}
          >
            {usageMethods.map(method => (
              <option key={method.id} value={method.method}>{method.method}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">充当表記載額:</label>
          <input
            type="number"
            className="w-full p-2 border"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
          />
        </div>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          確定
        </button>
      </div>
    </div>
  );
};

export default IncomeEntryForm;
