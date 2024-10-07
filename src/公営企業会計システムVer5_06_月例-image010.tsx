import React, { useState } from 'react';

// TypeScript interface for component props
interface FormProps {
  initialDate?: string;
  initialDepartmentIdRange?: [number, number];
  onSubmit?: (data: any) => void;
}

const FormComponent: React.FC<FormProps> = ({
  initialDate = '',
  initialDepartmentIdRange = [0, 999999],
  onSubmit,
}) => {
  // State management
  const [startDate, setStartDate] = useState(initialDate);
  const [endDate, setEndDate] = useState(initialDate);
  const [departmentIdRange, setDepartmentIdRange] = useState(initialDepartmentIdRange);

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      startDate,
      endDate,
      departmentIdRange,
    };
    if (onSubmit) onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      {/* Date range input */}
      <div className="flex space-x-4">
        <div>
          <label htmlFor="startDate" className="block">開始日</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border p-2"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block">終了日</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border p-2"
          />
        </div>
      </div>

      {/* Department ID range input */}
      <div className="flex space-x-4">
        <div>
          <label htmlFor="departmentStartId" className="block">部署ID 開始</label>
          <input
            type="number"
            id="departmentStartId"
            value={departmentIdRange[0]}
            onChange={(e) =>
              setDepartmentIdRange([Number(e.target.value), departmentIdRange[1]])
            }
            className="border p-2"
          />
        </div>
        <div>
          <label htmlFor="departmentEndId" className="block">部署ID 終了</label>
          <input
            type="number"
            id="departmentEndId"
            value={departmentIdRange[1]}
            onChange={(e) =>
              setDepartmentIdRange([departmentIdRange[0], Number(e.target.value)])
            }
            className="border p-2"
          />
        </div>
      </div>

      {/* Submit button */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        OK
      </button>
    </form>
  );
};

export default FormComponent;
```