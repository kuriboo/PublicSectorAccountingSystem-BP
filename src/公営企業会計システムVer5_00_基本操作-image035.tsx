import React from 'react';

// TypeScriptの型定義
type DateDisplayProps = {
  label: string;
  date: string;
  labelColor?: string;
  dateBackgroundColor?: string;
  dateTextColor?: string;
};

// Next.js + TypeScriptコンポーネント
const DateDisplay: React.FC<DateDisplayProps> = ({
  label,
  date,
  labelColor = 'text-blue-900',
  dateBackgroundColor = 'bg-cyan-100',
  dateTextColor = 'text-red-600',
}) => {
  return (
    <div className="flex items-center space-x-2">
      {/* ラベルの表示 */}
      <span className={`font-bold ${labelColor}`}>{label}</span>
      {/* 日付の表示 */}
      <span className={`border px-2 py-0.5 ${dateBackgroundColor} ${dateTextColor}`}>
        {date}
      </span>
    </div>
  );
};

export default DateDisplay;