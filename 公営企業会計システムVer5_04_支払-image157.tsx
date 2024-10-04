```tsx
import React from 'react';
import 'tailwindcss/tailwind.css';

type FormInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: React.FC<FormInputProps> = ({ label, value, onChange }) => (
  <div className="flex items-center mb-2">
    <span className="w-32">{label}</span>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="border px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

type FormCheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormCheckbox: React.FC<FormCheckboxProps> = ({ label, checked, onChange }) => (
  <div className="flex items-center mb-2">
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      {label}
    </label>
  </div>
);

type FormProps = {
  // Define all necessary form props
  date: string;
  fiscalYear: string;
  budgetDivision: string;
  amount: number;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFiscalYearChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBudgetDivisionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onClear: () => void;
};

const Form: React.FC<FormProps> = ({
  date,
  fiscalYear,
  budgetDivision,
  amount,
  onDateChange,
  onFiscalYearChange,
  onBudgetDivisionChange,
  onAmountChange,
  onSubmit,
  onClear,
}) => (
  <div className="p-4 bg-white rounded shadow-md">
    <h2 className="text-lg font-bold mb-4">工事前払振替入力 (繰越予算)</h2>
    <FormInput label="精算処理日" value={date} onChange={onDateChange} />
    <FormInput label="年度" value={fiscalYear} onChange={onFiscalYearChange} />
    <FormCheckbox label="資金予算区分" checked={budgetDivision === '有'} onChange={onBudgetDivisionChange} />
    <FormInput label="振替額" value={amount.toString()} onChange={onAmountChange} />
    <div className="flex justify-end mt-4">
      <button onClick={onSubmit} className="px-4 py-2 mr-2 bg-blue-500 text-white rounded">OK</button>
      <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded">クリア</button>
    </div>
  </div>
);

export default Form;
```