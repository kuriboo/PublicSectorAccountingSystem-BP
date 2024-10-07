// 支出決定入力.tsx

import React from 'react';

type InputProps = {
  label: string;
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputProps> = ({ label, type = "text", value, placeholder, onChange }) => (
  <div className="flex items-center mb-2">
    <label className="w-32 font-semibold">{label}</label>
    <input 
      type={type} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      className="border rounded px-2 py-1 flex-1"
    />
  </div>
);

type ButtonProps = {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    {text}
  </button>
);

type ExpenseEntryProps = {
  decisionDate: string;
  paymentDate: string;
  summary: string;
  onDecisionDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPaymentDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSummaryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const ExpenseEntry: React.FC<ExpenseEntryProps> = ({
  decisionDate,
  paymentDate,
  summary,
  onDecisionDateChange,
  onPaymentDateChange,
  onSummaryChange,
  onSubmit
}) => (
  <div className="p-4 max-w-lg mx-auto border rounded shadow-lg">
    <h2 className="text-xl font-bold mb-4">支出決定入力</h2>
    <InputField
      label="決定処理日"
      value={decisionDate}
      onChange={onDecisionDateChange}
    />
    <InputField
      label="支払日"
      value={paymentDate}
      onChange={onPaymentDateChange}
    />
    <InputField
      label="摘要"
      value={summary}
      onChange={onSummaryChange}
    />
    <div className="flex justify-end mt-4">
      <Button text="登録" onClick={onSubmit} />
    </div>
  </div>
);

export default ExpenseEntry;
