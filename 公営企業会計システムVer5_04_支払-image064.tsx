```tsx
// types.ts
export interface AgreementProps {
  title: string;
  checkboxLabel: string;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// AgreementComponent.tsx
import React from 'react';
import { AgreementProps } from './types';

const AgreementComponent: React.FC<AgreementProps> = ({
  title,
  checkboxLabel,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="w-80 p-4 border rounded shadow-lg bg-white">
      {/* Title */}
      <h2 className="text-center font-bold">{title}</h2>

      {/* Checkbox */}
      <div className="mt-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-blue-600">{checkboxLabel}</span>
        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-evenly mt-4">
        <button 
          onClick={onOk} 
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          OK
        </button>
        <button 
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          クリア
        </button>
        <button 
          onClick={onCancel} 
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default AgreementComponent;
```