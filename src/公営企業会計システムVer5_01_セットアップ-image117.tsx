import React from 'react';

type InputFieldProps = {
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
};

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
  );
};

type SelectFieldProps = {
  label: string;
  options: { value: number | string; label: string }[];
  selected: number | string;
  onSelect: (value: number | string) => void;
};

const SelectField: React.FC<SelectFieldProps> = ({ label, options, selected, onSelect }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

type ComponentProps = {
  nendo: string;
  hyoKouseiKubun: number;
  hyoKouseiKubunOptions: { value: number; label: string }[];
  goukeiSyoukaiKubun: number;
  goukeiSyoukaiKubunOptions: { value: number; label: string }[];
  onNendoChange: (value: string) => void;
  onHyoKouseiKubunChange: (value: number) => void;
  onGoukeiSyoukaiKubunChange: (value: number) => void;
};

const ExampleComponent: React.FC<ComponentProps> = ({
  nendo,
  hyoKouseiKubun,
  hyoKouseiKubunOptions,
  goukeiSyoukaiKubun,
  goukeiSyoukaiKubunOptions,
  onNendoChange,
  onHyoKouseiKubunChange,
  onGoukeiSyoukaiKubunChange,
}) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <InputField label="年度" value={nendo} onChange={onNendoChange} />
      <SelectField
        label="費用構成区分"
        options={hyoKouseiKubunOptions}
        selected={hyoKouseiKubun}
        onSelect={onHyoKouseiKubunChange}
      />
      <SelectField
        label="合計照会区分"
        options={goukeiSyoukaiKubunOptions}
        selected={goukeiSyoukaiKubun}
        onSelect={onGoukeiSyoukaiKubunChange}
      />
      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700">
          編集
        </button>
        <button className="ml-2 px-4 py-2 bg-gray-400 text-white rounded-md shadow-sm hover:bg-gray-500">
          削除
        </button>
      </div>
    </div>
  );
};

export default ExampleComponent;
