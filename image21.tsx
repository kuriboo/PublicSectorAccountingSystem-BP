```tsx
// components/OrderForm.tsx
import React from 'react';

// TypeScriptの型定義
interface OrderFormProps {
  decisionNo: string;
  burdenNo: string;
  decisionDate: string;
  paymentDate: string;
  chargeAmount: number;
  details: string;
}

// Next.js + Tailwind CSSで再利用可能なコンポーネントを作成
const OrderForm: React.FC<OrderFormProps> = ({
  decisionNo,
  burdenNo,
  decisionDate,
  paymentDate,
  chargeAmount,
  details,
}) => {
  return (
    <div className="border p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold text-center mb-4">負担行為伺兼命令書</h1>
      <div className="grid grid-cols-2 gap-2">
        <div>決定No.: {decisionNo}</div>
        <div>負担No.: {burdenNo}</div>
        <div>決定処理日: {decisionDate}</div>
        <div>支払予定日: {paymentDate}</div>
      </div>

      <hr className="my-4" />

      <div>以下のとおり支出してよろしいか。</div>
      <div className="mt-2">決裁金額: ¥{chargeAmount.toLocaleString()}円</div>

      <hr className="my-4" />

      <div className="font-bold mb-1">詳細:</div>
      <div className="text-gray-700">{details}</div>
    </div>
  );
};

export default OrderForm;
```