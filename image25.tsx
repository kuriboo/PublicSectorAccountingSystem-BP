// 支払伝票コンポーネント
import React from 'react';

// 型定義
type PaymentSlipProps = {
  title?: string;
  fiscalYear: string;
  date: string;
  slipNumber: string;
  amount: number;
  amountInWords?: string;
  description: string;
};

// 支払伝票コンポーネント
const PaymentSlip: React.FC<PaymentSlipProps> = ({
  title = '支払伝票（単票）',
  fiscalYear,
  date,
  slipNumber,
  amount,
  amountInWords = '壱百万円',
  description,
}) => {
  return (
    <div className="border p-4 max-w-2xl mx-auto bg-white">
      {/* タイトル */}
      <h1 className="text-center font-bold text-lg mb-4">{title}</h1>
      {/* 年度と伝票番号 */}
      <div className="flex justify-between mb-2">
        <div>平成 {fiscalYear} 年度</div>
        <div>
          伝票No <span className="border-b">{slipNumber}</span>
        </div>
      </div>
      {/* 日付 */}
      <div className="text-right mb-4">平成 {date}</div>
      {/* メインテーブル */}
      <table className="w-full table-fixed border-collapse text-xs">
        {/* ヘッダー行 */}
        <thead>
          <tr>
            <th className="w-1/6 border px-2 py-1">借方</th>
            <th className="w-1/6 border px-2 py-1">科目</th>
            <th className="w-1/3 border px-2 py-1">詳細</th>
            <th className="w-1/6 border px-2 py-1">貸方</th>
            <th className="w-1/6 border px-2 py-1">金額</th>
          </tr>
        </thead>
        {/* ボディ */}
        <tbody>
          <tr>
            <td className="border px-2 py-1">交通費</td>
            <td className="border px-2 py-1">支出</td>
            <td className="border px-2 py-1">{description}</td>
            <td className="border px-2 py-1">普通預金</td>
            <td className="border px-2 py-1 text-right">{amount.toLocaleString()} 円</td>
          </tr>
        </tbody>
      </table>
      {/* 合計 */}
      <div className="text-right mt-4 font-bold">
        合計金額: <span>{amountInWords}</span>
      </div>
    </div>
  );
};

export default PaymentSlip;