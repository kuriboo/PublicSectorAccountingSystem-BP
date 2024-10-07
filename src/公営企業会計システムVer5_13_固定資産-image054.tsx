import React from 'react';

type ReportFormProps = {
  fiscalYear: string;
  onFiscalYearChange: (value: string) => void;
  summaryType: string;
  onSummaryTypeChange: (value: string) => void;
  endDate: string;
  onEndDateChange: (value: string) => void;
};

const ReportForm: React.FC<ReportFormProps> = ({
  fiscalYear,
  onFiscalYearChange,
  summaryType,
  onSummaryTypeChange,
  endDate,
  onEndDateChange,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">財源別予測固定資産明細表作成</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          作表年月
          <input
            type="text"
            value={fiscalYear}
            onChange={(e) => onFiscalYearChange(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
      <div className="mb-4">
        <div className="block text-sm font-medium text-gray-700">作表区分</div>
        <div className="mt-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="summary"
              checked={summaryType === 'summary'}
              onChange={(e) => onSummaryTypeChange(e.target.value)}
              className="form-radio"
            />
            <span className="ml-2">総括表</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              value="details"
              checked={summaryType === 'details'}
              onChange={(e) => onSummaryTypeChange(e.target.value)}
              className="form-radio"
            />
            <span className="ml-2">明細表</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          作表年月
          <input
            type="date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
      <div className="flex justify-end space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600">
          OK
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md shadow hover:bg-gray-400">
          クリア
        </button>
        <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow hover:bg-red-600">
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
