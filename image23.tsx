```tsx
import React from 'react';

// TypeScriptの型定義
type TransferVoucherProps = {
  title: string;
  fiscalYear: string;
  documentNumber: string;
  manager: string;
  amounts: { description: string; amount: number }[];
};

const TransferVoucher: React.FC<TransferVoucherProps> = ({
  title,
  fiscalYear,
  documentNumber,
  manager,
  amounts,
}) => {
  return (
    <div className="border p-4 max-w-2xl mx-auto bg-white shadow-md">
      {/* タイトル */}
      <h1 className="text-center font-bold text-xl mb-4">{title}</h1>

      {/* 詳細情報 */}
      <div className="mb-4">
        <div className="flex justify-between">
          <span>年度: {fiscalYear}</span>
          <span>伝票No: {documentNumber}</span>
        </div>
        <div className="text-right">管理者: {manager}</div>
      </div>

      {/* 金額テーブル */}
      <table className="w-full text-sm table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">借方科目</th>
            <th className="border px-4 py-2">貸方科目</th>
            <th className="border px-4 py-2">金額</th>
          </tr>
        </thead>
        <tbody>
          {amounts.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2 text-right">
                {item.amount.toLocaleString()}円
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransferVoucher;
```