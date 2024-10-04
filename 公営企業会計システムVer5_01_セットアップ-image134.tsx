```tsx
import React from 'react';

// TypeScriptの型定義
interface CounterpartyInfoProps {
  code: string;
  startDate: string;
  companyName1: string;
  companyName2: string;
  abbreviation: string;
  postalCode: string;
  address1: string;
  address2: string;
  phoneNumber: string;
  faxNumber: string;
  registrationDate: string;
  requestNumber: string;
  transactions: Array<{
    date: string;
    bank: string;
    bankBranch: string;
    accountType: string;
    accountNumber: string;
    accountHolder: string;
  }>;
}

const CounterpartyInfo: React.FC<CounterpartyInfoProps> = ({
  code,
  startDate,
  companyName1,
  companyName2,
  abbreviation,
  postalCode,
  address1,
  address2,
  phoneNumber,
  faxNumber,
  registrationDate,
  requestNumber,
  transactions,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h1 className="text-lg font-semibold mb-4">相手先情報照会</h1>
      
      <div className="mb-4">
        <span className="font-medium">適用開始年月日: </span>{startDate}
      </div>
      
      <div className="mb-6">
        <div className="font-medium">相手先マスタ</div>
        <div>名称(1): {companyName1}</div>
        <div>名称(2): {companyName2}</div>
        <div>略名: {abbreviation}</div>
        <div>郵便番号: {postalCode}</div>
        <div>住所(1): {address1}</div>
        <div>住所(2): {address2}</div>
        <div>電話番号: {phoneNumber}</div>
        <div>FAX番号: {faxNumber}</div>
      </div>
      
      <div className="mb-4">
        <div className="font-medium">課税事業者</div>
        <div>登録年月日: {registrationDate}</div>
        <div>適格請求書登録番号: {requestNumber}</div>
      </div>
      
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">適用開始年月日</th>
            <th className="py-2 px-4 border-b">銀行</th>
            <th className="py-2 px-4 border-b">銀行支店名</th>
            <th className="py-2 px-4 border-b">種類</th>
            <th className="py-2 px-4 border-b">FPD用口座</th>
            <th className="py-2 px-4 border-b">口座名義人</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{transaction.date}</td>
              <td className="py-2 px-4 border-b">{transaction.bank}</td>
              <td className="py-2 px-4 border-b">{transaction.bankBranch}</td>
              <td className="py-2 px-4 border-b">{transaction.accountType}</td>
              <td className="py-2 px-4 border-b">{transaction.accountNumber}</td>
              <td className="py-2 px-4 border-b">{transaction.accountHolder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CounterpartyInfo;
```