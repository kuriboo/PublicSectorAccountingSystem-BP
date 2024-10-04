```tsx
import React from 'react';

interface ReportFormProps {
  title: string;
  dateRange: { start: string; end: string };
  paymentDate: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({
  title,
  dateRange,
  paymentDate,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-purple-200 p-4 rounded mb-4">
        <h1 className="text-xl text-purple-900">{title}</h1>
      </div>
  
      <div className="border p-4 bg-white rounded shadow">
        <div className="mb-4">
          <label className="block mb-2 text-blue-700">未払金</label>
          <div className="flex items-center">
            <input type="text" defaultValue="00000000" className="border p-2 rounded mr-2"/>
            <span>~</span>
            <input type="text" defaultValue="99999999" className="border p-2 rounded ml-2"/>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 font-bold">決定処理日</label>
          <div className="flex items-center">
            <input type="text" defaultValue={dateRange.start} className="border p-2 rounded mr-2"/>
            <span>~</span>
            <input type="text" defaultValue={dateRange.end} className="border p-2 rounded ml-2"/>
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold">支払予定日</label>
          <input type="text" defaultValue={`${paymentDate} 以降`} className="border p-2 rounded"/>
        </div>

        <div className="flex justify-end space-x-4">
          <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">OK</button>
          <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">クリア</button>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">終了</button>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
```