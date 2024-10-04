```tsx
import { FC } from 'react';

// TypeScriptの型定義
interface InputFormProps {
  fiscalYear: number;
  date: string;
  summary: string;
  payerInfo: {
    id: number;
    name: string;
  };
  amounts: {
    targetAmount: number;
    totalAmount: number;
    taxAmount: number;
    specialIncome: number;
  };
}

// コンポーネントの定義
const InputForm: FC<InputFormProps> = ({
  fiscalYear,
  date,
  summary,
  payerInfo,
  amounts,
}) => {
  return (
    <div className="p-4 bg-white border rounded-md shadow-md">
      {/* 年度と日付の表示 */}
      <div className="mb-4">
        <span className="block text-lg">年度: {fiscalYear}</span>
        <span className="block text-lg">収納日: {date}</span>
      </div>

      {/* 概要の表示 */}
      <div className="mb-4">
        <span className="block text-lg">摘要: {summary}</span>
      </div>

      {/* 債務者情報の表示 */}
      <div className="mb-4">
        <span className="block text-lg">債務者ID: {payerInfo.id}</span>
        <span className="block text-lg">債務者名: {payerInfo.name}</span>
      </div>

      {/* 金額情報の表示 */}
      <div className="mb-4">
        <div className="flex justify-between">
          <span>解除対象収納額: </span>
          <span>{amounts.targetAmount.toLocaleString()}円</span>
        </div>
        <div className="flex justify-between">
          <span>合計調定金額: </span>
          <span>{amounts.totalAmount.toLocaleString()}円</span>
        </div>
        <div className="flex justify-between">
          <span>合計消費税額: </span>
          <span>{amounts.taxAmount.toLocaleString()}円</span>
        </div>
        <div className="flex justify-between">
          <span>合計特定収入: </span>
          <span>{amounts.specialIncome.toLocaleString()}円</span>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
```