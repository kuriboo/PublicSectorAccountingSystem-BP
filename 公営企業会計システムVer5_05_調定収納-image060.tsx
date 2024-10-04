```tsx
import React from 'react';

// 型定義
type AdjustmentFormProps = {
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
  taxRatio: number;
  adjustmentAmount: number;
  internalTax: number;
  specifiedIncome: number;
};

const AdjustmentForm: React.FC<AdjustmentFormProps> = ({
  onOk,
  onClear,
  onCancel,
  taxRatio,
  adjustmentAmount,
  internalTax,
  specifiedIncome,
}) => {
  return (
    <div className="p-4 bg-blue-200 rounded-md max-w-md">
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* 調定科目 */}
        <div className="border p-3">
          <div>調定科目</div>
          <div>節: 001 0036 給水工事収益</div>
          <div>細節: 0002 検査手数料</div>
          <div>明細: 0003 OO3G-SNM</div>
          <button className="mt-2 px-3 py-1 bg-gray-300 rounded-md">科目検索</button>
        </div>

        {/* 前受科目 */}
        <div className="border p-3">
          <div>前受科目</div>
          <div>節: 062060101 前受委託工事収益</div>
          <div>細節: 0002 前受検査費</div>
          <div>明細: 0001 0001-SNM</div>
          <button className="mt-2 px-3 py-1 bg-gray-300 rounded-md">科目検索</button>
        </div>
      </div>

      <div className="mb-4">
        {/* 税区分 */}
        <div className="mb-1">税区分: 非課税</div>

        {/* 消費税率 */}
        <div className="flex items-center mb-2">
          <label className="mr-2">消費税率</label>
          <input
            type="number"
            value={taxRatio}
            className="border px-2 py-1 w-16 mr-1"
            readOnly
          />
          <span>%</span>
        </div>

        {/* 調定金額 */}
        <div className="flex items-center mb-2">
          <label className="mr-2">調定金額</label>
          <input
            type="number"
            value={adjustmentAmount}
            className="border px-2 py-1 w-24"
            readOnly
          />
        </div>

        {/* 内消費税額 */}
        <div className="flex items-center mb-2">
          <label className="mr-2">内消費税額</label>
          <input
            type="number"
            value={internalTax}
            className="border px-2 py-1 w-24"
            readOnly
          />
        </div>

        {/* 特定収入 */}
        <div className="flex items-center">
          <label className="mr-2">特定収入</label>
          <input
            type="number"
            value={specifiedIncome}
            className="border px-2 py-1 w-24"
            readOnly
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        {/* ボタン */}
        <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={onOk}>
          OK
        </button>
        <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={onClear}>
          クリア
        </button>
        <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={onCancel}>
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default AdjustmentForm;
```