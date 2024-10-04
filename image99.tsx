```tsx
import React from 'react';

// TypeScript型定義
interface InputFormProps {
  number1: string;
  setNumber1: (value: string) => void;
  number2: string;
  setNumber2: (value: string) => void;
  name: string;
  setName: (value: string) => void;
  abbreviation: string;
  setAbbreviation: (value: string) => void;
  reserve1?: string;
  setReserve1?: (value: string) => void;
  reserve2?: string;
  setReserve2?: (value: string) => void;
  reserve3?: string;
  setReserve3?: (value: string) => void;
  reserve4?: string;
  setReserve4?: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const InputForm: React.FC<InputFormProps> = ({
  number1,
  setNumber1,
  number2,
  setNumber2,
  name,
  setName,
  abbreviation,
  setAbbreviation,
  reserve1 = '',
  setReserve1,
  reserve2 = '',
  setReserve2,
  reserve3 = '',
  setReserve3,
  reserve4 = '',
  setReserve4,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md space-y-4">
      <div className="flex space-x-4">
        <div>
          <label className="block font-bold">用語番号1</label>
          <input
            type="text"
            value={number1}
            onChange={e => setNumber1(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block font-bold">用語番号2</label>
          <input
            type="text"
            value={number2}
            onChange={e => setNumber2(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
      </div>
      <div>
        <label className="block font-bold">名称</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label className="block font-bold">略名</label>
        <input
          type="text"
          value={abbreviation}
          onChange={e => setAbbreviation(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label className="block font-bold">予備1</label>
        <input
          type="text"
          value={reserve1}
          onChange={e => setReserve1 && setReserve1(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label className="block font-bold">予備2</label>
        <input
          type="text"
          value={reserve2}
          onChange={e => setReserve2 && setReserve2(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label className="block font-bold">予備3</label>
        <input
          type="text"
          value={reserve3}
          onChange={e => setReserve3 && setReserve3(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label className="block font-bold">予備4</label>
        <input
          type="text"
          value={reserve4}
          onChange={e => setReserve4 && setReserve4(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="flex space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white p-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 p-2 rounded">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default InputForm;
```