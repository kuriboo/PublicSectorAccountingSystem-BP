import React from 'react';

type BudgetRequestProps = {
  year: string;
  budgetVersion: string;
  lastDecisionValue: string;
  isInspection: boolean;
  requestType: 'department' | 'subject';
  includePreviousYear: boolean;
  rangeStart: string;
  rangeEnd: string;
  isNew: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

export const BudgetRequestForm: React.FC<BudgetRequestProps> = ({
  year,
  budgetVersion,
  lastDecisionValue,
  isInspection,
  requestType,
  includePreviousYear,
  rangeStart,
  rangeEnd,
  isNew,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-2xl p-4 bg-gray-100 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">予算見積要求書作成</h2>
      <div className="mb-2">
        <label className="block font-medium">年度:</label>
        <input
          type="text"
          value={year}
          className="w-full p-2 border rounded"
          readOnly
        />
      </div>
      <div className="mb-2">
        <label className="block font-medium">予算種成区分:</label>
        <select
          value={budgetVersion}
          className="w-full p-2 border rounded"
          readOnly
        >
          <option value="1">当初予算</option>
          <option value="2">補正</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium">最終査定値:</label>
        <input
          type="text"
          value={lastDecisionValue}
          className="w-full p-2 border rounded"
          readOnly
        />
        <div className="flex items-center">
          <input
            type="radio"
            checked={!isInspection}
            className="mr-2"
            readOnly
          />
          <label>見積要求額</label>
          <input
            type="radio"
            checked={isInspection}
            className="ml-4 mr-2"
            readOnly
          />
          <label>査定額</label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium">帳票種別:</label>
        <div className="flex items-center">
          <input
            type="radio"
            checked={requestType === 'department'}
            className="mr-2"
            readOnly
          />
          <label>予算見積要求書(所属別)</label>
          <input
            type="radio"
            checked={requestType === 'subject'}
            className="ml-4 mr-2"
            readOnly
          />
          <label>予算見積要求書(科目別)</label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium">決算額印字:</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={includePreviousYear}
            className="mr-2"
            readOnly
          />
          <label>前年度決算入りの場合のみ</label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium">範囲指定:</label>
        <div className="flex mb-2">
          <input
            type="text"
            value={rangeStart}
            className="w-full p-2 mr-2 border rounded"
            readOnly
          />
          <span className="self-center">〜</span>
          <input
            type="text"
            value={rangeEnd}
            className="w-full p-2 ml-2 border rounded"
            readOnly
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isNew}
            className="mr-2"
            readOnly
          />
          <label>新規</label>
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 text-black rounded"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};
```