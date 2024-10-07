import React from 'react';

type ReportFormProps = {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onCsvExport: () => void;
  onClear: () => void;
  onExit: () => void;
};

const ReportForm: React.FC<ReportFormProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onCsvExport,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h1 className="text-2xl font-bold mb-4">剰余金計算書</h1>
      <div className="bg-white p-4 shadow rounded-md mb-4">
        <h2 className="font-semibold mb-2">範囲指定</h2>
        <div className="flex space-x-4 items-center">
          <label>会計期間</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => onStartDateChange(e.target.value)}
            className="border p-1"
          />
          <span>~</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => onEndDateChange(e.target.value)}
            className="border p-1"
          />
        </div>
      </div>
      <div className="bg-white p-4 shadow rounded-md mb-4">
        <h2 className="font-semibold mb-2">前年度処分区分</h2>
        <div className="flex items-center space-x-4 mb-2">
          <label><input type="radio" name="division" />議会の議決</label>
          <label><input type="radio" name="division" />条例</label>
        </div>
        <h2 className="font-semibold mb-2">科目コード</h2>
        <div className="flex space-x-4 mb-2">
          <select className="border">
            <option>071:資本金</option>
          </select>
          <div>
            <label><input type="radio" name="level" />項</label>
            <label><input type="radio" name="level" />目</label>
            <label><input type="radio" name="level" />節</label>
          </div>
        </div>
        <div className="flex space-x-4 mb-4">
          <select className="border">
            <option>072:剰余金</option>
          </select>
          <div>
            <label><input type="radio" name="level" />項</label>
            <label><input type="radio" name="level" />目</label>
            <label><input type="radio" name="level" defaultChecked />節</label>
          </div>
        </div>
        <div>
          <label><input type="checkbox" />伝票取りまとめ</label>
        </div>
      </div>
      <div className="bg-white p-4 shadow rounded-md mb-4">
        <h2 className="font-semibold mb-2">処理概要</h2>
        <p>剰余金計算書を作成します。</p>
      </div>
      <div className="flex space-x-4">
        <button onClick={onCsvExport} className="bg-gray-300 p-2 rounded">CSV出力</button>
        <button onClick={onClear} className="bg-gray-300 p-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-gray-300 p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ReportForm;
