import React from 'react';

type PaymentDetailProps = {
  fiscalYear: string;
  number: string;
  paymentDate: string;
  paymentMethod: string;
  payee: string;
  accountType: string;
  bankName: string;
  accountNumber: string;
  branchName: string;
  accountHolder: string;
  decisionAmount: number;
  baseAmount: number;
  taxAmount: number;
  items: {
    paymentType: string;
    paymentDetail: string;
    tax: string;
    decisionAmount: number;
    consumptionTaxAmount: number;
    totalAmount: number;
  }[];
};

const PaymentDetail: React.FC<PaymentDetailProps> = ({
  fiscalYear,
  number,
  paymentDate,
  paymentMethod,
  payee,
  accountType,
  bankName,
  accountNumber,
  branchName,
  accountHolder,
  decisionAmount,
  baseAmount,
  taxAmount,
  items,
}) => {
  return (
    <div className="p-4 border-2">
      {/* Payment Summary Section */}
      <div className="mb-4">
        <h2 className="font-bold">支出決定</h2>
        <div className="flex justify-between">
          <span>令和{fiscalYear}年度 番号 {number}</span>
          <div className="flex">
            <div className="mr-4">
              <span>支払日: {paymentDate}</span>
            </div>
            <div>
              <span>支払方法: {paymentMethod}</span>
            </div>
          </div>
        </div>
        <span>支払先: {payee}</span>
      </div>

      {/* Bank Information Section */}
      <div className="mb-4 border-2 p-2">
        <h2 className="font-bold">口座振込情報</h2>
        <div className="grid grid-cols-2 gap-2">
          <div>預金種別: {accountType}</div>
          <div>銀行名: {bankName}</div>
          <div>口座番号: {accountNumber}</div>
          <div>支店名: {branchName}</div>
          <div>名義人: {accountHolder}</div>
          <div>決定額: {decisionAmount}</div>
        </div>
        <div className="flex justify-end mt-2">
          <span>本体額: {baseAmount}</span>
          <span className="ml-4">消費税額: {taxAmount}</span>
        </div>
      </div>

      {/* Payment Detail Section */}
      <div>
        <table className="table-auto w-full border-collapse border-2">
          <thead className="bg-blue-400 text-white">
            <tr>
              <th className="border-2">支出節</th>
              <th className="border-2">支出細節</th>
              <th className="border-2">支出明細</th>
              <th className="border-2">税</th>
              <th className="border-2">決定額</th>
              <th className="border-2">消費税額</th>
              <th className="border-2">税抜金額</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-2 text-center">
                <td className="border-2">{item.paymentType}</td>
                <td className="border-2">{item.paymentDetail}</td>
                <td className="border-2">{item.tax}</td>
                <td className="border-2">{item.decisionAmount}</td>
                <td className="border-2">{item.consumptionTaxAmount}</td>
                <td className="border-2">{item.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentDetail;
```