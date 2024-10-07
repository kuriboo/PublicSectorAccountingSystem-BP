import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

type BudgetDetailsProps = {
  budgetItem?: string;
  budgetDetails?: string;
  budgetDescription?: string;
  taxDivision?: string;
  defaultPreChangeAmount?: number;
  defaultPostChangeAmount?: number;
  defaultTaxExcludedAmount?: number;
  defaultConsumptionTaxRate?: number;
  defaultConsumptionTaxAmount?: number;
  onApply?: () => void;
  onClear?: () => void;
  onCancel?: () => void;
};

const BudgetDetails: React.FC<BudgetDetailsProps> = ({
  budgetItem,
  budgetDetails,
  budgetDescription,
  taxDivision,
  defaultPreChangeAmount = 0,
  defaultPostChangeAmount = 0,
  defaultTaxExcludedAmount = 0,
  defaultConsumptionTaxRate = 0,
  defaultConsumptionTaxAmount = 0,
  onApply,
  onClear,
  onCancel,
}) => {
  const [preChangeAmount, setPreChangeAmount] = useState<number>(defaultPreChangeAmount);
  const [postChangeAmount, setPostChangeAmount] = useState<number>(defaultPostChangeAmount);
  const [taxExcludedAmount, setTaxExcludedAmount] = useState<number>(defaultTaxExcludedAmount);
  const [consumptionTaxRate, setConsumptionTaxRate] = useState<number>(defaultConsumptionTaxRate);
  const [consumptionTaxAmount, setConsumptionTaxAmount] = useState<number>(defaultConsumptionTaxAmount);

  return (
    <div className="max-w-2xl mx-auto p-4 border">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>予算科目</p>
          <p>{budgetItem}</p>
          <p>{budgetDetails}</p>
          <p>{budgetDescription}</p>
          <p>税区分: {taxDivision}</p>
        </div>
        <div>
          <p>予算残情報</p>
          <p>節: </p>
          <p>予算現額: </p>
          <p>負担累計: </p>
          <p>負担残額: </p>
          <p>予定累計: </p>
          <p>予定残額: </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <div>設計額</div>
          <div>{preChangeAmount}</div>
          <input
            type="number"
            value={postChangeAmount}
            onChange={e => setPostChangeAmount(Number(e.target.value))}
            className="border w-28"
          />
        </div>
        <div className="flex justify-between mt-2">
          <div>税抜額</div>
          <div>{taxExcludedAmount}</div>
          <input
            type="number"
            value={taxExcludedAmount}
            onChange={e => setTaxExcludedAmount(Number(e.target.value))}
            className="border w-28"
          />
        </div>
        <div className="flex justify-between mt-2">
          <div>消費税率</div>
          <div>{consumptionTaxRate} %</div>
          <input
            type="number"
            value={consumptionTaxRate}
            onChange={e => setConsumptionTaxRate(Number(e.target.value))}
            className="border w-16"
          />
        </div>
        <div className="flex justify-between mt-2">
          <div>消費税額</div>
          <div>{consumptionTaxAmount}</div>
          <input
            type="number"
            value={consumptionTaxAmount}
            onChange={e => setConsumptionTaxAmount(Number(e.target.value))}
            className="border w-28"
          />
        </div>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button onClick={onApply} className="bg-blue-500 text-white px-4 py-2">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2">クリア</button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2">キャンセル</button>
      </div>
    </div>
  );
};

export default BudgetDetails;
