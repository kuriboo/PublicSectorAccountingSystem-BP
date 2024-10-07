import React from 'react';

type FormProps = {
  year: string;
  occasion: number;
  estimateMethod: 'estimateRequest' | 'adjustment';
  previousYearCarryover: number;
  documentSize: 'A4Hori' | 'A4Verti';
  title: string;
  subtitle: string;
  columnTitle: string;
  pageNumbering: boolean;
  startPage: number;
  onSubmit: () => void;
  onClear: () => void;
};

const BudgetForm: React.FC<FormProps> = ({
  year,
  occasion,
  estimateMethod,
  previousYearCarryover,
  documentSize,
  title,
  subtitle,
  columnTitle,
  pageNumbering,
  startPage,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      {/* Year and Occasion */}
      <div className="mb-4">
        <label className="block text-gray-700">年度: </label>
        <input type="text" value={year} className="border rounded p-2 w-full" readOnly />
        <label className="block text-gray-700">回: </label>
        <input type="number" value={occasion} className="border rounded p-2 w-full" readOnly />
      </div>

      {/* Estimate Method */}
      <div className="mb-4">
        <label className="block text-gray-700">自動仕訳情報: </label>
        <div>
          <label>
            <input 
              type="radio" 
              checked={estimateMethod === 'estimateRequest'} 
              readOnly
            /> 見積要求
          </label>
          <label>
            <input 
              type="radio" 
              checked={estimateMethod === 'adjustment'} 
              readOnly
            /> 訂正額
          </label>
        </div>
      </div>

      {/* Previous Year Carryover */}
      <div className="mb-4">
        <label className="block text-gray-700">前年度繰越金 (千円): </label>
        <input type="number" value={previousYearCarryover} className="border rounded p-2 w-full" readOnly />
      </div>

      {/* Document Format */}
      <div className="mb-4">
        <label className="block text-gray-700">書式: </label>
        <div>
          <label>
            <input 
              type="radio" 
              checked={documentSize === 'A4Hori'} 
              readOnly
            /> A4 横
          </label>
          <label>
            <input 
              type="radio" 
              checked={documentSize === 'A4Verti'} 
              readOnly
            /> A4 縦
          </label>
        </div>
        <label>タイトル: </label>
        <input type="text" value={title} className="border rounded p-2 w-full" readOnly />
        <label>サブタイトル: </label>
        <input type="text" value={subtitle} className="border rounded p-2 w-full" readOnly />
        <label>柱タイトル: </label>
        <input type="text" value={columnTitle} className="border rounded p-2 w-full" readOnly />
      </div>

      {/* Page Numbering */}
      <div className="mb-4">
        <label>頁印字: </label>
        <label>
          <input 
            type="radio" 
            checked={pageNumbering} 
            readOnly
          /> する
        </label>
        <label>
          <input 
            type="radio" 
            checked={!pageNumbering} 
            readOnly
          /> しない
        </label>
        <label>開始頁: </label>
        <input type="number" value={startPage} className="border rounded p-2 w-full" readOnly />
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
      </div>
    </div>
  );
};

export default BudgetForm;
