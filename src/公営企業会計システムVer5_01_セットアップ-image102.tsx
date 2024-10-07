import React from 'react';

type Props = {
  year: string;
  tableNumber: number;
  cycle: number;
  amount: {
    companyFunds: number;
    expenses: number;
    subsidies: number;
    responsibleFunds: number;
    availableFunds: number;
    previousYearFunds: number;
    currentYearFunds: number;
    adjustmentFunds: number;
    additional: number;
    others: number;
  };
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
};

const BudgetForm: React.FC<Props> = ({
  year,
  tableNumber,
  cycle,
  amount,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="text-xl font-bold mb-4">補てん財源マスタ保守</div>
      <div className="mb-2">
        <label className="font-bold">年度:</label>
        <span className="ml-2">{year}</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">表No.:</label>
        <span className="ml-2">{tableNumber}</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">回数:</label>
        <span className="ml-2">{cycle}</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">企業信予算科目金額:</label>
        <input
          type="number"
          value={amount.companyFunds}
          className="border p-1 ml-2"
          readOnly
        />
      </div>
      <div className="mb-2">
        <label className="font-bold">出資金予算科目金額:</label>
        <input
          type="number"
          value={amount.expenses}
          className="border p-1 ml-2"
          readOnly
        />
      </div>
      <div className="mb-2">
        <label className="font-bold">補助金予算科目金額:</label>
        <input
          type="number"
          value={amount.subsidies}
          className="border p-1 ml-2"
          readOnly
        />
      </div>
      <div className="mb-2">
        <label className="font-bold">負担金予算科目金額:</label>
        <input
          type="number"
          value={amount.responsibleFunds}
          className="border p-1 ml-2"
          readOnly
        />
      </div>
      <div className="mb-2">
        <label className="font-bold">補てん財源使用可能額:</label>
        <input
          type="number"
          value={amount.availableFunds}
          className="border p-1 ml-2"
          readOnly
        />
      </div>
      <div className="flex space-x-2 mt-4">
        <button onClick={onConfirm} className="bg-blue-500 text-white py-1 px-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-yellow-500 text-white py-1 px-2 rounded">
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 text-white py-1 px-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;