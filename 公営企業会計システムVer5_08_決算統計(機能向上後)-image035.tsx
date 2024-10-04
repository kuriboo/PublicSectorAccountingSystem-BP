```tsx
import React from 'react';

// TypeScriptでのプロパティ定義
interface BudgetTableProps {
  year: string;
  category: string;
  data: {
    project: string;
    code: string;
    name: string;
    taxAmount: number;
    consumptionTax: number;
    totalAmount: number;
    compositionRatio: string;
  }[];
  comment: string;
  onChangeComment: (value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const BudgetTable: React.FC<BudgetTableProps> = ({
  year,
  category,
  data,
  comment,
  onChangeComment,
  onSubmit,
  onCancel,
}) => {
  return (
    <div className="p-4">
      {/* 年度とカテゴリの表示 */}
      <div className="mb-4">
        <span className="font-bold">{year}年度</span>
        <span className="ml-4">{category}</span>
      </div>
      
      {/* テーブル */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">事業</th>
            <th className="border px-2 py-1">振替コード</th>
            <th className="border px-2 py-1">振替名</th>
            <th className="border px-2 py-1">税抜額</th>
            <th className="border px-2 py-1">消費税額</th>
            <th className="border px-2 py-1">税込額</th>
            <th className="border px-2 py-1">構成比率(%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border px-2 py-1">{item.project}</td>
              <td className="border px-2 py-1">{item.code}</td>
              <td className="border px-2 py-1">{item.name}</td>
              <td className="border px-2 py-1">{item.taxAmount}</td>
              <td className="border px-2 py-1">{item.consumptionTax}</td>
              <td className="border px-2 py-1">{item.totalAmount}</td>
              <td className="border px-2 py-1">{item.compositionRatio}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* コメント入力 */}
      <div className="mt-4">
        <label className="block mb-2">コメント</label>
        <textarea
          className="w-full border p-2"
          value={comment}
          onChange={(e) => onChangeComment(e.target.value)}
        />
      </div>

      {/* ボタン */}
      <div className="mt-4 flex justify-end space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2" onClick={onSubmit}>
          確認
        </button>
        <button className="bg-gray-300 px-4 py-2" onClick={onCancel}>
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetTable;
```