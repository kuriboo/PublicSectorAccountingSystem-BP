import React from 'react';

// TypeScript interface for props
interface ExecutionPlanProps {
  totalBudget: number;
  plannedDate: string;
  plannedRate: number;
  plannedAmount: number;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const ExecutionPlan: React.FC<ExecutionPlanProps> = ({
  totalBudget,
  plannedDate,
  plannedRate,
  plannedAmount,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">税込予算額</h2>
      <div className="text-2xl mb-8">{totalBudget.toLocaleString()} 円</div>

      <div className="border p-4 mb-4">
        <h3 className="text-lg">執行予定</h3>
        <div className="mb-2">
          <label className="block mb-1">予定日</label>
          <input
            type="text"
            value={plannedDate}
            className="w-full p-2 border"
            readOnly
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">予定率</label>
          <input
            type="text"
            value={`${plannedRate.toFixed(2)} %`}
            className="w-full p-2 border"
            readOnly
          />
        </div>
        <div>
          <label className="block mb-1">予定額</label>
          <input
            type="text"
            value={plannedAmount.toLocaleString()}
            className="w-full p-2 border"
            readOnly
          />
        </div>
      </div>

      <div className="flex justify-around">
        <button
          className="bg-gray-300 px-4 py-2"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="bg-gray-300 px-4 py-2"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-gray-300 px-4 py-2"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ExecutionPlan;