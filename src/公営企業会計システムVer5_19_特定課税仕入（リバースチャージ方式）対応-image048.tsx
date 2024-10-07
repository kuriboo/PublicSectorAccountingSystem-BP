import React from 'react';

// TypeScript 型定義
interface PaymentSlipProps {
  fiscalYear: string;
  formNumber: string;
  date: string;
  amounts: { description: string; amount: number }[];
  totalAmount: number;
}

// 支払伝票コンポーネント
const PaymentSlip: React.FC<PaymentSlipProps> = ({
  fiscalYear,
  formNumber,
  date,
  amounts,
  totalAmount,
}) => {
  return (
    <div className="p-4 border border-gray-300">
      <div className="text-center font-bold">支払伝票（単票）</div>

      <div className="flex justify-between mt-2">
        <div>年度: {fiscalYear}</div>
        <div>伝票No: {formNumber}</div>
      </div>

      <div className="mt-4">
        <div className="text-right">平成{date}</div>
      </div>
      
      <div className="mt-4 border-t border-gray-300">
        <div className="flex justify-between bg-gray-100 p-2">
          <div className="flex-1">借方科目</div>
          <div className="flex-1">貸方科目</div>
          <div className="flex-1 text-right">金額</div>
        </div>

        {amounts.map((item, index) => (
          <div key={index} className="flex justify-between p-2">
            <div className="flex-1">{item.description}</div>
            <div className="flex-1"></div>
            <div className="flex-1 text-right">{item.amount.toLocaleString()}円</div>
          </div>
        ))}

        <div className="flex justify-between bg-gray-200 p-2">
          <div className="flex-1"></div>
          <div className="flex-1 font-bold">合計</div>
          <div className="flex-1 text-right font-bold">{totalAmount.toLocaleString()}円</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSlip;
```