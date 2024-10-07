import React from 'react';

// Propsの型定義
type BidFormProps = {
  year: string;
  bidNumber: string;
  itemTitle: string;
  contractorName: string;
  priceInclusiveTax: number;
  priceExclusiveTax: number;
  consumptionTax: number;
  contractDate: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const BidForm: React.FC<BidFormProps> = ({
  year,
  bidNumber,
  itemTitle,
  contractorName,
  priceInclusiveTax,
  priceExclusiveTax,
  consumptionTax,
  contractDate,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-bold mb-4">入札結果入力</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">年度</label>
        <p>{year}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">受付番号</label>
        <p>{bidNumber}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">件名</label>
        <p>{itemTitle}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">落札業者</label>
        <p>{contractorName}</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">落札金額</label>
        <p>税込額: {priceInclusiveTax.toLocaleString()}円</p>
        <p>税抜額: {priceExclusiveTax.toLocaleString()}円</p>
        <p>消費税額: {consumptionTax.toLocaleString()}円</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">契約年月日</label>
        <p>{contractDate}</p>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BidForm;
```