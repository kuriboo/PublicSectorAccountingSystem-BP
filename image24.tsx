```tsx
import React from 'react';

interface VoucherProps {
  fiscalYear: string;
  authority: string;
  voucherNo: string;
  manager: string;
  date1: string;
  person1: string;
  date2: string;
  person2: string;
  proposer: string;
  debitDetails: string[];
  creditDetails: { detail: string; amount: number }[];
  borderColor: string;
  bgColor: string;
}

const Voucher: React.FC<VoucherProps> = ({
  fiscalYear,
  authority,
  voucherNo,
  manager,
  date1,
  person1,
  date2,
  person2,
  proposer,
  debitDetails,
  creditDetails,
  borderColor,
  bgColor,
}) => {
  return (
    <div className={`p-4 border ${borderColor} ${bgColor}`}>
      <h1 className="text-xl text-center">振替伝票（単票）</h1>
      <div className="flex justify-between">
        <span>年度: {fiscalYear}</span>
        <span>行政事業会計: {authority}</span>
        <span>伝票No: {voucherNo}</span>
        <span>決定: {proposer}</span>
      </div>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr>
            <th className="border">管理者</th>
            <th className="border">自由日1名</th>
            <th className="border">自由日2名</th>
            <th className="border">起案者</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border">{manager}</td>
            <td className="border">{date1} {person1}</td>
            <td className="border">{date2} {person2}</td>
            <td className="border">{proposer}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4">
        <h2 className="text-lg">予算</h2>
        <ul className="list-disc pl-5">
          {debitDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-lg">仕訳</h2>
        <table className="w-full border-collapse">
          {creditDetails.map((credit, index) => (
            <tr key={index}>
              <td className="border">{credit.detail}</td>
              <td className="border">{credit.amount.toLocaleString()}円</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Voucher;
```