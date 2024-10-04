```tsx
// BudgetMaster.tsx
import React, { FC } from 'react';

type BudgetMasterProps = {
  year: string;
  budgetType: string;
  onDisplayClick: () => void;
  onUpdateClick: () => void;
  onNextClick: () => void;
  onPreviousClick: () => void;
};

const BudgetMaster: FC<BudgetMasterProps> = ({
  year,
  budgetType,
  onDisplayClick,
  onUpdateClick,
  onNextClick,
  onPreviousClick,
}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h1 className="text-xl font-bold">予算科目マスタ</h1>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium">年度</label>
          <input
            value={year}
            className="border rounded w-full p-2"
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm font-medium">予算種別</label>
          <input
            value={budgetType}
            className="border rounded w-full p-2"
            readOnly
          />
        </div>

        <div className="col-span-2 flex items-center justify-around">
          <button
            onClick={onDisplayClick}
            className="bg-blue-500 text-white font-semibold p-2 rounded"
          >
            表示
          </button>
          <button
            onClick={onUpdateClick}
            className="bg-green-500 text-white font-semibold p-2 rounded"
          >
            更新
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onPreviousClick}
          className="bg-gray-300 text-black p-2 rounded"
        >
          前データ
        </button>
        <button
          onClick={onNextClick}
          className="bg-gray-300 text-black p-2 rounded"
        >
          次データ
        </button>
      </div>
    </div>
  );
};

export default BudgetMaster;
```

```css
/* Tailwind CSS can be imported in a global CSS file or set up with PostCSS */
```