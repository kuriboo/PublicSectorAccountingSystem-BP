```tsx
import React, { useState } from 'react';

// TypeScriptの型定義
interface FormProps {
  years: string[]; // コンボボックスのオプション
  onSubmit: (data: FormData) => void; // Formの送信ハンドラー
}

interface FormData {
  selectedYear: string;
  useCSV: boolean;
  date: string;
}

// Tailwind CSSでスタイリングされたコンポーネント
const InformationForm: React.FC<FormProps> = ({ years, onSubmit }) => {
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [useCSV, setUseCSV] = useState(true);
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ selectedYear, useCSV, date });
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-gray-100 rounded-md">
      {/* 取り込み年度セクション */}
      <div className="mb-4">
        <label className="block text-blue-800 font-bold mb-2">取り込み年度</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="block bg-white border border-gray-300 rounded-md p-2"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* 更新年月日セクション */}
      <div className="mb-4">
        <label className="block text-blue-800 font-bold mb-2">更新年月日</label>
        <div className="flex items-center space-x-4">
          <div>
            <input
              type="radio"
              id="csv"
              checked={useCSV}
              onChange={() => setUseCSV(true)}
              className="mr-2"
            />
            <label htmlFor="csv">CSVデータを使用する</label>
          </div>
          <div>
            <input
              type="radio"
              id="manual"
              checked={!useCSV}
              onChange={() => setUseCSV(false)}
              className="mr-2"
            />
            <label htmlFor="manual">年/月/日</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              disabled={useCSV}
              className="ml-2 border border-gray-300 rounded-md p-1"
            />
          </div>
        </div>
      </div>

      {/* ボタンセクション */}
      <div className="flex space-x-4">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          OK
        </button>
        <button type="reset" className="bg-gray-300 text-black py-2 px-4 rounded-md">
          クリア
        </button>
        <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded-md">
          終了
        </button>
      </div>
    </form>
  );
};

export default InformationForm;
```