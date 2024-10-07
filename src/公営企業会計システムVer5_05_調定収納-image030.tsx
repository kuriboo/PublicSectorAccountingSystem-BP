import React from 'react';

type BillDetailProps = {
  decisionDate: string;
  dueDate: string;
  settlementDate: string;
  debtPerson: string;
  companyName: string;
  totalAmount: number;
  summary: string;
  taxAmount: number;
  incomeType: number;
};

const BillDetail: React.FC<BillDetailProps> = ({
  decisionDate,
  dueDate,
  settlementDate,
  debtPerson,
  companyName,
  totalAmount,
  summary,
  taxAmount,
  incomeType,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white p-4 shadow-md">
      <div className="mb-4">
        <p className="text-gray-600">
          調定日: <span className="font-semibold">{decisionDate}</span>
        </p>
        <p className="text-gray-600">
          納入期限: <span className="font-semibold">{dueDate}</span>
        </p>
        <p className="text-gray-600">
          収納日: <span className="font-semibold">{settlementDate}</span>
        </p>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-600">
          年度: <span className="font-semibold">平成29年</span>
        </p>
        <p className="text-gray-600">
          調定番号: <span className="font-semibold">23</span>
        </p>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-600">
          摘要: <span className="font-semibold">{summary}</span>
        </p>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-600">
          債務者: <span className="font-semibold">{debtPerson}</span>
        </p>
        <p className="text-gray-600">
          会社名: <span className="font-semibold">{companyName}</span>
        </p>
      </div>

      <div className="text-gray-600 mb-4">
        <p>
          合計調定金額: <span className="font-semibold">{totalAmount.toLocaleString()}</span>
        </p>
        <p>
          合計消費税額: <span className="font-semibold">{taxAmount.toLocaleString()}</span>
        </p>
        <p>
          合計特定収入: <span className="font-semibold">{incomeType.toLocaleString()}</span>
        </p>
      </div>

      <table className="w-full border-t mt-4">
        <thead>
          <tr>
            <th className="border-b py-2 text-left">調定科目</th>
            <th className="border-b py-2 text-left">調定細節</th>
            <th className="border-b py-2 text-left">調定金額</th>
            <th className="border-b py-2 text-left">内消費税額</th>
            <th className="border-b py-2 text-left">特定収入</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">他会計寄付金利息</td>
            <td className="py-2">他会計寄付金利息</td>
            <td className="py-2">{totalAmount.toLocaleString()}</td>
            <td className="py-2">{taxAmount.toLocaleString()}</td>
            <td className="py-2">{incomeType.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillDetail;
