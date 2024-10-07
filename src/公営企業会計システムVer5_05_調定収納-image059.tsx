import React from 'react';

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
}) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="mt-1 p-2 border rounded w-full"
    />
  </div>
);

type TableProps = {
  data: { category: string; subtotal: number; total: number; tax: number }[];
};

const DataTable: React.FC<TableProps> = ({ data }) => (
  <table className="w-full border-collapse">
    <thead>
      <tr>
        <th className="border p-2">区分</th>
        <th className="border p-2">戻入科目</th>
        <th className="border p-2">決定金額</th>
        <th className="border p-2">戻入金額</th>
        <th className="border p-2">内消費税額</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <td className="border p-2">{row.category}</td>
          <td className="border p-2">{row.subtotal}</td>
          <td className="border p-2">{row.total}</td>
          <td className="border p-2">{row.tax}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

type FormProps = {
  onSubmit: () => void;
};

const MyForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [summary, setSummary] = React.useState('');
  const [returnAmount, setReturnAmount] = React.useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="p-4"
    >
      {/* Summary input field */}
      <InputField
        label="摘要"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />

      {/* Return amount input field */}
      <InputField
        label="戻入金額"
        value={returnAmount}
        onChange={(e) => setReturnAmount(e.target.value)}
      />

      {/* Data Table */}
      <DataTable
        data={[
          { category: '現金', subtotal: 5000, total: 5000, tax: 456 },
          { category: '現金', subtotal: 5000, total: 5000, tax: 272 },
          { category: '現金', subtotal: 2000, total: 2000, tax: 181 },
        ]}
      />

      {/* Buttons */}
      <div className="flex justify-end space-x-2 mt-4">
        <button type="button" className="px-4 py-2 bg-gray-200 rounded">
          クリア
        </button>
        <button type="button" className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
      </div>
    </form>
  );
};

export default MyForm;
```