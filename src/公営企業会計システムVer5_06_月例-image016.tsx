import React from 'react';

// コンポーネントのプロパティ型定義
type BudgetInputFormProps = {
  section: string;
  subsection: string;
  detailSection: string;
  sectionName: string;
  subsectionName: string;
  detailSectionName: string;
  taxCategory: string;
  amount: number;
  remainingBudget: number;
  differenceDetails: string;
  onSubmit: () => void;
  onCancel: () => void;
  onDelete: () => void;
};

// 再利用可能なコンポーネント
const BudgetInputForm: React.FC<BudgetInputFormProps> = ({
  section,
  subsection,
  detailSection,
  sectionName,
  subsectionName,
  detailSectionName,
  taxCategory,
  amount,
  remainingBudget,
  differenceDetails,
  onSubmit,
  onCancel,
  onDelete
}) => {

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      {/* セクション情報 */}
      <div className="flex flex-row mb-2">
        <div className="flex-1">
          <div>{section} {sectionName}</div>
          <div>{subsection} {subsectionName}</div>
          <div>{detailSection} {detailSectionName}</div>
        </div>
        <button className="bg-gray-300 rounded px-4">科目検索</button>
      </div>

      {/* その他の詳細情報 */}
      <div className="mb-2">
        <div>税区分: {taxCategory}</div>
        <div>予算所属: 水道課主管</div>
      </div>

      {/* 金額と予算残額 */}
      <div className="flex flex-row justify-between mb-2">
        <div>金額: <input type="number" value={amount} className="border rounded p-1 w-20" readOnly /></div>
        <div>予算残額: {remainingBudget.toLocaleString()}</div>
      </div>

      {/* 差引繰摘要 */}
      <div className="mb-4">
        <input type="text" value={differenceDetails} className="border rounded w-full p-1" readOnly />
      </div>

      {/* ボタン */}
      <div className="flex flex-row space-x-2">
        <button onClick={onDelete} className="bg-red-500 text-white rounded px-4 py-2">削除</button>
        <button onClick={onSubmit} className="bg-blue-500 text-white rounded px-4 py-2">OK</button>
        <button onClick={onCancel} className="bg-gray-300 rounded px-4 py-2">キャンセル</button>
      </div>
    </div>
  );
};

export default BudgetInputForm;
