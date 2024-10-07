import React from 'react';

// Prop types for the component
type FinancialSourceProps = {
  sources: {
    code: string;
    name: string;
    category: string;
    amount: number;
  }[];
  onEdit: (code: string) => void;
  onDelete: (code: string) => void;
};

// FinancialSource component
const FinancialSource: React.FC<FinancialSourceProps> = ({ sources, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h3 className="text-lg font-bold mb-4">取得資産 - 財源設定</h3>
      <div className="flex justify-between mb-2">
        <span>取得価額: 150,000</span>
        <span>償却除外額: 0</span>
      </div>
      
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="w-1/4 py-2 border">財源コード</th>
            <th className="w-1/4 py-2 border">財源名称</th>
            <th className="w-1/4 py-2 border">償却区分</th>
            <th className="w-1/4 py-2 border">財源金額</th>
          </tr>
        </thead>
        <tbody>
          {sources.map((source) => (
            <tr key={source.code}>
              <td className="border px-4 py-2">{source.code}</td>
              <td className="border px-4 py-2">{source.name}</td>
              <td className="border px-4 py-2">{source.category}</td>
              <td className="border px-4 py-2">{source.amount.toLocaleString()}</td>
              <td>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => onEdit(source.code)}
                >
                  編集
                </button>
                <button
                  className="text-red-500 hover:underline ml-2"
                  onClick={() => onDelete(source.code)}
                >
                  行削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialSource;
```