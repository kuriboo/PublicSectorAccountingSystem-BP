import React from 'react';

type SearchFormProps = {
  fiscalYear: string;
  voucherNumber: string;
  fromDate: string;
  toDate: string;
  amountRange: { min: number; max: number };
  onSearch: () => void;
  onClear: () => void;
  onSubmit: () => void;
};

const SearchForm: React.FC<SearchFormProps> = ({
  fiscalYear,
  voucherNumber,
  fromDate,
  toDate,
  amountRange,
  onSearch,
  onClear,
  onSubmit,
}) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label className="block">
            年度: <input value={fiscalYear} className="border p-1 rounded" readOnly />
          </label>
          <label className="block">
            振替番号: <input value={voucherNumber} className="border p-1 rounded" readOnly />
          </label>
        </div>
        <div className="flex justify-between mb-2">
          <label className="block">
            振替日: <input value={`${fromDate}`} className="border p-1 rounded" readOnly />
          </label>
          <label className="block">〜</label>
          <label className="block">
            <input value={`${toDate}`} className="border p-1 rounded" readOnly />
          </label>
        </div>
        <div className="flex justify-between mb-4">
          <label className="block">
            振替金額:
            <input value={amountRange.min} className="border p-1 rounded w-1/3" readOnly />
            <span>〜</span>
            <input value={amountRange.max} className="border p-1 rounded w-1/3" readOnly />
          </label>
        </div>
        <div className="flex justify-between">
          <button onClick={onSearch} className="px-4 py-2 bg-blue-500 text-white rounded">
            表示
          </button>
          <button onClick={onSubmit} className="px-4 py-2 bg-gray-500 text-white rounded">
            OK
          </button>
          <button onClick={onClear} className="px-4 py-2 bg-red-500 text-white rounded">
            クリア
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded">
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;