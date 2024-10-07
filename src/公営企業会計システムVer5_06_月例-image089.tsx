import React from 'react';

// Propsの型定義
interface DateSelectorProps {
  date: string;
  onDateChange: (newDate: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ date, onDateChange, onSubmit, onClear, onClose }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="w-full max-w-md">
        <h1 className="text-xl font-semibold mb-4 bg-blue-100 p-2 rounded">月別金額丸め処理</h1>
        <div className="bg-white p-4 rounded shadow">
          <div className="mb-4">
            <label className="block font-bold text-gray-700 mb-2">範囲指定</label>
            <div className="flex items-center">
              <span className="mr-2">年月</span>
              <input 
                type="text" 
                value={date}
                onChange={(e) => onDateChange(e.target.value)}
                className="border px-2 py-1 rounded"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <button 
              onClick={onSubmit} 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              OK
            </button>
            <button 
              onClick={onClear} 
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              クリア
            </button>
            <button 
              onClick={onClose} 
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              終了
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelector;