import React from 'react';

type RadioOption = {
  label: string;
  value: string;
};

type DropdownOption = {
  label: string;
  value: string;
};

type FormProps = {
  date: string;
  onDateChange: (value: string) => void;
  radioOptions: RadioOption[];
  selectedRadio: string;
  onRadioChange: (value: string) => void;
  dropdownOptions: DropdownOption[];
  selectedDropdown: string;
  onDropdownChange: (value: string) => void;
  deficitOptions: RadioOption[];
  selectedDeficit: string;
  onDeficitChange: (value: string) => void;
  profitOptions: RadioOption[];
  selectedProfit: string;
  onProfitChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const CustomForm: React.FC<FormProps> = ({
  date,
  onDateChange,
  radioOptions,
  selectedRadio,
  onRadioChange,
  dropdownOptions,
  selectedDropdown,
  onDropdownChange,
  deficitOptions,
  selectedDeficit,
  onDeficitChange,
  profitOptions,
  selectedProfit,
  onProfitChange,
  onSubmit,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md">
      <div className="mb-4">
        <label className="font-bold">作表日:</label>
        <input
          type="text"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="ml-2 p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="font-bold">範囲指定:</label>
        {radioOptions.map((option) => (
          <label key={option.value} className="ml-2">
            <input
              type="radio"
              value={option.value}
              checked={selectedRadio === option.value}
              onChange={() => onRadioChange(option.value)}
              className="mr-1"
            />
            {option.label}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <label className="font-bold">集計対象:</label>
        <select
          value={selectedDropdown}
          onChange={(e) => onDropdownChange(e.target.value)}
          className="ml-2 p-2 border rounded"
        >
          {dropdownOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="font-bold">過年度損印字:</label>
        {deficitOptions.map((option) => (
          <label key={option.value} className="ml-2">
            <input
              type="radio"
              value={option.value}
              checked={selectedDeficit === option.value}
              onChange={() => onDeficitChange(option.value)}
              className="mr-1"
            />
            {option.label}
          </label>
        ))}
      </div>

      <div className="mb-4">
        <label className="font-bold">過年度益印字:</label>
        {profitOptions.map((option) => (
          <label key={option.value} className="ml-2">
            <input
              type="radio"
              value={option.value}
              checked={selectedProfit === option.value}
              onChange={() => onProfitChange(option.value)}
              className="mr-1"
            />
            {option.label}
          </label>
        ))}
      </div>

      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onSubmit}>
          OK
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={onClear}>
          クリア
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onExit}>
          終了
        </button>
      </div>
    </div>
  );
};

export default CustomForm;
