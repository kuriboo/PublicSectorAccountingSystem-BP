```tsx
import React from 'react';

// TypeScript型定義
type ReportFormProps = {
  fiscalYear: number;
  category: '3条' | '4条' | '両方';
  subTitle3: string;
  incomeTitle3: string;
  expenseTitle3: string;
  subTitle4: string;
  incomeTitle4: string;
  outcomeTitle4: string;
  summary: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ReportForm: React.FC<ReportFormProps> = ({
  fiscalYear,
  category,
  subTitle3,
  incomeTitle3,
  expenseTitle3,
  subTitle4,
  incomeTitle4,
  outcomeTitle4,
  summary,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <select value={fiscalYear} className="block w-full mt-1">
          <option value={fiscalYear}>{`平成${fiscalYear}`}</option>
          {/* 他の年度オプションを追加 */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">作成区分</label>
        <div className="flex space-x-4 mt-1">
          <label>
            <input type="radio" checked={category === '3条'} readOnly /> 3条
          </label>
          <label>
            <input type="radio" checked={category === '4条'} readOnly /> 4条
          </label>
          <label>
            <input type="radio" checked={category === '両方'} readOnly /> 両方
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">3条サブタイトル</label>
        <input type="text" value={subTitle3} className="block w-full mt-1" readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">収益サブタイトル</label>
        <input type="text" value={incomeTitle3} className="block w-full mt-1" readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">費用サブタイトル</label>
        <input type="text" value={expenseTitle3} className="block w-full mt-1" readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">4条サブタイトル</label>
        <input type="text" value={subTitle4} className="block w-full mt-1" readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">収入サブタイトル</label>
        <input type="text" value={incomeTitle4} className="block w-full mt-1" readOnly />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">支出サブタイトル</label>
        <input type="text" value={outcomeTitle4} className="block w-full mt-1" readOnly />
      </div>
      <div className="mb-4 p-2 bg-gray-100 rounded">
        <p className="text-gray-700">{summary}</p>
      </div>
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onSubmit}>OK</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={onClear}>クリア</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>終了</button>
      </div>
    </div>
  );
};

export default ReportForm;
```