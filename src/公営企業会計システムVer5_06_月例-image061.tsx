import React from "react";

type BudgetFormProps = {
  startDate: string;
  endDate: string;
  budgetFrom: string;
  budgetTo: string;
  showDetail: boolean;
  handleSubmission: () => void;
  handleClear: () => void;
  handleClose: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  startDate,
  endDate,
  budgetFrom,
  budgetTo,
  showDetail,
  handleSubmission,
  handleClear,
  handleClose,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md w-1/2 mx-auto">
      <h2 className="text-xl font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block mb-1">集計日付</label>
        <input
          type="text"
          value={startDate}
          className="border rounded px-2 py-1 w-full"
          readOnly
        />
        <input
          type="text"
          value={endDate}
          className="border rounded px-2 py-1 w-full mt-2"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">予算科目</label>
        <input
          type="text"
          value={budgetFrom}
          className="border rounded px-2 py-1 w-full"
          readOnly
        />
        <input
          type="text"
          value={budgetTo}
          className="border rounded px-2 py-1 w-full mt-2"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">作表区分</label>
        <div>
          <label className="mr-4">
            <input
              type="radio"
              checked={!showDetail}
              readOnly
            />{" "}
            細節
          </label>
          <label>
            <input
              type="radio"
              checked={showDetail}
              readOnly
            />{" "}
            明細
          </label>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleSubmission}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={handleClose}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
