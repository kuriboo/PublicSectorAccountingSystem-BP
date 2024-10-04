```tsx
import React from 'react';

type SummaryEntry = {
  id: number;
  detail1: string;
  detail2: string;
  partner: string;
  amount: number;
  tax: number;
};

type SummaryInputProps = {
  title: string;
  entries: SummaryEntry[];
  onAddEntry: (entry: SummaryEntry) => void;
  onDeleteEntry: (id: number) => void;
  onSubmit: () => void;
  onClear: () => void;
};

const SummaryInput: React.FC<SummaryInputProps> = ({
  title,
  entries,
  onAddEntry,
  onDeleteEntry,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 bg-blue-100">
      <h2 className="text-2xl font-bold">{title}</h2>
      <table className="w-full mt-4 border-collapse border border-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-2">伝票番号</th>
            <th className="border border-gray-300 px-2">明細摘要1</th>
            <th className="border border-gray-300 px-2">明細摘要2</th>
            <th className="border border-gray-300 px-2">相手先</th>
            <th className="border border-gray-300 px-2">金額</th>
            <th className="border border-gray-300 px-2">消費税</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td className="border border-gray-300 px-2">{entry.id}</td>
              <td className="border border-gray-300 px-2">{entry.detail1}</td>
              <td className="border border-gray-300 px-2">{entry.detail2}</td>
              <td className="border border-gray-300 px-2">{entry.partner}</td>
              <td className="border border-gray-300 px-2">{entry.amount}</td>
              <td className="border border-gray-300 px-2">{entry.tax}</td>
              <td>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => onDeleteEntry(entry.id)}
                >
                  行削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={onClear}
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default SummaryInput;
```