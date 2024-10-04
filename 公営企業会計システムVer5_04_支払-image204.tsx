```tsx
import React from 'react';

interface PaymentDetailsProps {
  year: string;
  paymentNumber: number;
  changeCount: number;
  paymentType: string;
  processingDate: string;
  office: string;
  personInCharge: string;
  workLocation: string;
  summary: string;
  startDate: string;
  deadline: string;
  method: string;
  previousDivision: string;
  paymentCount: number;
  totalBudget: number;
  mainAmount: number;
  taxAmount: number;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  year,
  paymentNumber,
  changeCount,
  paymentType,
  processingDate,
  office,
  personInCharge,
  workLocation,
  summary,
  startDate,
  deadline,
  method,
  previousDivision,
  paymentCount,
  totalBudget,
  mainAmount,
  taxAmount,
}) => {
  return (
    <div className="p-4 border rounded shadow-lg bg-white">
      <div className="mb-4">
        <h2 className="text-lg font-bold">{year} 年度</h2>
        <p>予定番号: {paymentNumber}</p>
        <p>変更回数: {changeCount}</p>
      </div>
      <div className="mb-4">
        <p>支払い種別: {paymentType}</p>
        <p>予定処理日: {processingDate}</p>
        <p>起案所属: {office}</p>
        <p>起案者: {personInCharge}</p>
        <p>工事名場所: {workLocation}</p>
        <p>摘要: {summary}</p>
      </div>
      <div className="mb-4">
        <p>着手年月日: {startDate}</p>
        <p>納期年月日: {deadline}</p>
        <p>契約方法: {method}</p>
        <p>前払区分: {previousDivision}</p>
        <p>支払回数: {paymentCount}</p>
      </div>
      <div className="mb-4">
        <p>合計予定額: {totalBudget.toLocaleString()}</p>
        <p>合計本体額: {mainAmount.toLocaleString()}</p>
        <p>合計消費税額: {taxAmount.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default PaymentDetails;
```