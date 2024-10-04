// Import necessary React and Next.js modules
import React, { useState } from 'react';

// Define TypeScript types for props
type BudgetReportFormProps = {
  onSubmit: (startDate: string, endDate: string, type: string) => void;
};

// Main form component
const BudgetReportForm: React.FC<BudgetReportFormProps> = ({
  onSubmit
}) => {
  // State for form inputs
  const [reportType, setReportType] = useState<string>('monthlyOrder');
  const [startDate, setStartDate] = useState<string>('000000000');
  const [endDate, setEndDate] = useState<string>('999999999');

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">予算流用充用明細表作成</h2>
      
      <div className="mb-4">
        <label className="block mb-1">
          <input
            type="radio"
            name="reportType"
            value="monthlyOrder"
            checked={reportType === 'monthlyOrder'}
            onChange={(e) => setReportType(e.target.value)}
          /> 予算流用充用明細表1（流用充年月日順に作表）
        </label>
        <label className="block">
          <input
            type="radio"
            name="reportType"
            value="budgetOrder"
            checked={reportType === 'budgetOrder'}
            onChange={(e) => setReportType(e.target.value)}
          /> 予算流用充用明細表2（予算科目順に作表）
        </label>
      </div>

      <div className="mb-4">
        <div className="border p-2 mb-2">
          <label className="block font-medium">範囲指定</label>
          <label className="block mb-1">作表日: 平成29年08月04日</label>
          <div className="flex space-x-2">
            <div>
              <input
                type="text"
                className="border rounded p-1"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <span>~</span>
            <div>
              <input
                type="text"
                className="border rounded p-1"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => onSubmit(startDate, endDate, reportType)}
        >
          OK
        </button>
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded"
          onClick={() => {
            setStartDate('000000000');
            setEndDate('999999999');
            setReportType('monthlyOrder');
          }}
        >
          クリア
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetReportForm;