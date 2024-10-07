import React from 'react';

// 型定義
type SalaryData = {
  status: string;
  decisionYear: number;
  decisionNo: number;
  payment: string;
  fiscalYear: number;
  code: number;
  managementDivision: number;
  paymentAmount: string;
  deductionAmount: string;
  remarks: string;
};

type SalaryTableProps = {
  data: SalaryData[];
  onDelete: () => void;
  onDisplay: () => void;
};

const SalaryTable: React.FC<SalaryTableProps> = ({ data, onDelete, onDisplay }) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-lg font-bold mb-4">給与データ取込削除</h1>

      <div className="flex items-center mb-4">
        <label className="mr-2">支給日</label>
        <input type="date" className="mr-2 p-2 border rounded" />
        <span>〜</span>
        <input type="date" className="ml-2 p-2 border rounded" />
        <button className="ml-4 bg-blue-500 text-white py-1 px-4 rounded" onClick={onDelete}>
          削除
        </button>
      </div>

      <table className="w-full table-auto">
        <thead>
          <tr className="bg-purple-200">
            <th className="px-4 py-2">締め処理</th>
            <th className="px-4 py-2">決定年度</th>
            <th className="px-4 py-2">決定番号</th>
            <th className="px-4 py-2">支給日</th>
            <th className="px-4 py-2">会計年度</th>
            <th className="px-4 py-2">目コード</th>
            <th className="px-4 py-2">管理区分</th>
            <th className="px-4 py-2">支給額</th>
            <th className="px-4 py-2">控除額</th>
            <th className="px-4 py-2">摘要</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="text-center bg-white hover:bg-gray-100">
              <td className="border px-4 py-2">{row.status}</td>
              <td className="border px-4 py-2">{row.decisionYear}</td>
              <td className="border px-4 py-2">{row.decisionNo}</td>
              <td className="border px-4 py-2">{row.payment}</td>
              <td className="border px-4 py-2">{row.fiscalYear}</td>
              <td className="border px-4 py-2">{row.code}</td>
              <td className="border px-4 py-2">{row.managementDivision}</td>
              <td className="border px-4 py-2">{row.paymentAmount}</td>
              <td className="border px-4 py-2">{row.deductionAmount}</td>
              <td className="border px-4 py-2">{row.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4">
        <button className="bg-green-500 text-white py-1 px-4 mr-2 rounded" onClick={onDisplay}>
          表示
        </button>
        <button className="bg-gray-500 text-white py-1 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default SalaryTable;