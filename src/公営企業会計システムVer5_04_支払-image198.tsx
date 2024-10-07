import React from 'react';
import { useState } from 'react';

// 型定義
type SearchCriteriaProps = {
  fromDate: string;
  toDate: string;
  affiliationStart: string;
  affiliationEnd: string;
  taxAmountMin: number;
  taxAmountMax: number;
  onSearch: () => void;
  onClear: () => void;
};

const SearchCriteria: React.FC<SearchCriteriaProps> = ({
  fromDate,
  toDate,
  affiliationStart,
  affiliationEnd,
  taxAmountMin,
  taxAmountMax,
  onSearch,
  onClear,
}) => {
  // 状態管理
  const [paymentType, setPaymentType] = useState('振替分');
  const [dataFiltered, setDataFiltered] = useState(false);

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-bold mb-2">検索条件設定</h2>

      <div className="mb-4">
        <label className="block mb-1">振替日</label>
        <input
          type="text"
          value={fromDate}
          disabled
          className="w-1/2 p-2 border border-gray-300 mr-2"
        />
        <input
          type="text"
          value={toDate}
          disabled
          className="w-1/2 p-2 border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">所属</label>
        <input
          type="text"
          value={affiliationStart}
          disabled
          className="w-1/2 p-2 border border-gray-300 mr-2"
        />
        <input
          type="text"
          value={affiliationEnd}
          disabled
          className="w-1/2 p-2 border border-gray-300"
        />
      </div>

      <div className="flex items-center mb-4">
        <input
          type="radio"
          checked={paymentType === '振替分'}
          onChange={() => setPaymentType('振替分')}
          className="mr-2"
        />
        <span className="mr-4">振替分</span>
        <input
          type="radio"
          checked={paymentType === '調定分'}
          onChange={() => setPaymentType('調定分')}
          className="mr-2"
        />
        <span>調定分</span>
      </div>

      <div className="mb-4">
        <label className="block mb-1">税込金額</label>
        <input
          type="number"
          value={taxAmountMin}
          className="w-1/2 p-2 border border-gray-300 mr-2"
          disabled
        />
        <input
          type="number"
          value={taxAmountMax}
          className="w-1/2 p-2 border border-gray-300"
          disabled
        />
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={dataFiltered}
          onChange={() => setDataFiltered(!dataFiltered)}
          className="mr-2"
        />
        <span className="mr-4">未処理</span>
      </div>

      <div className="space-x-4">
        <button onClick={onSearch} className="bg-blue-500 text-white py-2 px-4 rounded">
          表示
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white py-2 px-4 rounded">
          クリア
        </button>
      </div>
    </div>
  );
};

export default SearchCriteria;
