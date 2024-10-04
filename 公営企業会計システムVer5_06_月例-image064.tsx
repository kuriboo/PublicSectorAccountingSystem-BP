import React from 'react';

// 定義プロパティの型
interface ReportFormProps {
  startDate: string;
  endDate: string;
  department: string;
  budgetItem: string;
  includeSummary: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

// コンポーネント
const ReportForm: React.FC<ReportFormProps> = ({
  startDate,
  endDate,
  department,
  budgetItem,
  includeSummary,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 border rounded bg-white max-w-md mx-auto">
      <h1 className="text-lg font-bold mb-2">範囲指定</h1>
      <div className="mb-4">
        <label className="block mb-1">集計日付</label>
        <input
          type="date"
          value={startDate}
          className="border rounded px-2 py-1 w-full"
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">時点</label>
        <input
          type="date"
          value={endDate}
          className="border rounded px-2 py-1 w-full"
          readOnly
        />
      </div>
      <div className="mb-4 flex items-center">
        <label className="mr-2">所属</label>
        <input
          type="text"
          value={department}
          className="border rounded px-2 py-1 flex-1"
          readOnly
        />
      </div>
      <div className="mb-4 flex items-center">
        <label className="mr-2">予算科目</label>
        <input
          type="text"
          value={budgetItem}
          className="border rounded px-2 py-1 flex-1"
          readOnly
        />
      </div>
      <div className="mb-4 flex items-center">
        <label className="mr-2">作表区分</label>
        <label className="mr-4">
          <input
            type="radio"
            checked={includeSummary}
            className="mr-1"
            readOnly
          />
          する
        </label>
        <label>
          <input
            type="radio"
            checked={!includeSummary}
            className="mr-1"
            readOnly
          />
          しない
        </label>
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white py-1 px-4 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white py-1 px-4 rounded">
          クリア
        </button>
        <button onClick={onClose} className="bg-red-500 text-white py-1 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default ReportForm;