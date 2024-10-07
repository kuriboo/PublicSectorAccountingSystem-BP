import React from 'react';

type TableRow = {
  customerCode: string;
  customerName: string;
  paymentAmount: number;
  deductionAmount: number;
};

type TransferInfo = {
  accountType: string;
  accountNumber: string;
  accountName: string;
  bankName: string;
  branchName: string;
};

type Props = {
  tableRows: TableRow[];
  totalPayment: number;
  totalDeduction: number;
  transferInfo: TransferInfo;
};

const PaymentDetail: React.FC<Props> = ({
  tableRows,
  totalPayment,
  totalDeduction,
  transferInfo,
}) => {
  return (
    <div className="p-4 space-y-4">
      {/* Payment Details Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border border-gray-300 p-2">相手先コード</th>
            <th className="border border-gray-300 p-2">相手先名称1</th>
            <th className="border border-gray-300 p-2">支払金額</th>
            <th className="border border-gray-300 p-2">控除額</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => (
            <tr key={index} className="even:bg-gray-100">
              <td className="border border-gray-300 p-2">{row.customerCode}</td>
              <td className="border border-gray-300 p-2">{row.customerName}</td>
              <td className="border border-gray-300 p-2">{row.paymentAmount}</td>
              <td className="border border-gray-300 p-2">{row.deductionAmount}</td>
            </tr>
          ))}
          <tr className="font-bold">
            <td className="border border-gray-300 p-2" colSpan={2}>合計</td>
            <td className="border border-gray-300 p-2">{totalPayment}</td>
            <td className="border border-gray-300 p-2">{totalDeduction}</td>
          </tr>
        </tbody>
      </table>

      {/* Transfer Information */}
      <div className="border border-gray-300 p-4">
        <h2 className="text-blue-900">振込先情報</h2>
        <p>預金種別: {transferInfo.accountType}</p>
        <p>口座番号: {transferInfo.accountNumber}</p>
        <p>口座名義人: {transferInfo.accountName}</p>
        <p>銀行: {transferInfo.bankName}</p>
        <p>支店: {transferInfo.branchName}</p>
        <p>支払金額: {totalPayment}</p>
        <p>控除額: {totalDeduction}</p>
      </div>
    </div>
  );
};

export default PaymentDetail;
```