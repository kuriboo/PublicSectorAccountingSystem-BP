import React from "react";

type PaymentDetailsProps = {
  decisionDate: string;
  conferenceDate: string;
  requestDate: string;
  contractee: string;
  paymentMethod: string;
  accountType: string;
  bankName: string;
  branchName: string;
  accountNumber: string;
  nominee: string;
  totalAmount: number;
  mainAmount: number;
  taxAmount: number;
};

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  decisionDate,
  conferenceDate,
  requestDate,
  contractee,
  paymentMethod,
  accountType,
  bankName,
  branchName,
  accountNumber,
  nominee,
  totalAmount,
  mainAmount,
  taxAmount,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <div className="flex justify-between mb-3">
        <span>決定日: {decisionDate}</span>
        <span>会議日: {conferenceDate}</span>
        <span>請求書日: {requestDate}</span>
      </div>
      <div className="mb-3">
        <span>契約先: {contractee}</span>
      </div>
      <div className="mb-3">
        <span>支払方法: {paymentMethod}</span>
      </div>
      <div className="mb-3">
        <span>預金種別: {accountType}</span>
        <span>銀行名: {bankName}</span>
        <span>支店名: {branchName}</span>
      </div>
      <div className="flex justify-between mb-3">
        <span>口座番号: {accountNumber}</span>
        <span>名義人: {nominee}</span>
      </div>
      <div className="mb-3 flex justify-between">
        <span>税込金額: {totalAmount.toLocaleString()}円</span>
        <span>本体金額: {mainAmount.toLocaleString()}円</span>
        <span>消費税額: {taxAmount.toLocaleString()}円</span>
      </div>
    </div>
  );
};

export default PaymentDetails;

// Usage Example
/*
<PaymentDetails
  decisionDate="令和06年10月02日"
  conferenceDate="決定済"
  requestDate="令和06年11月30日"
  contractee="ぎょうせい日用品"
  paymentMethod="口座振込"
  accountType="普通預金"
  bankName="みずほ銀行"
  branchName="新大場支店"
  accountNumber="1200000"
  nominee="ギョウセイチョウセン"
  totalAmount={25000}
  mainAmount={22980}
  taxAmount={2020}
/>
*/
```