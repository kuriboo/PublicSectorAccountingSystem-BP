import React from 'react';

type FormProps = {
  year: string;
  departmentRangeStart: string;
  departmentRangeEnd: string;
  isDepartmentOutput: boolean;
  onDepartmentOutputChange: (value: boolean) => void;
  checkedOptions: {
    budgetCategory: boolean;
    scheduleOrder: boolean;
  };
  onOptionChange: (option: 'budgetCategory' | 'scheduleOrder', value: boolean) => void;
};

const ReportForm: React.FC<FormProps> = ({
  year,
  departmentRangeStart,
  departmentRangeEnd,
  isDepartmentOutput,
  onDepartmentOutputChange,
  checkedOptions,
  onOptionChange,
}) => {
  return (
    <div className="p-5 bg-white rounded shadow-lg">
      <div className="mb-4">
        <label className="text-lg font-bold">年度</label>
        <input
          type="text"
          value={year}
          className="border ml-2 p-1"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="font-bold">所属別出力</label>
        <div className="ml-2">
          <label>
            <input
              type="radio"
              checked={isDepartmentOutput}
              onChange={() => onDepartmentOutputChange(true)}
            />
            する
          </label>
          <label className="ml-4">
            <input
              type="radio"
              checked={!isDepartmentOutput}
              onChange={() => onDepartmentOutputChange(false)}
            />
            しない
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="font-bold">所属</label>
        <div className="flex items-center ml-2">
          <input
            type="text"
            value={departmentRangeStart}
            className="border p-1 w-20"
            readOnly
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={departmentRangeEnd}
            className="border p-1 w-20"
            readOnly
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="font-bold">出力区分</label>
        <div className="ml-2">
          <label>
            <input
              type="checkbox"
              checked={checkedOptions.budgetCategory}
              onChange={(e) => onOptionChange('budgetCategory', e.target.checked)}
            />
            予算科目別
          </label>
          <label className="ml-4">
            <input
              type="checkbox"
              checked={checkedOptions.scheduleOrder}
              onChange={(e) => onOptionChange('scheduleOrder', e.target.checked)}
            />
            予定・負担番号順
          </label>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">OK</button>
        <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded ml-2">クリア</button>
        <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded ml-2">終了</button>
      </div>
    </div>
  );
};

export default ReportForm;