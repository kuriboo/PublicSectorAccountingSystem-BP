```tsx
import React, { useState } from 'react';

// Props interface for the component
interface ManagementTableProps {
  title: string;
  options: string[];
  onSubmit: (division: string, id: string) => void;
}

// Main component
const ManagementTable: React.FC<ManagementTableProps> = ({ title, options, onSubmit }) => {
  const [division, setDivision] = useState('');
  const [id, setId] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    if (division && id) {
      onSubmit(division, id);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex space-x-2">
        <label htmlFor="division" className="block text-sm font-medium text-gray-700">
          区分
        </label>
        <input
          type="text"
          id="division"
          className="border border-gray-300 rounded px-2 py-1"
          value={division}
          onChange={(e) => setDivision(e.target.value)}
        />
      </div>
      <div className="flex space-x-2">
        <label htmlFor="id" className="block text-sm font-medium text-gray-700">
          ID
        </label>
        <input
          type="text"
          id="id"
          className="border border-gray-300 rounded px-2 py-1"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="flex space-x-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center">
            <input type="radio" className="form-radio" name="option" value={option} />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          登録
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          削除
        </button>
      </div>
    </div>
  );
};

export default ManagementTable;
```