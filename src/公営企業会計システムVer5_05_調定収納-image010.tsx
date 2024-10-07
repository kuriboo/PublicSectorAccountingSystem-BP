import React from 'react';

type RangeSelectionProps = {
  title: string;
  options: string[];
  onChange: (selection: string) => void;
};

const RangeSelection: React.FC<RangeSelectionProps> = ({ title, options, onChange }) => {
  return (
    <div className="my-4">
      <h3 className="font-bold">{title}</h3>
      {options.map((option) => (
        <label key={option} className="mr-4">
          <input
            type="radio"
            name={title}
            value={option}
            onChange={(e) => onChange(e.target.value)}
            className="mr-2"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

type TextInputProps = {
  label: string;
  id: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const TextInput: React.FC<TextInputProps> = ({ label, id, value, placeholder, onChange }) => {
  return (
    <div className="my-2">
      <label htmlFor={id} className="mr-2">
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="border p-1"
      />
    </div>
  );
};

type BudgetFormProps = {
  levels: string[];
  onLevelChange: (selection: string) => void;
  dateFrom: string;
  dateTo: string;
  onDateFromChange: (value: string) => void;
  onDateToChange: (value: string) => void;
  budgetFrom: string;
  budgetTo: string;
  onBudgetFromChange: (value: string) => void;
  onBudgetToChange: (value: string) => void;
  checked: boolean;
  onCheckboxChange: (checked: boolean) => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  levels,
  onLevelChange,
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
  budgetFrom,
  budgetTo,
  onBudgetFromChange,
  onBudgetToChange,
  checked,
  onCheckboxChange,
}) => {
  return (
    <form className="p-4 border rounded-lg shadow-lg">
      <RangeSelection title="出力レベル" options={levels} onChange={onLevelChange} />
      
      <div className="my-4">
        <span className="font-bold">範囲指定</span>
        <div className="flex gap-4">
          <TextInput label="期間" id="dateFrom" value={dateFrom} onChange={onDateFromChange} />
          <TextInput label="〜" id="dateTo" value={dateTo} onChange={onDateToChange} />
        </div>
        
        <div className="flex gap-4">
          <TextInput label="予算科目" id="budgetFrom" value={budgetFrom} onChange={onBudgetFromChange} />
          <TextInput label="〜" id="budgetTo" value={budgetTo} onChange={onBudgetToChange} />
        </div>
        
        <div className="my-2 flex items-center">
          <input
            type="checkbox"
            id="checkbox"
            checked={checked}
            onChange={(e) => onCheckboxChange(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="checkbox">前月繰越行のみでも印字する</label>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button type="button" className="px-4 py-2 bg-gray-300 rounded">OK</button>
          <button type="reset" className="px-4 py-2 bg-gray-300 rounded">クリア</button>
          <button type="button" className="px-4 py-2 bg-gray-300 rounded">終了</button>
        </div>
      </div>
    </form>
  );
};

export default BudgetForm;
