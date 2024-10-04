```tsx
// Import necessary modules and types
import React from 'react';

// Define the types for props
type ConsumptionTaxFormProps = {
  fiscalYear: string;
  budgetType: string;
  occurrences: number;
  onRegister: () => void;
  onModify: () => void;
  onDelete: () => void;
  taxMethods: {
    purchase: string;
    sales: string;
  };
  onFiscalYearChange: (year: string) => void;
  onBudgetTypeChange: (type: string) => void;
  onOccurrencesChange: (occ: number) => void;
  onTaxMethodsChange: (methods: { purchase: string; sales: string }) => void;
};

// Define the functional component
const ConsumptionTaxForm: React.FC<ConsumptionTaxFormProps> = ({
  fiscalYear,
  budgetType,
  occurrences,
  onRegister,
  onModify,
  onDelete,
  taxMethods,
  onFiscalYearChange,
  onBudgetTypeChange,
  onOccurrencesChange,
  onTaxMethodsChange,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      {/* Form Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">消費税処理マスタ</h1>
        <div>
          <button className="mx-2 p-1 bg-blue-500 text-white" onClick={onRegister}>
            登録
          </button>
          <button className="mx-2 p-1 bg-yellow-500 text-white" onClick={onModify}>
            訂正
          </button>
          <button className="mx-2 p-1 bg-red-500 text-white" onClick={onDelete}>
            削除
          </button>
        </div>
      </div>

      {/* Form Fields */}
      <div className="mt-4">
        {/* Fiscal Year and Budget Type */}
        <div className="flex space-x-4">
          <div>
            <label>会計年度</label>
            <input
              type="text"
              value={fiscalYear}
              onChange={(e) => onFiscalYearChange(e.target.value)}
              className="border rounded px-2 py-1"
            />
          </div>
          <div>
            <label>予算編成区分</label>
            <select
              value={budgetType}
              onChange={(e) => onBudgetTypeChange(e.target.value)}
              className="border rounded px-2 py-1"
            >
              <option value="補正予算">補正予算</option>
              <option value="当初予算">当初予算</option>
            </select>
          </div>
        </div>

        {/* Occurrences */}
        <div className="mt-4">
          <label>回数</label>
          <input
            type="number"
            value={occurrences}
            onChange={(e) => onOccurrencesChange(parseInt(e.target.value))}
            className="border rounded px-2 py-1"
          />
        </div>

        {/* Tax Methods */}
        <div className="mt-4">
          <label>税額計算</label>
          <select
            value={taxMethods.purchase}
            onChange={(e) =>
              onTaxMethodsChange({ ...taxMethods, purchase: e.target.value })
            }
            className="border rounded px-2 py-1"
          >
            <option value="本計算">本計算</option>
            <option value="割戻計算">割戻計算</option>
          </select>

          <select
            value={taxMethods.sales}
            onChange={(e) =>
              onTaxMethodsChange({ ...taxMethods, sales: e.target.value })
            }
            className="border rounded px-2 py-1"
          >
            <option value="本計算">本計算</option>
            <option value="割戻計算">割戻計算</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Export the component
export default ConsumptionTaxForm;
```