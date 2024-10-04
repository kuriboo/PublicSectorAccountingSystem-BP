```tsx
import React from 'react';

interface ExecutionPlanProps {
  fiscalYear: string;
  section: string;
  subSection: string;
  detail: string;
  taxIncludedBudget: number;
  reservingRate: number;
  reservingAmount: number;
  schedules: {
    month: string;
    rate: number;
    amount: number;
  }[];
  onEdit: () => void;
  onCreatePlan: () => void;
  onClear: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const ExecutionPlan: React.FC<ExecutionPlanProps> = ({
  fiscalYear,
  section,
  subSection,
  detail,
  taxIncludedBudget,
  reservingRate,
  reservingAmount,
  schedules,
  onEdit,
  onCreatePlan,
  onClear,
  onCancel,
  onConfirm,
}) => {
  return (
    <div className="p-4 bg-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div>年度: {fiscalYear}</div>
          <div>節: {section}</div>
          <div>細節: {subSection}</div>
          <div>明細: {detail}</div>
        </div>
        <div>
          <div>税込予算額</div>
          <div className="text-right">{taxIncludedBudget.toLocaleString()} 円</div>
        </div>
      </div>

      <button onClick={onEdit} className="bg-gray-300 text-black px-4 py-2 rounded mb-4">
        編集
      </button>

      <div className="border p-4 mb-4">
        <div className="mb-2">執行計画準備項目</div>
        <div className="flex items-center mb-2">
          <input type="radio" id="individual" name="equalDivision" />
          <label htmlFor="individual" className="ml-2">個別設定</label>
          <input type="radio" id="equal" name="equalDivision" className="ml-4" checked />
          <label htmlFor="equal" className="ml-2">均等</label>
        </div>
        <div>保留率: {reservingRate}%</div>
        <div>保留額: {reservingAmount.toLocaleString()} 円</div>

        <button onClick={onCreatePlan} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          予定作成
        </button>
      </div>

      <table className="w-full mb-4 text-left border">
        <thead>
          <tr>
            <th>予定月</th>
            <th>予定率</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule, index) => (
            <tr key={index}>
              <td>{schedule.month}</td>
              <td>{schedule.rate}</td>
              <td>{schedule.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between">
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onConfirm} className="bg-gray-300 text-black px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onCancel} className="bg-gray-300 text-black px-4 py-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ExecutionPlan;
```