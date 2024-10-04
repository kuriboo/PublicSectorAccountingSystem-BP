```tsx
import React from 'react';

// TypeScriptの型定義
interface UserAssignmentSelectorProps {
  roleOptions: { value: string; label: string }[];
  selectedRole: string;
  onRoleChange: (value: string) => void;
  nameValue: string;
  onNameChange: (value: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const UserAssignmentSelector: React.FC<UserAssignmentSelectorProps> = ({
  roleOptions,
  selectedRole,
  onRoleChange,
  nameValue,
  onNameChange,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="bg-white rounded shadow-md p-4 w-96">
      {/* Select Role */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">担当種別</label>
        <select
          value={selectedRole}
          onChange={(e) => onRoleChange(e.target.value)}
          className="w-full border rounded px-2 py-1"
        >
          {roleOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Input Name */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">担当者</label>
        <input
          type="text"
          value={nameValue}
          onChange={(e) => onNameChange(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onConfirm}
          className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
        >
          確定
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default UserAssignmentSelector;
```