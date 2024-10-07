import React, { useState } from 'react';

// Custom types for props
type SearchFormProps = {
  initialYear?: number;
  onSubmit: (formData: FormData) => void;
  onClear: () => void;
};

type FormData = {
  year: number;
  voucherNumber: string;
  voucherDateStart: string;
  voucherDateEnd: string;
  voucherAmountStart: number;
  voucherAmountEnd: number;
  description: string;
};

// SearchForm component
const SearchForm: React.FC<SearchFormProps> = ({ initialYear = 2023, onSubmit, onClear }) => {
  const [formData, setFormData] = useState<FormData>({
    year: initialYear,
    voucherNumber: '',
    voucherDateStart: '',
    voucherDateEnd: '',
    voucherAmountStart: 0,
    voucherAmountEnd: 0,
    description: '',
  });

  // Handler for input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Render the component
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block mb-1">平成年</label>
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">振替番号</label>
        <input
          type="text"
          name="voucherNumber"
          value={formData.voucherNumber}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">振替日</label>
        <input
          type="date"
          name="voucherDateStart"
          value={formData.voucherDateStart}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="date"
          name="voucherDateEnd"
          value={formData.voucherDateEnd}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">振替金額</label>
        <input
          type="number"
          name="voucherAmountStart"
          value={formData.voucherAmountStart}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="number"
          name="voucherAmountEnd"
          value={formData.voucherAmountEnd}
          onChange={handleChange}
          className="border p-2 w-full mt-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">摘要</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div className="flex justify-end gap-2">
        <button type="button" onClick={onClear} className="bg-gray-500 text-white p-2">
          クリア
        </button>
        <button type="submit" className="bg-blue-500 text-white p-2">
          OK
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
```