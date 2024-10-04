```tsx
import React from 'react';

// Props type definition
type FormProps = {
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
  startDate: string;
  endDate: string;
  budgetCodeStart: string;
  budgetCodeEnd: string;
  displayOption: 'day' | 'section' | 'detailed';
  carryOver: boolean;
};

// Reusable form component
const BudgetForm: React.FC<FormProps> = ({
  onSubmit,
  onClear,
  onExit,
  startDate,
  endDate,
  budgetCodeStart,
  budgetCodeEnd,
  displayOption,
  carryOver,
}) => {
  return (
    <div className="p-5 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block text-sm mb-2">集計日付</label>
        <input
          type="text"
          value={startDate}
          readOnly
          className="w-full p-2 border rounded"
        />
        <span className="mx-2">〜</span>
        <input
          type="text"
          value={endDate}
          readOnly
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-2">予算科目</label>
        <input
          type="text"
          value={budgetCodeStart}
          readOnly
          className="w-full p-2 border rounded"
        />
        <span className="mx-2">〜</span>
        <input
          type="text"
          value={budgetCodeEnd}
          readOnly
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-2">作表区分</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="displayOption"
              value="day"
              checked={displayOption === 'day'}
              readOnly
            />
            日
          </label>
          <label className="mr-4">
            <input
              type="radio"
              name="displayOption"
              value="section"
              checked={displayOption === 'section'}
              readOnly
            />
            細節
          </label>
          <label>
            <input
              type="radio"
              name="displayOption"
              value="detailed"
              checked={displayOption === 'detailed'}
              readOnly
            />
            明細
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm mb-2">繰越</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              name="carryOver"
              value="true"
              checked={carryOver}
              readOnly
            />
            する
          </label>
          <label>
            <input
              type="radio"
              name="carryOver"
              value="false"
              checked={!carryOver}
              readOnly
            />
            しない
          </label>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={onExit}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
```