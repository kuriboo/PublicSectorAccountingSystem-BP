```tsx
import React from 'react';

interface FinancialFormProps {
  year?: number;
  tableNo?: number;
  nextYearReserve?: number;
  previousYearFinancialResource?: number;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const FinancialForm: React.FC<FinancialFormProps> = ({
  year = new Date().getFullYear(),
  tableNo = 1,
  nextYearReserve = 0,
  previousYearFinancialResource = 0,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg max-w-2xl mx-auto">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-lg font-bold">財源経過表設定マスタ保存</h2>
        <span>年度: <input type="number" value={year} readOnly className="bg-transparent border-none" /></span>
        <span>表No: <input type="number" value={tableNo} readOnly className="bg-transparent border-none" /></span>
      </div>
      
      <div className="mt-4">
        <h3 className="font-semibold">資本的収支不足額等</h3>
        <div className="flex justify-between mt-2">
          <label>翌年への繰越工事資金:</label>
          <input type="number" value={nextYearReserve} className="border rounded p-1 w-32" />
        </div>
        <div className="flex justify-between mt-2">
          <label>前年度売当財源（未発行企業債）:</label>
          <input type="number" value={previousYearFinancialResource} className="border rounded p-1 w-32" />
        </div>
      </div>
      
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FinancialForm;
```