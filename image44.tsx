```tsx
import React from 'react';

// プロパティの型定義
type LedgerEntry = {
  date: string;
  number: number;
  details: string;
  debitAccount: string;
  creditAccount: string;
  amount: number;
  tax: number;
  summary: string;
};

type LedgerEntryProps = {
  entry: LedgerEntry;
};

type LedgerProps = {
  entries: LedgerEntry[];
};

// 単一の伝票エントリーコンポーネント
const LedgerEntryRow: React.FC<LedgerEntryProps> = ({ entry }) => (
  <tr className="border-b">
    <td className="px-4 py-2">{entry.date}</td>
    <td className="px-4 py-2">{entry.number}</td>
    <td className="px-4 py-2">{entry.details}</td>
    <td className="px-4 py-2">{entry.debitAccount}</td>
    <td className="px-4 py-2">{entry.creditAccount}</td>
    <td className="px-4 py-2 text-right">{entry.amount.toLocaleString()}</td>
    <td className="px-4 py-2 text-right">{entry.tax.toLocaleString()}</td>
    <td className="px-4 py-2">{entry.summary}</td>
  </tr>
);

// 伝票管理コンポーネント
const LedgerTable: React.FC<LedgerProps> = ({ entries }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border">
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="px-4 py-2">伝票日付</th>
          <th className="px-4 py-2">番号</th>
          <th className="px-4 py-2">明細</th>
          <th className="px-4 py-2">借方科目</th>
          <th className="px-4 py-2">貸方科目</th>
          <th className="px-4 py-2">本体金額</th>
          <th className="px-4 py-2">税額</th>
          <th className="px-4 py-2">摘要</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <LedgerEntryRow key={index} entry={entry} />
        ))}
      </tbody>
    </table>
  </div>
);

export { LedgerTable, LedgerEntry, LedgerEntryRow };
```