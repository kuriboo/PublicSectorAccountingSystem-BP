```tsx
import React from 'react';

// 型定義
interface FinancialReportProps {
  year: string;
  upperItemName: string;
  lowerItemName: string;
  budgetType: string;
  reformDivision: string;
  memoName: string;
  amountType: string;
  initialBudget: number;
  fields: {
    subjectCode: string;
    name: string;
  }[];
  onEdit: () => void;
  onDelete: () => void;
  onOk: () => void;
  onClear: () => void;
  onEnd: () => void;
}

// コンポーネント
const FinancialReport: React.FC<FinancialReportProps> = ({
  year,
  upperItemName,
  lowerItemName,
  budgetType,
  reformDivision,
  memoName,
  amountType,
  initialBudget,
  fields,
  onEdit,
  onDelete,
  onOk,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* ヘッダー */}
      <h2 className="text-xl font-bold">決算報告書ファイル保守</h2>
      <div className="mt-2">
        <label>年度: </label>
        <span>{year}</span>
      </div>

      {/* 入力フィールド */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>項目名称 上: </label>
          <span>{upperItemName}</span>
        </div>
        <div>
          <label>項目名称 下: </label>
          <span>{lowerItemName}</span>
        </div>
        <div>
          <label>予算区分: </label>
          <span>{budgetType}</span>
        </div>
        <div>
          <label>改行区分: </label>
          <span>{reformDivision}</span>
        </div>
        <div>
          <label>備考印字名称: </label>
          <span>{memoName}</span>
        </div>
        <div>
          <label>金額印字区分: </label>
          <span>{amountType}</span>
        </div>
        <div>
          <label>当初予算額: </label>
          <span>{initialBudget.toLocaleString()}</span>
        </div>
      </div>

      {/* 金額テーブル */}
      <table className="min-w-full mt-4 bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">科目コード</th>
            <th className="p-2">名称</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{field.subjectCode}</td>
              <td className="p-2">{field.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ボタン */}
      <div className="flex space-x-2 mt-4">
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white"
        >
          編集
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white"
        >
          行削除
        </button>
        <button
          onClick={onOk}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white"
        >
          クリア
        </button>
        <button
          onClick={onEnd}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FinancialReport;
```