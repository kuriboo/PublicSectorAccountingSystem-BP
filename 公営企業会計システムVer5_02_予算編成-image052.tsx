```tsx
import React from 'react';

type BudgetFormProps = {
  // 年度の値と変更イベントを受け取る
  yearValue: string;
  onYearChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  
  // 科目分類の選択値とその変更イベント
  subjectCategory: string;
  onSubjectCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  // 予算編成区分の選択値とその変更イベント
  budgetType: string;
  onBudgetTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  
  // 回数の選択値とその変更イベント
  timesValue: string;
  onTimesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  // 最終査定値の選択値とその変更イベント
  finalReviewValue: string;
  onFinalReviewChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  // 出力対象基準の選択値とその変更イベント
  outputTarget: string;
  onOutputTargetChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  // 各ボタンのクリックイベント
  onExportClick: () => void;
  onClearClick: () => void;
  onExitClick: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  yearValue,
  onYearChange,
  subjectCategory,
  onSubjectCategoryChange,
  budgetType,
  onBudgetTypeChange,
  timesValue,
  onTimesChange,
  finalReviewValue,
  onFinalReviewChange,
  outputTarget,
  onOutputTargetChange,
  onExportClick,
  onClearClick,
  onExitClick
}) => (
  <div className="container mx-auto p-4">
    <h2 className="text-lg font-bold mb-4">財源充当書CSV作成</h2>

    {/* 年度選択 */}
    <div className="mb-4">
      <label className="block mb-2">年度</label>
      <select value={yearValue} onChange={onYearChange} className="border p-2 rounded">
        <option value="平成31">平成31</option>
        {/* 他の選択肢を追加可能 */}
      </select>
    </div>

    {/* 科目選択 */}
    <div className="mb-4">
      <label className="block mb-2">科目選択</label>
      {/* それぞれの分類に対するラジオボタン */}
      <div>
        <label className="mr-4">
          <input
            type="radio"
            value="3条"
            checked={subjectCategory === "3条"}
            onChange={onSubjectCategoryChange}
          /> 3条
        </label>
        <label>
          <input
            type="radio"
            value="4条"
            checked={subjectCategory === "4条"}
            onChange={onSubjectCategoryChange}
          /> 4条
        </label>
      </div>
    </div>

    {/* 予算編成 */}
    <div className="mb-4">
      <label className="block mb-2">予算編成</label>
      <div className="flex">
        <select value={budgetType} onChange={onBudgetTypeChange} className="border p-2 rounded">
          <option value="補正予算">補正予算</option>
          {/* 他の選択肢を追加可能 */}
        </select>
      </div>
      <div className="mt-2 flex">
        <input
          type="number"
          value={timesValue}
          onChange={onTimesChange}
          className="border p-2 rounded w-16"
        />
        <span className="ml-2">第一回補正予算</span>
      </div>
    </div>

    {/* 最終査定値 */}
    <div className="mb-4">
      <label className="block mb-2">最終査定値</label>
      <div>
        <label className="mr-4">
          <input
            type="radio"
            value="見積要求額"
            checked={finalReviewValue === "見積要求額"}
            onChange={onFinalReviewChange}
          /> 見積要求額
        </label>
        <label>
          <input
            type="radio"
            value="査定額"
            checked={finalReviewValue === "査定額"}
            onChange={onFinalReviewChange}
          /> 査定額
        </label>
        <input
          type="number"
          value={finalReviewValue}
          onChange={onFinalReviewChange}
          className="border p-2 rounded w-16 ml-2"
        />
      </div>
    </div>

    {/* 出力対象基準 */}
    <div className="mb-4">
      <label className="block mb-2">出力対象基準</label>
      <div>
        <label className="mr-4">
          <input
            type="radio"
            value="全ての科目を対象"
            checked={outputTarget === "全ての科目を対象"}
            onChange={onOutputTargetChange}
          /> 全ての科目を対象
        </label>
        <label>
          <input
            type="radio"
            value="充当のない科目は出力対象外"
            checked={outputTarget === "充当のない科目は出力対象外"}
            onChange={onOutputTargetChange}
          /> 充当のない科目は出力対象外
        </label>
      </div>
    </div>

    {/* ボタン */}
    <div className="flex justify-end space-x-2">
      <button onClick={onExportClick} className="bg-blue-500 text-white px-4 py-2 rounded">CSV出力</button>
      <button onClick={onClearClick} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
      <button onClick={onExitClick} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
    </div>
  </div>
);

export default BudgetForm;
```