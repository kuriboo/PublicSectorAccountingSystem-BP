```tsx
import React from 'react';
import { useState } from 'react';

interface InputFormProps {
  onSubmit: (data: any) => void;
  initialData?: {
    date?: string;
    description?: string;
    taxRate?: number;
  };
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, initialData }) => {
  const [date, setDate] = useState(initialData?.date || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [taxRate, setTaxRate] = useState(initialData?.taxRate || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      date,
      description,
      taxRate,
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded">
      {/* Date Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">収納日</label>
        <input
          id="date"
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="例: 令和05年10月02日"
        />
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">摘要</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="例: 備品の費用戻入"
        />
      </div>

      {/* Tax Rate Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taxRate">消費税率</label>
        <input
          id="taxRate"
          type="number"
          value={taxRate}
          onChange={(e) => setTaxRate(Number(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="消費税率 %"
        />
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          OK
        </button>
        <button
          type="reset"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            setDate('');
            setDescription('');
            setTaxRate(0);
          }}
        >
          クリア
        </button>
      </div>
    </form>
  );
};

export default InputForm;
```