import React from 'react';

interface BusinessStatusProps {
  capital: number;
  sales: number;
  equity: number;
  employeeDivision: number;
  totalEmployees: number;
  yearsInBusiness: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const BusinessStatus: React.FC<BusinessStatusProps> = ({
  capital,
  sales,
  equity,
  employeeDivision,
  totalEmployees,
  yearsInBusiness,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white border rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">経営状況</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <LabelWithValue label="資本金" value={capital} unit="千円" />
        <LabelWithValue label="完成高" value={sales} unit="千円" />
        <LabelWithValue label="自己資本額" value={equity} unit="千円" />
        <LabelWithValue label="区分別職員数" value={employeeDivision} />
        <LabelWithValue label="総職員数" value={totalEmployees} />
        <LabelWithValue label="営業年数" value={yearsInBusiness} />
      </div>
      <div className="flex justify-around">
        <button className="btn" onClick={onOk}>OK</button>
        <button className="btn" onClick={onClear}>クリア</button>
        <button className="btn" onClick={onCancel}>キャンセル</button>
      </div>
    </div>
  );
};

interface LabelWithValueProps {
  label: string;
  value: number;
  unit?: string;
}

const LabelWithValue: React.FC<LabelWithValueProps> = ({ label, value, unit }) => (
  <div className="flex items-center">
    <span className="mr-2">{label}</span>
    <input
      type="text"
      value={value.toLocaleString()}
      readOnly
      className="border border-gray-300 px-2 py-1 rounded-md"
    />
    {unit && <span className="ml-1">{unit}</span>}
  </div>
);

export default BusinessStatus;
```