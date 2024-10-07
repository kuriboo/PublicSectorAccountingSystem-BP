import React from 'react';

// 型定義
type AdjustmentFormProps = {
  year: string;
  adjustmentRate: number;
  accountType: "科目別" | "所属別";
  decisionAmount: "前年度決算見込額" | "前年々年度決算額";
  decisionCount: number;
  rangeStart: string;
  rangeEnd: string;
  budgetStart: string;
  budgetEnd: string;
  temporaryDivision: "経常" | "臨時";
  onSubmit: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const AdjustmentForm: React.FC<AdjustmentFormProps> = ({
  year,
  adjustmentRate,
  accountType,
  decisionAmount,
  decisionCount,
  rangeStart,
  rangeEnd,
  budgetStart,
  budgetEnd,
  temporaryDivision,
  onSubmit,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-md">
      {/* 年度入力 */}
      <div className="mb-4">
        <label className="block font-bold">年度</label>
        <input
          type="text"
          value={year}
          className="w-full p-2 border rounded"
          readOnly
        />
      </div>
      
      {/* 調整率入力 */}
      <div className="mb-4">
        <label className="block font-bold">調整率</label>
        <input
          type="number"
          value={adjustmentRate}
          className="w-full p-2 border rounded"
          readOnly
        />
      </div>

      {/* 帳票種別 */}
      <div className="mb-4">
        <label className="block font-bold">帳票種別</label>
        <div>
          <label>
            <input
              type="radio"
              value="科目別"
              checked={accountType === "科目別"}
              readOnly
            />
            調整額一覧表(科目別)
          </label>
          <label className="ml-4">
            <input
              type="radio"
              value="所属別"
              checked={accountType === "所属別"}
              readOnly
            />
            調整額一覧表(所属別)
          </label>
        </div>
      </div>

      {/* 決算額印字 */}
      <div className="mb-4">
        <label className="block font-bold">決算額印字</label>
        <div>
          <label>
            <input
              type="radio"
              value="前年度決算見込額"
              checked={decisionAmount === "前年度決算見込額"}
              readOnly
            />
            前年度決算見込額
          </label>
          <label className="ml-4">
            <input
              type="radio"
              value="前年々年度決算額"
              checked={decisionAmount === "前年々年度決算額"}
              readOnly
            />
            前々年度決算額
          </label>
        </div>
        <input
          type="number"
          value={decisionCount}
          className="w-full p-2 border rounded mt-2"
          readOnly
        />
      </div>

      {/* 範囲指定 */}
      <div className="mb-4">
        <label className="block font-bold">範囲指定</label>
        <div className="flex">
          <div className="flex-1">
            <label className="block">所属</label>
            <input
              type="text"
              value={rangeStart}
              className="w-full p-2 border rounded"
              readOnly
            />
          </div>
          <span className="mx-2">~</span>
          <div className="flex-1">
            <input
              type="text"
              value={rangeEnd}
              className="w-full p-2 border rounded"
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex">
          <div className="flex-1">
            <label className="block">予算科目</label>
            <input
              type="text"
              value={budgetStart}
              className="w-full p-2 border rounded"
              readOnly
            />
          </div>
          <span className="mx-2">~</span>
          <div className="flex-1">
            <input
              type="text"
              value={budgetEnd}
              className="w-full p-2 border rounded"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* 臨経区分 */}
      <div className="mb-4">
        <label className="block font-bold">臨経区分</label>
        <div>
          <label>
            <input
              type="radio"
              value="経常"
              checked={temporaryDivision === "経常"}
              readOnly
            />
            経常
          </label>
          <label className="ml-4">
            <input
              type="radio"
              value="臨時"
              checked={temporaryDivision === "臨時"}
              readOnly
            />
            臨時
          </label>
        </div>
      </div>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={onEnd}
        >
          終了
        </button>
      </div>
    </div>
  );
}

export default AdjustmentForm;
