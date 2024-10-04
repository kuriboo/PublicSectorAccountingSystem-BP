```tsx
import React from 'react';

// Define types for the component's props
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

interface FormProps {
  department: string;
  position: string;
  name: string;
  onDepartmentChange: (value: string) => void;
  onPositionChange: (value: string) => void;
  onNameChange: (value: string) => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// Reusable Input component with label
const Input: React.FC<InputProps> = ({ label, value, onChange }) => (
  <div className="flex mb-2">
    <label className="w-20 text-blue-800">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 p-1 flex-1"
    />
  </div>
);

// Main Form component
const CustomForm: React.FC<FormProps> = ({
  department,
  position,
  name,
  onDepartmentChange,
  onPositionChange,
  onNameChange,
  onOk,
  onClear,
  onCancel,
}) => (
  <div className="p-4 max-w-sm mx-auto bg-white shadow-md">
    <Input label="所属" value={department} onChange={onDepartmentChange} />
    <Input label="職名" value={position} onChange={onPositionChange} />
    <Input label="氏名" value={name} onChange={onNameChange} />
    <div className="flex justify-around mt-4">
      <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded" onClick={onOk}>OK</button>
      <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded" onClick={onClear}>クリア</button>
      <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded" onClick={onCancel}>キャンセル</button>
    </div>
  </div>
);

export default CustomForm;
```