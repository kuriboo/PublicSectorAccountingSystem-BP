// Import necessary modules from React and Next.js
import React from 'react';

// Define TypeScript interfaces for component props
interface InputFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: string;
}

interface SummaryInputProps {
  summary: string;
  onSummaryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Reusable InputField component
const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, type = "text", placeholder }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

// Reusable Button component
const Button: React.FC<ButtonProps> = ({ text, onClick, style = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" }) => (
  <button 
    className={style} 
    onClick={onClick}>
    {text}
  </button>
);

// Component for Summary input field
const SummaryInput: React.FC<SummaryInputProps> = ({ summary, onSummaryChange }) => (
  <InputField label="摘要" value={summary} onChange={onSummaryChange} />
);

// Main form component
const PaymentDecisionForm: React.FC = () => {
  // State management for form fields
  const [decisionDate, setDecisionDate] = React.useState('');
  const [claimDate, setClaimDate] = React.useState('');
  const [summary, setSummary] = React.useState('');

  return (
    <form className="max-w-xl mx-auto p-5">
      {/* Decision Date field */}
      <InputField
        label="決定処理日"
        value={decisionDate}
        onChange={(e) => setDecisionDate(e.target.value)}
        type="date"
      />

      {/* Claim Date field */}
      <InputField
        label="請求書日"
        value={claimDate}
        onChange={(e) => setClaimDate(e.target.value)}
        type="date"
      />

      {/* Summary input */}
      <SummaryInput
        summary={summary}
        onSummaryChange={(e) => setSummary(e.target.value)}
      />

      {/* Action Buttons */}
      <div className="flex justify-between mt-6">
        <Button text="登録" onClick={() => alert('登録')} />
        <Button text="クリア" onClick={() => alert('クリア')} style="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" />
      </div>
    </form>
  );
};

export default PaymentDecisionForm;
