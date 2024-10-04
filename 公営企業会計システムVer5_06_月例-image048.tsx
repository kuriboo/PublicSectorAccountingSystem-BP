```tsx
import React, { useState } from 'react';

// 型定義
interface FormProps {
  initialYearMonth: string;
  onSubmit: (data: FormData) => void;
}

interface FormData {
  yearMonth: string;
  target: string;
  block: string;
}

// コンポーネント
const AggregationForm: React.FC<FormProps> = ({ initialYearMonth, onSubmit }) => {
  const [yearMonth, setYearMonth] = useState<string>(initialYearMonth);
  const [target, setTarget] = useState<string>('block');
  const [block, setBlock] = useState<string>('40 城南ブロック');

  const handleSubmit = () => {
    onSubmit({ yearMonth, target, block });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white border rounded shadow-md">
      <h2 className="font-bold mb-4">範囲指定</h2>
      
      <div className="mb-4">
        <label className="block font-medium mb-1">集計年月</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={yearMonth}
          onChange={(e) => setYearMonth(e.target.value)}
        />
      </div>
      
      <div className="mb-4">
        <label className="block font-medium mb-1">集計対象</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="all"
            name="target"
            value="all"
            className="mr-2"
            checked={target === 'all'}
            onChange={(e) => setTarget(e.target.value)}
          />
          <label htmlFor="all" className="mr-4">全体</label>

          <input
            type="radio"
            id="block"
            name="target"
            value="block"
            className="mr-2"
            checked={target === 'block'}
            onChange={(e) => setTarget(e.target.value)}
          />
          <label htmlFor="block" className="mr-4">ブロック</label>

          <input
            type="radio"
            id="segment"
            name="target"
            value="segment"
            className="mr-2"
            checked={target === 'segment'}
            onChange={(e) => setTarget(e.target.value)}
          />
          <label htmlFor="segment">セグメント</label>
        </div>
      </div>
      
      {target === 'block' && (
        <div className="mb-4">
          <select
            className="border rounded p-2 w-full"
            value={block}
            onChange={(e) => setBlock(e.target.value)}
          >
            {/* 選択肢は適宜変更可能 */}
            <option value="40 城南ブロック">40 城南ブロック</option>
            <option value="41 城北ブロック">41 城北ブロック</option>
          </select>
        </div>
      )}
      
      <div className="flex space-x-4">
        <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button className="px-4 py-2 bg-gray-400 text-white rounded">クリア</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default AggregationForm;
```