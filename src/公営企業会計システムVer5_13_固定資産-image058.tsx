import React from 'react';

type ReportFormProps = {
  date: string;
  startYear: number;
  yearsCount: number;
  onDateChange: (date: string) => void;
  onStartYearChange: (year: number) => void;
  onYearsCountChange: (count: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ReportForm: React.FC<ReportFormProps> = ({
  date,
  startYear,
  yearsCount,
  onDateChange,
  onStartYearChange,
  onYearsCountChange,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <form className="p-4 bg-white shadow-md">
      <h2 className="text-lg font-bold mb-4">会計別予測固定資産明細表作成</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium">作表年月日</label>
        <input
          type="text"
          value={date}
          onChange={(e) => onDateChange(e.target.value)}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">作表開始年度</label>
        <input
          type="number"
          value={startYear}
          onChange={(e) => onStartYearChange(parseInt(e.target.value, 10))}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">作表年数</label>
        <input
          type="number"
          value={yearsCount}
          onChange={(e) => onYearsCountChange(parseInt(e.target.value, 10))}
          className="mt-1 p-2 border rounded w-full"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          type="button"
          onClick={onClear}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </form>
  );
};

export default ReportForm;
