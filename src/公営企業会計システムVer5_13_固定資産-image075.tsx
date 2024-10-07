import React from 'react';

type FormProps = {
  creationDate: string;
  departmentStart: string;
  departmentEnd: string;
  categoryStart: string;
  categoryEnd: string;
  outputDivision: string;
  yearStart: string;
  yearEnd: string;
  onOk: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const ReportForm: React.FC<FormProps> = ({
  creationDate,
  departmentStart,
  departmentEnd,
  categoryStart,
  categoryEnd,
  outputDivision,
  yearStart,
  yearEnd,
  onOk,
  onClear,
  onEnd,
}) => {
  return (
    <div className="max-w-xl p-4 bg-gray-100 shadow-md rounded-md">
      {/* Header */}
      <h2 className="text-xl font-bold mb-4">部門別管種延長の調作成</h2>

      {/* Creation Date */}
      <div className="flex items-center mb-2">
        <label className="mr-2">作表年月日</label>
        <input
          type="text"
          value={creationDate}
          readOnly
          className="border p-1 rounded"
        />
      </div>

      {/* Output Division */}
      <div className="flex items-center mb-2">
        <label className="mr-2">出力区分</label>
        <div className="flex items-center">
          <input
            type="radio"
            name="outputDivision"
            value="通常"
            checked={outputDivision === '通常'}
            readOnly
          />
          <span className="ml-1">通常</span>
          <input
            type="radio"
            name="outputDivision"
            value="年度別"
            checked={outputDivision === '年度別'}
            readOnly
            className="ml-4"
          />
          <span className="ml-1">年度別</span>
        </div>
        <label className="ml-4">取得年度</label>
        <input
          type="text"
          value={yearStart}
          readOnly
          className="border p-1 rounded w-16 mx-1"
        />
        <span>~</span>
        <input
          type="text"
          value={yearEnd}
          readOnly
          className="border p-1 rounded w-16 mx-1"
        />
      </div>

      {/* Range Specification */}
      <div className="border-t mt-4 pt-4">
        <div className="flex items-center mb-2">
          <label className="mr-2">部門</label>
          <input
            type="text"
            value={departmentStart}
            readOnly
            className="border p-1 rounded w-16"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={departmentEnd}
            readOnly
            className="border p-1 rounded w-16"
          />
        </div>
        <div className="flex items-center">
          <label className="mr-2">管種規格</label>
          <input
            type="text"
            value={categoryStart}
            readOnly
            className="border p-1 rounded w-16"
          />
          <span className="mx-2">~</span>
          <input
            type="text"
            value={categoryEnd}
            readOnly
            className="border p-1 rounded w-16"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-4">
        <button onClick={onOk} className="bg-gray-200 p-2 rounded mx-1">OK</button>
        <button onClick={onClear} className="bg-gray-200 p-2 rounded mx-1">クリア</button>
        <button onClick={onEnd} className="bg-gray-200 p-2 rounded mx-1">終了</button>
      </div>
    </div>
  );
};

export default ReportForm;
