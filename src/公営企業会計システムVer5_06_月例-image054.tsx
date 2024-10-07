import React from 'react';

type ReportFormProps = {
  startDate: string;
  endDate: string;
  startAccountCode: string;
  endAccountCode: string;
  onSubmit: () => void;
  onClear: () => void;
};

const ReportForm: React.FC<ReportFormProps> = ({
  startDate,
  endDate,
  startAccountCode,
  endAccountCode,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-6 bg-gray-50 rounded-md">
      <h2 className="text-center text-lg font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="block mb-2">作表日</label>
        <div className="flex space-x-2">
          <input
            type="text"
            defaultValue={startDate}
            className="border border-gray-300 p-2 rounded"
          />
          <span className="p-2">〜</span>
          <input
            type="text"
            defaultValue={endDate}
            className="border border-gray-300 p-2 rounded"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">仕訳科目</label>
        <div className="flex space-x-2">
          <input
            type="text"
            defaultValue={startAccountCode}
            className="border border-gray-300 p-2 rounded"
          />
          <span className="p-2">〜</span>
          <input
            type="text"
            defaultValue={endAccountCode}
            className="border border-gray-300 p-2 rounded"
          />
        </div>
      </div>
      <div className="mb-6">
        <span className="block mb-2">作表区分</span>
        <div className="flex space-x-4">
          <label>
            <input type="radio" name="category" className="mr-2" />
            節
          </label>
          <label>
            <input type="radio" name="category" className="mr-2" />
            細節
          </label>
          <label>
            <input type="radio" name="category" className="mr-2" />
            明細
          </label>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
