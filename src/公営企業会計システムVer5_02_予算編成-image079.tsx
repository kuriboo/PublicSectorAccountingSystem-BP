import React from 'react';

// TypeScriptの型定義
interface CalculationComponentProps {
  fiscalYear: string;
  budgetType: string;
  reviewCount: number;
}

// 再利用可能なコンポーネント
const CalculationComponent: React.FC<CalculationComponentProps> = ({
  fiscalYear,
  budgetType,
  reviewCount,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg">
      {/* タイトル */}
      <div className="bg-blue-100 p-2 rounded text-lg font-bold text-gray-900">
        予算収支区分別総合計: 課税売上割合算定
      </div>
      
      {/* 範囲指定セクション */}
      <div className="mt-4 border p-4 bg-white rounded">
        <h2 className="font-semibold">範囲指定</h2>
        <p>会計年度: {fiscalYear}</p>
        <p>予算編成区分: {budgetType}</p>
        <p>最終査定値: 査定額 {reviewCount} 回</p>
      </div>
      
      {/* 処理概要セクション */}
      <div className="mt-4 border p-4 bg-white rounded">
        <h2 className="font-semibold">処理概要</h2>
        <ul className="list-disc ml-5">
          <li>収入区分別総合計を算出します。</li>
          <li>課税売上割合を算定します。</li>
          <li>全額控除が適用可能か判定します。</li>
        </ul>
      </div>
      
      {/* 仕入控除額の計算方法セクション */}
      <div className="mt-4 border p-4 bg-white rounded">
        <h2 className="font-semibold">仕入控除額の計算方法</h2>
        <p>全額控除: 未判定</p>
      </div>
      
      {/* ボタン */}
      <div className="flex justify-end space-x-4 mt-4">
        <button className="bg-gray-300 p-2 rounded">OK</button>
        <button className="bg-gray-300 p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default CalculationComponent;

// 使用例:
// <CalculationComponent fiscalYear="令和03年度" budgetType="当初予算" reviewCount={1} />
