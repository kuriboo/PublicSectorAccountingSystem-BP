```tsx
import React from 'react';

interface FormProps {
  yearMonth: string;
  onYearMonthChange: (value: string) => void;
  comparisonDivision: string;
  onComparisonDivisionChange: (value: string) => void;
  paymentCategory: string;
  onPaymentCategoryChange: (value: string) => void;
  amountUnit: string;
  onAmountUnitChange: (value: string) => void;
  amountNotation: string;
  onAmountNotationChange: (value: string) => void;
  segment: string;
  onSegmentChange: (value: string) => void;
  segmentOptions: string[];
  onSubmit: () => void;
  onClear: () => void;
}

const CustomForm: React.FC<FormProps> = ({
  yearMonth,
  onYearMonthChange,
  comparisonDivision,
  onComparisonDivisionChange,
  paymentCategory,
  onPaymentCategoryChange,
  amountUnit,
  onAmountUnitChange,
  amountNotation,
  onAmountNotationChange,
  segment,
  onSegmentChange,
  segmentOptions,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">集計年月</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={yearMonth}
          onChange={(e) => onYearMonthChange(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">比較区分</label>
        <div>
          <label className="mr-2">
            <input
              type="radio"
              name="comparisonDivision"
              value="前年"
              checked={comparisonDivision === '前年'}
              onChange={(e) => onComparisonDivisionChange(e.target.value)}
            />
            前年度当月決算
          </label>
          <label className="ml-2">
            <input
              type="radio"
              name="comparisonDivision"
              value="当月"
              checked={comparisonDivision === '当月'}
              onChange={(e) => onComparisonDivisionChange(e.target.value)}
            />
            当月予算
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">支払科目</label>
        <div>
          <label className="mr-2">
            <input
              type="radio"
              name="paymentCategory"
              value="負担額"
              checked={paymentCategory === '負担額'}
              onChange={(e) => onPaymentCategoryChange(e.target.value)}
            />
            負担額
          </label>
          <label className="ml-2">
            <input
              type="radio"
              name="paymentCategory"
              value="執行額"
              checked={paymentCategory === '執行額'}
              onChange={(e) => onPaymentCategoryChange(e.target.value)}
            />
            執行額
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">金額単位</label>
        <div>
          <label className="mr-2">
            <input
              type="radio"
              name="amountUnit"
              value="円単位"
              checked={amountUnit === '円単位'}
              onChange={(e) => onAmountUnitChange(e.target.value)}
            />
            円単位
          </label>
          <label className="ml-2">
            <input
              type="radio"
              name="amountUnit"
              value="千円"
              checked={amountUnit === '千円'}
              onChange={(e) => onAmountUnitChange(e.target.value)}
            />
            千円単位
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">金額印字</label>
        <div>
          <label className="mr-2">
            <input
              type="radio"
              name="amountNotation"
              value="税抜"
              checked={amountNotation === '税抜'}
              onChange={(e) => onAmountNotationChange(e.target.value)}
            />
            税抜
          </label>
          <label className="ml-2">
            <input
              type="radio"
              name="amountNotation"
              value="税込"
              checked={amountNotation === '税込'}
              onChange={(e) => onAmountNotationChange(e.target.value)}
            />
            税込
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">セグメント</label>
        <select
          className="w-full p-2 border rounded"
          value={segment}
          onChange={(e) => onSegmentChange(e.target.value)}
        >
          {segmentOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end space-x-3">
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-gray-600 text-white rounded"
          onClick={onSubmit}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CustomForm;
```