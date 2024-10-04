```tsx
import React from 'react';

interface FieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
}

interface RadioGroupProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Field: React.FC<FieldProps> = ({ label, type, value, onChange }) => {
  return (
    <div className="flex flex-col mb-2">
      <label className="text-sm font-bold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded p-1"
      />
    </div>
  );
};

const RadioGroup: React.FC<RadioGroupProps> = ({ options, selected, onChange }) => {
  return (
    <div className="flex flex-col mb-2">
      {options.map((option, index) => (
        <label key={index} className="text-sm">
          <input
            type="radio"
            value={option}
            checked={selected === option}
            onChange={() => onChange(option)}
            className="mr-1"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
    >
      {label}
    </button>
  );
};

const MasterForm: React.FC = () => {
  const [formState, setFormState] = React.useState({
    excludeEndPoint: '',
    modifyEndPoint: '',
    currentYear: '',
    carryOverAmount: '',
    deptCode: '',
    facilityCode: '',
    reserveAmountCode: '',
    assetAdditionRate: '',
    accountingYear: '',
    issuePriceAdjustment: '',
  });

  const handleFieldChange = (field: string, value: string) => {
    setFormState((prevState) => ({ ...prevState, [field]: value }));
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <Field
        label="除去時端数設定"
        type="text"
        value={formState.excludeEndPoint}
        onChange={(value) => handleFieldChange('excludeEndPoint', value)}
      />
      {/* Other fields and radio groups go here */}

      <RadioButton
        options={['切捨て', '切上げ', '四捨五入']}
        selected={formState.modifyEndPoint}
        onChange={(value) => handleFieldChange('modifyEndPoint', value)}
      />

      <Button label="検索" onClick={() => console.log(formState)} />
      
      {/* Additional buttons like OK, Clear, etc. can be added here */}
    </div>
  );
};

export default MasterForm;
```