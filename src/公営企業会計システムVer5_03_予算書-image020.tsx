import React from 'react';

type FinanceFormProps = {
  fiscalYear: string;
  inquiryAmountType: 'estimate' | 'fixed';
  decisionCount: number;
  liqFunds: number;
  paperSize: 'A4 horizontal' | 'A4 vertical';
  title: string;
  subtitle: string;
  subSubtitle: string;
  displayPageNumber: boolean;
  startPage: number;
  onSubmit: (data: any) => void;
  onClear: () => void;
  onClose: () => void;
};

const FinanceForm: React.FC<FinanceFormProps> = ({
  fiscalYear,
  inquiryAmountType,
  decisionCount,
  liqFunds,
  paperSize,
  title,
  subtitle,
  subSubtitle,
  displayPageNumber,
  startPage,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <form className="p-4 bg-gray-100 rounded-md shadow-md space-y-4">
      {/* Fiscal Year */}
      <div>
        <label className="block mb-2 font-bold">年度:</label>
        <input
          type="text"
          value={fiscalYear}
          readOnly
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Inquiry Amount Type */}
      <div>
        <label className="block mb-2 font-bold">自動仕訳情報:</label>
        <div className="flex items-center space-x-4">
          <label>
            <input
              type="radio"
              name="inquiryAmountType"
              checked={inquiryAmountType === 'estimate'}
              readOnly
            />
            <span className="ml-2">見積要求額</span>
          </label>
          <label>
            <input
              type="radio"
              name="inquiryAmountType"
              checked={inquiryAmountType === 'fixed'}
              readOnly
            />
            <span className="ml-2">査定額</span>
          </label>
        </div>
      </div>

      {/* Decision Count */}
      <div>
        <label className="block mb-2 font-bold">決算見込回数:</label>
        <input
          type="number"
          value={decisionCount}
          readOnly
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Liquid Funds */}
      <div>
        <label className="block mb-2 font-bold">前年度繰越金:</label>
        <input
          type="number"
          value={liqFunds}
          readOnly
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Paper Size */}
      <div>
        <label className="block mb-2 font-bold">書式:</label>
        <div className="flex items-center space-x-4">
          <label>
            <input
              type="radio"
              name="paperSize"
              checked={paperSize === 'A4 horizontal'}
              readOnly
            />
            <span className="ml-2">A4 横</span>
          </label>
          <label>
            <input
              type="radio"
              name="paperSize"
              checked={paperSize === 'A4 vertical'}
              readOnly
            />
            <span className="ml-2">A4 縦</span>
          </label>
        </div>
      </div>

      {/* Titles */}
      <div>
        <label className="block mb-2 font-bold">タイトル:</label>
        <input
          type="text"
          value={title}
          readOnly
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-2 font-bold">サブタイトル:</label>
        <input
          type="text"
          value={subtitle}
          readOnly
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-2 font-bold">小サブタイトル:</label>
        <input
          type="text"
          value={subSubtitle}
          readOnly
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Page Number Display */}
      <div>
        <label className="block mb-2 font-bold">頁印字:</label>
        <div className="flex items-center space-x-4">
          <label>
            <input
              type="radio"
              name="displayPageNumber"
              checked={displayPageNumber}
              readOnly
            />
            <span className="ml-2">する</span>
          </label>
          <label>
            <input
              type="radio"
              name="displayPageNumber"
              checked={!displayPageNumber}
              readOnly
            />
            <span className="ml-2">しない</span>
          </label>
        </div>
      </div>

      {/* Start Page */}
      <div>
        <label className="block mb-2 font-bold">開始頁:</label>
        <input
          type="number"
          value={startPage}
          readOnly
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          OK
        </button>
        <button
          type="button"
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          クリア
        </button>
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          終了
        </button>
      </div>
    </form>
  );
};

export default FinanceForm;
```