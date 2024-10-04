```tsx
// components/OrderForm.tsx

import React from 'react';

type OrderFormProps = {
  decisionNumber: string;
  burdenNumber: string;
  decisionDate: string;
  paymentDate: string;
  budgetAmount: number;
  expenseDetails: string[];
};

const OrderForm: React.FC<OrderFormProps> = ({
  decisionNumber,
  burdenNumber,
  decisionDate,
  paymentDate,
  budgetAmount,
  expenseDetails
}) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-4 border border-gray-300">
      <h1 className="text-xl font-bold text-center mb-4">
        負担行為伺兼命令書
      </h1>
      <div className="mb-2">
        <div className="flex justify-between">
          <span>決定No. {decisionNumber}</span>
          <span>負担No. {burdenNumber}</span>
        </div>
        <div className="flex justify-between">
          <span>決定処理日: {decisionDate}</span>
          <span>支払予定日: {paymentDate}</span>
        </div>
      </div>
      <div className="border-t border-b my-4 py-2">
        {expenseDetails.map((detail, index) => (
          <p key={index} className="flex justify-between">
            <span>{detail}</span>
          </p>
        ))}
      </div>
      <div className="text-right font-bold">
        決裁金額: {budgetAmount.toLocaleString()}円
      </div>
    </div>
  );
};

export default OrderForm;
```

```tsx
// pages/index.tsx

import React from 'react';
import OrderForm from '../components/OrderForm';

const Home: React.FC = () => {
  return (
    <OrderForm
      decisionNumber="27-000451-07"
      burdenNumber="27-000413"
      decisionDate="平成28年3月27日"
      paymentDate="平成28年3月27日"
      budgetAmount={1000000}
      expenseDetails={[
        '002 事業費用',
        '01 営業費用',
        '  01 ○○事業',
        '    13 印刷製本費',
        '      0001 印刷製本費',
        '        0001 電子書籍費'
      ]}
    />
  );
};

export default Home;
```