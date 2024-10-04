```tsx
import React from 'react';

type FormProps = {
  fiscalYear: number;
  exchangeAmount: number;
  onFiscalYearChange: (year: number) => void;
  onExchangeAmountChange: (amount: number) => void;
  onSubmit: () => void;
  onClear: () => void;
  onFinish: () => void;
};

const FiscalForm: React.FC<FormProps> = ({
  fiscalYear,
  exchangeAmount,
  onFiscalYearChange,
  onExchangeAmountChange,
  onSubmit,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">決算統計損益計算書集計処理</h1>
      <div className="mb-4">
        <label className="block font-bold mb-2">集計年度</label>
        <input
          type="number"
          value={fiscalYear}
          onChange={(e) => onFiscalYearChange(parseInt(e.target.value))}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <fieldset className="border p-2">
          <legend className="font-bold">資金期首残高の端数処理</legend>
          <label className="block">
            <input type="radio" name="beginningProcessing" /> 切捨て
          </label>
          <label className="block">
            <input type="radio" name="beginningProcessing" /> 切上げ
          </label>
        </fieldset>

        <fieldset className="border p-2">
          <legend className="font-bold">資金期末残高の端数処理</legend>
          <label className="block">
            <input type="radio" name="endingProcessing" /> 切捨て
          </label>
          <label className="block">
            <input type="radio" name="endingProcessing" /> 切上げ
          </label>
        </fieldset>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-2">資金に係る交換差額</label>
        <input
          type="number"
          value={exchangeAmount}
          onChange={(e) => onExchangeAmountChange(parseFloat(e.target.value))}
          className="border p-2 w-full"
        />
      </div>

      <div className="mb-4 border p-2">
        <p className="font-bold mb-2">処理概要</p>
        <p className="text-sm">
          決算統計損益計算書を出力するための事前処理です。外貨建取引の影響で、当該金額が発生している場合には、右欄に金額を入力してください。
        </p>
      </div>

      <div className="flex justify-end space-x-2">
        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-1 px-4 rounded"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-200 text-black py-1 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onFinish}
          className="bg-red-500 text-white py-1 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default FiscalForm;
```