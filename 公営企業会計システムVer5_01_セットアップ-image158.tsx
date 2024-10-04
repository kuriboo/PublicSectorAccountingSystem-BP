```tsx
import React from 'react';

// TypeScriptの型定義
type EmployeeSettingsProps = {
  department: string;
  position: string;
  employee: string;
  initialValue: number;
  onConfirm: () => void;
  onCancel: () => void;
};

// EmployeeSettingsコンポーネント
const EmployeeSettings: React.FC<EmployeeSettingsProps> = ({
  department,
  position,
  employee,
  initialValue,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* 所属、担当、職員、初期値の入力フィールド */}
      <div className="mb-4">
        <label className="block text-sm font-medium">
          所属: {department}
        </label>
        <label className="block text-sm font-medium">
          担当: {position}
        </label>
        <label className="block text-sm font-medium">
          職員: {employee}
        </label>
        <label className="block text-sm font-medium">
          初期値: {initialValue}
        </label>
      </div>

      {/* 行確定、行キャンセルボタン */}
      <div className="flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onConfirm}
        >
          行確定
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default EmployeeSettings;
```