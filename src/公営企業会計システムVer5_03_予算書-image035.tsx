import React from 'react';

// Props interface
interface TaxFormProps {
  year: number;
  budgetType: string;
  revisionCount: number;
  aggregateTotal: boolean;
  taxAmountType: 'estimate' | 'finalize';
  roundOff: boolean;
  taxRate: number;
  includePrecaution?: boolean;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
}

const TaxForm: React.FC<TaxFormProps> = ({
  year,
  budgetType,
  revisionCount,
  aggregateTotal,
  taxAmountType,
  roundOff,
  taxRate,
  includePrecaution = false,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 mx-auto max-w-xl bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">消費税額集計表作成</h1>
      <div className="mb-2">
        <label className="mr-2">年度:</label>
        <input type="number" value={year} readOnly className="border rounded p-1" />
      </div>
      
      <div className="mb-2">
        <label className="mr-2">予算編成区分:</label>
        <select value={budgetType} className="border rounded p-1">
          <option value="補正予算">補正予算</option>
          {/* You can add more options here */}
        </select>
        <label className="ml-4 mr-2">回数:</label>
        <input type="number" value={revisionCount} readOnly className="border rounded p-1" />
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input type="checkbox" checked={aggregateTotal} className="form-checkbox" readOnly />
            <span className="ml-2">累計額を集計する</span>
          </label>
        </div>
      </div>

      <div className="mb-2">
        <label className="mr-2">金額種別:</label>
        <label className="inline-flex items-center mr-4">
          <input type="radio" name="amountType" checked={taxAmountType === 'estimate'} className="form-radio" readOnly />
          <span className="ml-2">見積要求額</span>
        </label>
        <label className="inline-flex items-center">
          <input type="radio" name="amountType" checked={taxAmountType === 'finalize'} className="form-radio" readOnly />
          <span className="ml-2">査定額</span>
        </label>
      </div>

      <div className="mb-2">
        <label className="inline-flex items-center">
          <input type="radio" name="roundOff" checked={roundOff} className="form-radio" readOnly />
          <span className="ml-2">決算見込消費税額の千円丸めをする</span>
        </label>
        <label className="inline-flex items-center ml-4">
          <input type="radio" name="roundOff" checked={!roundOff} className="form-radio" readOnly />
          <span className="ml-2">しない</span>
        </label>
      </div>

      <div className="mb-2">
        <label className="mr-2">消費税率:</label>
        <input type="number" value={taxRate} readOnly className="border rounded p-1 w-16" />%
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          <input type="checkbox" checked={includePrecaution} className="form-checkbox" readOnly />
          <span className="ml-2">貯蔵品の印字はしない</span>
        </label>
      </div>

      <div className="flex justify-end space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white p-2 rounded">OK</button>
        <button onClick={onClear} className="bg-yellow-500 text-white p-2 rounded">クリア</button>
        <button onClick={onExit} className="bg-gray-500 text-white p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default TaxForm;