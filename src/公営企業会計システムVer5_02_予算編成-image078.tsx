import React from 'react';

type BudgetAdjustmentProps = {
  budgetYear: string;
  adjustmentCount: number;
  onSubmit: () => void;
  onCancel: () => void;
};

const BudgetAdjustment: React.FC<BudgetAdjustmentProps> = ({
  budgetYear,
  adjustmentCount,
  onSubmit,
  onCancel,
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md p-6">
      {/* Header Section */}
      <div className="text-lg font-bold border-b pb-2 mb-4">
        予算収入区分調整入力
      </div>
      
      {/* Budget Info */}
      <div className="mb-4">
        <p className="font-semibold">
          {budgetYear}年度 当初予算 第{adjustmentCount}回
        </p>
      </div>
      
      {/* Input Section */}
      <div className="flex space-x-4 mb-4">
        <input placeholder="予算科目日" className="border p-2 w-full" />
        <input placeholder="予算科目日" className="border p-2 w-full" />
      </div>
      
      {/* Table Section */}
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            <th className="border p-2">予算科目コード</th>
            <th className="border p-2">予算科目名称</th>
            <th className="border p-2">税率</th>
            <th className="border p-2">収入区分</th>
            <th className="border p-2">税抜額</th>
            <th className="border p-2">消費税額</th>
            <th className="border p-2">税込額</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample Row */}
          <tr>
            <td className="border p-2">0201 01120011001</td>
            <td className="border p-2">汚・旅費</td>
            <td className="border p-2">10.0</td>
            <td className="border p-2">その他</td>
            <td className="border p-2">50,000</td>
            <td className="border p-2">5,000</td>
            <td className="border p-2">55,000</td>
          </tr>
        </tbody>
      </table>
      
      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-6">
        <button onClick={onCancel} className="bg-gray-200 px-4 py-2">
          行キャンセル
        </button>
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2">
          OK
        </button>
      </div>
    </div>
  );
};

export default BudgetAdjustment;
