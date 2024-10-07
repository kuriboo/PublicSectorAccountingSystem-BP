import React from 'react';

type InputRangeProps = {
  label: string;
  startValue: string;
  endValue: string;
  onStartChange: (value: string) => void;
  onEndChange: (value: string) => void;
};

const InputRange: React.FC<InputRangeProps> = ({
  label,
  startValue,
  endValue,
  onStartChange,
  onEndChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <label className="text-xs">{label}</label>
      <input
        type="text"
        value={startValue}
        onChange={(e) => onStartChange(e.target.value)}
        className="border px-2 py-1 text-sm"
      />
      <span>~</span>
      <input
        type="text"
        value={endValue}
        onChange={(e) => onEndChange(e.target.value)}
        className="border px-2 py-1 text-sm"
      />
    </div>
  );
};

type CheckboxOption = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

type TaxFormProps = {
  transmissionDateStart: string;
  transmissionDateEnd: string;
  belongingStart: string;
  belongingEnd: string;
  budgetItemStart: string;
  budgetItemEnd: string;
  taxRate: string;
  reductionChecked: boolean;
  checkboxOptions: CheckboxOption[];
  onTransmissionDateChange: (start: string, end: string) => void;
  onBelongingChange: (start: string, end: string) => void;
  onBudgetItemChange: (start: string, end: string) => void;
  onTaxRateChange: (value: string) => void;
  onReductionChange: () => void;
};

const TaxForm: React.FC<TaxFormProps> = ({
  transmissionDateStart,
  transmissionDateEnd,
  belongingStart,
  belongingEnd,
  budgetItemStart,
  budgetItemEnd,
  taxRate,
  reductionChecked,
  checkboxOptions,
  onTransmissionDateChange,
  onBelongingChange,
  onBudgetItemChange,
  onTaxRateChange,
  onReductionChange,
}) => {
  return (
    <div className="p-4 border rounded space-y-2">
      <InputRange
        label="伝票日付"
        startValue={transmissionDateStart}
        endValue={transmissionDateEnd}
        onStartChange={(value) => onTransmissionDateChange(value, transmissionDateEnd)}
        onEndChange={(value) => onTransmissionDateChange(transmissionDateStart, value)}
      />

      <InputRange
        label="所属"
        startValue={belongingStart}
        endValue={belongingEnd}
        onStartChange={(value) => onBelongingChange(value, belongingEnd)}
        onEndChange={(value) => onBelongingChange(belongingStart, value)}
      />

      <InputRange
        label="予算科目"
        startValue={budgetItemStart}
        endValue={budgetItemEnd}
        onStartChange={(value) => onBudgetItemChange(value, budgetItemEnd)}
        onEndChange={(value) => onBudgetItemChange(budgetItemStart, value)}
      />

      <div className="flex items-center space-x-2">
        <span className="text-xs">税率</span>
        <input
          type="text"
          value={taxRate}
          onChange={(e) => onTaxRateChange(e.target.value)}
          className="border px-2 py-1 text-sm w-16"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={reductionChecked}
            onChange={onReductionChange}
            className="border"
          />
          <span className="text-xs">軽減税率</span>
        </label>
      </div>

      {checkboxOptions.map((option, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={option.checked}
            onChange={option.onChange}
            className="border"
          />
          <span className="text-xs">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default TaxForm;