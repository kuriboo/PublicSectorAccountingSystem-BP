import React from 'react';
import 'tailwindcss/tailwind.css';

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, disabled = false }) => (
  <div className="flex items-center mb-2">
    <label className="w-32 mr-2">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className="border p-1 flex-1"
    />
  </div>
);

type CollectionEntryFormProps = {
  fiscalYear: string;
  receiptDate: string;
  deadline: string;
  onChange: (field: string, value: string) => void;
};

const CollectionEntryForm: React.FC<CollectionEntryFormProps> = ({ fiscalYear, receiptDate, deadline, onChange }) => (
  <div className="p-4 bg-gray-100 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4">集金入力フォーム</h2>
    <InputField label="納付書年度" value={fiscalYear} onChange={(value) => onChange('fiscalYear', value)} />
    <InputField label="収納日" value={receiptDate} onChange={(value) => onChange('receiptDate', value)} />
    <InputField label="納入期限" value={deadline} onChange={(value) => onChange('deadline', value)} />
    {/* Additional InputFields can be placed here */}
    <div className="mt-4 flex space-x-2">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
      <button className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
    </div>
  </div>
);

export default CollectionEntryForm;
```