```tsx
import React from 'react';

// コンポーネントのプロパティの型定義
type BudgetAutoProcessingProps = {
  yearOptions: string[]; // 年度のオプション
  division: string; // 予算編成区分
  onDivisionChange: (value: string) => void; // 予算編成区分変更ハンドラー
  isBudgetAsExpected: boolean; // 予算書どおりか
  onBudgetAsExpectedChange: (value: boolean) => void; // 予算書どおり変更ハンドラー
  isInitialAdjustment: boolean; // 調整額を初期化するか
  onInitialAdjustmentChange: (value: boolean) => void; // 調整額初期化変更ハンドラー
  amountType: string; // 金額種別
  onAmountTypeChange: (value: string) => void; // 金額種別変更ハンドラー
};

const BudgetAutoProcessing: React.FC<BudgetAutoProcessingProps> = ({
  yearOptions,
  division,
  onDivisionChange,
  isBudgetAsExpected,
  onBudgetAsExpectedChange,
  isInitialAdjustment,
  onInitialAdjustmentChange,
  amountType,
  onAmountTypeChange,
}) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">予算自動仕訳処理</h2>
      
      {/* 予算編成区分 */}
      <div className="mb-6">
        <h3 className="mb-2 font-medium">予算編成区分</h3>
        <div className="flex items-center mb-2">
          <label className="mr-2">年度:</label>
          <select className="border p-1" defaultValue={yearOptions[0]}>
            {yearOptions.map((year, index) => (
              <option key={index} value={year}>{year}</option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center mb-2">
          <label className="mr-2">予算編成区分:</label>
          <input 
            type="text" 
            className="border p-1"
            value={division}
            onChange={(e) => onDivisionChange(e.target.value)} 
          />
        </div>

        <div className="flex items-center mb-2">
          <label className="mr-2">回数:</label>
          <input type="text" className="border p-1 w-20" />
        </div>

        <div className="flex items-center mb-2">
          <input 
            type="checkbox" 
            checked={isBudgetAsExpected}
            onChange={(e) => onBudgetAsExpectedChange(e.target.checked)}
          />
          <label className="ml-2">予算書どおり</label>
        </div>

        <div className="flex items-center mb-4">
          <input 
            type="checkbox" 
            checked={isInitialAdjustment}
            onChange={(e) => onInitialAdjustmentChange(e.target.checked)}
          />
          <label className="ml-2">調整額を初期化する</label>
        </div>
      </div>

      {/* 金額種別 */}
      <div className="mb-6">
        <h3 className="mb-2 font-medium">金額種別</h3>
        <div className="flex items-center">
          <input 
            type="radio" 
            name="amountType" 
            value="見積要求額"
            checked={amountType === "見積要求額"}
            onChange={(e) => onAmountTypeChange(e.target.value)}
          />
          <label className="ml-2 mr-4">見積要求額</label>

          <input 
            type="radio" 
            name="amountType" 
            value="査定額"
            checked={amountType === "査定額"}
            onChange={(e) => onAmountTypeChange(e.target.value)}
          />
          <label className="ml-2">査定額</label>
        </div>
      </div>

      {/* 説明文 */}
      <div className="bg-gray-100 p-4 rounded">
        <p>「予算書どおり」を選択すると、前回に作成した予算書どおりのデータが決算見込データとして作成されます。</p>
        <p>「予算額計算」処理での内容は反映されません。</p>
      </div>

      {/* ボタン */}
      <div className="flex justify-end mt-6 space-x-3">
        <button className="bg-gray-200 text-black p-2 rounded">エラー確認</button>
        <button className="bg-purple-600 text-white p-2 rounded">OK</button>
        <button className="bg-gray-200 text-black p-2 rounded">クリア</button>
        <button className="bg-gray-200 text-black p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default BudgetAutoProcessing;
```