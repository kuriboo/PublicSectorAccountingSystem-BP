```tsx
import React from 'react';

// InputFieldPropsの型定義
type InputFieldProps = {
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
  inputType?: 'text' | 'number';
};

// ドロップダウンの選択肢の型定義
type DropdownOption = {
  label: string;
  value: number;
};

// DropdownPropsの型定義
type DropdownProps = {
  label: string;
  options: DropdownOption[];
  value: number;
  onChange: (value: number) => void;
};

// InputFieldコンポーネント
const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, inputType = 'text' }) => (
  <div className="flex items-center my-2">
    <label className="w-24 text-blue-600">{label}</label>
    <input
      type={inputType}
      value={value}
      onChange={(e) => onChange(inputType === 'number' ? parseFloat(e.target.value) : e.target.value)}
      className="border border-gray-300 rounded p-1 flex-1"
    />
  </div>
);

// Dropdownコンポーネント
const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => (
  <div className="flex items-center my-2">
    <label className="w-24 text-blue-600">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value, 10))}
      className="border border-gray-300 rounded p-1 flex-1"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

// FormPropsの型定義
type FormProps = {
  totalAmount: number;
  beforeTaxAmount: number;
  consumptionTaxRate: number;
  otherTaxRate: number;
  onTotalAmountChange: (value: number) => void;
  onBeforeTaxAmountChange: (value: number) => void;
  onConsumptionTaxRateChange: (value: number) => void;
  onOtherTaxRateChange: (value: number) => void;
};

// Formコンポーネント
const Form: React.FC<FormProps> = ({
  totalAmount,
  beforeTaxAmount,
  consumptionTaxRate,
  otherTaxRate,
  onTotalAmountChange,
  onBeforeTaxAmountChange,
  onConsumptionTaxRateChange,
  onOtherTaxRateChange,
}) => (
  <form className="p-4 bg-gray-100 rounded shadow-md">
    <InputField label="決定額" value={totalAmount} onChange={onTotalAmountChange} inputType="number" />
    <InputField label="税抜額" value={beforeTaxAmount} onChange={onBeforeTaxAmountChange} inputType="number" />
    <Dropdown
      label="消費税率"
      value={consumptionTaxRate}
      onChange={onConsumptionTaxRateChange}
      options={[
        { label: '8%', value: 8 },
        { label: '10%', value: 10 },
      ]}
    />
    <InputField label="消費税額" value={0} onChange={() => {}} inputType="number" />
    <Dropdown
      label="他税率"
      value={otherTaxRate}
      onChange={onOtherTaxRateChange}
      options={[
        { label: '0%', value: 0 },
        { label: '5%', value: 5 },
      ]}
    />
    <InputField label="他税額" value={0} onChange={() => {}} inputType="number" />
    <button type="submit" className="mt-4 p-2 bg-purple-500 text-white rounded shadow">
      摘要
    </button>
  </form>
);

export default Form;
```