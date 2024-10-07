import React from 'react';

// TypeScript型定義
interface InputFormProps {
  receiptDate: string;
  description: string;
  sectionDetails: string;
  section: string;
  subSection: string;
  detail: string;
  taxRate: number;
  itemCount: number;
  amount: number;
  internalTax: number;
  specialIncome: string;
  onSubmit: () => void;
  onClear: () => void;
  onEnd: () => void;
}

const InputForm: React.FC<InputFormProps> = ({
  receiptDate,
  description,
  sectionDetails,
  section,
  subSection,
  detail,
  taxRate,
  itemCount,
  amount,
  internalTax,
  specialIncome,
  onSubmit,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {/* 収納日 */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">収納日</label>
        <input
          type="text"
          value={receiptDate}
          readOnly
          className="border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>

      {/* 摘要 */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">摘要</label>
        <input
          type="text"
          value={description}
          readOnly
          className="border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>

      {/* 調定科目 */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">調定科目</label>
        <div className="border rounded w-full p-2 text-gray-700">
          <p>{sectionDetails}</p>
          <p>{section}</p>
          <p>{subSection}</p>
          <p>{detail}</p>
        </div>
      </div>

      {/* 税区分 */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">消費税率</label>
        <input
          type="number"
          value={taxRate}
          readOnly
          className="border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>

      {/* 件数 */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">件数</label>
        <input
          type="number"
          value={itemCount}
          readOnly
          className="border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>

      {/* 調定金額 */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">調定金額</label>
        <input
          type="number"
          value={amount}
          readOnly
          className="border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>

      {/* 内消費税額 */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">内消費税額</label>
        <input
          type="number"
          value={internalTax}
          readOnly
          className="border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>

      {/* 特定収入 */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">特定収入</label>
        <input
          type="text"
          value={specialIncome}
          readOnly
          className="border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onEnd}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default InputForm;