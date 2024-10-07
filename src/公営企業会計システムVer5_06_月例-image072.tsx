import React from 'react';

type ReportInputProps = {
  startDate: string;
  endDate: string;
  startAccountCode: string;
  endAccountCode: string;
  onClear: () => void;
  onSubmit: () => void;
};

const ReportInput: React.FC<ReportInputProps> = ({
  startDate,
  endDate,
  startAccountCode,
  endAccountCode,
  onClear,
  onSubmit,
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-md w-1/2 mx-auto border shadow-sm">
      <h2 className="text-xl font-medium mb-4">範囲指定</h2>
      <div className="flex flex-col space-y-4">
        {/* Date Range Inputs */}
        <div className="flex items-center space-x-2">
          <label className="text-md font-semibold">作表年月</label>
          <input
            type="text"
            value={startDate}
            className="border border-gray-300 rounded-md p-2 text-center"
            readOnly
          />
          <span>～</span>
          <input
            type="text"
            value={endDate}
            className="border border-gray-300 rounded-md p-2 text-center"
            readOnly
          />
        </div>
        {/* Account Code Inputs */}
        <div className="flex items-center space-x-2">
          <label className="text-md font-semibold">事業科目</label>
          <input
            type="text"
            value={startAccountCode}
            className="border border-gray-300 rounded-md p-2 text-center"
            readOnly
          />
          <span>～</span>
          <input
            type="text"
            value={endAccountCode}
            className="border border-gray-300 rounded-md p-2 text-center"
            readOnly
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        {/* Action Buttons */}
        <button
          onClick={onClear}
          className="bg-gray-200 text-black py-2 px-4 rounded-md hover:bg-gray-300"
        >
          クリア
        </button>
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ReportInput;
```