import React, { FC } from 'react';

// 型定義
interface FormProps {
  year: string;
  voucherNumber: string;
  onVoucherNumberChange: (value: string) => void;
  date: string;
  onDateChange: (value: string) => void;
  totalAmount: number;
  taxExcludedAmount: number;
  consumptionTax: number;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// コンポーネント
const TaxForm: FC<FormProps> = ({
  year,
  voucherNumber,
  onVoucherNumberChange,
  date,
  onDateChange,
  totalAmount,
  taxExcludedAmount,
  consumptionTax,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-lg max-w-md mx-auto shadow-md">
      {/* ヘッダー */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">平成{year} 年度</h3>
      </div>

      {/* フォーム */}
      <div className="mb-4">
        <label className="block font-medium mb-1">振替番号</label>
        <input
          type="text"
          value={voucherNumber}
          onChange={(e) => onVoucherNumberChange(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">伝票日付</label>
        <input
          type="text"
          placeholder="年/月/日"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* 金額表 */}
      <div className="grid grid-cols-3 gap-4 text-center border-t pt-2">
        <div>
          <div className="font-bold">税込金額</div>
          <div>{totalAmount}</div>
        </div>
        <div>
          <div className="font-bold">税抜金額</div>
          <div>{taxExcludedAmount}</div>
        </div>
        <div>
          <div className="font-bold">消費税額</div>
          <div>{consumptionTax}</div>
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2 mt-4">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default TaxForm;