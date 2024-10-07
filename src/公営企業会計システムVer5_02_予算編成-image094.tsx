import React from 'react';

// 型定義
type DetailFormProps = {
  code: string;
  detail: string;
  abbreviation: string;
  nextYearBudget: string;
  reformDivision: string;
  taxDivision: number;
  consumptionTax: number;
  paymentDivision: string;
  budgetDivision: string;
  entryDivision: string;
  taxCalculationFlag: boolean;
  amountClassification: string;
  onSubmit: () => void;
  onCancel: () => void;
};

const DetailForm: React.FC<DetailFormProps> = ({
  code,
  detail,
  abbreviation,
  nextYearBudget,
  reformDivision,
  taxDivision,
  consumptionTax,
  paymentDivision,
  budgetDivision,
  entryDivision,
  taxCalculationFlag,
  amountClassification,
  onSubmit,
  onCancel,
}) => {
  return (
    <form className="p-4 space-y-4 bg-white shadow-md rounded">
      {/* コード入力 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">コード</label>
        <input type="text" value={code} readOnly className="mt-1 p-2 border border-gray-300 rounded w-full" />
      </div>

      {/* 明細 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">明細</label>
        <input type="text" value={detail} className="mt-1 p-2 border border-gray-300 rounded w-full" />
      </div>

      {/* 略名 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">略名</label>
        <input type="text" value={abbreviation} className="mt-1 p-2 border border-gray-300 rounded w-full" />
      </div>

      {/* 次年度予算科目 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">次年度予算科目</label>
        <input type="text" value={nextYearBudget} className="mt-1 p-2 border border-gray-300 rounded w-full" />
      </div>

      {/* 改訂区分 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">改訂区分</label>
        <input type="text" value={reformDivision} className="mt-1 p-2 border border-gray-300 rounded w-full" />
      </div>

      {/* 税区分 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">税区分</label>
        <input type="number" value={taxDivision} className="mt-1 p-2 border border-gray-300 rounded w-full" />
      </div>

      {/* 消費税 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">消費税</label>
        <input type="number" value={consumptionTax} className="mt-1 p-2 border border-gray-300 rounded w-full" />
      </div>

      {/* 金額評価区分 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">金額評価区分</label>
        <input type="text" value={amountClassification} className="mt-1 p-2 border border-gray-300 rounded w-full" />
      </div>

      {/* 未払計上区分 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">未払計上区分</label>
        <input type="text" value={paymentDivision} className="mt-1 p-2 border border-gray-300 rounded w-full" />
      </div>

      {/* 予算科目区分 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">予算科目区分</label>
        <input type="text" value={budgetDivision} className="mt-1 p-2 border border-gray-300 rounded w-full" />
      </div>

      {/* エントリー区分 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">エントリー区分</label>
        <input type="text" value={entryDivision} className="mt-1 p-2 border border-gray-300 rounded w-full" />
      </div>

      {/* 税計算フラグ */}
      <div className="flex items-center">
        <label className="block text-sm font-medium text-gray-700 mr-2">積算基礎税込フラグ</label>
        <input type="checkbox" checked={taxCalculationFlag} className="p-2 border border-gray-300 rounded" />
        <span className="ml-2">{taxCalculationFlag ? '税込' : '税抜'}</span>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          キャンセル
        </button>
      </div>
    </form>
  );
};

export default DetailForm;
```