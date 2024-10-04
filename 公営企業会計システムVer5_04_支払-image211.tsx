```tsx
import React from 'react';

interface TransactionDetailProps {
  department: string;
  authorizer: string;
  issuer: string;
  issueDate: string;
  slipNo: string;
  individualSetting: string;
  entries: Entry[];
}

interface Entry {
  debit: string;
  credit: string;
  amount: string;
  unit: string;
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({
  department,
  authorizer,
  issuer,
  issueDate,
  slipNo,
  individualSetting,
  entries,
}) => {
  return (
    <div className="border p-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="font-bold">{`所属: ${department}`}</div>
          <div>{`起案者: ${issuer}`}</div>
        </div>
        <div>
          <div>{`振替日: ${issueDate}`}</div>
          <div>{`伝票No.: ${slipNo}`}</div>
        </div>
        <div>{individualSetting}</div>
      </div>
      
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">借方科目</th>
            <th className="border p-2">貸方科目</th>
            <th className="border p-2">金額</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="border p-2">{entry.debit}</td>
              <td className="border p-2">{entry.credit}</td>
              <td className="border p-2">{`${entry.amount} ${entry.unit}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionDetail;
```

```tsx
// Example usage
import React from 'react';
import TransactionDetail from './TransactionDetail';

const App: React.FC = () => {
  const entries = [
    { debit: '流動資産', credit: '水道事業収益', amount: '536,800', unit: '円' },
    { debit: '流動資産', credit: '受託工事収入', amount: '488,000', unit: '円' },
    { debit: '流動資産', credit: '仮受消費税', amount: '48,800', unit: '円' },
  ];

  return (
    <TransactionDetail
      department="最高権限"
      authorizer="高橋 太郎"
      issuer="高橋 太郎"
      issueDate="令和05年04月01日"
      slipNo="201"
      individualSetting="個別設定"
      entries={entries}
    />
  );
};

export default App;
```