```tsx
import React from 'react';

// 型定義
type PaymentDetailProps = {
  fiscalYear: string;
  number: number;
  paymentDate: string;
  paymentMethod: string;
  paymentTo: string;
  amount: number;
  tax: number;
  total: number;
};

// 再利用可能なコンポーネント
const PaymentDetail: React.FC<PaymentDetailProps> = ({
  fiscalYear,
  number,
  paymentDate,
  paymentMethod,
  paymentTo,
  amount,
  tax,
  total
}) => {
  return (
    <div className="p-4 border rounded-md shadow-md">
      {/* 支出決定 */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">支出決定</h2>
        <div className="flex space-x-2">
          <span>{fiscalYear} 年度</span>
          <span>番号 {number}</span>
        </div>
      </div>

      {/* 支払日・方法・先 */}
      <div className="mb-4 grid grid-cols-2">
        <div>
          <div>支払日: {paymentDate}</div>
          <div>支払方法: {paymentMethod}</div>
        </div>
        <div>
          <div>支払先: {paymentTo}</div>
        </div>
      </div>

      {/* 金額 */}
      <div className="mb-4">
        <h3 className="text-lg font-bold">金額情報</h3>
        <div className="flex justify-between">
          <span>決定額</span>
          <span>{amount.toLocaleString()} 円</span>
        </div>
        <div className="flex justify-between">
          <span>消費税額</span>
          <span>{tax.toLocaleString()} 円</span>
        </div>
        <div className="flex justify-between">
          <span>税込金額</span>
          <span>{total.toLocaleString()} 円</span>
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-gray-300 rounded">OK</button>
        <button className="px-4 py-2 bg-gray-300 rounded">クリア</button>
        <button className="px-4 py-2 bg-gray-300 rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default PaymentDetail;
```