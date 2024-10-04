```tsx
import React from 'react';

// プロパティの型定義
interface ReportFormProps {
  startDate: string;
  endDate: string;
  gatherDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onGatherDateChange: (date: string) => void;
  onOk: () => void;
  onClear: () => void;
  onFinish: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({
  startDate,
  endDate,
  gatherDate,
  onStartDateChange,
  onEndDateChange,
  onGatherDateChange,
  onOk,
  onClear,
  onFinish,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg max-w-xl mx-auto">
      <h1 className="text-lg font-bold mb-4">月次損益計算書作成</h1>
      <div className="mb-4">
        <h2 className="border-b px-2 font-medium">範囲指定</h2>
        <div className="flex items-center mt-2">
          <label className="mr-2">作表日</label>
          <input 
            type="text" 
            value={startDate} 
            onChange={(e) => onStartDateChange(e.target.value)} 
            className="border p-1 mr-2" 
          />
          <span>〜</span>
          <input 
            type="text" 
            value={endDate} 
            onChange={(e) => onEndDateChange(e.target.value)} 
            className="border p-1 ml-2" 
          />
        </div>
      </div>
      <div className="mb-4">
        <p>
          <span className="font-medium">集計日時</span>
          <input 
            type="text" 
            value={gatherDate} 
            onChange={(e) => onGatherDateChange(e.target.value)}
            className="border p-1 ml-2" 
          />
        </p>
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-blue-500 text-white py-1 px-4 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 py-1 px-4 rounded">クリア</button>
        <button onClick={onFinish} className="bg-red-500 text-white py-1 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default ReportForm;
```