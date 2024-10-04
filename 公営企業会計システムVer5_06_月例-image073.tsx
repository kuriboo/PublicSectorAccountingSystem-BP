```tsx
import React from 'react';

interface TaxFormProps {
  startDate: string;
  endDate: string;
  budgetNumber: string;
  taxRate?: number;
  isReducedTaxRate?: boolean;
  collectionTarget: 'all' | 'block' | 'segment';
  collectionArea?: string;
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
}

const TaxForm: React.FC<TaxFormProps> = ({
  startDate,
  endDate,
  budgetNumber,
  taxRate,
  isReducedTaxRate = false,
  collectionTarget,
  collectionArea,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold text-center">消費税計算明細書作成</h1>
      <div>
        <label className="block text-sm font-medium text-gray-700">伝票日付</label>
        <div className="flex space-x-2">
          <input type="date" value={startDate} className="border rounded p-1 w-full" />
          <span>〜</span>
          <input type="date" value={endDate} className="border rounded p-1 w-full" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">予算科目</label>
        <div className="flex space-x-2">
          <input type="text" value={budgetNumber} className="border rounded p-1 w-full" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">税率</label>
        <div className="flex items-center space-x-2">
          <input type="number" value={taxRate} placeholder="指定なし" className="border rounded p-1 w-16" />
          <span>%</span>
          <input type="checkbox" checked={isReducedTaxRate} />
          <span>軽減税率</span>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">集計対象</label>
        <div>
          <input type="radio" name="collectionTarget" value="all" checked={collectionTarget === 'all'} /> 全体
          <input type="radio" name="collectionTarget" value="block" checked={collectionTarget === 'block'} /> ブロック
          <input type="radio" name="collectionTarget" value="segment" checked={collectionTarget === 'segment'} /> セグメント
          {collectionTarget !== 'all' && (
            <input type="text" value={collectionArea} className="border rounded p-1 w-full" />
          )}
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onClear} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded">
          終了
        </button>
        <button onClick={onOk} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded">
          OK
        </button>
      </div>
    </div>
  );
};

export default TaxForm;
```