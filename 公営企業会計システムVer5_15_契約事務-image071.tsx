import React from "react";

type BidResultsProps = {
  year: string;
  category: string;
  hasDropStamp: boolean;
  startDate: string;
  endDate: string;
  startNumber: string;
  endNumber: string;
  onConfirm: () => void;
  onClear: () => void;
  onExit: () => void;
};

const BidResults: React.FC<BidResultsProps> = ({
  year,
  category,
  hasDropStamp,
  startDate,
  endDate,
  startNumber,
  endNumber,
  onConfirm,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-8 space-y-4 bg-gray-100 text-gray-800">
      <div className="flex justify-between items-center bg-purple-100 p-2 rounded">
        <span className="text-lg font-bold">入札結果一覧表</span>
        <span className="text-sm text-right">
          行政市水道事業会計 <br />
          総務課 予算･会計担当 ぎょうせい太郎 <br />
          平成29年08月05日
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex space-x-4 items-center">
          <label>年度</label>
          <span>{year}</span>

          <label>受付区分</label>
          <span>{category}</span>
        </div>

        <div className="flex space-x-4 items-center">
          <label>落札率印字</label>
          <span>{hasDropStamp ? "有" : "無"}</span>
        </div>

        <div className="flex space-x-4 items-center">
          <label>受付番号</label>
          <input type="text" value={startNumber} readOnly className="border p-1" />
          <span>~</span>
          <input type="text" value={endNumber} readOnly className="border p-1" />
        </div>

        <div className="flex space-x-4 items-center">
          <label>入札年月日</label>
          <input type="text" value={startDate} readOnly className="border p-1" />
          <span>~</span>
          <input type="text" value={endDate} readOnly className="border p-1" />
        </div>
      </div>

      <div className="flex space-x-4 justify-end">
        <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 text-gray-800 rounded">
          クリア
        </button>
        <button onClick={onExit} className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default BidResults;