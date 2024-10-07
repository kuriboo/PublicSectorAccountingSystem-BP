// Import necessary libraries
import React from 'react';

// Define the types for the component props
interface OrderDocumentProps {
  decisionNumber: string;
  burdenNumber: string;
  decisionDate: string;
  paymentDate: string;
  amount: string;
  budgetAmount: string;
  burdenTotal: string;
  budgetRemaining: string;
}

// Define the OrderDocument component
const OrderDocument: React.FC<OrderDocumentProps> = ({
  decisionNumber,
  burdenNumber,
  decisionDate,
  paymentDate,
  amount,
  budgetAmount,
  burdenTotal,
  budgetRemaining,
}) => {
  return (
    <div className="max-w-2xl p-4 border border-gray-300 rounded">
      <div className="text-center text-xl font-bold mb-4">負担行為併命令書</div>
      <div className="flex justify-between mb-4">
        <div>決定No. {decisionNumber}</div>
        <div>負担No. {burdenNumber}</div>
      </div>
      <div className="grid grid-cols-5 gap-2 text-sm mb-6">
        <div className="col-span-2">決定処理日</div>
        <div className="col-span-1 text-right">{decisionDate}</div>
        <div className="col-span-2">平成28年 3月27日</div>
        <div className="col-span-2">支払予定日</div>
        <div className="col-span-1 text-right">{paymentDate}</div>
        <div className="col-span-2">平成28年 3月27日</div>
      </div>
      <div className="border-t border-gray-300 pt-2 mb-2">
        <div className="text-center">以下のとおり支出してよろしいか。</div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm border-t border-gray-300 pt-2">
        <div>明細 0001 電子書籍費</div>
        <div className="text-right">決裁金額 {amount}</div>
        <div>本体金額 {amount}</div>
        <div className="text-right">消費税額等 0円</div>
        <div>予算現額 {budgetAmount}</div>
        <div className="text-right">負担累計 {burdenTotal}</div>
        <div>予算残額 {budgetRemaining}</div>
      </div>
    </div>
  );
};

export default OrderDocument;