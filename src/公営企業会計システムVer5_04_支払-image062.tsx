import React from 'react';

interface FormInputProps {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  type?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, value, onChange, type = 'text' }) => (
  <div className="flex flex-col mb-4">
    <label className="mb-1 font-semibold">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 p-2 rounded"
    />
  </div>
);

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded ${
      variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
    }`}
  >
    {label}
  </button>
);

interface FinanceFormProps {
  startDate: string;
  endDate: string;
  onDateChange: (start: string, end: string) => void;
  contractMethod: string;
  onContractMethodChange: (method: string) => void;
  summary: string;
  onSummaryChange: (summary: string) => void;
  partner: string;
  onPartnerChange: (partner: string) => void;
}

const FinanceForm: React.FC<FinanceFormProps> = ({
  startDate,
  endDate,
  onDateChange,
  contractMethod,
  onContractMethodChange,
  summary,
  onSummaryChange,
  partner,
  onPartnerChange,
}) => (
  <div className="font-sans p-4">
    <FormInput
      label="期間 (開始)"
      type="date"
      value={startDate}
      onChange={(date) => onDateChange(date, endDate)}
    />
    <FormInput
      label="期間 (終了)"
      type="date"
      value={endDate}
      onChange={(date) => onDateChange(startDate, date)}
    />
    <FormInput
      label="契約方法"
      value={contractMethod}
      onChange={onContractMethodChange}
    />
    <FormInput
      label="摘要"
      value={summary}
      onChange={onSummaryChange}
    />
    <FormInput
      label="相手先"
      value={partner}
      onChange={onPartnerChange}
    />
    <div className="flex space-x-4 mt-4">
      <Button label="OK" onClick={() => console.log('OK clicked')} />
      <Button label="クリア" onClick={() => console.log('Clear clicked')} variant="secondary" />
    </div>
  </div>
);

export default FinanceForm;
```