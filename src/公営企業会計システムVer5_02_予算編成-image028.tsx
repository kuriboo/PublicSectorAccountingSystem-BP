import React from 'react';

// 型定義
interface BudgetFormProps {
  year: string;
  amendmentNumber: number;
  onAmendmentChange?: (number: number) => void;
  accountType: "事業別" | "所属別";
  onAccountTypeChange?: (type: "事業別" | "所属別") => void;
  printDivision: "見積要求額" | "査定額";
  onPrintDivisionChange?: (division: "見積要求額" | "査定額") => void;
  onSubmit?: () => void;
  onClear?: () => void;
  onFinish?: () => void;
}

const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  amendmentNumber,
  onAmendmentChange,
  accountType,
  onAccountTypeChange,
  printDivision,
  onPrintDivisionChange,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      {/* 年度表示 */}
      <div className="mb-4">
        <label className="font-bold">年度:</label>
        <span className="ml-2">{year}</span>
      </div>

      {/* 補正回数 */}
      <div className="mb-4">
        <label className="font-bold">補正回数:</label>
        <input
          type="number"
          value={amendmentNumber}
          onChange={e => onAmendmentChange && onAmendmentChange(parseInt(e.target.value))}
          className="ml-2 border rounded px-2"
        />
      </div>

      {/* 帳票種別 */}
      <div className="mb-4">
        <label className="font-bold">帳票種別:</label>
        <div className="ml-2">
          <label>
            <input
              type="radio"
              checked={accountType === "事業別"}
              onChange={() => onAccountTypeChange && onAccountTypeChange("事業別")}
            />
            事業別
          </label>
          <label className="ml-4">
            <input
              type="radio"
              checked={accountType === "所属別"}
              onChange={() => onAccountTypeChange && onAccountTypeChange("所属別")}
            />
            所属別
          </label>
        </div>
      </div>

      {/* 印字区分 */}
      <div className="mb-4">
        <label className="font-bold">印字区分:</label>
        <div className="ml-2">
          <label>
            <input
              type="radio"
              checked={printDivision === "見積要求額"}
              onChange={() => onPrintDivisionChange && onPrintDivisionChange("見積要求額")}
            />
            見積要求額
          </label>
          <label className="ml-4">
            <input
              type="radio"
              checked={printDivision === "査定額"}
              onChange={() => onPrintDivisionChange && onPrintDivisionChange("査定額")}
            />
            査定額
          </label>
        </div>
      </div>

      {/* ボタン */}
      <div className="flex space-x-2">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          クリア
        </button>
        <button
          onClick={onFinish}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
