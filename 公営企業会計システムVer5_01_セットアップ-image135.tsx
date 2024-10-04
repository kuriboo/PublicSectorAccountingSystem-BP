```tsx
import React, { FC, useState } from 'react';

interface RangeInputProps {
  label: string;
  placeholderStart: string;
  placeholderEnd: string;
}

const RangeInput: FC<RangeInputProps> = ({ label, placeholderStart, placeholderEnd }) => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  return (
    <div className="flex items-center space-x-2 mb-4">
      <label className="w-20">{label}</label>
      <input
        type="text"
        value={start}
        onChange={(e) => setStart(e.target.value)}
        placeholder={placeholderStart}
        className="border border-gray-300 p-1 w-20"
      />
      <span>~</span>
      <input
        type="text"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        placeholder={placeholderEnd}
        className="border border-gray-300 p-1 w-20"
      />
    </div>
  );
};

interface FormProps {
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const Form: FC<FormProps> = ({ onSubmit, onClear, onClose }) => {
  return (
    <div className="border p-4 w-96">
      <h2 className="text-lg mb-4">範囲指定</h2>
      <RangeInput label="銀行" placeholderStart="0000" placeholderEnd="9999" />
      <RangeInput label="支店" placeholderStart="000" placeholderEnd="999" />
      <RangeInput label="相手先" placeholderStart="0000000000" placeholderEnd="9999999999" />
      <div className="flex justify-end space-x-2 mt-4">
        <button onClick={onSubmit} className="bg-gray-300 px-4 py-2">OK</button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2">クリア</button>
        <button onClick={onClose} className="bg-gray-300 px-4 py-2">終了</button>
      </div>
    </div>
  );
};

export default Form;
```