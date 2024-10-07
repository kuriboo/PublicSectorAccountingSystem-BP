import React, { useState } from 'react';

// Props for the BudgetInput component
type BudgetInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const BudgetInput: React.FC<BudgetInputProps> = ({ label, value, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label className="text-blue-900">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded-md px-2 py-1 text-black"
      />
    </div>
  );
};

// Props for the BudgetForm component
type BudgetFormProps = {
  values: {
    [key: string]: string;
  };
  onChange: (key: string, value: string) => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({ values, onChange }) => {
  return (
    <div className="p-4">
      <h2 className="text-blue-900 mb-4">次年度 仕訳科目</h2>
      <div className="grid grid-cols-5 gap-4">
        {Object.entries(values).map(([key, value]) => (
          <BudgetInput 
            key={key} 
            label={key} 
            value={value} 
            onChange={(value) => onChange(key, value)} 
          />
        ))}
      </div>
    </div>
  );
};

const BudgetPage: React.FC = () => {
  const [values, setValues] = useState({
    '款': '002',
    '項': '01',
    '目': '01',
    '節': '13',
    '細節': '0001',
    '明細': '0001'
  });

  const handleChange = (key: string, value: string) => {
    setValues((prevValues) => ({ ...prevValues, [key]: value }));
  };

  return (
    <div>
      <BudgetForm values={values} onChange={handleChange} />
    </div>
  );
};

export default BudgetPage;
