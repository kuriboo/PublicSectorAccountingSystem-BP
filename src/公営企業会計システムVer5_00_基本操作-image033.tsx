import React from 'react';

// TypeScriptの型定義
interface DateDisplayProps {
  label: string; // ラベル名
  date: string;  // 日付
}

// コンポーネントの定義
const DateDisplay: React.FC<DateDisplayProps> = ({ label, date }) => {
  return (
    <div className="flex items-center">
      {/* ラベル部分 */}
      <span className="text-blue-800 mr-2">{label}</span>
      
      {/* 日付部分 */}
      <span className="bg-blue-100 p-1 border rounded">{date}</span>
    </div>
  );
};

export default DateDisplay;
```