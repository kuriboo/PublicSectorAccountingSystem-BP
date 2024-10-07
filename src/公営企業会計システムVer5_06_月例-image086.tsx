import React from 'react';

type Props = {
  period: string;
  comparisonType: 'priorYear' | 'currentBudget';
  taxOption: 'included' | 'excluded';
  onPeriodChange: (value: string) => void;
  onComparisonChange: (value: 'priorYear' | 'currentBudget') => void;
  onTaxOptionChange: (value: 'included' | 'excluded') => void;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const MonthlyReportForm: React.FC<Props> = ({
  period,
  comparisonType,
  taxOption,
  onPeriodChange,
  onComparisonChange,
  onTaxOptionChange,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">月別損益計算書作成</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">作表月</label>
        <input
          type="text"
          value={period}
          onChange={(e) => onPeriodChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">範囲指定</label>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="priorYear"
              checked={comparisonType === 'priorYear'}
              onChange={() => onComparisonChange('priorYear')}
              className="mr-2"
            />
            前年度当月決算と比較
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="currentBudget"
              checked={comparisonType === 'currentBudget'}
              onChange={() => onComparisonChange('currentBudget')}
              className="mr-2"
            />
            当月予算と比較
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">税区分</label>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="excluded"
              checked={taxOption === 'excluded'}
              onChange={() => onTaxOptionChange('excluded')}
              className="mr-2"
            />
            税抜
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="included"
              checked={taxOption === 'included'}
              onChange={() => onTaxOptionChange('included')}
              className="mr-2"
            />
            税込
          </label>
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          クリア
        </button>
        <button
          onClick={onFinish}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default MonthlyReportForm;
