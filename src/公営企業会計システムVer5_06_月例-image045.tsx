// components/FormComponent.tsx

import React from 'react';

// Define prop types
interface FormComponentProps {
  startDate: string;
  endDate: string;
  accountNumberStart: string;
  accountNumberEnd: string;
  aggregationTarget: 'entire' | 'block' | 'segment';
  includeStoredTransactions: boolean;
  includeNonRequesterTransactions: boolean;
  onSubmit: () => void;
  onClear: () => void;
}

// Create the FormComponent
const FormComponent: React.FC<FormComponentProps> = ({
  startDate,
  endDate,
  accountNumberStart,
  accountNumberEnd,
  aggregationTarget,
  includeStoredTransactions,
  includeNonRequesterTransactions,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 border rounded-lg bg-gray-100">
      <h1 className="text-lg font-bold mb-4">範囲指定</h1>

      <div className="mb-3">
        <label className="block mb-1 font-semibold">作表日:</label>
        <input type="text" value={startDate} readOnly className="border p-2 rounded w-full"/>
        <input type="text" value={endDate} readOnly className="border p-2 rounded w-full mt-1"/>
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-semibold">仕訳科目:</label>
        <input type="text" value={accountNumberStart} readOnly className="border p-2 rounded w-full"/>
        <input type="text" value={accountNumberEnd} readOnly className="border p-2 rounded w-full mt-1"/>
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-semibold">集計対象:</label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="aggregationTarget"
              value="entire"
              checked={aggregationTarget === 'entire'}
              readOnly
            />
            全体
          </label>
          <label>
            <input
              type="radio"
              name="aggregationTarget"
              value="block"
              checked={aggregationTarget === 'block'}
              readOnly
            />
            ブロック
          </label>
          <label>
            <input
              type="radio"
              name="aggregationTarget"
              value="segment"
              checked={aggregationTarget === 'segment'}
              readOnly
            />
            セグメント
          </label>
        </div>
      </div>

      <div className="mb-3">
        <label>
          <input
            type="checkbox"
            checked={includeStoredTransactions}
            readOnly
          />
          「帳簿のみ保存」のみの伝票を出力する
        </label>
      </div>

      <div className="mb-3">
        <label>
          <input
            type="checkbox"
            checked={includeNonRequesterTransactions}
            readOnly
          />
          「適格請求書発行事業者以外」のみの伝票を出力する
        </label>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
}

export default FormComponent;

