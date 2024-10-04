```tsx
import React from 'react';

// プロパティの型定義
interface NotificationFormProps {
  transmissionDate: string;
  accountNumber: string;
  personInCharge: string;
  dueDate: string;
  summary: string;
  budgetList: Array<{
    item: string;
    details: string;
    amount: string;
  }>;
  taxRate: number;
  year: string;
  documentCount: number;
  incomeAmount: number;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const NotificationForm: React.FC<NotificationFormProps> = ({
  transmissionDate,
  accountNumber,
  personInCharge,
  dueDate,
  summary,
  budgetList,
  taxRate,
  year,
  documentCount,
  incomeAmount,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="mb-4">
        <label className="block text-gray-700">伝票日付</label>
        <input
          type="text"
          value={transmissionDate}
          readOnly
          className="w-full p-2 border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">仕様</label>
        <input
          type="text"
          value={accountNumber}
          readOnly
          className="w-full p-2 border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">値務者</label>
        <input
          type="text"
          value={personInCharge}
          readOnly
          className="w-full p-2 border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">納入期限</label>
        <input
          type="text"
          value={dueDate}
          readOnly
          className="w-full p-2 border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">摘要</label>
        <textarea
          value={summary}
          readOnly
          className="w-full p-2 border border-gray-300"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">予算</label>
        <table className="w-full table-auto border border-collapse border-gray-400">
          <thead>
            <tr>
              <th className="px-4 py-2 border">借方科目</th>
              <th className="px-4 py-2 border">借方細節</th>
              <th className="px-4 py-2 border">借方明細</th>
            </tr>
          </thead>
          <tbody>
            {budgetList.map((budget, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{budget.item}</td>
                <td className="px-4 py-2 border">{budget.details}</td>
                <td className="px-4 py-2 border">{budget.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">消費税率</label>
        <input
          type="text"
          value={`${taxRate}%`}
          readOnly
          className="w-full p-2 border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <input
          type="text"
          value={year}
          readOnly
          className="w-full p-2 border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">件数</label>
        <input
          type="text"
          value={documentCount}
          readOnly
          className="w-full p-2 border border-gray-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">収入金額</label>
        <input
          type="text"
          value={incomeAmount.toLocaleString()}
          readOnly
          className="w-full p-2 border border-gray-300"
        />
      </div>

      <div className="mt-6 flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 text-white bg-gray-500 hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="px-4 py-2 text-white bg-red-500 hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
}

export default NotificationForm;
```