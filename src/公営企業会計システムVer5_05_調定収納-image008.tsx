// Import necessary modules from React and Next.js
import React from 'react';

// Define prop types for the component
interface FormComponentProps {
  yearOptions: string[];
  selectedYear: string;
  onYearChange: (year: string) => void;
  summaryRangeStart: string;
  summaryRangeEnd: string;
  debtorCodeStart: string;
  debtorCodeEnd: string;
  adjustmentDate: string;
  deadlineStart: string;
  deadlineEnd: string;
  includeSummary: boolean;
  includeDeadline: boolean;
  onRangeChange: (start: string, end: string) => void;
  onIncludeSummaryChange: (include: boolean) => void;
  onIncludeDeadlineChange: (include: boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

// Reusable form component
const FormComponent: React.FC<FormComponentProps> = ({
  yearOptions,
  selectedYear,
  onYearChange,
  summaryRangeStart,
  summaryRangeEnd,
  debtorCodeStart,
  debtorCodeEnd,
  adjustmentDate,
  deadlineStart,
  deadlineEnd,
  includeSummary,
  includeDeadline,
  onRangeChange,
  onIncludeSummaryChange,
  onIncludeDeadlineChange,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">調定とりまとめ伝票 - 一覧表作成</h2>
      
      {/* Year Selection */}
      <div className="mb-4">
        <label className="block mb-1">年度:</label>
        <select 
          value={selectedYear} 
          onChange={(e) => onYearChange(e.target.value)} 
          className="border rounded p-2 w-full"
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Summary Range */}
      <div className="mb-4">
        <label className="block mb-1">とりまとめ範囲:</label>
        <input 
          type="text" 
          value={summaryRangeStart} 
          onChange={(e) => onRangeChange(e.target.value, summaryRangeEnd)} 
          className="border rounded p-2 mr-2"
        />
        <input 
          type="text" 
          value={summaryRangeEnd} 
          onChange={(e) => onRangeChange(summaryRangeStart, e.target.value)} 
          className="border rounded p-2"
        />
      </div>

      {/* Include Summary */}
      <div className="mb-4">
        <label className="flex items-center">
          <input 
            type="checkbox" 
            checked={includeSummary} 
            onChange={(e) => onIncludeSummaryChange(e.target.checked)} 
            className="mr-2"
          />
          とりまとめ無も含む
        </label>
      </div>

      {/* Debtor Code Range */}
      <div className="mb-4">
        <label className="block mb-1">債務者:</label>
        <input 
          type="text" 
          value={debtorCodeStart} 
          onChange={(e) => onRangeChange(e.target.value, debtorCodeEnd)} 
          className="border rounded p-2 mr-2"
        />
        <input 
          type="text" 
          value={debtorCodeEnd} 
          onChange={(e) => onRangeChange(debtorCodeStart, e.target.value)} 
          className="border rounded p-2"
        />
      </div>

      {/* Adjustment Date */}
      <div className="mb-4">
        <label className="block mb-1">調定日:</label>
        <input 
          type="text" 
          value={adjustmentDate} 
          readOnly 
          className="border rounded p-2 w-full"
        />
      </div>

      {/* Deadline Range */}
      <div className="mb-4">
        <label className="block mb-1">納入期限:</label>
        <input 
          type="text" 
          value={deadlineStart} 
          onChange={(e) => onRangeChange(e.target.value, deadlineEnd)} 
          className="border rounded p-2 mr-2"
        />
        <input 
          type="text" 
          value={deadlineEnd} 
          onChange={(e) => onRangeChange(deadlineStart, e.target.value)} 
          className="border rounded p-2"
        />
      </div>

      {/* Include Deadline */}
      <div className="mb-4">
        <label className="flex items-center">
          <input 
            type="checkbox" 
            checked={includeDeadline} 
            onChange={(e) => onIncludeDeadlineChange(e.target.checked)} 
            className="mr-2"
          />
          納入期限無も含む
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white p-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-black p-2 rounded">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default FormComponent;
