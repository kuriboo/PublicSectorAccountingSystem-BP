// components/InvoiceEntryForm.tsx
import React from 'react';

// TypeScript型定義
type InvoiceEntryFormProps = {
  fiscalYear: string;
  onSubmit: (data: any) => void;
  searchFields?: {
    issueDateFrom?: string;
    issueDateTo?: string;
    invoiceNumberFrom?: number;
    invoiceNumberTo?: number;
    summary?: string;
  };
};

// 再利用可能なコンポーネントの定義
const InvoiceEntryForm: React.FC<InvoiceEntryFormProps> = ({ 
  fiscalYear, 
  onSubmit, 
  searchFields 
}) => {
  // フォームのサブミットハンドラー
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (onSubmit) {
      // 実際のデータを送る場合はここにデータオブジェクトを
      onSubmit({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      {/* 年度セレクター */}
      <div className="flex items-center">
        <label className="mr-2">年度: </label>
        <span>{fiscalYear}</span>
      </div>

      {/* 検索フィールド */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>伝票日付:</label>
          <input
            type="date"
            defaultValue={searchFields?.issueDateFrom}
            className="border ml-2"
            placeholder="開始日"
          />
          <span> ~ </span>
          <input
            type="date"
            defaultValue={searchFields?.issueDateTo}
            className="border"
            placeholder="終了日"
          />
        </div>
        <div>
          <label>伝票番号:</label>
          <input
            type="number"
            defaultValue={searchFields?.invoiceNumberFrom}
            className="border ml-2"
            placeholder="最小番号"
          />
          <span> ~ </span>
          <input
            type="number"
            defaultValue={searchFields?.invoiceNumberTo}
            className="border"
            placeholder="最大番号"
          />
        </div>
        <div className="col-span-2">
          <label>摘要:</label>
          <input
            type="text"
            defaultValue={searchFields?.summary}
            className="border w-full ml-2"
            placeholder="摘要"
          />
        </div>
      </div>

      {/* ボタン群 */}
      <div className="flex space-x-4">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          表示
        </button>
        <button type="reset" className="bg-red-500 text-white p-2 rounded">
          解除
        </button>
      </div>
    </form>
  );
};

export default InvoiceEntryForm;