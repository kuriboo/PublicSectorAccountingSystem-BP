import React from 'react';

// 型定義
type PaymentRecord = {
  date: string;
  decisionNumber: number;
  paymentType: string;
  amount: number;
  description: string;
};

type DecisionFormProps = {
  records: PaymentRecord[];
  onSearch: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const DecisionForm: React.FC<DecisionFormProps> = ({ records, onSearch, onClear, onCancel }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      {/* フィルターフォーム */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input type="text" placeholder="節" className="border p-2 flex-grow" />
        <input type="text" placeholder="細節" className="border p-2 flex-grow" />
        <input type="text" placeholder="明細" className="border p-2 flex-grow" />
        <div className="flex items-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onSearch}
          >
            科目検索
          </button>
        </div>
      </div>

      {/* 詳細情報と主なアクション */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input type="text" placeholder="摘要" className="border p-2 flex-grow" />
        <input type="text" placeholder="支払先" className="border p-2 flex-grow" />
        <input type="text" placeholder="処理日" className="border p-2 flex-grow" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onSearch}>
          表示
        </button>
      </div>

      {/* 支払記録テーブル */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">処理日</th>
            <th className="px-4 py-2">決定番号</th>
            <th className="px-4 py-2">支払種別</th>
            <th className="px-4 py-2">決定額</th>
            <th className="px-4 py-2">摘要</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{record.date}</td>
              <td className="px-4 py-2">{record.decisionNumber}</td>
              <td className="px-4 py-2">{record.paymentType}</td>
              <td className="px-4 py-2">{record.amount.toLocaleString()}</td>
              <td className="px-4 py-2">{record.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ボタン */}
      <div className="flex justify-end mt-4 gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onCancel}>
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default DecisionForm;
```