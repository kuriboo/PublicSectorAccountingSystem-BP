```tsx
import React from 'react';

// TypeScript interface for component props
interface ReportFormProps {
  date: string;
  title: string;
  pageNumber: number;
  showPrintOption: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const ReportForm: React.FC<ReportFormProps> = ({
  date,
  title,
  pageNumber,
  showPrintOption,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">作表日</label>
        <input
          type="text"
          value={date}
          readOnly
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">タイトル</label>
        <input
          type="text"
          value={title}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">頁印字</label>
        <div>
          <label className="inline-flex items-center mr-2">
            <input
              type="radio"
              className="form-radio"
              name="printOption"
              checked={showPrintOption}
              readOnly
            />
            <span className="ml-2">する</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="printOption"
              checked={!showPrintOption}
              readOnly
            />
            <span className="ml-2">しない</span>
          </label>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">開始頁</label>
        <input
          type="number"
          value={pageNumber}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={onSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
```