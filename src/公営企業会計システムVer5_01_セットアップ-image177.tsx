import React from 'react';

type TableRow = {
  code: string;
  detail: string;
  description: string;
  debitAmount: number;
  creditAmount: number;
};

type AccountingComponentProps = {
  title: string;
  currentYear: number;
  fiscalYear: string;
  debitTotal: number;
  creditTotal: number;
  rows: TableRow[];
  onEditClick: () => void;
};

const AccountingComponent: React.FC<AccountingComponentProps> = ({
  title,
  currentYear,
  fiscalYear,
  debitTotal,
  creditTotal,
  rows,
  onEditClick
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <div className="text-lg font-bold mb-2">{title}</div>
      <div className="mb-4 flex justify-between">
        <div>会計年度: {fiscalYear}年度</div>
        <div>年度: {currentYear}年</div>
      </div>
      <div className="mb-4 flex justify-between">
        <div>借方総計: {debitTotal.toLocaleString()} 円</div>
        <div>貸方総計: {creditTotal.toLocaleString()} 円</div>
      </div>
      <button 
        onClick={onEditClick} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        編集
      </button>
      <table className="w-full">
        <thead>
          <tr className="bg-blue-100">
            <th>細節</th>
            <th>明細</th>
            <th>仕訳細部名称</th>
            <th>借方金額</th>
            <th>貸方金額</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td>{row.code}</td>
              <td>{row.detail}</td>
              <td>{row.description}</td>
              <td>{row.debitAmount.toLocaleString()}</td>
              <td>{row.creditAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountingComponent;
