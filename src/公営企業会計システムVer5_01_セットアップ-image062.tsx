// components/ReportForm.tsx
import React from 'react';

type ReportFormProps = {
  year: number; // 初期年度を指定
  startNumber: number; // 初期範囲開始番号
  endNumber: number; // 初期範囲終了番号
  onSubmit: (year: number, startNumber: number, endNumber: number) => void; // 提出時のコールバック関数
  onClear: () => void; // クリアボタンのコールバック関数
};

const ReportForm: React.FC<ReportFormProps> = ({
  year,
  startNumber,
  endNumber,
  onSubmit,
  onClear,
}) => {
  const [selectedYear, setSelectedYear] = React.useState(year);
  const [start, setStart] = React.useState(startNumber);
  const [end, setEnd] = React.useState(endNumber);

  return (
    <div className="p-4 max-w-lg m-auto bg-white rounded shadow-md">
      <h1 className="text-lg font-bold mb-4">試算表ファイルリスト作成</h1>
      <div className="mb-4">
        <label className="block mb-2">年度</label>
        <input
          type="number"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <h2 className="font-semibold">範囲指定</h2>
        <div className="flex items-center space-x-2">
          <label className="flex-grow">集計番号</label>
          <input
            type="number"
            value={start}
            onChange={(e) => setStart(Number(e.target.value))}
            className="border p-1 w-24 text-center"
          />
          <span>〜</span>
          <input
            type="number"
            value={end}
            onChange={(e) => setEnd(Number(e.target.value))}
            className="border p-1 w-24 text-center"
          />
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={() => onSubmit(selectedYear, start, end)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          クリア
        </button>
      </div>
    </div>
  );
};

export default ReportForm;
