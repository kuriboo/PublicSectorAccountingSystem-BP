```tsx
import React from 'react';

type Record = {
  id: number;
  paymentTo: string;
  summary: string;
  amount: number;
  decisionDate: string;
  paymentDate: string;
};

type DecisionTableProps = {
  records: Record[];
  onSelect: (id: number) => void;
  onConfirmAll: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const DecisionTable: React.FC<DecisionTableProps> = ({
  records,
  onSelect,
  onConfirmAll,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-white shadow-md h-full">
      <h1 className="text-lg mb-4">振替伝票決裁確定解除入力</h1>
      <div className="flex justify-end mb-2">
        <button className="btn btn-primary mr-2" onClick={onConfirmAll}>
          確定
        </button>
        <button className="btn btn-secondary mr-2" onClick={onClear}>
          クリア
        </button>
        <button className="btn btn-danger" onClick={onFinish}>
          終了
        </button>
      </div>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">決定番号</th>
            <th className="px-4 py-2">支払先</th>
            <th className="px-4 py-2">摘要</th>
            <th className="px-4 py-2">決定額</th>
            <th className="px-4 py-2">支払日</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">
                <button onClick={() => onSelect(record.id)}>
                  {record.id}
                </button>
              </td>
              <td className="border px-4 py-2">{record.paymentTo}</td>
              <td className="border px-4 py-2">{record.summary}</td>
              <td className="border px-4 py-2 text-right">
                {record.amount.toLocaleString()}
              </td>
              <td className="border px-4 py-2">{record.paymentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DecisionTable;
```