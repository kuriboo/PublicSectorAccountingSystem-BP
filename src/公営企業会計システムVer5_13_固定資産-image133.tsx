import React from 'react';

type FinancialFormProps = {
  assetNumber: string;
  assetName: string;
  sourceCode: string;
  sourceName: string;
  initialAmounts: Amounts;
  cumulativeAmounts: Amounts;
  exclusionAmounts: Amounts;
  annualAmounts: Amounts;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

type Amounts = {
  previousPeriod: number;
  currentIncrease: number;
  currentDecrease: number;
};

const FinancialForm: React.FC<FinancialFormProps> = ({
  assetNumber,
  assetName,
  sourceCode,
  sourceName,
  initialAmounts,
  cumulativeAmounts,
  exclusionAmounts,
  annualAmounts,
  onSubmit,
  onClear,
  onCancel
}) => {
  // Common input component
  const renderInput = (label: string, value: number, readOnly: boolean = false) => (
    <div className="mb-2">
      <label className="block mb-1">{label}</label>
      <input
        type="number"
        value={value}
        readOnly={readOnly}
        className="border p-1 w-full"
      />
    </div>
  );

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-md mx-auto">
      <div className="mb-4">
        <h2 className="text-xl mb-2">財源別固定資産累計編集</h2>
        <div className="text-sm">
          <p>資産番号: {assetNumber}</p>
          <p>資産名称: {assetName}</p>
          <p>財源コード: {sourceCode}</p>
          <p>財源名称: {sourceName}</p>
        </div>
      </div>

      {/* Initial Amounts Section */}
      <div className="mb-4 border p-2">
        <h3 className="font-semibold mb-2">帳簿原価</h3>
        {renderInput("前期末残高", initialAmounts.previousPeriod, true)}
        {renderInput("当期増加額", initialAmounts.currentIncrease)}
        {renderInput("当期減少額", initialAmounts.currentDecrease)}
      </div>

      {/* Cumulative Amounts Section */}
      <div className="mb-4 border p-2">
        <h3 className="font-semibold mb-2">償却累計額</h3>
        {renderInput("前期末残高", cumulativeAmounts.previousPeriod, true)}
        {renderInput("当期増加額", cumulativeAmounts.currentIncrease)}
        {renderInput("当期減少額", cumulativeAmounts.currentDecrease)}
      </div>

      {/* Exclusion Amounts Section */}
      <div className="mb-4 border p-2">
        <h3 className="font-semibold mb-2">償却除外額</h3>
        {renderInput("前期末残高", exclusionAmounts.previousPeriod, true)}
        {renderInput("当期増加額", exclusionAmounts.currentIncrease)}
        {renderInput("当期減少額", exclusionAmounts.currentDecrease)}
      </div>

      {/* Annual Amounts Section */}
      <div className="mb-4 border p-2">
        <h3 className="font-semibold mb-2">過年度損益</h3>
        {renderInput("修正益", annualAmounts.previousPeriod, true)}
        {renderInput("修正損", annualAmounts.currentIncrease, true)}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default FinancialForm;
