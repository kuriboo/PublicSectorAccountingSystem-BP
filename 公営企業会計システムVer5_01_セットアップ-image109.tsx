```tsx
import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
      />
    </div>
  );
};

interface SelectFieldProps {
  label: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options, selectedValue, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

interface FormProps {
  accountingYear: string;
  setAccountingYear: (value: string) => void;
  sectionDivision: string;
  setSectionDivision: (value: string) => void;
  itemName1: string;
  setItemName1: (value: string) => void;
  itemName2: string;
  setItemName2: (value: string) => void;
}

const CustomForm: React.FC<FormProps> = ({
  accountingYear,
  setAccountingYear,
  sectionDivision,
  setSectionDivision,
  itemName1,
  setItemName1,
  itemName2,
  setItemName2,
}) => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <SelectField
        label="会計年度"
        options={[
          { value: '平成29', label: '平成29' },
          { value: '平成30', label: '平成30' },
        ]}
        selectedValue={accountingYear}
        onChange={setAccountingYear}
      />
      <SelectField
        label="作表制御表区分"
        options={[
          { value: '003', label: '作表制御集計表' },
          { value: '004', label: '別表' },
        ]}
        selectedValue={sectionDivision}
        onChange={setSectionDivision}
      />
      <InputField
        label="項目名称1"
        value={itemName1}
        onChange={setItemName1}
      />
      <InputField
        label="項目名称2"
        value={itemName2}
        onChange={setItemName2}
      />
    </div>
  );
};

export default CustomForm;
```