// Import necessary libraries
import React from 'react';

// Define types for the component's props
type BudgetFormProps = {
  year: string;
  budgetDivision: string;
  times: number;
  accountType: string;
  printDivision: string;
  printTimes: number;
  rangeType: string;
  rangeStart: string;
  rangeEnd: string;
  onChange: (field: string, value: any) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

// Functional Component
const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  budgetDivision,
  times,
  accountType,
  printDivision,
  printTimes,
  rangeType,
  rangeStart,
  rangeEnd,
  onChange,
  onSubmit,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">収入支出予算事業別集計表</h2>

      <div className="mb-4">
        <label className="block font-bold">
          年度
          <input
            type="text"
            className="ml-4 border p-2"
            value={year}
            onChange={(e) => onChange('year', e.target.value)}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block font-bold">
          予算編成区分
          <input
            type="text"
            className="ml-4 border p-2"
            value={budgetDivision}
            onChange={(e) => onChange('budgetDivision', e.target.value)}
          />
          回数
          <input
            type="number"
            className="ml-4 border p-2"
            value={times}
            onChange={(e) => onChange('times', Number(e.target.value))}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block font-bold">
          帳票種別
          <input
            type="radio"
            name="accountType"
            value="事業別"
            checked={accountType === '事業別'}
            onChange={(e) => onChange('accountType', e.target.value)}
            className="ml-4"
          />
          事業別
          <input
            type="radio"
            name="accountType"
            value="所属別"
            checked={accountType === '所属別'}
            onChange={(e) => onChange('accountType', e.target.value)}
            className="ml-4"
          />
          所属別
        </label>
      </div>

      <div className="mb-4">
        <label className="block font-bold">
          印字区分
          <input
            type="radio"
            name="printDivision"
            value="見積要求額"
            checked={printDivision === '見積要求額'}
            onChange={(e) => onChange('printDivision', e.target.value)}
            className="ml-4"
          />
          見積要求額
          <input
            type="radio"
            name="printDivision"
            value="査定額"
            checked={printDivision === '査定額'}
            onChange={(e) => onChange('printDivision', e.target.value)}
            className="ml-4"
          />
          査定額
          <input
            type="number"
            className="ml-4 border p-2"
            value={printTimes}
            onChange={(e) => onChange('printTimes', Number(e.target.value))}
          />
          回
        </label>
      </div>

      <div className="mb-4">
        <label className="block font-bold">
          範囲指定
          <input
            type="radio"
            name="rangeType"
            value="所属"
            checked={rangeType === '所属'}
            onChange={(e) => onChange('rangeType', e.target.value)}
            className="ml-4"
          />
          所属
          <input
            type="text"
            className="ml-4 border p-2"
            value={rangeStart}
            onChange={(e) => onChange('rangeStart', e.target.value)}
          />
          ～
          <input
            type="text"
            className="ml-4 border p-2"
            value={rangeEnd}
            onChange={(e) => onChange('rangeEnd', e.target.value)}
          />
          <input
            type="radio"
            name="rangeType"
            value="事業科目"
            checked={rangeType === '事業科目'}
            onChange={(e) => onChange('rangeType', e.target.value)}
            className="ml-4"
          />
          事業科目
        </label>
      </div>

      <div className="flex space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white p-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white p-2 rounded">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 text-white p-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;