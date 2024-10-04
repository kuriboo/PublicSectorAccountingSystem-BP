```tsx
import React, { ChangeEvent } from 'react';

// Prop types for the component
type TaxFormProps = {
  decisionAmount: number;
  taxExcludedAmount: number;
  consumptionTaxRate: number;
  otherTaxRate: number;
  onDecisionAmountChange: (value: number) => void;
  onTaxExcludedAmountChange: (value: number) => void;
  onConsumptionTaxRateChange: (value: number) => void;
  onOtherTaxRateChange: (value: number) => void;
};

const TaxForm: React.FC<TaxFormProps> = ({
  decisionAmount,
  taxExcludedAmount,
  consumptionTaxRate,
  otherTaxRate,
  onDecisionAmountChange,
  onTaxExcludedAmountChange,
  onConsumptionTaxRateChange,
  onOtherTaxRateChange,
}) => {
  
  // Handle input change for numeric inputs
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    callback: (value: number) => void
  ) => {
    const value = parseFloat(event.target.value) || 0;
    callback(value);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center space-x-4">
        <label className="text-blue-900">決定額</label>
        <input
          type="number"
          value={decisionAmount}
          onChange={(e) => handleInputChange(e, onDecisionAmountChange)}
          className="border px-2 py-1"
        />
      </div>
      <div className="flex items-center space-x-4">
        <label className="text-blue-900">税抜額</label>
        <input
          type="number"
          value={taxExcludedAmount}
          onChange={(e) => handleInputChange(e, onTaxExcludedAmountChange)}
          className="border px-2 py-1"
        />
      </div>
      <div className="flex items-center space-x-4">
        <label className="text-blue-900">消費税率</label>
        <input
          type="number"
          value={consumptionTaxRate}
          onChange={(e) => handleInputChange(e, onConsumptionTaxRateChange)}
          className="border px-2 py-1"
        />
      </div>
      <div className="flex items-center space-x-4">
        <label className="text-blue-900">他税率</label>
        <input
          type="number"
          value={otherTaxRate}
          onChange={(e) => handleInputChange(e, onOtherTaxRateChange)}
          className="border px-2 py-1"
        />
      </div>
      <button className="bg-purple-500 text-white px-4 py-2 rounded">摘要</button>
    </div>
  );
};

export default TaxForm;
```