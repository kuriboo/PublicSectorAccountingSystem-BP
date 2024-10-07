import React from 'react';

interface Props {
  startDate: string;
  endDate: string;
  budgetCodeStart: string;
  budgetCodeEnd: string;
  detailType: 'summary' | 'detailed';
  taxIncluded: boolean;
  taxRate?: number;
  reducedTaxRate: boolean;
  collectionTarget: 'all' | 'block' | 'segment';
  blockName?: string;
  blockOptions: { value: string; label: string }[];
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const ConsumptionTaxForm: React.FC<Props> = ({
  startDate,
  endDate,
  budgetCodeStart,
  budgetCodeEnd,
  detailType,
  taxIncluded,
  taxRate,
  reducedTaxRate,
  collectionTarget,
  blockName,
  blockOptions,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-md">
      <h1 className="text-lg font-bold mb-4">範囲指定</h1>
      <div className="mb-4">
        <label className="block mb-2">作表年月</label>
        <input
          type="text"
          value={startDate}
          className="w-full border p-2 rounded"
          readOnly
        />
        <span className="mx-2">~</span>
        <input
          type="text"
          value={endDate}
          className="w-full border p-2 rounded"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">予算科目</label>
        <input
          type="text"
          value={budgetCodeStart}
          className="w-full border p-2 rounded"
          readOnly
        />
        <span className="mx-2">~</span>
        <input
          type="text"
          value={budgetCodeEnd}
          className="w-full border p-2 rounded"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="inline-block mr-4">作表区分</label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            checked={detailType === 'summary'}
            readOnly
            className="mr-2"
          />
          節
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            checked={detailType === 'detailed'}
            readOnly
            className="mr-2"
          />
          明細
        </label>
      </div>
      <div className="mb-4">
        <label className="inline-block mr-4">税率</label>
        <input
          type="checkbox"
          checked={taxIncluded}
          readOnly
          className="mr-2"
        />
        指定する
        <input
          type="number"
          value={taxRate}
          className="w-20 border p-2 rounded mx-2"
          readOnly
          disabled={!taxIncluded}
        />
        %
        <input
          type="checkbox"
          checked={reducedTaxRate}
          readOnly
          className="ml-4 mr-2"
        />
        軽減税率
      </div>
      <div className="mb-4">
        <label className="inline-block mr-4">集計対象</label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            checked={collectionTarget === 'all'}
            readOnly
            className="mr-2"
          />
          全体
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            checked={collectionTarget === 'block'}
            readOnly
            className="mr-2"
          />
          ブロック
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            checked={collectionTarget === 'segment'}
            readOnly
            className="mr-2"
          />
          セグメント
        </label>
        {collectionTarget === 'block' && (
          <select
            value={blockName}
            className="w-full border p-2 rounded mt-2"
            disabled
          >
            {blockOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="flex justify-end">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ConsumptionTaxForm;
```