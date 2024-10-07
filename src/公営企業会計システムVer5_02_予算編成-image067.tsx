import React from 'react';

// Define the type for the component props
type PlanningRegistrationProps = {
  fiscalYear: string;
  projectType: string;
  measureType: string;
  startYear: string;
  endYear: string;
  code: string;
  budgetDetails: {
    currentYearBudget: number;
    nextYearPlan: number;
  };
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
};

const PlanningRegistration: React.FC<PlanningRegistrationProps> = ({
  fiscalYear,
  projectType,
  measureType,
  startYear,
  endYear,
  code,
  budgetDetails,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">事業実施計画登録</h2>

      {/* Fiscal Year Selection */}
      <div className="mb-2">
        <label className="mr-2">次期会計年度:</label>
        <span>{fiscalYear}</span>
      </div>

      {/* Project and Measure Selection */}
      <div className="mb-2 flex space-x-4">
        <div>
          <label className="mr-2">事業:</label>
          <span>{projectType}</span>
        </div>
        <div>
          <label className="mr-2">施策:</label>
          <span>{measureType}</span>
        </div>
      </div>

      {/* Start and End Year Selection */}
      <div className="mb-2 flex space-x-4">
        <div>
          <label className="mr-2">開始年度:</label>
          <span>{startYear}</span>
        </div>
        <div>
          <label className="mr-2">終了年度:</label>
          <span>{endYear}</span>
        </div>
      </div>

      {/* Budget Information */}
      <div className="border p-2 mb-4">
        <h3 className="font-bold mb-2">財政全体</h3>
        <p>決算額: {budgetDetails.currentYearBudget}（千円）</p>
        <p>次年度以降の計画額: {budgetDetails.nextYearPlan}（千円）</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={onConfirm}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-lg"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default PlanningRegistration;