import React from 'react';

type BudgetComponentProps = {
  budgetSection: string;
  budgetSubsection: string;
  budgetDetail: string;
  expenseAmount: number;
  taxRate: number;
  incomeCategory: string;
  taxAmount: number;
  description: string;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const BudgetComponent: React.FC<BudgetComponentProps> = ({
  budgetSection,
  budgetSubsection,
  budgetDetail,
  expenseAmount,
  taxRate,
  incomeCategory,
  taxAmount,
  description,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      {/* Budget Details Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h2 className="font-bold mb-2">予算項目</h2>
          <div className="mb-2">
            <label>予算節:</label>
            <input
              type="text"
              value={budgetSection}
              disabled
              className="border ml-2 p-1"
            />
          </div>
          <div className="mb-2">
            <label>予算細節:</label>
            <input
              type="text"
              value={budgetSubsection}
              disabled
              className="border ml-2 p-1"
            />
          </div>
          <div className="mb-2">
            <label>予算明細:</label>
            <input
              type="text"
              value={budgetDetail}
              disabled
              className="border ml-2 p-1"
            />
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-2">予算残情報</h2>
          <div>
            <p>予算現額: <span>1,237,000</span></p>
            <p>負担累計: <span>70,000</span></p>
            <p>負担残額: <span>1,167,000</span></p>
            <p>予定累計: <span>0</span></p>
            <p>予定残額: <span>1,167,000</span></p>
          </div>
        </div>
      </div>

      {/* Tax and Expense Section */}
      <div className="mb-4">
        <div className="mb-2">
          <label>決定額:</label>
          <input
            type="number"
            value={expenseAmount}
            disabled
            className="border ml-2 p-1"
          />
        </div>
        <div className="mb-2">
          <label>税抜額:</label>
          <input
            type="number"
            value={taxAmount}
            disabled
            className="border ml-2 p-1"
          />
        </div>
        <div className="mb-2">
          <label>消費税率:</label>
          <input
            type="text"
            value={`${taxRate}%`}
            disabled
            className="border ml-2 p-1"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-4">
        <label>摘要:</label>
        <input
          type="text"
          value={description}
          className="border w-full p-1"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2">
        <button onClick={onConfirm} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default BudgetComponent;
