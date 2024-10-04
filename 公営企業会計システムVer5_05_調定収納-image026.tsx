```tsx
import React from "react";

type InputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
};

const InputField: React.FC<InputProps> = ({ label, value, onChange, type = "text", placeholder }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border py-2 px-3 text-grey-darkest"
      />
    </div>
  );
};

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
    >
      {label}
    </button>
  );
};

type SearchFormProps = {
  fiscalYear: number;
  receiptNumber: string;
  receiptAmountMin: string;
  receiptAmountMax: string;
  onSearch: () => void;
  onClear: () => void;
  onCancel: () => void;
  onReceiptNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAmountMinChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAmountMaxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchForm: React.FC<SearchFormProps> = ({
  fiscalYear,
  receiptNumber,
  receiptAmountMin,
  receiptAmountMax,
  onSearch,
  onClear,
  onCancel,
  onReceiptNumberChange,
  onAmountMinChange,
  onAmountMaxChange,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">検索条件設定</h2>
      <div className="mb-4">平成{fiscalYear} 年度</div>
      <InputField
        label="収納番号"
        value={receiptNumber}
        onChange={onReceiptNumberChange}
      />
      <div className="flex space-x-4">
        <div>収納金額</div>
        <InputField
          label="Min"
          value={receiptAmountMin}
          onChange={onAmountMinChange}
          type="number"
        />
        <InputField
          label="Max"
          value={receiptAmountMax}
          onChange={onAmountMaxChange}
          type="number"
        />
      </div>
      <div className="flex space-x-4 mt-4">
        <Button label="表示" onClick={onSearch} />
        <Button label="クリア" onClick={onClear} />
        <Button label="キャンセル" onClick={onCancel} />
      </div>
    </div>
  );
};

export default SearchForm;
```