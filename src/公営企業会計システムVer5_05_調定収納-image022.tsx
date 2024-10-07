import React from 'react';

type ReportFormProps = {
  reportDate: string;
  budgetOption: "予算科目" | "仕訳科目";
  startCode: string;
  endCode: string;
  pastDeficitMark: boolean;
  pastSurplusMark: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ReportForm: React.FC<ReportFormProps> = ({
  reportDate,
  budgetOption,
  startCode,
  endCode,
  pastDeficitMark,
  pastSurplusMark,
  onSubmit,
  onClear,
  onClose,
}) => (
  <div className="p-4 bg-gray-200 rounded">
    {/* 範囲指定 */}
    <h2 className="text-lg font-bold mb-2">範囲指定</h2>
    <div className="mb-4">
      <label className="block">
        作表日:
        <input
          type="text"
          value={reportDate}
          readOnly
          className="ml-2 p-1 border rounded"
        />
      </label>
      <div className="mt-2">
        <label>
          <input
            type="radio"
            checked={budgetOption === "予算科目"}
            readOnly
            className="mr-1"
          />
          予算科目
        </label>
        <label className="ml-4">
          <input
            type="radio"
            checked={budgetOption === "仕訳科目"}
            readOnly
            className="mr-1"
          />
          仕訳科目
        </label>
      </div>
      <div className="mt-2">
        <span>設定科目: </span>
        <input
          type="text"
          value={startCode}
          readOnly
          className="ml-2 p-1 border rounded"
        />
        <span className="mx-2">~</span>
        <input
          type="text"
          value={endCode}
          readOnly
          className="p-1 border rounded"
        />
      </div>
    </div>

    {/* 過年度損印字 */}
    <div className="mb-4">
      <h3 className="font-bold">過年度損印字</h3>
      <label>
        <input
          type="radio"
          checked={!pastDeficitMark}
          readOnly
          className="mr-1"
        />
        無し
      </label>
      <label className="ml-4">
        <input
          type="radio"
          checked={pastDeficitMark}
          readOnly
          className="mr-1"
        />
        有り
      </label>
    </div>

    {/* 過年度益印字 */}
    <div className="mb-4">
      <h3 className="font-bold">過年度益印字</h3>
      <label>
        <input
          type="radio"
          checked={!pastSurplusMark}
          readOnly
          className="mr-1"
        />
        無し
      </label>
      <label className="ml-4">
        <input
          type="radio"
          checked={pastSurplusMark}
          readOnly
          className="mr-1"
        />
        有り
      </label>
    </div>

    {/* Buttons */}
    <div className="flex justify-end mt-4">
      <button
        onClick={onSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow mr-2"
      >
        OK
      </button>
      <button
        onClick={onClear}
        className="bg-gray-500 text-white px-4 py-2 rounded shadow mr-2"
      >
        クリア
      </button>
      <button
        onClick={onClose}
        className="bg-red-500 text-white px-4 py-2 rounded shadow"
      >
        終了
      </button>
    </div>
  </div>
);

export default ReportForm;
```