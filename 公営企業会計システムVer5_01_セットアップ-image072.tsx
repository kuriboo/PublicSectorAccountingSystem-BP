```tsx
import React from 'react';

// TypeScriptの型定義
interface FormComponentProps {
  fiscalYear: string;
  startAccountCode: string;
  endAccountCode: string;
  onFiscalYearChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onStartAccountCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEndAccountCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onClear: () => void;
}

const FormComponent: React.FC<FormComponentProps> = ({
  fiscalYear,
  startAccountCode,
  endAccountCode,
  onFiscalYearChange,
  onStartAccountCodeChange,
  onEndAccountCodeChange,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">銀行預金別資金残高表出力マスタリスト作成</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          年度
        </label>
        <select value={fiscalYear} onChange={onFiscalYearChange} className="w-full p-2 border border-gray-300 rounded">
          <option value="平成29">平成29</option>
          {/* 他の年度オプションを追加できます */}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          範囲指定
        </label>
        <div className="flex space-x-4">
          <input
            type="text"
            value={startAccountCode}
            onChange={onStartAccountCodeChange}
            className="w-full p-2 text-center border border-gray-300 rounded"
            placeholder="仕訳科目開始"
          />
          <span>~</span>
          <input
            type="text"
            value={endAccountCode}
            onChange={onEndAccountCodeChange}
            className="w-full p-2 text-center border border-gray-300 rounded"
            placeholder="仕訳科目終了"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
          クリア
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
```