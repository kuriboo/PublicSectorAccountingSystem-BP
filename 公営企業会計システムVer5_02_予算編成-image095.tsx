```tsx
import React from 'react';

// 定義するプロパティの型
interface TaxDetailProps {
  taxRate: number;
  previousYear: number;
  taxIncluded: number;
  taxExcluded: number;
  consumptionTax: number;
  total: number;
  onConfirm: () => void;
  onCancel: () => void;
}

const TaxDetail: React.FC<TaxDetailProps> = ({
  taxRate,
  previousYear,
  taxIncluded,
  taxExcluded,
  consumptionTax,
  total,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="max-w-lg mx-auto mt-4 p-4 bg-white border border-gray-300 rounded-md shadow-sm">
      <h2 className="text-xl font-bold mb-4">消費税詳細</h2>
      <div className="mb-4">
        <span className="font-semibold">消費税率: </span>
        <span>{taxRate.toFixed(2)}%</span>
      </div>
      <div className="space-y-2">
        <div>
          <span className="font-semibold">前年度: </span>
          <span>{previousYear.toLocaleString()} 円</span>
        </div>
        <div>
          <span className="font-semibold">税込: </span>
          <span>{taxIncluded.toLocaleString()} 円</span>
        </div>
        <div>
          <span className="font-semibold">税抜: </span>
          <span>{taxExcluded.toLocaleString()} 円</span>
        </div>
        <div>
          <span className="font-semibold">消費税: </span>
          <span>{consumptionTax.toLocaleString()} 円</span>
        </div>
        <div>
          <span className="font-semibold">比較: </span>
          <span>{total.toLocaleString()} 円</span>
        </div>
      </div>
      <div className="mt-6 flex justify-end space-x-4">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={onConfirm}
        >
          行確定
        </button>
        <button
          className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default TaxDetail;
```