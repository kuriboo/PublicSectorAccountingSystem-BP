import React from 'react';

type InputFieldProps = {
  label: string;
  type: 'number' | 'text' | 'date';
  value?: string;
  onChange?: (value: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange }) => (
  <div className="flex items-center mb-2">
    <label className="w-32 text-gray-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
      className="ml-2 border border-gray-300 px-2 py-1 rounded"
    />
  </div>
);

type CSVExportFormProps = {
  fields: {
    label: string;
    type: 'number' | 'text' | 'date';
    value?: string;
  }[];
  onFieldChange: (index: number, value: string) => void;
  onExportCSV: () => void;
  onExportExcel: () => void;
};

const CSVExportForm: React.FC<CSVExportFormProps> = ({ fields, onFieldChange, onExportCSV, onExportExcel }) => (
  <div className="p-4 bg-gray-100 rounded shadow">
    <h2 className="text-xl font-bold mb-4">CSV出力</h2>
    <div className="grid grid-cols-1 gap-2">
      {fields.map((field, index) => (
        <InputField
          key={index}
          label={field.label}
          type={field.type}
          value={field.value}
          onChange={value => onFieldChange(index, value)}
        />
      ))}
    </div>
    <div className="flex space-x-2 mt-4">
      <button
        onClick={onExportCSV}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        CSV出力
      </button>
      <button
        onClick={onExportExcel}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        EXCEL出力
      </button>
    </div>
  </div>
);

export default CSVExportForm;
```