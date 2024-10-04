```tsx
// Import necessary modules
import React from 'react';

// Define props type for the component
type CheckboxFormProps = {
  items: { id: string, label: string, checked: boolean }[];
  onCheck: (id: string, checked: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// Create the CheckboxForm component
const CheckboxForm: React.FC<CheckboxFormProps> = ({
  items,
  onCheck,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded shadow-lg bg-white">
      <h2 className="text-lg font-bold mb-4">印刷対象集票名</h2>
      <form>
        <div className="mb-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={item.id}
                checked={item.checked}
                onChange={(e) => onCheck(item.id, e.target.checked)}
                className="mr-2"
              />
              <label htmlFor={item.id} className="text-sm">
                {item.label}
              </label>
            </div>
          ))}
        </div>
        <div className="flex justify-end space-x-4">
          <button type="button" onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            OK
          </button>
          <button type="button" onClick={onClear} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
            クリア
          </button>
          <button type="button" onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            キャンセル
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckboxForm;
```