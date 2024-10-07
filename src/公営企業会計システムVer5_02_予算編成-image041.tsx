import React from 'react';

// 型定義
interface BudgetFormProps {
  year: string;
  printType: 'estimate' | 'fixedAmount';
  printTimes: number;
  priceType: 'includingTax' | 'excludingTax' | 'salesTax';
  accountType: 'business' | 'department';
  rangeStart: string;
  rangeEnd: string;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  printType,
  printTimes,
  priceType,
  accountType,
  rangeStart,
  rangeEnd,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-center mb-4">事業別予算査定一覧表（当初）</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">年度</label>
        <input
          type="text"
          value={year}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">印字区分</label>
        <div className="flex items-center">
          <input
            type="radio"
            name="printType"
            checked={printType === 'estimate'}
            readOnly
          />{' '}
          見積要求額
          <input
            type="radio"
            name="printType"
            checked={printType === 'fixedAmount'}
            className="ml-4"
            readOnly
          />{' '}
          減定額
        </div>
        <input
          type="number"
          value={printTimes}
          className="mt-2 p-2 border border-gray-300 rounded-md w-20"
          readOnly
        />{' '}
        回
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">金額種別</label>
        <div className="flex items-center">
          <input
            type="radio"
            name="priceType"
            checked={priceType === 'includingTax'}
            readOnly
          />{' '}
          税込
          <input
            type="radio"
            name="priceType"
            checked={priceType === 'excludingTax'}
            className="ml-4"
            readOnly
          />{' '}
          税抜
          <input
            type="radio"
            name="priceType"
            checked={priceType === 'salesTax'}
            className="ml-4"
            readOnly
          />{' '}
          消費税
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">帳票種別</label>
        <div className="flex items-center">
          <input
            type="radio"
            name="accountType"
            checked={accountType === 'business'}
            readOnly
          />{' '}
          事業別
          <input
            type="radio"
            name="accountType"
            checked={accountType === 'department'}
            className="ml-4"
            readOnly
          />{' '}
          所属別
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">範囲指定</label>
        <div className="flex items-center">
          <span>所属 </span>
          <input
            type="text"
            value={rangeStart}
            className="ml-2 p-2 border border-gray-300 rounded-md w-32"
            readOnly
          />
          <span className="ml-2">~ 所属 </span>
          <input
            type="text"
            value={rangeEnd}
            className="ml-2 p-2 border border-gray-300 rounded-md w-32"
            readOnly
          />
        </div>
        <div className="flex items-center mt-2">
          <span>事業科目 </span>
          <input
            type="text"
            value={rangeStart}
            className="ml-2 p-2 border border-gray-300 rounded-md w-32"
            readOnly
          />
          <span className="ml-2">~ 事業科目 </span>
          <input
            type="text"
            value={rangeEnd}
            className="ml-2 p-2 border border-gray-300 rounded-md w-32"
            readOnly
          />
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded-md"
        >
          クリア
        </button>
        <button
          onClick={onFinish}
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
