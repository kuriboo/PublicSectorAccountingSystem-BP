```tsx
import React, { useState } from 'react';

// TypeScript type definitions for the component props
type FormProps = {
  year: string;
  category: string;
  amount: number;
  onSubmit: (formData: FormData) => void;
};

type FormData = {
  year: string;
  category: string;
  subdivision: string;
  name: string;
  amount: number;
  summary: string;
};

const InputForm: React.FC<FormProps> = ({ year, category, amount, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    year,
    category,
    subdivision: '',
    name: '',
    amount,
    summary: '',
  });

  // Handle input changes and update state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleClear = () => {
    setFormData({
      year: '',
      category: '',
      subdivision: '',
      name: '',
      amount: 0,
      summary: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block mb-1 font-bold">年度</label>
        <input
          type="text"
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-1 font-bold">仕訳科目略称</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-bold">備考印字区分</label>
        <select
          name="subdivision"
          value={formData.subdivision}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">選択してください</option>
          <option value="01">備考名称・金額印字</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-bold">備考印字名称</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-bold">備考印字金額</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-bold">処理概要</label>
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="flex justify-end">
        <button type="button" onClick={handleClear} className="px-4 py-2 mr-2 text-white bg-gray-500 rounded">
          クリア
        </button>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
          OK
        </button>
      </div>
    </form>
  );
};

export default InputForm;
```