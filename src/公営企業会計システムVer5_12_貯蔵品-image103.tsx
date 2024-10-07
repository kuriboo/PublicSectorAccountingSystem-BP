// Import necessary libraries
import React from 'react';
import 'tailwindcss/tailwind.css';

// Define TypeScript interfaces for props
interface DropdownOption {
  value: string;
  label: string;
}

interface StorageClassificationFormProps {
  years: DropdownOption[];
  locations: DropdownOption[];
  onSubmit: (data: FormData) => void;
}

interface FormData {
  year: string;
  location: string;
  code: string;
}

// Reusable StorageClassificationForm component
const StorageClassificationForm: React.FC<StorageClassificationFormProps> = ({
  years,
  locations,
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState<FormData>({
    year: '',
    location: '',
    code: '',
  });

  // Handle change event for form inputs
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block font-semibold mb-2">年度</label>
        <select
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        >
          {years.map((year) => (
            <option key={year.value} value={year.value}>
              {year.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">保管場所</label>
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        >
          {locations.map((location) => (
            <option key={location.value} value={location.value}>
              {location.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">単位コード</label>
        <input
          type="text"
          name="code"
          value={formData.code}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="flex justify-between">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
          OK
        </button>
        <button type="button" className="px-4 py-2 bg-gray-300 text-black rounded-md">
          クリア
        </button>
      </div>
    </form>
  );
};

export default StorageClassificationForm;
```