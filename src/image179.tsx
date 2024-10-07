import React from 'react';

type RowData = {
  code: string;
  detail: string;
  desc: string;
  debit: number;
  credit: number;
};

type LedgerProps = {
  title: string;
  rows: RowData[];
  accountYear: string;
  fiscalYear: string;
  debitTotal: number;
  creditTotal: number;
};

const Ledger: React.FC<LedgerProps> = ({
  title,
  rows,
  accountYear,
  fiscalYear,
  debitTotal,
  creditTotal,
}) => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <div className="mb-4">
        <span className="font-semibold">会計年度: </span>
        <span>{accountYear}</span>
        <span className="ml-4 font-semibold">年度: </span>
        <span>{fiscalYear}</span>
      </div>
      <table className="w-full text-left border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-2 py-1">細節</th>
            <th className="border border-gray-300 px-2 py-1">明細</th>
            <th className="border border-gray-300 px-2 py-1">仕訳細部名称</th>
            <th className="border border-gray-300 px-2 py-1">借方金額</th>
            <th className="border border-gray-300 px-2 py-1">貸方金額</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-2 py-1">{row.code}</td>
              <td className="border border-gray-300 px-2 py-1">{row.detail}</td>
              <td className="border border-gray-300 px-2 py-1">{row.desc}</td>
              <td className="border border-gray-300 px-2 py-1">{row.debit.toLocaleString()}</td>
              <td className="border border-gray-300 px-2 py-1">{row.credit.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-gray-100">
          <tr>
            <td className="border border-gray-300 px-2 py-1" colSpan={3}>合計</td>
            <td className="border border-gray-300 px-2 py-1">{debitTotal.toLocaleString()}</td>
            <td className="border border-gray-300 px-2 py-1">{creditTotal.toLocaleString()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Ledger;
