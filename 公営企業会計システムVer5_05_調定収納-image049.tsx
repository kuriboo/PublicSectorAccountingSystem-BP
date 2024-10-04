```tsx
// Import necessary modules
import React from 'react';

// Define props for the component
type AccountingFormProps = {
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AccountingForm: React.FC<AccountingFormProps> = ({ onSubmit, onClear, onClose }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">個別収納入力（調定無）</h1>
      
      <form>
        {/* Input fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium">収納日</label>
          <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>

        {/* Payment Details */}
        <div className="mb-4">
          <label className="block text-sm font-medium">摘要</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>

        {/* Payment classification options */}
        <div className="mb-4">
          <label className="block text-sm font-medium">入金科目</label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <option>現金預金</option>
            {/* Other options */}
          </select>
        </div>

        {/* Table for amounts */}
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-300">
              <tr>
                <th className="w-1/3 text-left py-3 px-4">総称</th>
                <th className="w-1/3 text-left py-3 px-4">収納金額</th>
                <th className="w-1/3 text-left py-3 px-4">内消費税</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr>
                <td className="w-1/3 text-left py-3 px-4">消耗品費</td>
                <td className="w-1/3 text-left py-3 px-4">10,000</td>
                <td className="w-1/3 text-left py-3 px-4">908</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button type="button" onClick={onSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            OK
          </button>
          <button type="button" onClick={onClear} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            クリア
          </button>
          <button type="button" onClick={onClose} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountingForm;
```