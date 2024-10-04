import React from 'react';

interface Props {
  fiscalYear: string;
  startPeriod: string;
  endPeriod: string;
  isBudgetSummarySelected: boolean;
  isTaxSalesSummarySelected: boolean;
  onFiscalYearChange: (year: string) => void;
  onBudgetSummaryToggle: () => void;
  onTaxSalesSummaryToggle: () => void;
  onOk: () => void;
  onClear: () => void;
  onClose: () => void;
}

const AccountingSettings: React.FC<Props> = ({
  fiscalYear,
  startPeriod,
  endPeriod,
  isBudgetSummarySelected,
  isTaxSalesSummarySelected,
  onFiscalYearChange,
  onBudgetSummaryToggle,
  onTaxSalesSummaryToggle,
  onOk,
  onClear,
  onClose
}) => {
  return (
    <div className="max-w-lg p-4 mx-auto bg-white border rounded shadow">
      <h2 className="text-lg font-bold text-center">課税売上割合算定表</h2>
      <div className="my-4">
        <h3 className="font-semibold">範囲指定</h3>
        <div className="flex items-center my-2">
          <label className="mr-2">会計年度</label>
          <input
            type="text"
            value={fiscalYear}
            onChange={(e) => onFiscalYearChange(e.target.value)}
            className="border p-1"
          />
          <span className="ml-2">年度</span>
        </div>
        <div className="flex items-center my-2">
          <label className="mr-2">課税期間</label>
          <span>{startPeriod}</span>
          <span className="mx-2">〜</span>
          <span>{endPeriod}</span>
        </div>
      </div>

      <div className="my-4">
        <h3 className="font-semibold">出力対象選択</h3>
        <div className="flex items-center my-2">
          <input
            type="checkbox"
            checked={isBudgetSummarySelected}
            onChange={onBudgetSummaryToggle}
            className="mr-2"
          />
          <span>予算区分・項目別表</span>
        </div>
        <div className="flex items-center my-2">
          <input
            type="checkbox"
            checked={isTaxSalesSummarySelected}
            onChange={onTaxSalesSummaryToggle}
            className="mr-2"
          />
          <span>課税売上割合算定表</span>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button onClick={onOk} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded mr-2">
          クリア
        </button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingSettings;