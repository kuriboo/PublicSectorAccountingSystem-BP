```tsx
import React from 'react';

// TypeScript型定義
interface ExtractionFormProps {
  startDate?: string;
  endDate?: string;
  segmentOptions?: string[];
  onOk?: () => void;
  onClear?: () => void;
  onClose?: () => void;
}

const ExtractionForm: React.FC<ExtractionFormProps> = ({
  startDate = '',
  endDate = '',
  segmentOptions = [],
  onOk,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md">
      <h1 className="text-xl font-bold text-blue-600 bg-blue-100 p-2 mb-4">
        キャッシュ・フロー仕訳伝票一括抽出
      </h1>
      <div className="border p-4 mb-4">
        <h2 className="font-medium mb-2">範囲指定</h2>
        <div className="flex space-x-2 mb-2">
          <label className="flex-grow">抽出年月</label>
          <input
            type="text"
            value={startDate}
            className="border p-1 flex-grow"
            readOnly
          />
          <span>～</span>
          <input
            type="text"
            value={endDate}
            className="border p-1 flex-grow"
            readOnly
          />
        </div>
        <div className="flex">
          <label className="flex-grow">セグメント</label>
          <select className="border p-1 flex-grow">
            {segmentOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className="mb-4 text-sm text-gray-700">
        「キャッシュ・フロー伝票集計先指示入力」画面で調整を行うための伝票情報を抽出します...（説明文省略）
      </p>
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-gray-200 p-2 shadow">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-200 p-2 shadow">
          クリア
        </button>
        <button onClick={onClose} className="bg-gray-200 p-2 shadow">
          終了
        </button>
      </div>
    </div>
  );
};

export default ExtractionForm;
```