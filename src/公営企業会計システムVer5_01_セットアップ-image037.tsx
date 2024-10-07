// components/MasterListForm.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import 'tailwindcss/tailwind.css';

// TypeScriptの型定義
interface MasterListFormProps {
  fiscalYear: string;
  onSubmit: (data: FormData) => void;
}

interface FormData {
  fiscalYear: string;
  rangeType: 'department' | 'budget';
  startCode: string;
  endCode: string;
}

// コンポーネントの定義
const MasterListForm: React.FC<MasterListFormProps> = ({ fiscalYear, onSubmit }) => {
  const [rangeType, setRangeType] = useState<'department' | 'budget'>('department');
  const [startCode, setStartCode] = useState('');
  const [endCode, setEndCode] = useState('');

  // フォームの送信処理
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit({ fiscalYear, rangeType, startCode, endCode });
  };

  // ラジオボタンの変更処理
  const handleRangeTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRangeType(event.target.value as 'department' | 'budget');
  };

  // 入力フィールドの変更処理
  const handleStartCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStartCode(event.target.value);
  };

  const handleEndCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEndCode(event.target.value);
  };

  return (
    <form className="p-4 max-w-md mx-auto bg-white rounded shadow-md" onSubmit={handleSubmit}>
      <h1 className="text-lg font-bold mb-4">予算科目マスタリスト作成</h1>
      
      <div className="mb-4">
        <label className="block font-semibold mb-2">年度: {fiscalYear}</label>
      </div>

      <div className="mb-4">
        <label className="font-semibold">分類:</label>
        <div>
          <label className="mr-4">
            <input 
              type="radio"
              value="department"
              checked={rangeType === 'department'}
              onChange={handleRangeTypeChange}
              className="mr-2"
            />
            所属別
          </label>
          <label>
            <input 
              type="radio"
              value="budget"
              checked={rangeType === 'budget'}
              onChange={handleRangeTypeChange}
              className="mr-2"
            />
            予算科目別
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="font-semibold block mb-2">範囲指定</label>
        <div className="flex items-center">
          <input 
            type="text"
            value={startCode}
            onChange={handleStartCodeChange}
            placeholder="開始コード"
            className="border p-2 rounded mr-2 flex-grow"
          />
          <span className="mx-2">~</span>
          <input 
            type="text"
            value={endCode}
            onChange={handleEndCodeChange}
            placeholder="終了コード"
            className="border p-2 rounded flex-grow"
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
          OK
        </button>
        <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded">
          クリア
        </button>
      </div>
    </form>
  );
};

export default MasterListForm;
```