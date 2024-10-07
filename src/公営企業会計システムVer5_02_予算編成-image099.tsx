import React from 'react';

// 型定義
type AccountingComponentProps = {
  title: string;
  budgetBefore: number;
  budgetAfter: number;
  currentAmount: number;
  onConfirm: () => void;
  onCancel: () => void;
};

const AccountingComponent: React.FC<AccountingComponentProps> = ({
  title,
  budgetBefore,
  budgetAfter,
  currentAmount,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white border rounded-md shadow-md">
      {/* タイトル */}
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      
      {/* 予算情報 */}
      <div className="mb-4">
        <h3 className="font-semibold">予算情報</h3>
        <div className="flex justify-between">
          <span>補正前予算: {budgetBefore.toLocaleString()}円</span>
          <span>補正後予算: {budgetAfter.toLocaleString()}円</span>
          <span>今回補正額: {currentAmount.toLocaleString()}円</span>
        </div>
      </div>
      
      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onConfirm}
        >
          行確定
        </button>
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          onClick={onCancel}
        >
          行キャンセル
        </button>
      </div>
    </div>
  );
};

export default AccountingComponent;
