// Import necessary libraries and types
import React from 'react';

// Define props type
interface ReportFormProps {
  collectionMonth: string;
  onCollectionMonthChange: (value: string) => void;
  comparisonTarget: string;
  onComparisonTargetChange: (value: string) => void;
  paymentItem: string;
  onPaymentItemChange: (value: string) => void;
  amountType: string;
  onAmountTypeChange: (value: string) => void;
  segment: string;
  onSegmentChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

// Create the functional component
const ReportForm: React.FC<ReportFormProps> = ({
  collectionMonth,
  onCollectionMonthChange,
  comparisonTarget,
  onComparisonTargetChange,
  paymentItem,
  onPaymentItemChange,
  amountType,
  onAmountTypeChange,
  segment,
  onSegmentChange,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="flex flex-col p-4 bg-gray-100 border border-gray-200 rounded-md">
      <h2 className="text-lg font-bold mb-4">範囲指定</h2>
      
      {/* Collection Month Input */}
      <div className="flex items-center mb-2">
        <label className="w-1/3">集計年月</label>
        <input
          type="text"
          value={collectionMonth}
          onChange={(e) => onCollectionMonthChange(e.target.value)}
          className="border p-2 rounded w-2/3"
        />
      </div>

      {/* Comparison Target Radio Buttons */}
      <div className="flex items-center mb-2">
        <label className="w-1/3">比較対象</label>
        <div className="flex flex-col">
          <label>
            <input
              type="radio"
              value="前年度当月決算"
              checked={comparisonTarget === '前年度当月決算'}
              onChange={() => onComparisonTargetChange('前年度当月決算')}
            />
            前年度当月決算
          </label>
          <label>
            <input
              type="radio"
              value="当月予算"
              checked={comparisonTarget === '当月予算'}
              onChange={() => onComparisonTargetChange('当月予算')}
            />
            当月予算
          </label>
        </div>
      </div>

      {/* Payment Item Radio Buttons */}
      <div className="flex items-center mb-2">
        <label className="w-1/3">支払科目</label>
        <div className="flex flex-col">
          <label>
            <input
              type="radio"
              value="負担額"
              checked={paymentItem === '負担額'}
              onChange={() => onPaymentItemChange('負担額')}
            />
            負担額
          </label>
          <label>
            <input
              type="radio"
              value="執行額"
              checked={paymentItem === '執行額'}
              onChange={() => onPaymentItemChange('執行額')}
            />
            執行額
          </label>
        </div>
      </div>

      {/* Amount Type Radio Buttons */}
      <div className="flex items-center mb-2">
        <label className="w-1/3">金額印字</label>
        <div className="flex flex-col">
          <label>
            <input
              type="radio"
              value="税抜"
              checked={amountType === '税抜'}
              onChange={() => onAmountTypeChange('税抜')}
            />
            税抜
          </label>
          <label>
            <input
              type="radio"
              value="税込"
              checked={amountType === '税込'}
              onChange={() => onAmountTypeChange('税込')}
            />
            税込
          </label>
        </div>
      </div>

      {/* Segment Input */}
      <div className="flex items-center mb-4">
        <label className="w-1/3">セグメント</label>
        <input
          type="text"
          value={segment}
          onChange={(e) => onSegmentChange(e.target.value)}
          className="border p-2 rounded w-2/3"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
