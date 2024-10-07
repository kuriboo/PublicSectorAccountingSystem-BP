import React from 'react';

type TaxCalculationFormProps = {
  startYearMonth: string;
  endYearMonth: string;
  budgetSubjectFrom: string;
  budgetSubjectTo: string;
  reportType: '節' | '細節';
  taxRateEnabled: boolean;
  taxRate: number;
  reducedTaxRate: boolean;
  options: {
    adjustTaxAmountEntry: boolean;
    ledgerOnlyEntry: boolean;
    onlyVoucherForIssuingEntities: boolean;
    exclusionRateEntry: number;
  };
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const TaxCalculationForm: React.FC<TaxCalculationFormProps> = ({
  startYearMonth,
  endYearMonth,
  budgetSubjectFrom,
  budgetSubjectTo,
  reportType,
  taxRateEnabled,
  taxRate,
  reducedTaxRate,
  options,
  onSubmit,
  onClear,
  onFinish
}) => {
  return (
    <form className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-xl font-bold">範囲指定</h2>
        <div className="flex items-center space-x-2">
          <label>作表年月:</label>
          <input type="text" value={startYearMonth} className="border p-1" />
          <span>～</span>
          <input type="text" value={endYearMonth} className="border p-1" />
        </div>
      </div>

      <div className="mb-4">
        <label>予算科目:</label>
        <div className="flex items-center space-x-2">
          <input type="text" value={budgetSubjectFrom} className="border p-1" />
          <span>～</span>
          <input type="text" value={budgetSubjectTo} className="border p-1" />
        </div>
      </div>

      <div className="mb-4">
        <label>作表区分:</label>
        <div className="flex items-center space-x-2">
          <label className="flex items-center">
            <input type="radio" checked={reportType === '節'} className="mr-1" />
            節
          </label>
          <label className="flex items-center">
            <input type="radio" checked={reportType === '細節'} className="mr-1" />
            細節
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label>税率:</label>
        <div className="flex items-center space-x-2">
          <label className="flex items-center">
            <input type="checkbox" checked={!taxRateEnabled} className="mr-1" />
            指定しない
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={taxRateEnabled} className="mr-1" />
            指定する <input type="number" value={taxRate} className="border p-1 w-12" /> %
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={reducedTaxRate} className="mr-1" />
            軽減税率
          </label>
        </div>
      </div>

      <div className="flex flex-col mb-4">
        <label className="flex items-center">
          <input type="checkbox" checked={options.adjustTaxAmountEntry} className="mr-1" />
          「課税誤差額調整入力」で登録した伝票も出力する
        </label>
        <label className="flex items-center">
          <input type="checkbox" checked={options.ledgerOnlyEntry} className="mr-1" />
          「帳簿のみ保存」のみの伝票を出力する
        </label>
        <label className="flex items-center">
          <input type="checkbox" checked={options.onlyVoucherForIssuingEntities} className="mr-1" />
          「適格請求書発行事業者」のみの伝票を出力する
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={options.exclusionRateEntry > 0}
            className="mr-1"
          />
          「適格請求書発行事業者以外」のみの伝票を出力する
          <input
            type="number"
            value={options.exclusionRateEntry}
            className="border p-1 w-12 ml-2"
          />
          %
        </label>
      </div>

      <div className="flex space-x-2">
        <button type="button" onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button type="button" onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button type="button" onClick={onFinish} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </form>
  );
};

export default TaxCalculationForm;
