// components/PaymentDetail.tsx

import React from 'react';

interface PaymentDetailProps {
  year: string;
  settlementNumber: string;
  paymentCategory: string;
  burdenNumber: string;
  decisionDate: string;
  paymentDate: string;
  payer: string;
  firmName: string;
  totalAmount: number;
  tax: number;
}

const PaymentDetail: React.FC<PaymentDetailProps> = ({
  year,
  settlementNumber,
  paymentCategory,
  burdenNumber,
  decisionDate,
  paymentDate,
  payer,
  firmName,
  totalAmount,
  tax,
}) => {
  return (
    <div className="p-4 border border-gray-300">
      {/* Header Section */}
      <div className="flex justify-between mb-4">
        <div>
          <div>年度: {year}</div>
          <div>決定番号: {settlementNumber}</div>
          <div>支払種別: {paymentCategory}</div>
          <div>負担番号: {burdenNumber}</div>
        </div>
        <div>
          <div>決定処理日: {decisionDate}</div>
          <div>支払日: {paymentDate}</div>
        </div>
      </div>

      {/* Payer Information */}
      <div className="mb-4">
        <div>起案者: {payer}</div>
      </div>

      {/* Payment Summary */}
      <div className="border-t border-gray-300 pt-4">
        <div>企業名: {firmName}</div>
        <div>合計決定額: {totalAmount.toLocaleString()}</div>
        <div>消費税額: {tax.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default PaymentDetail;
```

```tsx
// pages/index.tsx

import React from 'react';
import PaymentDetail from '../components/PaymentDetail';

const Home: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <PaymentDetail
        year="令和05年"
        settlementNumber="638"
        paymentCategory="一般 (負担有)"
        burdenNumber="543"
        decisionDate="令和05年04月01日"
        paymentDate="令和05年04月01日"
        payer="高橋 太郎"
        firmName="株式会社 ぎょう"
        totalAmount={2200}
        tax={200}
      />
    </div>
  );
};

export default Home;
```

```tsx
// postcss.config.js

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

```tsx
// tailwind.config.js

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```tsx
// styles/globals.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```