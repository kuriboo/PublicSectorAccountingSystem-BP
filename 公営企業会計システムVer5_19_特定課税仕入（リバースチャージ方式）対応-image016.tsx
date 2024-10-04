```tsx
import React from 'react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border rounded-md p-2"
  />
);

type ButtonProps = {
  text: string;
  onClick: () => void;
  color?: string;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, color = 'blue' }) => (
  <button
    onClick={onClick}
    className={`bg-${color}-500 text-white py-2 px-4 rounded hover:bg-${color}-700`}
  >
    {text}
  </button>
);

type SearchFormProps = {
  dateFrom: string;
  dateTo: string;
  numberFrom: string;
  numberTo: string;
  onSearch: () => void;
  onReset: () => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ dateFrom, dateTo, numberFrom, numberTo, onSearch, onReset }) => (
  <div className="p-4 shadow-md bg-gray-100 rounded-md">
    <div className="grid grid-cols-2 gap-4">
      <Input
        value={dateFrom}
        onChange={(e) => console.log('Date From: ', e.target.value)}
        placeholder="伝票日付 (開始)"
      />
      <Input
        value={dateTo}
        onChange={(e) => console.log('Date To: ', e.target.value)}
        placeholder="伝票日付 (終了)"
      />
      <Input
        value={numberFrom}
        onChange={(e) => console.log('伝票番号 (開始)')}
        placeholder="伝票番号 (開始)"
      />
      <Input
        value={numberTo}
        onChange={(e) => console.log('伝票番号 (終了)')}
        placeholder="伝票番号 (終了)"
      />
    </div>
    <div className="flex justify-between mt-4">
      <Button text="表示" onClick={onSearch} color="blue" />
      <Button text="解除" onClick={onReset} color="red" />
    </div>
  </div>
);

export default SearchForm;
```