```tsx
// BudgetComponent.tsx
import React from 'react';

// TypeScriptの型定義
interface BudgetComponentProps {
  fiscalYear: string; // 会計年度
  budgetCategory: string; // 予算編成区分
  finalReviewValue: string; // 最終査定値
  reviewCount: number; // 査定回数
  adjustmentRequirement?: string; // 調整要否
  reservedIncomeAllocation?: string; // 特定収入割合
}

const BudgetComponent: React.FC<BudgetComponentProps> = ({
  fiscalYear,
  budgetCategory,
  finalReviewValue,
  reviewCount,
  adjustmentRequirement = '未実施',
  reservedIncomeAllocation = '未実施',
}) => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h1 className="text-lg font-bold text-blue-800 mb-4">予算特定収入割合算定</h1>
      <div className="border p-4 mb-4">
        <h2 className="text-md font-semibold text-blue-800 mb-2">範囲指定</h2>
        <div className="mb-1">
          <span className="font-semibold">会計年度: </span>{fiscalYear}
        </div>
        <div className="mb-1">
          <span className="font-semibold">予算編成区分: </span>{budgetCategory}
        </div>
        <div>
          <span className="font-semibold">最終査定値: </span>{finalReviewValue}
          <span className="ml-2">{reviewCount} 回</span>
        </div>
      </div>
      <div className="border p-4">
        <h2 className="text-md font-semibold text-blue-800 mb-2">割合算定結果</h2>
        <div className="mb-1">
          <span className="font-semibold">特定収入による仕入控除税額の調整要否: </span>{adjustmentRequirement}
        </div>
        <div>
          <span className="font-semibold">特定収入割合: </span>{reservedIncomeAllocation}
        </div>
      </div>
    </div>
  );
};

export default BudgetComponent;
```

```tsx
// Example usage in a Next.js page
// pages/index.tsx
import React from 'react';
import BudgetComponent from '../components/BudgetComponent';

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <BudgetComponent
        fiscalYear="令和03年度"
        budgetCategory="当初予算"
        finalReviewValue="査定額"
        reviewCount={1}
      />
    </div>
  );
};

export default Home;
```

```css
/* tailwind.config.js */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```