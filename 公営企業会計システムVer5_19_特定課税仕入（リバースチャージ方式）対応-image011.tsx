```tsx
import React from 'react';

// 型定義
interface InvoiceFormProps {
  fiscalYear: string;
  voucherDate: string;
  voucherNumber: string;
  totalAmount: number;
  taxableAmount: number;
  taxAmount: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

// コンポーネント
const InvoiceForm: React.FC<InvoiceFormProps> = ({
  fiscalYear,
  voucherDate,
  voucherNumber,
  totalAmount,
  taxableAmount,
  taxAmount,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md border rounded-lg">
      <h1 className="text-xl font-bold mb-4">消費税込仕訳伝票選択</h1>

      <div className="mb-2">
        <span>平成{fiscalYear}</span> <span>年度</span>
      </div>

      <div className="mb-2">
        <label className="mr-2">振替番号</label>
        <input
          type="text"
          value={voucherNumber}
          className="border p-1 rounded"
        />
      </div>

      <div className="mb-2">
        <label className="mr-2">伝票日付</label>
        <input
          type="text"
          value={voucherDate}
          placeholder="年_月_日"
          className="border p-1 rounded"
        />
      </div>

      <div className="mb-4">
        <span>摘要</span>
      </div>

      <div className="mb-2 flex justify-between">
        <span>税込金額</span>
        <span>{totalAmount}</span>
      </div>

      <div className="mb-2 flex justify-between">
        <span>税抜金額</span>
        <span>{taxableAmount}</span>
      </div>

      <div className="mb-4 flex justify-between">
        <span>消費税額</span>
        <span>{taxAmount}</span>
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="px-4 py-2 bg-gray-300 rounded">
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

export default InvoiceForm;
```