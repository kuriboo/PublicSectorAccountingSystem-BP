import React, { FC } from 'react';

interface BudgetInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

const BudgetInput: FC<BudgetInputProps> = ({ label, placeholder, value, onChange, type = 'text' }) => (
  <div className="flex items-center my-2">
    <label className="w-32">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border px-2 py-1 rounded shadow-md focus:outline-none focus:ring"
    />
  </div>
);

interface BudgetFormProps {
  budgetNumber: string;
  project: string;
  budgetItem: string;
  budgetSection: string;
  expenseDivision: string;
  segment: string;
  onSubmit: () => void;
  onCancel: () => void;
  onChange: (field: string, value: string) => void;
}

const BudgetForm: FC<BudgetFormProps> = ({
  budgetNumber,
  project,
  budgetItem,
  budgetSection,
  expenseDivision,
  segment,
  onSubmit,
  onCancel,
  onChange,
}) => (
  <form className="p-4 bg-white rounded shadow-lg">
    <BudgetInput label="予算数" value={budgetNumber} onChange={(value) => onChange('budgetNumber', value)} />
    <BudgetInput label="予算項" value={project} onChange={(value) => onChange('project', value)} />
    <BudgetInput label="予算目" value={budgetItem} onChange={(value) => onChange('budgetItem', value)} />
    <BudgetInput label="予算節" value={budgetSection} onChange={(value) => onChange('budgetSection', value)} />
    <BudgetInput label="費用区分" value={expenseDivision} onChange={(value) => onChange('expenseDivision', value)} />
    <BudgetInput label="セグメント" value={segment} onChange={(value) => onChange('segment', value)} />

    <div className="flex justify-end space-x-2 mt-4">
      <button
        type="button"
        onClick={onSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        OK
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="bg-gray-300 text-black px-4 py-2 rounded shadow hover:bg-gray-400"
      >
        キャンセル
      </button>
    </div>
  </form>
);

export default BudgetForm;
```