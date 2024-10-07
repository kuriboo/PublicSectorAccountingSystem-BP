// components/TaxAdjustmentForm.tsx

import React from 'react';

type FormDataProps = {
  title: string;
  fields: {
    label: string;
    value: string;
  }[];
  buttonLabel: string;
  onSubmit: () => void;
};

const TaxAdjustmentForm: React.FC<FormDataProps> = ({ title, fields, buttonLabel, onSubmit }) => {
  return (
    <div className="border bg-gray-50 p-4 shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      <form className="space-y-4" onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="flex items-center">
            <label className="w-40 text-gray-700">{field.label}</label>
            <input
              type="text"
              value={field.value}
              className="ml-2 rounded border border-gray-300 p-1 flex-grow"
              readOnly
            />
          </div>
        ))}
        <button
          type="button"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={onSubmit}
        >
          {buttonLabel}
        </button>
      </form>
    </div>
  );
};

// Example usage
const ExampleUsage = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const fields = [
    { label: '課税標準額', value: '50,000 円' },
    { label: '仮払消費税額', value: '0 円' },
  ];

  return (
    <TaxAdjustmentForm
      title="課税標準額調整入力"
      fields={fields}
      buttonLabel="表示"
      onSubmit={handleSubmit}
    />
  );
};

export default ExampleUsage;
```