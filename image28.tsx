```tsx
// Voucher.tsx
import React from 'react';

// TypeScriptの型定義
interface VoucherProps {
  fiscalYear: string;
  accountName: string;
  voucherNo: string;
  date: string;
  details: string;
  amount: string;
}

// 再利用可能なコンポーネント
const Voucher: React.FC<VoucherProps> = ({ 
  fiscalYear, 
  accountName, 
  voucherNo, 
  date, 
  details, 
  amount 
}) => {
  return (
    <div className="border p-4 max-w-lg mx-auto my-4 bg-gray-100">
      <h1 className="text-center text-xl mb-4">振替伝票（単票）</h1>
      <div className="flex justify-between mb-2">
        <span>平成 {fiscalYear}年度</span>
        <span>伝票No. {voucherNo}</span>
      </div>
      <div className="mb-4">
        <span>{accountName}</span>
      </div>
      <div className="mb-4">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="border px-2 py-1">自由日1名</th>
              <th className="border px-2 py-1">自由日2名</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">{date}</td>
              <td className="border px-2 py-1"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="border px-2 py-1">借方科目</th>
              <th className="border px-2 py-1">貸方科目</th>
              <th className="border px-2 py-1">金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">{details}</td>
              <td className="border px-2 py-1">{details}</td>
              <td className="border px-2 py-1">{amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Voucher;
```