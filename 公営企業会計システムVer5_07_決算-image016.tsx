```tsx
import React from 'react';
import 'tailwindcss/tailwind.css';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
    <input
      type="text"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

interface TableRow {
  division: string;
  name: string;
  amount: string;
}

interface TableProps {
  rows: TableRow[];
}

const Table: React.FC<TableProps> = ({ rows }) => (
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr>
        <th className="py-2">印字区分</th>
        <th className="py-2">印字区分名称</th>
        <th className="py-2">印字金額</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => (
        <tr key={index} className="bg-gray-100">
          <td className="border px-4 py-2">{row.division}</td>
          <td className="border px-4 py-2">{row.name}</td>
          <td className="border px-4 py-2">{row.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

interface IncomeExpenseDetailProps {
  fiscalYear: string;
  section: string;
  subSection: string;
  item: string;
  remarks: string;
  tableRows: TableRow[];
  onChangeYear: (value: string) => void;
  onChangeSection: (value: string) => void;
  onChangeSubSection: (value: string) => void;
  onChangeItem: (value: string) => void;
  onChangeRemarks: (value: string) => void;
}

const IncomeExpenseDetail: React.FC<IncomeExpenseDetailProps> = ({
  fiscalYear,
  section,
  subSection,
  item,
  remarks,
  tableRows,
  onChangeYear,
  onChangeSection,
  onChangeSubSection,
  onChangeItem,
  onChangeRemarks,
}) => (
  <div className="p-6">
    <h1 className="text-xl font-bold mb-4">収益費用明細書備考入力</h1>
    <Input label="年度" value={fiscalYear} onChange={onChangeYear} />
    <div className="grid grid-cols-4 gap-4">
      <Input label="款" value={section} onChange={onChangeSection} />
      <Input label="項" value={subSection} onChange={onChangeSubSection} />
      <Input label="目" value={item} onChange={onChangeItem} />
      <Input label="節" value={remarks} onChange={onChangeRemarks} />
    </div>
    <Table rows={tableRows} />
  </div>
);

export default IncomeExpenseDetail;

```