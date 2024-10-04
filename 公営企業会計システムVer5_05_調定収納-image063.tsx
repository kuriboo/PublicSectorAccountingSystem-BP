```tsx
import React from 'react';

// TypeScript types for component props
type InputFieldProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

type DetailedInputProps = {
  section: string;
  subsection: string;
  detail: string;
  planAmount: string;
  taxRate: string;
  consumptionTax: string;
  specialIncome: string;
  onValueChange: (field: string, value: string) => void;
};

// Reusable InputField component
const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, placeholder }) => (
  <div className="flex flex-col mb-2">
    <label className="text-sm font-semibold mb-1">{label}</label>
    <input
      className="p-2 border rounded"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

// Main component
const DetailedInput: React.FC<DetailedInputProps> = ({
  section,
  subsection,
  detail,
  planAmount,
  taxRate,
  consumptionTax,
  specialIncome,
  onValueChange,
}) => {
  return (
    <div className="p-4">
      <div className="border-b mb-4 pb-2">
        <h2 className="font-bold text-lg">前受金振替入力明細登録</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <InputField
          label="節"
          value={section}
          onChange={(e) => onValueChange('section', e.target.value)}
          placeholder="例: 001 01 01 01 水道料金"
        />
        <InputField
          label="細節"
          value={subsection}
          onChange={(e) => onValueChange('subsection', e.target.value)}
          placeholder="例: 001 水道料金"
        />
        <InputField
          label="明細"
          value={detail}
          onChange={(e) => onValueChange('detail', e.target.value)}
          placeholder="例: 0010 水道料金"
        />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <InputField
          label="精算金額"
          value={planAmount}
          onChange={(e) => onValueChange('planAmount', e.target.value)}
          placeholder="例: 10,000"
        />
        <InputField
          label="消費税率"
          value={taxRate}
          onChange={(e) => onValueChange('taxRate', e.target.value)}
          placeholder="例: 10"
        />
        <InputField
          label="内消費税額"
          value={consumptionTax}
          onChange={(e) => onValueChange('consumptionTax', e.target.value)}
          placeholder="例: 908"
        />
        <InputField
          label="特定収入"
          value={specialIncome}
          onChange={(e) => onValueChange('specialIncome', e.target.value)}
          placeholder="例: 0"
        />
      </div>
      <div className="flex mt-6 space-x-4">
        <button className="bg-gray-300 p-2 rounded">OK</button>
        <button className="bg-gray-300 p-2 rounded">クリア</button>
        <button className="bg-gray-300 p-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default DetailedInput;
```