import React from 'react';

// 型定義
interface AmountDetailsProps {
  currentYearAmount: number;
  previousYearAmount: number;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const AmountDetails: React.FC<AmountDetailsProps> = ({
  currentYearAmount,
  previousYearAmount,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white border rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-2">当初売当額明細</h2>

      {/* 充当元と充当先表示 */}
      <div className="flex justify-between mb-4">
        <div>
          <p>充当元</p>
          <p>節: 00120080 その他雑収益</p>
          <p>細節: 0002 給水工事申込書</p>
          <p>明細: 0001 課税</p>
          <p>税区分: 課税</p>
          <p>消費税コード: 05</p>
        </div>
        <div>
          <p>充当先</p>
          <p>節: 0021G01 2 報酬（受）</p>
          <p>細節: 0001 工事検定員報酬</p>
          <p>明細: 0003 不課税</p>
          <p>税区分: 不課税</p>
          <p>消費税コード: </p>
        </div>
      </div>

      {/* 当年度充当額 */}
      <div className="mb-4">
        <p className="font-bold">当年度充当額</p>
        <div className="flex">
          <span className="w-1/2 bg-blue-100 p-2">{currentYearAmount}</span>
          <span className="w-1/2 bg-blue-100 p-2">{currentYearAmount}</span>
        </div>
      </div>

      {/* 前年度充当額 */}
      <div className="mb-4">
        <p className="font-bold">前年度充当額</p>
        <div className="flex">
          <span className="w-1/2 bg-gray-100 p-2">{previousYearAmount}</span>
          <span className="w-1/2 bg-gray-100 p-2">{previousYearAmount}</span>
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md"
        >
          クリア
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default AmountDetails;