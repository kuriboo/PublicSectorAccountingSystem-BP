// Import necessary libraries and types
import React, { FC, ChangeEvent, useState } from 'react';
import classNames from 'classnames';

// Define the component props using TypeScript
interface FormProps {
  fiscalYear: string;
  adjustmentNumber: number;
  adjustmentDate: string;
  obligation: string;
  summary: string;
  onFormSubmit: () => void;
}

// Define the functional component
const AdjustmentForm: FC<FormProps> = ({
  fiscalYear,
  adjustmentNumber,
  adjustmentDate,
  obligation,
  summary,
  onFormSubmit,
}) => {
  // Local state for holding form values
  const [submissionDeadline, setSubmissionDeadline] = useState<string>('');

  // Handle change of input values
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubmissionDeadline(event.target.value);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow rounded-lg">
      <h1 className="text-lg font-bold text-center mb-4">調定 増減入力</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onFormSubmit();
        }}
        className="space-y-4"
      >
        <div className="flex justify-between items-center">
          <label className="font-medium">年度:</label>
          <span>{fiscalYear}</span>
        </div>
        <div className="flex justify-between items-center">
          <label className="font-medium">調定番号:</label>
          <span>{adjustmentNumber}</span>
        </div>
        <div className="flex justify-between items-center">
          <label className="font-medium">調定日:</label>
          <span>{adjustmentDate}</span>
        </div>
        <div className="flex justify-between items-center">
          <label className="font-medium">債務者:</label>
          <span>{obligation}</span>
        </div>
        <div className="flex justify-between items-center">
          <label className="font-medium">摘要:</label>
          <span>{summary}</span>
        </div>
        <div>
          <label className="font-medium">納入期限:</label>
          <input
            type="text"
            className="form-input border border-gray-300 rounded"
            value={submissionDeadline}
            onChange={handleInputChange}
            placeholder="年_月_日"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            OK
          </button>
          <button
            type="button"
            className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
          >
            クリア
          </button>
          <button
            type="button"
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdjustmentForm;
