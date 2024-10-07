import React from 'react';

type Option = {
  value: string;
  label: string;
};

type SelectionProps = {
  options: Option[];
  selected: string;
  onChange: (value: string) => void;
};

type DialogProps = {
  title: string;
  rangeFrom: SelectionProps;
  rangeTo: SelectionProps;
  onOk: () => void;
  onCancel: () => void;
};

// Reusable Select component
const Select: React.FC<SelectionProps> = ({ options, selected, onChange }) => (
  <select
    className="border p-2"
    value={selected}
    onChange={(e) => onChange(e.target.value)}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

// Main Dialog component
const Dialog: React.FC<DialogProps> = ({
  title,
  rangeFrom,
  rangeTo,
  onOk,
  onCancel,
}) => {
  return (
    <div className="p-4 border shadow-lg max-w-md mx-auto bg-white">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <div className="mb-4">
        <p className="mb-2">範囲指定</p>
        <div className="flex items-center space-x-2">
          <span>財源コード</span>
          <Select {...rangeFrom} />
          <span>~</span>
          <Select {...rangeTo} />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onOk}
        >
          OK
        </button>
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default Dialog;

// Usage example (this part is not part of the reusable component)
/*
  const options = [
    { value: '01', label: '自己財源' },
    { value: '02', label: '工事負担金' },
    { value: '03', label: '起債事業費' },
    { value: '04', label: '交付財源' },
    { value: '05', label: '補助金' },
    { value: '99', label: '無し' },
  ];

  <Dialog
    title="様式選択"
    rangeFrom={{
      options: options,
      selected: '01',
      onChange: (value) => console.log('From:', value),
    }}
    rangeTo={{
      options: options,
      selected: '99',
      onChange: (value) => console.log('To:', value),
    }}
    onOk={() => console.log('OK clicked')}
    onCancel={() => console.log('Cancel clicked')}
  />
*/
```