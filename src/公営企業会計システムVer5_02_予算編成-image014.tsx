import React from 'react';

// 型定義
type NotificationFormProps = {
  year: number;
  startValue: number;
  endValue: number;
  onYearChange: (year: number) => void;
  onStartValueChange: (value: number) => void;
  onEndValueChange: (value: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const NotificationForm: React.FC<NotificationFormProps> = ({
  year,
  startValue,
  endValue,
  onYearChange,
  onStartValueChange,
  onEndValueChange,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-white">
      <h1 className="text-xl font-bold mb-4">枠配分通知書</h1>
      
      <div className="mb-4">
        <label className="mr-2">年度</label>
        <select 
          value={year} 
          onChange={(e) => onYearChange(Number(e.target.value))}
          className="border"
        >
          <option value={29}>平成29</option>
          <option value={30}>平成30</option>
          {/* Add more options as needed */}
        </select>
      </div>
      
      <div className="border p-4 mb-4">
        <h2 className="font-semibold mb-2">範囲指定</h2>
        
        <div className="flex items-center mb-2">
          <button className="mr-2 px-3 py-1 bg-gray-200">所属</button>
          <input 
            type="number" 
            value={startValue} 
            onChange={(e) => onStartValueChange(Number(e.target.value))}
            className="border p-1"
          />
          <span className="mx-2">~</span>
          <button className="mr-2 px-3 py-1 bg-gray-200">所属</button>
          <input 
            type="number" 
            value={endValue} 
            onChange={(e) => onEndValueChange(Number(e.target.value))}
            className="border p-1"
          />
        </div>
      </div>
      
      <div className="flex space-x-2">
        <button 
          onClick={onSubmit} 
          className="px-3 py-1 bg-blue-500 text-white"
        >
          OK
        </button>
        <button 
          onClick={onClear} 
          className="px-3 py-1 bg-gray-300"
        >
          クリア
        </button>
        <button 
          onClick={onFinish} 
          className="px-3 py-1 bg-gray-300"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default NotificationForm;
