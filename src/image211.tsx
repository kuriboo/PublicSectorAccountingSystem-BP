import React from 'react';

// 型定義
type PaymentDetailProps = {
  fiscalYear: string;
  decisionNumber: number;
  paymentType: string;
  debtorNumber: number;
  processingDate: string;
  debtorName: string;
  summary: string;
  paymentDate: string;
  deliveryDate: string;
  contractCompany: string;
  billingAmount: number;
  taxAmount: number;
};

const PaymentDetail: React.FC<PaymentDetailProps> = ({
  fiscalYear,
  decisionNumber,
  paymentType,
  debtorNumber,
  processingDate,
  debtorName,
  summary,
  paymentDate,
  deliveryDate,
  contractCompany,
  billingAmount,
  taxAmount,
}) => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md">
      <h2 className="text-lg font-bold mb-4">支出決定詳細</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p>年度: {fiscalYear}</p>
          <p>決定番号: {decisionNumber}</p>
          <p>支払種別: {paymentType}</p>
          <p>負担番号: {debtorNumber}</p>
          <p>決定処理日: {processingDate}</p>
          <p>起案者: {debtorName}</p>
        </div>
        <div>
          <p>概要: {summary}</p>
          <p>支払日: {paymentDate}</p>
          <p>納期年月日: {deliveryDate}</p>
          <p>契約会社: {contractCompany}</p>
        </div>
      </div>
      <div className="border-t pt-4">
        <h3 className="text-md font-bold mb-2">合計金額</h3>
        <p>合計本体額: ¥{billingAmount.toLocaleString()}</p>
        <p>合計消費税額: ¥{taxAmount.toLocaleString()}</p>
        <p>合計決済額: ¥{(billingAmount + taxAmount).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default PaymentDetail;
