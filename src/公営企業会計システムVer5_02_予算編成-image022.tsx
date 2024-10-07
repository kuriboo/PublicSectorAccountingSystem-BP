import React from 'react';

// TypeScriptの型定義
type RequestProps = {
  year: string;
  center: string;
  section: string;
  detail: string;
  subDetail: string;
  prevYearAmount: number;
  currentYearAmount: number;
  onRegister: () => void;
  onEdit: () => void;
  onExecute: () => void;
};

// Next.js + TypeScriptのコンポーネント
const RequestComponent: React.FC<RequestProps> = ({
  year,
  center,
  section,
  detail,
  subDetail,
  prevYearAmount,
  currentYearAmount,
  onRegister,
  onEdit,
  onExecute
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-bold">当初事業別科目別内訳要求登録</h2>
        <p>
          {year}年度 {center}
        </p>
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex flex-col">
          <span>節: {section}</span>
          <span>細節: {detail}</span>
          <span>明細: {subDetail}</span>
        </div>
        <div className="flex flex-col">
          <span>前年額: {prevYearAmount.toLocaleString()} 千円</span>
          <span>今年度額: {currentYearAmount.toLocaleString()} 千円</span>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onRegister}
        >
          登録
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={onEdit}
        >
          訂正
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onExecute}
        >
          行制除
        </button>
      </div>
    </div>
  );
};

export default RequestComponent;
```