import React from 'react';
import { FC } from 'react';

interface FormProps {
  startDate?: string;
  endDate?: string;
  accountingSubjectStart?: string;
  accountingSubjectEnd?: string;
  displayType?: 'day' | 'section' | 'detailed';
  calculationOption?: 'include' | 'exclude';
  aggregationTarget?: 'entire' | 'block' | 'segment';
  onSubmit: () => void;
  onClear: () => void;
  onTerminate: () => void;
}

const AccountForm: FC<FormProps> = ({
  startDate = '',
  endDate = '',
  accountingSubjectStart = '',
  accountingSubjectEnd = '',
  displayType = 'day',
  calculationOption = 'include',
  aggregationTarget = 'entire',
  onSubmit,
  onClear,
  onTerminate,
}) => {
  return (
    <div className="p-4 w-full max-w-md bg-white border rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-lg text-blue-700">範囲指定</h2>
        <label className="block mt-2 text-sm">集計日付</label>
        <input
          type="text"
          value={startDate}
          className="block w-full mt-1 p-2 border rounded"
          readOnly
        />
        <input
          type="text"
          value={endDate}
          className="block w-full mt-1 p-2 border rounded"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm">仕訳科目</label>
        <input
          type="text"
          value={accountingSubjectStart}
          className="block w-full mt-1 p-2 border rounded"
          readOnly
        />
        <input
          type="text"
          value={accountingSubjectEnd}
          className="block w-full mt-1 p-2 border rounded"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm">作表区分</label>
        <div className="flex items-center space-x-4">
          <label>
            <input
              type="radio"
              checked={displayType === 'day'}
              readOnly
            />
            日
          </label>
          <label>
            <input
              type="radio"
              checked={displayType === 'section'}
              readOnly
            />
            節
          </label>
          <label>
            <input
              type="radio"
              checked={displayType === 'detailed'}
              readOnly
            />
            明細
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm">決算仕様</label>
        <div className="flex items-center space-x-4">
          <label>
            <input
              type="radio"
              checked={calculationOption === 'include'}
              readOnly
            />
            含む
          </label>
          <label>
            <input
              type="radio"
              checked={calculationOption === 'exclude'}
              readOnly
            />
            含まない
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm">集計対象</label>
        <div className="flex items-center space-x-4">
          <label>
            <input
              type="radio"
              checked={aggregationTarget === 'entire'}
              readOnly
            />
            全体
          </label>
          <label>
            <input
              type="radio"
              checked={aggregationTarget === 'block'}
              readOnly
            />
            ブロック
          </label>
          <label>
            <input
              type="radio"
              checked={aggregationTarget === 'segment'}
              readOnly
            />
            セグメント
          </label>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 shadow"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 shadow"
        >
          クリア
        </button>
        <button
          onClick={onTerminate}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 shadow"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountForm;
