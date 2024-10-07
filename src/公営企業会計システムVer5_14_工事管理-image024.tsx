import React from 'react';

// 型定義
interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

interface TableRow {
  sectionName: string;
  subSectionName: string;
  detailName: string;
  amount: string;
  description: string;
}

interface TableProps {
  rows: TableRow[];
}

// 入力フィールドコンポーネント
const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, placeholder }) => (
  <div className="flex flex-col mb-2">
    <label className="mb-1 text-sm">{label}</label>
    <input 
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-300 p-1 rounded"
    />
  </div>
);

// ボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => (
  <button 
    onClick={onClick}
    className={`px-4 py-2 rounded ${variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
  >
    {label}
  </button>
);

// テーブルコンポーネント
const Table: React.FC<TableProps> = ({ rows }) => (
  <table className="min-w-full border border-gray-200 mt-4">
    <thead>
      <tr>
        <th className="border-b p-2 text-left">節名称</th>
        <th className="border-b p-2 text-left">細節名称</th>
        <th className="border-b p-2 text-left">明細名称</th>
        <th className="border-b p-2 text-left">税抜金額</th>
        <th className="border-b p-2 text-left">摘要</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          <td className="border-b p-2">{row.sectionName}</td>
          <td className="border-b p-2">{row.subSectionName}</td>
          <td className="border-b p-2">{row.detailName}</td>
          <td className="border-b p-2">{row.amount}</td>
          <td className="border-b p-2">{row.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

// メインコンポーネント
const CustomFormComponent: React.FC = () => {
  const [year, setYear] = React.useState('');
  const [businessCode, setBusinessCode] = React.useState('');
  const [section, setSection] = React.useState('');
  const [subSection, setSubSection] = React.useState('');

  const tableRows: TableRow[] = [
    { sectionName: '水道料金', subSectionName: '水道料金', detailName: '水道料金9998', amount: '10,000', description: '3月分期末手当テスト登録' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">按分対象外指示科目設定入力</h1>
      <div className="flex space-x-4">
        <InputField label="年度" value={year} onChange={(e) => setYear(e.target.value)} placeholder="平成29" />
        <InputField label="事業コード" value={businessCode} onChange={(e) => setBusinessCode(e.target.value)} />
        <InputField label="施策" value={section} onChange={(e) => setSection(e.target.value)} />
        <InputField label="施策内訳" value={subSection} onChange={(e) => setSubSection(e.target.value)} />
      </div>
      <div className="mt-4">
        <Button label="登録" onClick={() => {}} variant="primary" />
        <Button label="削除" onClick={() => {}} variant="secondary" />
      </div>
      <Table rows={tableRows} />
    </div>
  );
};

export default CustomFormComponent;
