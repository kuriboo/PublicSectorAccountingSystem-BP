import React, { useState } from 'react';

// TypeScript Props Interface
interface FormProps {
  year: number;
  onSubmit: (data: any) => void;
}

const BusinessForm: React.FC<FormProps> = ({ year, onSubmit }) => {
  const [data, setData] = useState({
    businessType: '',
    businessCode: '',
    region: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <form className="p-4 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
      {/* Year Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium">
          年度: <span>{year}</span>
        </label>
      </div>

      {/* Business Type Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium">業種:</label>
        <input
          type="text"
          name="businessType"
          value={data.businessType}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      {/* Business Code Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium">業者:</label>
        <input
          type="text"
          name="businessCode"
          value={data.businessCode}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      {/* Region Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium">地区:</label>
        <select
          name="region"
          value={data.region}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        >
          <option value="">選択してください</option>
          {/* Add options as needed */}
        </select>
      </div>

      {/* Date Inputs */}
      <div className="mb-4">
        <label className="block text-sm font-medium">変更届出日:</label>
        <input
          type="date"
          name="startDate"
          value={data.startDate}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">指定停止基準日:</label>
        <input
          type="date"
          name="endDate"
          value={data.endDate}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end space-x-2">
        <button type="button" className="py-2 px-4 bg-gray-300 rounded-md hover:bg-gray-400">
          クリア
        </button>
        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          OK
        </button>
      </div>
    </form>
  );
};

export default BusinessForm;
```