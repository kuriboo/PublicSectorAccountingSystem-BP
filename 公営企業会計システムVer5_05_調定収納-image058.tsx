```tsx
import React from 'react';

// 型定義
interface DateRangeComponentProps {
  title: string;
  issueDate: string;
  rangeStart: string;
  rangeEnd: string;
  rangePrefixLabel: string;
  rangePrefixValueStart: string;
  rangePrefixValueEnd: string;
  onCheckError: () => void;
  onOk: () => void;
  onClear: () => void;
  onFinish: () => void;
}

// コンポーネント
const DateRangeComponent: React.FC<DateRangeComponentProps> = ({
  title,
  issueDate,
  rangeStart,
  rangeEnd,
  rangePrefixLabel,
  rangePrefixValueStart,
  rangePrefixValueEnd,
  onCheckError,
  onOk,
  onClear,
  onFinish,
}) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-md">
      <div className="bg-indigo-100 p-4 mb-4 text-lg font-semibold text-center">
        {title}
      </div>
      <div className="mb-6">
        <p className="text-center">{issueDate}</p>
      </div>
      <div className="border p-4 mb-6">
        <div className="mb-4 text-center">範囲指定</div>
        <div className="flex justify-between items-center mb-4">
          <label className="mr-2">振替日</label>
          <input
            type="text"
            value={rangeStart}
            className="border border-gray-300 px-2 py-1"
          />
          <span className="mx-2">～</span>
          <input
            type="text"
            value={rangeEnd}
            className="border border-gray-300 px-2 py-1"
          />
        </div>
        <div className="flex justify-between items-center">
          <button className="text-purple-700">{rangePrefixLabel}</button>
          <input
            type="text"
            value={rangePrefixValueStart}
            className="border border-gray-300 px-2 py-1"
          />
          <span className="mx-2">～</span>
          <input
            type="text"
            value={rangePrefixValueEnd}
            className="border border-gray-300 px-2 py-1"
          />
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={onCheckError}
          className="border border-gray-300 px-4 py-2"
        >
          エラー確認
        </button>
        <button onClick={onOk} className="border border-gray-300 px-4 py-2">
          OK
        </button>
        <button onClick={onClear} className="border border-gray-300 px-4 py-2">
          クリア
        </button>
        <button
          onClick={onFinish}
          className="border border-gray-300 px-4 py-2"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default DateRangeComponent;
```