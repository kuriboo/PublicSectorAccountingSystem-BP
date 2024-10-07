// components/YearValueForm.tsx
import React from 'react';

interface YearValueFormProps {
  selectedYear: number;
  onYearChange: (year: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const YearValueForm: React.FC<YearValueFormProps> = ({
  selectedYear,
  onYearChange,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white border border-gray-300 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">新年度単価一覧表</h2>
      <div className="mb-4">
        <label htmlFor="year" className="mr-2">
          年度
        </label>
        <select
          id="year"
          value={selectedYear}
          onChange={(e) => onYearChange(Number(e.target.value))}
          className="border rounded-md p-1"
        >
          <option value={30}>平成30</option>
          <option value={29}>平成29</option>
          {/* More options can be added here */}
        </select>
      </div>
      <div className="mb-4">
        <fieldset className="mb-2">
          <legend>帳票種別</legend>
          <label className="mr-4">
            <input type="radio" name="reportType" /> 単価コード別
          </label>
          <label>
            <input type="radio" name="reportType" /> 所属別
          </label>
        </fieldset>
        <fieldset className="mb-2">
          <legend>範囲指定</legend>
          <div className="flex items-center mb-2">
            <button className="mr-2 bg-purple-500 text-white rounded p-1">
              所属
            </button>
            <input
              type="text"
              className="border rounded-md p-1 mx-2"
              defaultValue="0000000"
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              className="border rounded-md p-1"
              defaultValue="9999999"
            />
          </div>
          <div className="flex items-center">
            <button className="mr-2 bg-purple-500 text-white rounded p-1">
              単価性質
            </button>
            <input
              type="text"
              className="border rounded-md p-1 mx-2"
              defaultValue="0000000"
            />
            <span className="mx-2">~</span>
            <input
              type="text"
              className="border rounded-md p-1"
              defaultValue="9999999"
            />
          </div>
        </fieldset>
      </div>
      <div className="mb-4">
        <label className="mr-4">
          <input type="checkbox" /> 単価率区分
        </label>
        <label className="mr-4">
          <input type="checkbox" defaultChecked /> 率計算対象
        </label>
        <label>
          <input type="checkbox" defaultChecked /> 改定済
        </label>
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={onSubmit} className="bg-gray-300 p-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 p-2 rounded">
          クリア
        </button>
        <button onClick={onClose} className="bg-gray-300 p-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default YearValueForm;
```