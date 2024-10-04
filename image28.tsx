```tsx
import React from 'react';

// Prop types for the Voucher component
interface VoucherProps {
  fiscalYear: string;
  department: string;
  manager: string;
  date: string;
  proposer: string;
  debitDetails: string;
  creditDetails: string;
  amount: string;
}

// Voucher Component
const Voucher: React.FC<VoucherProps> = ({
  fiscalYear,
  department,
  manager,
  date,
  proposer,
  debitDetails,
  creditDetails,
  amount,
}) => {
  return (
    <div className="border p-4 max-w-md mx-auto bg-white">
      {/* Header */}
      <div className="text-center font-bold mb-4">振替伝票（単票）</div>
      <div className="flex justify-between mb-2">
        <span>平成 {fiscalYear}年度</span>
        <span>伝票No. 27-000043</span>
      </div>

      {/* Main Table */}
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2">所属</th>
            <th className="border px-2">検証用</th>
            <th className="border px-2" colSpan={2}>自由日1名</th>
            <th className="border px-2" colSpan={2}>自由日2名</th>
          </tr>
          <tr>
            <td className="border px-2">{department}</td>
            <td className="border px-2">{manager}</td>
            <td className="border px-2" colSpan={2}>{date}</td>
            <td className="border px-2" colSpan={2}>{proposer}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2">借方科目</td>
            <td className="border px-2" colSpan={3}>{debitDetails}</td>
            <td className="border px-2">貸方科目</td>
            <td className="border px-2">{creditDetails}</td>
          </tr>
          <tr>
            <td className="border px-2">金額</td>
            <td className="border px-2" colSpan={5}>{amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Voucher;
```