import React from 'react';
import { useState } from 'react';

type BudgetRequestFormProps = {
  fiscalYear: string;
  budgetClass: string;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const BudgetRequestForm: React.FC<BudgetRequestFormProps> = ({
  fiscalYear,
  budgetClass,
  onSubmit,
  onClear,
  onExit,
}) => {
  const [budgetType, setBudgetType] = useState('1');
  const [section, setSection] = useState('');
  const [category, setCategory] = useState('');
  const [includeNew, setIncludeNew] = useState(false);

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">予算見積要求書作成</h2>

      <div className="mb-4">
        <label className="block text-gray-700">年度</label>
        <input
          type="text"
          value={fiscalYear}
          readOnly
          className="mt-1 block w-full border py-2 px-3 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">予算種別区分</label>
        <select
          value={budgetClass}
          className="mt-1 block w-full border py-2 px-3 rounded"
          onChange={(e) => setBudgetType(e.target.value)}
        >
          <option value="1">当初予算</option>
          <option value="2">補正予算</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">所属</label>
        <input
          type="text"
          value={section}
          onChange={(e) => setSection(e.target.value)}
          className="mt-1 block w-full border py-2 px-3 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">予算科目</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full border py-2 px-3 rounded"
        />
      </div>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          checked={includeNew}
          onChange={(e) => setIncludeNew(e.target.checked)}
          className="mr-2"
        />
        <label className="text-gray-700">新規</label>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-gray-300 text-black px-4 py-2 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetRequestForm;