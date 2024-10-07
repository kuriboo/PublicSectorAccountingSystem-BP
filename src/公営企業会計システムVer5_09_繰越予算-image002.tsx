import React from 'react';

type BudgetCheckFormProps = {
  yearOptions: string[]; // 年度のオプション
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const BudgetCheckForm: React.FC<BudgetCheckFormProps> = ({
  yearOptions,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">予算残額チェック表作成</h2>
      <div className="mb-4">
        <label htmlFor="year" className="font-semibold">
          年度
        </label>
        <select
          id="year"
          className="ml-2 border p-1 rounded"
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              平成{year}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <span className="font-semibold mr-2">所属別出力</span>
        <input type="radio" id="do" name="groupOutput" className="mr-1" />
        <label htmlFor="do" className="mr-4">する</label>
        <input type="radio" id="doNot" name="groupOutput" className="mr-1" />
        <label htmlFor="doNot">しない</label>
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <label className="font-semibold">所属</label>
          <input
            type="text"
            placeholder="000000"
            className="border p-1 rounded mx-2"
          />
          <span>~</span>
          <input
            type="text"
            placeholder="999999"
            className="border p-1 rounded mx-2"
          />
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onFinish}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetCheckForm;
