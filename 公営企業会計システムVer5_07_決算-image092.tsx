```tsx
import React from 'react';

// Define types for the component props
interface ReportFormProps {
  year: string;
  createdDate: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
  className?: string;
}

const ReportForm: React.FC<ReportFormProps> = ({
  year,
  createdDate,
  onSubmit,
  onClear,
  onClose,
  className,
}) => {
  return (
    <div className={`p-6 bg-white shadow-md rounded-md ${className}`}>
      {/* Title */}
      <h1 className="text-lg font-bold mb-4">決算報告書</h1>

      {/* Year Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">年度</label>
        <select className="border rounded-md p-2 outline-none">
          <option>{year}</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Radio Buttons */}
      <div className="mb-4">
        <label className="mr-4 font-medium">作表区分</label>
        <input type="radio" id="3jou" name="kbn" className="mr-1" />
        <label htmlFor="3jou">3条</label>
        <input type="radio" id="4jou" name="kbn" className="mx-2" />
        <label htmlFor="4jou">4条</label>
        <input type="radio" id="both" name="kbn" className="mx-2" defaultChecked />
        <label htmlFor="both">両方</label>
      </div>

      {/* Input Fields */}
      <div className="mb-4">
        <label className="block font-medium mb-1">3条サブタイトル</label>
        <input type="text" className="border rounded-md p-2 w-full" defaultValue="1. 収益的収入および支出" />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">収益サブタイトル</label>
          <input type="text" className="border rounded-md p-2 w-full" defaultValue="収益" />
        </div>
        <div>
          <label className="block font-medium mb-1">費用サブタイトル</label>
          <input type="text" className="border rounded-md p-2 w-full" defaultValue="費用" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">4条サブタイトル</label>
        <input type="text" className="border rounded-md p-2 w-full" defaultValue="2. 投資的収入および支出" />
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">収入サブタイトル</label>
          <input type="text" className="border rounded-md p-2 w-full" defaultValue="収入" />
        </div>
        <div>
          <label className="block font-medium mb-1">支出サブタイトル</label>
          <input type="text" className="border rounded-md p-2 w-full" defaultValue="支出" />
        </div>
      </div>

      {/* Summary */}

      <div className="mb-4">
        <strong className="block font-medium mb-1">処理概要</strong>
        <p className="p-2 bg-gray-100 border rounded-md text-sm">
          指定した年度の決算報告書を各款別に作成します。
        </p>
      </div>

      {/* Collection Date */}
      <div className="mb-4 text-sm">
        <strong>集計日時: </strong>{createdDate}
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400">
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
```