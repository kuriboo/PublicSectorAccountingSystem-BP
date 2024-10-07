import React from 'react';

type InputProps = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

type SelectProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = ({ label, options, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

type SUD1380Props = {
  accountTypeOptions: string[];
  accountType: string;
  accountTitle: string;
  managerName: string;
  accountNumber: string;
  payerName: string;
  setAccountType: (value: string) => void;
  setAccountTitle: (value: string) => void;
  setManagerName: (value: string) => void;
  setAccountNumber: (value: string) => void;
  setPayerName: (value: string) => void;
};

const SUD1380: React.FC<SUD1380Props> = ({
  accountTypeOptions,
  accountType,
  accountTitle,
  managerName,
  accountNumber,
  payerName,
  setAccountType,
  setAccountTitle,
  setManagerName,
  setAccountNumber,
  setPayerName,
}) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="mb-8 text-2xl font-bold text-center">SUD1380 納入通知書マスタ</h2>
      <Select
        label="帳票種類"
        options={accountTypeOptions}
        value={accountType}
        onChange={(e) => setAccountType(e.target.value)}
      />
      <Input
        label="帳票タイトル"
        value={accountTitle}
        onChange={(e) => setAccountTitle(e.target.value)}
      />
      <Input
        label="管理者氏名"
        value={managerName}
        onChange={(e) => setManagerName(e.target.value)}
      />
      <Input
        label="口座番号"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <Input
        label="出納員"
        value={payerName}
        onChange={(e) => setPayerName(e.target.value)}
      />
      <div className="flex justify-end mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          OK
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4">
          クリア
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
          終了
        </button>
      </div>
    </div>
  );
};

export default SUD1380;
```