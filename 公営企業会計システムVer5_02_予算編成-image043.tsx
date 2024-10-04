```tsx
import React from 'react';

// 定義される型
interface BudgetRegistrationProps {
  title: string;
  year: string;
  center: string;
  audit: string;
  itemCode: string;
  subItemCode: string;
  detailCode: string;
  amountBeforeCorrection: number;
  consumptionTax: number;
  correctionAmount: number;
  totalAmount: number;
}

const BudgetRegistration: React.FC<BudgetRegistrationProps> = ({
  title,
  year,
  center,
  audit,
  itemCode,
  subItemCode,
  detailCode,
  amountBeforeCorrection,
  consumptionTax,
  correctionAmount,
  totalAmount,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold text-center bg-blue-200 p-2">{title}</h1>
      <div className="flex justify-between my-4">
        <div>
          <p>{year} 年度</p>
          <p>{center}</p>
          <p>査定: {audit}</p>
        </div>
        <div>
          <p>項目コード: {itemCode}</p>
          <p>サブ項目コード: {subItemCode}</p>
          <p>詳細コード: {detailCode}</p>
        </div>
        <div>
          <p>補正前: {amountBeforeCorrection}</p>
          <p>消費税: {consumptionTax}</p>
          <p>補正後: {correctionAmount}</p>
          <p>合計: {totalAmount}</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button className="btn">登録</button>
        <button className="btn">修正</button>
        <button className="btn">行制除</button>
      </div>
    </div>
  );
};

// Button用の簡易スタイル
const Btn: React.FC<{ label: string }> = ({ label }) => (
  <button className="py-2 px-4 bg-gray-300 hover:bg-gray-400 rounded-md">
    {label}
  </button>
);

// このコンポーネントを他の場所で利用するためにエクスポート
export default BudgetRegistration;
```