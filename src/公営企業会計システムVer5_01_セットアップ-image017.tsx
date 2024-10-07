import React from 'react';

// 定義するプロパティの型
interface RangeInputProps {
  label: string;
  startValue: string;
  endValue: string;
  onStartChange: (value: string) => void;
  onEndChange: (value: string) => void;
}

// RangeInputコンポーネントの定義
const RangeInput: React.FC<RangeInputProps> = ({ 
  label, 
  startValue, 
  endValue, 
  onStartChange, 
  onEndChange 
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="text-blue-900 font-bold mb-2">{label}</div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={startValue}
          onChange={(e) => onStartChange(e.target.value)}
          className="border rounded p-1 w-20"
        />
        <span>〜</span>
        <input
          type="text"
          value={endValue}
          onChange={(e) => onEndChange(e.target.value)}
          className="border rounded p-1 w-20"
        />
      </div>
    </div>
  );
};

// Usage example
// <RangeInput
//   label="工事名場所"
//   startValue="000000"
//   endValue="999999"
//   onStartChange={(value) => console.log('Start:', value)}
//   onEndChange={(value) => console.log('End:', value)}
// />

export default RangeInput;