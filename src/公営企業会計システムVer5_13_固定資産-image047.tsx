import React from 'react';
import 'tailwindcss/tailwind.css';

// TypeScript types for our component props
type FinanceEntryProps = {
  acquisitionAmount: number;
  exclusionAmount: number;
  financeSources: Array<{
    code: string;
    name: string;
    deductionType: string;
    amount: number;
  }>;
  onConfirm: () => void;
  onCancel: () => void;
};

const FinanceEntry: React.FC<FinanceEntryProps> = ({
  acquisitionAmount,
  exclusionAmount,
  financeSources,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-blue-100 rounded shadow-md">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">取得予測財源入力</h1>
        <div>
          <span className="mr-2">取得価額</span>
          <span>{acquisitionAmount.toLocaleString()}</span>
        </div>
        <div>
          <span className="mr-2">償却除外額</span>
          <span>{exclusionAmount.toLocaleString()}</span>
        </div>
      </div>

      <table className="table-auto w-full mb-4 text-left">
        <thead>
          <tr>
            <th className="px-4 py-2">財源コード</th>
            <th className="px-4 py-2">財源名称</th>
            <th className="px-4 py-2">償却区分</th>
            <th className="px-4 py-2">財源金額</th>
          </tr>
        </thead>
        <tbody>
          {financeSources.map((source, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{source.code}</td>
              <td className="border px-4 py-2">{source.name}</td>
              <td className="border px-4 py-2">{source.deductionType}</td>
              <td className="border px-4 py-2">{source.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={onConfirm}
        >
          行確定
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default FinanceEntry;
```