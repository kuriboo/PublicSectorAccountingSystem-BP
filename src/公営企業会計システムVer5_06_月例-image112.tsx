import React from 'react';

// Type definitions for the component props
interface BudgetReportFormProps {
  creationDate: string;
  selectedReportType: number;
  department: string;
  budgetFrom: string;
  budgetTo: string;
  displayDivision: number;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const BudgetReportForm: React.FC<BudgetReportFormProps> = ({
  creationDate,
  selectedReportType,
  department,
  budgetFrom,
  budgetTo,
  displayDivision,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4">
      {/* Report Type Selection */}
      <div className="mb-4 p-2 border">
        <span className="block font-bold mb-2">作表種別</span>
        <div>
          <label>
            <input
              type="radio"
              name="reportType"
              value={1}
              checked={selectedReportType === 1}
              className="mr-2"
            />
            予算執行状況表1（予定/負担）
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="reportType"
              value={2}
              checked={selectedReportType === 2}
              className="mr-2"
            />
            予算執行状況表2（負担/執行）
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="reportType"
              value={3}
              checked={selectedReportType === 3}
              className="mr-2"
            />
            予算執行状況表3（執行内訳額）
          </label>
        </div>
      </div>

      {/* Range Specification */}
      <div className="mb-4 p-2 border">
        <span className="block font-bold mb-2">範囲指定</span>
        <div className="mb-2">
          <label>
            作表日
            <input
              type="text"
              value={creationDate}
              className="ml-2 p-1 border"
              readOnly
            />
          </label>
        </div>
        <div className="mb-2">
          <label>
            所属
            <input
              type="text"
              value={department}
              className="ml-2 p-1 border"
              readOnly
            />
          </label>
        </div>
        <div className="mb-2">
          <label>
            予算科目
            <input
              type="text"
              value={budgetFrom}
              className="ml-2 p-1 border"
              placeholder="00000000"
            />
            ~
            <input
              type="text"
              value={budgetTo}
              className="ml-2 p-1 border"
              placeholder="99999999"
            />
          </label>
        </div>
        <div>
          <label>
            作表区分
            <input type="radio" name="displayDivision" value={0} checked={displayDivision === 0} className="ml-2 mr-1" />
            目
            <input type="radio" name="displayDivision" value={1} checked={displayDivision === 1} className="ml-2 mr-1" />
            節
            <input type="radio" name="displayDivision" value={2} checked={displayDivision === 2} className="ml-2 mr-1" />
            細節
            <input type="radio" name="displayDivision" value={3} checked={displayDivision === 3} className="ml-2 mr-1" />
            明細
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <button onClick={onSubmit} className="p-2 bg-gray-200 border">CSV出力</button>
        <button onClick={onClear} className="p-2 bg-gray-200 border">クリア</button>
        <button onClick={onExit} className="p-2 bg-gray-200 border">終了</button>
      </div>
    </div>
  );
};

export default BudgetReportForm;
```