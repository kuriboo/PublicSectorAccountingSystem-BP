import React from 'react';

interface TableRowProps {
  code: string;
  name: string;
  proportion: string;
  tax: string;
  taxRate: number;
  amount: number;
  withoutTax: number;
  consumptionTax: number;
}

interface TableProps {
  rows: TableRowProps[];
}

interface InputProps {
  label: string;
  value: string | number;
}

interface SummaryProps {
  label: string;
  value: number;
}

const Input: React.FC<InputProps> = ({ label, value }) => (
  <div className="flex justify-between mb-2">
    <span className="font-bold">{label}</span>
    <span>{value}</span>
  </div>
);

const Summary: React.FC<SummaryProps> = ({ label, value }) => (
  <div>
    <span className="font-bold">{label}: </span>
    {value.toLocaleString()}
  </div>
);

const Table: React.FC<TableProps> = ({ rows }) => (
  <table className="w-full mt-4 border-collapse border border-gray-400">
    <thead>
      <tr>
        {['科目コード', '科目名称', '構成比率', '税', '税率(%)', '金額', '税抜額', '消費税額'].map((heading) => (
          <th key={heading} className="border border-gray-300 p-1">{heading}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => (
        <tr key={index} className="text-center">
          <td className="border border-gray-300 p-1">{row.code}</td>
          <td className="border border-gray-300 p-1">{row.name}</td>
          <td className="border border-gray-300 p-1">{row.proportion}</td>
          <td className="border border-gray-300 p-1">{row.tax}</td>
          <td className="border border-gray-300 p-1">{row.taxRate}</td>
          <td className="border border-gray-300 p-1">{row.amount.toLocaleString()}</td>
          <td className="border border-gray-300 p-1">{row.withoutTax.toLocaleString()}</td>
          <td className="border border-gray-300 p-1">{row.consumptionTax.toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const SampleComponent: React.FC = () => {
  const tableData: TableRowProps[] = [
    { code: '00201011310101001', name: '本部消耗品', proportion: '35.2145%', tax: '課', taxRate: 10, amount: 35214, withoutTax: 32013, consumptionTax: 3201 },
    { code: '00201011310101002', name: '本部消耗品', proportion: '45.0000%', tax: '課', taxRate: 10, amount: 45000, withoutTax: 40910, consumptionTax: 4090 },
    { code: '00201021310101001', name: '本部消耗品', proportion: '19.7855%', tax: '課', taxRate: 10, amount: 19785, withoutTax: 17987, consumptionTax: 1798 },
  ];
  
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="mb-6">
        <Input label="伝票総額" value="100,000" />
      </div>
      <div className="flex justify-between mb-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">按分</button>
        <div className="flex items-center">
          <span>00001</span>
          <span className="ml-2">備品費グループ</span>
        </div>
      </div>
      <div className="mb-6">
        <Input label="按分対象額" value="100,000" />
        <Input label="税抜額" value="90,910" />
        <Input label="消費税額" value="9,090" />
      </div>
      <div>
        <Table rows={tableData} />
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-green-500 text-white py-2 px-4 rounded mx-2">OK</button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded mx-2">クリア</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default SampleComponent;
