import React from 'react';

type TableRow = {
  incomeType: string;
  incomeTypeCorrected: string;
  voucherType: string;
  decisionNumber: number;
  detailNumber: number;
  budgetCode: string;
  budgetName: string;
  remarks: string;
};

type IncomeUpdateTableProps = {
  title: string;
  rows: TableRow[];
  onConfirm: () => void;
  onDisplay: () => void;
};

const IncomeUpdateTable: React.FC<IncomeUpdateTableProps> = ({ title, rows, onConfirm, onDisplay }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={onDisplay}>
          表示
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={onConfirm}>
          確定
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">収入区分</th>
            <th className="py-2">収入区分（修正前）</th>
            <th className="py-2">伝票区分</th>
            <th className="py-2">決定番号</th>
            <th className="py-2">明細番号</th>
            <th className="py-2">予算科目コード</th>
            <th className="py-2">予算科目名称</th>
            <th className="py-2">備考</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t">
              <td className="py-1">{row.incomeType}</td>
              <td className="py-1">{row.incomeTypeCorrected}</td>
              <td className="py-1">{row.voucherType}</td>
              <td className="py-1">{row.decisionNumber}</td>
              <td className="py-1">{row.detailNumber}</td>
              <td className="py-1">{row.budgetCode}</td>
              <td className="py-1">{row.budgetName}</td>
              <td className="py-1">{row.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeUpdateTable;