```tsx
// components/ComparisonForm.tsx
import React from 'react';

// 型定義
interface ComparisonFormProps {
  fiscalYear: string;
  startSectionCode: string;
  endSectionCode: string;
  onFiscalYearChange: (year: string) => void;
  onStartSectionCodeChange: (code: string) => void;
  onEndSectionCodeChange: (code: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const ComparisonForm: React.FC<ComparisonFormProps> = ({
  fiscalYear,
  startSectionCode,
  endSectionCode,
  onFiscalYearChange,
  onStartSectionCodeChange,
  onEndSectionCodeChange,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-6 bg-gray-100 shadow rounded-md">
      <h2 className="text-lg font-semibold mb-4">予算執行額比較表</h2>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">作表年度</label>
        <input
          type="text"
          value={fiscalYear}
          onChange={(e) => onFiscalYearChange(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">節コード</label>
        <input
          type="text"
          value={startSectionCode}
          onChange={(e) => onStartSectionCodeChange(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
        <span className="mx-2">〜</span>
        <input
          type="text"
          value={endSectionCode}
          onChange={(e) => onEndSectionCodeChange(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
      </div>

      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700">処理概要</h3>
        <p className="text-sm text-gray-600 mt-2">
          過去4年分の金額と構成比率を算出した予算執行額の比較表を税込金額で作成します。
        </p>
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">クリア</button>
        <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ComparisonForm;
```