import React from 'react';

type BudgetComponentProps = {
  budgetSection: string;
  budgetDetail: string;
  taxType: string;
  prevAmount: number;
  newAmount: number;
  difference: number;
  taxPercentage: number;
  prevTaxAmount: number;
  newTaxAmount: number;
  budgetInfo: {
    currentBudget: number;
    accumulatedObligation: number;
    remainingObligation: number;
    accumulatedPlan: number;
    remainingPlan: number;
  };
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BudgetComponent: React.FC<BudgetComponentProps> = ({
  budgetSection,
  budgetDetail,
  taxType,
  prevAmount,
  newAmount,
  difference,
  taxPercentage,
  prevTaxAmount,
  newTaxAmount,
  budgetInfo,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <div className="grid grid-cols-2 gap-4">
        {/* Budget Section and Details */}
        <div>
          <h3 className="font-bold">予算科目</h3>
          <p>{`予算節: ${budgetSection}`}</p>
          <p>{`予算細節: ${budgetSection}`}</p>
          <p>{`予算明細: ${budgetDetail}`}</p>
          <h4 className="mt-2 font-bold">税区分</h4>
          <p>{taxType}</p>
        </div>

        {/* Budget Information */}
        <div>
          <h3 className="font-bold">予算残情報</h3>
          <p>{`予算現額: ${budgetInfo.currentBudget.toLocaleString()}`}</p>
          <p>{`負担累計: ${budgetInfo.accumulatedObligation.toLocaleString()}`}</p>
          <p>{`負担残額: ${budgetInfo.remainingObligation.toLocaleString()}`}</p>
          <p>{`予定累計: ${budgetInfo.accumulatedPlan.toLocaleString()}`}</p>
          <p>{`予定残額: ${budgetInfo.remainingPlan.toLocaleString()}`}</p>
        </div>
      </div>

      {/* Adjustment Table */}
      <div className="mt-4">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">変更前</th>
              <th className="border border-gray-300 p-2">変更後</th>
              <th className="border border-gray-300 p-2">差額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">{prevAmount.toLocaleString()}</td>
              <td className="border border-gray-300 p-2">{newAmount.toLocaleString()}</td>
              <td className="border border-gray-300 p-2">{difference.toLocaleString()}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">{prevTaxAmount.toLocaleString()}</td>
              <td className="border border-gray-300 p-2">{newTaxAmount.toLocaleString()}</td>
              <td className="border border-gray-300 p-2">{(newTaxAmount - prevTaxAmount).toLocaleString()}</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">{taxPercentage.toFixed(2)} %</td>
              <td className="border border-gray-300 p-2">{taxPercentage.toFixed(2)} %</td>
              <td className="border border-gray-300 p-2">-</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white rounded-md">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded-md">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded-md">キャンセル</button>
      </div>
    </div>
  );
};

export default BudgetComponent;
```