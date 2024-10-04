```tsx
import React from 'react';

interface Props {
  title: string;
  year: string;
  documentNumber: string;
  management: string;
  approval: string;
  meeting: string;
  budgetItems: Array<{
    debit: string;
    credit: string;
    amount: string;
  }>;
  accounting1: string;
  accounting2: string;
  revenueDivision: string;
  expenseDivision: string;
}

const TransferSlip: React.FC<Props> = ({
  title,
  year,
  documentNumber,
  management,
  approval,
  meeting,
  budgetItems,
  accounting1,
  accounting2,
  revenueDivision,
  expenseDivision,
}) => {
  return (
    <div className="border rounded p-4 space-y-4">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex justify-between">
          <span>{year}行政</span>
          <span>伝票No. {documentNumber}</span>
          <span>決定</span>
        </div>
      </header>

      {/* Management and decision section */}
      <section>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border p-2 w-1/3">所 属</th>
              <th className="border p-2">自由日の1名</th>
              <th className="border p-2">自由日の2名</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">{management}</td>
              <td className="border p-2">{approval}</td>
              <td className="border p-2">{meeting}</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Budget and accounting section */}
      <section>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border p-2">借方科目</th>
              <th className="border p-2">貸方科目</th>
              <th className="border p-2">金額</th>
            </tr>
          </thead>
          <tbody>
            {budgetItems.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.debit}</td>
                <td className="border p-2">{item.credit}</td>
                <td className="border p-2">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Accounting details */}
      <section>
        <div>
          <p>仕訳1: {accounting1}</p>
          <p>仕訳2: {accounting2}</p>
        </div>
      </section>

      {/* Revenue and expense division */}
      <section className="flex justify-between">
        <span>収入区分: {revenueDivision}</span>
        <span>税区分: {expenseDivision}</span>
      </section>
    </div>
  );
};

export default TransferSlip;
```