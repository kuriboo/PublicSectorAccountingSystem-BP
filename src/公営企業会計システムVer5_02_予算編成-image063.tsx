import React from 'react';

interface BudgetFormProps {
  fiscalYear?: string;
  budgetType?: string;
  budgetCategory?: string;
  round?: number;
  onSubmit: () => void;
  onClear: () => void;
  onEnd: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  fiscalYear = '令和05',
  budgetType = '当初予算',
  budgetCategory = '1',
  round = 0,
  onSubmit,
  onClear,
  onEnd,
}) => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-gray-50 rounded-md shadow-md">
      <div className="flex items-center mb-4">
        <label className="w-1/3">年度</label>
        <span className="ml-2">{fiscalYear}</span>
        <input type="number" className="ml-2 p-1 border" />
      </div>

      <div className="flex items-center mb-4">
        <label className="w-1/3">予算種区分</label>
        <select defaultValue={budgetCategory} className="ml-2 p-1 border">
          <option value="1">{budgetType}</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="flex items-center mb-4">
        <label className="w-1/3">回数</label>
        <input
          type="number"
          defaultValue={round}
          className="ml-2 p-1 border"
        />
      </div>

      <div className="flex items-center mb-4">
        <label className="w-1/3">帳票種別</label>
        <div className="flex space-x-4">
          <label><input type="radio" name="formType" defaultChecked /> 科目別</label>
          <label><input type="radio" name="formType" /> 所属別</label>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <label className="w-1/3">最終査定値</label>
        <div className="flex space-x-4">
          <label><input type="radio" name="finalAmount" defaultChecked /> 見積要求額</label>
          <label><input type="radio" name="finalAmount" /> 査定額</label>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <label className="w-1/3">科目レベル</label>
        <div className="flex space-x-2">
          <label><input type="radio" name="level" defaultChecked /> 目</label>
          <label><input type="radio" name="level" /> 節</label>
          <label><input type="radio" name="level" /> 細節</label>
          <label><input type="radio" name="level" /> 明細</label>
        </div>
      </div>

      {/* Additional fields can be added here */}

      <div className="flex justify-between mt-6">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          CSV出力
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onEnd} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
