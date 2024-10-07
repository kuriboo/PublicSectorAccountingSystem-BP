import React from 'react';

// Propsの型定義
type PaymentSlipProps = {
  title: string;
  fiscalYear: string;
  bizName: string;
  date: string;
  slipNumber: string;
  amounts: {
    budgetItem: string;
    amount: string;
  }[];
};

const PaymentSlip: React.FC<PaymentSlipProps> = ({
  title,
  fiscalYear,
  bizName,
  date,
  slipNumber,
  amounts,
}) => {
  return (
    <div className="p-4 border border-gray-300">
      {/* タイトル */}
      <h1 className="text-center text-xl font-bold mb-4">{title}</h1>

      <div className="flex justify-between mb-2">
        {/* 年度と事業名 */}
        <div>
          <span>平成 {fiscalYear}年度</span> <span>{bizName}</span>
        </div>
        {/* 伝票番号 */}
        <div>
          <span>伝票No </span> <span>{slipNumber}</span>
        </div>
      </div>

      {/* 日付 */}
      <div className="flex justify-end mb-2">
        <span>平成 {date} 日</span>
      </div>

      {/* 費目 */}
      <div className="border-t border-b border-gray-300 py-2">
        <div className="flex">
          <div className="flex-1">借方科目</div>
          <div className="flex-1">貸方科目</div>
          <div className="w-1/4 text-right">金額</div>
        </div>
        {/* 各項目 */}
        {amounts.map((entry, index) => (
          <div key={index} className="flex">
            <div className="flex-1">{entry.budgetItem}</div>
            <div className="flex-1" />
            <div className="w-1/4 text-right">{entry.amount}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        {/* レイアウトの調整用 */}
        ※この部分はレイアウトの調整のために追加されています。
      </div>
    </div>
  );
};

export default PaymentSlip;
