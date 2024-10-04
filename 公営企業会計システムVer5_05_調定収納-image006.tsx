```tsx
import React from 'react';
import 'tailwindcss/tailwind.css';

// TypeScript interface for component props
interface FormProps {
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

// Reusable component
const CollectPaymentForm: React.FC<FormProps> = ({ onSubmit, onClear, onExit }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">集合納入受付解除</h2>
      
      {/* Collection Date Section */}
      <div className="mb-4">
        <label className="block mb-1">収納受付日</label>
        <div className="flex space-x-2">
          <input type="date" className="border p-1 rounded" />
          <span>~</span>
          <input type="date" className="border p-1 rounded" />
        </div>
      </div>

      {/* Reference Number Section */}
      <div className="mb-4">
        <label className="block mb-1">起案所属</label>
        <div className="flex space-x-2">
          <input type="text" placeholder="0000000" className="border p-1 rounded" />
          <span>~</span>
          <input type="text" placeholder="9999999" className="border p-1 rounded" />
        </div>
      </div>

      {/* Table Section */}
      <table className="w-full border-t border-b my-4">
        <thead>
          <tr>
            <th className="text-left p-2">納付書年度</th>
            <th className="text-left p-2">納付書番号</th>
            <th className="text-left p-2">債務者</th>
            <th className="text-left p-2">摘要</th>
            <th className="text-left p-2">収納金額</th>
            <th className="text-left p-2">納入期限</th>
            <th className="text-left p-2">収納受付日</th>
            <th className="text-left p-2">伝票日付</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border-t">2019</td>
            <td className="p-2 border-t">20</td>
            <td className="p-2 border-t">H31年相手先略</td>
            <td className="p-2 border-t">収納受付済</td>
            <td className="p-2 border-t">1,000,000</td>
            <td className="p-2 border-t">2020/04/01</td>
            <td className="p-2 border-t">2020/04/01</td>
            <td className="p-2 border-t">2019/04/01</td>
          </tr>
        </tbody>
      </table>

      {/* Buttons Section */}
      <div className="flex space-x-4 mt-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded" 
          onClick={onSubmit}>
          OK
        </button>
        <button 
          className="bg-gray-300 px-4 py-2 rounded" 
          onClick={onClear}>
          クリア
        </button>
        <button 
          className="bg-gray-300 px-4 py-2 rounded" 
          onClick={onExit}>
          終了
        </button>
      </div>
    </div>
  );
};

export default CollectPaymentForm;
```