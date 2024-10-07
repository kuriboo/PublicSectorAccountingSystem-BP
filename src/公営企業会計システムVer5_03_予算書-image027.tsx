import React from 'react';

type BudgetFormProps = {
  year: string;
  onYearChange: (year: string) => void;
  estimateDataType: 'request' | 'approved';
  onEstimateDataTypeChange: (type: 'request' | 'approved') => void;
  budgetFrom: string;
  budgetTo: string;
  onBudgetFromChange: (value: string) => void;
  onBudgetToChange: (value: string) => void;
  paperSize: 'A4' | 'A4Horizontal';
  onPaperSizeChange: (size: 'A4' | 'A4Horizontal') => void;
  title: string;
  subTitle: string;
  pageTitle: string;
  onTitleChange: (value: string) => void;
  onSubTitleChange: (value: string) => void;
  onPageTitleChange: (value: string) => void;
  isPageNumbering: boolean;
  onPageNumberingChange: (value: boolean) => void;
  startPage: number;
  onStartPageChange: (value: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  onYearChange,
  estimateDataType,
  onEstimateDataTypeChange,
  budgetFrom,
  budgetTo,
  onBudgetFromChange,
  onBudgetToChange,
  paperSize,
  onPaperSizeChange,
  title,
  subTitle,
  pageTitle,
  onTitleChange,
  onSubTitleChange,
  onPageTitleChange,
  isPageNumbering,
  onPageNumberingChange,
  startPage,
  onStartPageChange,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      {/* 年度 */}
      <div className="mb-4">
        <label className="block mb-2">年度</label>
        <input
          type="text"
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      {/* 説明欄データ作成情報 */}
      <div className="mb-4">
        <label className="block mb-2">説明欄データ作成情報</label>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              checked={estimateDataType === 'request'}
              onChange={() => onEstimateDataTypeChange('request')}
              className="mr-2"
            />
            見積要求額
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              checked={estimateDataType === 'approved'}
              onChange={() => onEstimateDataTypeChange('approved')}
              className="mr-2"
            />
            査定額
          </label>
        </div>
      </div>

      {/* 範囲指定 */}
      <div className="mb-4">
        <label className="block mb-2">範囲指定</label>
        <div className="flex items-center">
          <span className="mr-2">予算科目</span>
          <input
            type="text"
            value={budgetFrom}
            onChange={(e) => onBudgetFromChange(e.target.value)}
            className="border p-2 mr-2"
          />
          <span className="mr-2">~</span>
          <input
            type="text"
            value={budgetTo}
            onChange={(e) => onBudgetToChange(e.target.value)}
            className="border p-2"
          />
        </div>
      </div>

      {/* 書式 */}
      <div className="mb-4">
        <label className="block mb-2">書式</label>
        <div className="mb-2">
          <span className="mr-2">サイズ</span>
          <label className="inline-flex items-center">
            <input
              type="radio"
              checked={paperSize === 'A4'}
              onChange={() => onPaperSizeChange('A4')}
              className="mr-2"
            />
            A4 縦
          </label>
          <label className="inline-flex items-center ml-4">
            <input
              type="radio"
              checked={paperSize === 'A4Horizontal'}
              onChange={() => onPaperSizeChange('A4Horizontal')}
              className="mr-2"
            />
            A4 横
          </label>
        </div>

        <div className="mb-2">
          <input
            type="text"
            placeholder="タイトル"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="サブタイトル"
            value={subTitle}
            onChange={(e) => onSubTitleChange(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="柱タイトル"
            value={pageTitle}
            onChange={(e) => onPageTitleChange(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        
        <div className="flex items-center mb-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isPageNumbering}
              onChange={() => onPageNumberingChange(!isPageNumbering)}
              className="mr-2"
            />
            頁印字
          </label>
        </div>

        <div>
          <label className="block mb-2">開始頁</label>
          <input
            type="number"
            value={startPage}
            onChange={(e) => onStartPageChange(Number(e.target.value))}
            className="border p-2 w-full"
          />
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-between">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-yellow-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
