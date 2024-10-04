```tsx
import React from 'react';

// TypeScriptの型定義
type DataItem = {
  id: number;
  financialName: string;
  loanDivision: string;
  beforeChange: number;
  changeAmount: number;
  afterChange: number;
};

type FinanceTableProps = {
  data: DataItem[];
  onConfirm: (id: number) => void;
  onCancel: () => void;
};

// 再利用可能なFinanceTableコンポーネント
const FinanceTable: React.FC<FinanceTableProps> = ({ data, onConfirm, onCancel }) => {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow">
      {/* ヘッダー部分 */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">財源取得・財源入力</h1>
        <button className="p-2 bg-gray-300 rounded">編集</button>
      </div>

      {/* テーブル */}
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">財源名称</th>
            <th className="border px-4 py-2">貸付区分</th>
            <th className="border px-4 py-2">異動前</th>
            <th className="border px-4 py-2">異動額</th>
            <th className="border px-4 py-2">異動後</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.financialName}</td>
              <td className="border px-4 py-2">{item.loanDivision}</td>
              <td className="border px-4 py-2 text-right">{item.beforeChange.toLocaleString()}</td>
              <td className="border px-4 py-2 text-right">{item.changeAmount.toLocaleString()}</td>
              <td className="border px-4 py-2 text-right">{item.afterChange.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ボタン */}
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">
          行確定
        </button>
        <button onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FinanceTable;
```