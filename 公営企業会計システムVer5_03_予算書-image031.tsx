import React from 'react';

// Props for the component
interface BudgetFormProps {
  fiscalYear: string;
  approvalStatus: '予算要求額' | '査定額';
  categoryType: '事項別明細' | '実施計画明細';
  rangeStart: string;
  rangeEnd: string;
  displayLevel: '細部' | '明細' | '細部＋明細';
  unit: '千円' | '円';
  pageSize: 'A4 横' | 'A4 縦';
  showPageNumber: boolean;
  startPage: number;
  onSubmit: () => void;
  onExport: () => void;
  onClear: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  fiscalYear,
  approvalStatus,
  categoryType,
  rangeStart,
  rangeEnd,
  displayLevel,
  unit,
  pageSize,
  showPageNumber,
  startPage,
  onSubmit,
  onExport,
  onClear,
}) => {
  return (
    <form className="p-4 bg-white rounded shadow-md">
      {/* Fiscal Year and Approval Status */}
      <div className="flex flex-col mb-4">
        <label className="font-bold">年度</label>
        <input
          type="text"
          value={fiscalYear}
          className="border rounded p-2"
          readOnly
        />
        <select value={approvalStatus} className="border rounded p-2 mt-2">
          <option value="予算要求額">予算要求額</option>
          <option value="査定額">査定額</option>
        </select>
      </div>

      {/* Category Type */}
      <div className="flex flex-col mb-4">
        <label className="font-bold">帳票種別</label>
        <select value={categoryType} className="border rounded p-2">
          <option value="事項別明細">事項別明細</option>
          <option value="実施計画明細">実施計画明細</option>
        </select>
      </div>

      {/* Range Specification */}
      <div className="flex flex-col mb-4">
        <label className="font-bold">範囲指定</label>
        <div className="flex items-center">
          <span>予算科目</span>
          <input
            type="text"
            value={rangeStart}
            className="border rounded p-2 mx-2"
          />
          <span>〜</span>
          <input
            type="text"
            value={rangeEnd}
            className="border rounded p-2 mx-2"
          />
        </div>
      </div>

      {/* Display Level and Unit */}
      <div className="flex flex-col mb-4">
        <label className="font-bold">説明欄印字</label>
        <div className="flex items-center">
          <select value={displayLevel} className="border rounded p-2">
            <option value="細部">細部</option>
            <option value="明細">明細</option>
            <option value="細部＋明細">細部＋明細</option>
          </select>
          <select value={unit} className="border rounded p-2 ml-4">
            <option value="千円">千円</option>
            <option value="円">円</option>
          </select>
        </div>
      </div>

      {/* Page Settings */}
      <div className="flex flex-col mb-4">
        <label className="font-bold">書式</label>
        <div className="flex items-center">
          <select value={pageSize} className="border rounded p-2">
            <option value="A4 横">A4 横</option>
            <option value="A4 縦">A4 縦</option>
          </select>
          <div className="flex items-center ml-4">
            <label>頁印字</label>
            <input
              type="checkbox"
              checked={showPageNumber}
              className="ml-2"
            />
          </div>
          <input
            type="number"
            value={startPage}
            className="border rounded p-2 ml-4"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          className="bg-blue-500 text-white p-2 rounded"
          onClick={onExport}
        >
          Excel出力
        </button>
        <button
          type="button"
          className="bg-green-500 text-white p-2 rounded"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          type="button"
          className="bg-red-500 text-white p-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
      </div>
    </form>
  );
};

export default BudgetForm;