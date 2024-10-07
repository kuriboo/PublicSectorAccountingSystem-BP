import React from 'react';

interface PeriodSelectorProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onOkClick: () => void;
  onCancelClick: () => void;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onOkClick,
  onCancelClick,
}) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-4 rounded-lg">
      {/* Header Section */}
      <div className="bg-indigo-200 rounded-t-lg p-2 text-lg font-bold text-center">
        税区分集計
      </div>
      {/* Period Section */}
      <div className="p-4">
        <h4 className="font-bold text-indigo-600">範囲指定</h4>
        <div className="flex items-center justify-between mt-2 border p-2">
          <span className="font-bold text-indigo-800">課税期間</span>
          <input
            type="text"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="p-1 border rounded"
          />
          <span>~</span>
          <input
            type="text"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="p-1 border rounded"
          />
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-end gap-4 p-4">
        <button onClick={onOkClick} className="bg-gray-300 p-2 rounded hover:bg-gray-400">
          OK
        </button>
        <button onClick={onCancelClick} className="bg-gray-300 p-2 rounded hover:bg-gray-400">
          終了
        </button>
      </div>
    </div>
  );
};

export default PeriodSelector;
