import React from 'react';

type PayrollData = {
  determination: string;
  yearOfDecision: number;
  decisionNumber: number;
  paymentDateRaw: string;
  paymentDate: string;
  accountYear: number;
  itemCode: number;
  managementDivision: number;
  salaryAmount: number;
  deductionAmount: number;
  linkageDescription: string;
};

type PayrollTableProps = {
  data: PayrollData[];
  onSelectAll: (isSelected: boolean) => void;
  onDelete: () => void;
  onDisplay: () => void;
  selectedDateRange: string;
};

const PayrollTable: React.FC<PayrollTableProps> = ({
  data,
  onSelectAll,
  onDelete,
  onDisplay,
  selectedDateRange
}) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">給与データ取込削除</h1>
      <div className="bg-purple-100 p-2 rounded-md flex justify-between items-center mb-2">
        <span>支給日: {selectedDateRange}</span>
        <button onClick={onDelete} className="bg-pink-400 text-white p-2 rounded-md">
          削除
        </button>
        <label className="inline-flex items-center">
          <input type="checkbox" onChange={(e) => onSelectAll(e.target.checked)} />
          <span className="ml-2">全選択</span>
        </label>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2">締め処理</th>
            <th className="px-4 py-2">決定年度</th>
            <th className="px-4 py-2">決定番号</th>
            <th className="px-4 py-2">支給日</th>
            <th className="px-4 py-2">会計年度</th>
            <th className="px-4 py-2">目コード</th>
            <th className="px-4 py-2">管理区分</th>
            <th className="px-4 py-2">支給額</th>
            <th className="px-4 py-2">控除額</th>
            <th className="px-4 py-2">連携説明</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2 text-center">{row.determination}</td>
              <td className="px-4 py-2 text-center">{row.yearOfDecision}</td>
              <td className="px-4 py-2 text-center">{row.decisionNumber}</td>
              <td className="px-4 py-2 text-center">{row.paymentDate}</td>
              <td className="px-4 py-2 text-center">{row.accountYear}</td>
              <td className="px-4 py-2 text-center">{row.itemCode}</td>
              <td className="px-4 py-2 text-center">{row.managementDivision}</td>
              <td className="px-4 py-2 text-right">{row.salaryAmount.toLocaleString()}</td>
              <td className="px-4 py-2 text-right">{row.deductionAmount.toLocaleString()}</td>
              <td className="px-4 py-2">{row.linkageDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onDisplay} className="bg-blue-500 text-white p-2 mt-4 rounded-md">
        表示
      </button>
    </div>
  );
};

export default PayrollTable;