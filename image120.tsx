```tsx
import React from 'react';

// Props type for the component
type HistoryFormProps = {
  title?: string;
  onSubmit: (data: any) => void;
  onClear: () => void;
}

const HistoryForm: React.FC<HistoryFormProps> = ({ title = "履歴管理", onSubmit, onClear }) => {
  // Handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data = {}; // Gather form data here
    onSubmit(data);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">履歴区分</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
            <option>修繕</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">緊急</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
            <option>緊急</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">着手年月日</label>
          <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">資産番号</label>
          <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>

        <div className="flex space-x-2">
          <button type="submit" className="flex-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            OK
          </button>
          <button type="button" onClick={onClear} className="flex-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
            クリア
          </button>
        </div>
      </form>
    </div>
  );
};

export default HistoryForm;
```