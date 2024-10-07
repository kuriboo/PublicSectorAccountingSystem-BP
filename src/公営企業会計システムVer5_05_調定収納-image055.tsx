// TransactionInputForm.tsx
import React from 'react';

type TransactionInputFormProps = {
  section: string;
  subsection: string;
  detail: string;
  taxDivisionLabel: string;
  accountSearchLabel: string;
  consumptionTaxRateOptions: number[];
  fixedAmount: number;
  internalTax: number;
  specialRevenue: number;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const TransactionInputForm: React.FC<TransactionInputFormProps> = ({
  section,
  subsection,
  detail,
  taxDivisionLabel,
  accountSearchLabel,
  consumptionTaxRateOptions,
  fixedAmount,
  internalTax,
  specialRevenue,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-lg font-semibold mb-4">調定入力明細登録</h1>
      
      <div className="mb-2">
        <div>節: {section}</div>
        <div>細節: {subsection}</div>
        <div>明細: {detail}</div>
        <button className="px-2 py-1 bg-gray-200 rounded-full">{accountSearchLabel}</button>
      </div>

      <div className="mb-2">
        <label>{taxDivisionLabel}</label>
      </div>

      <div className="mb-2">
        <label htmlFor="consumptionTaxRate">消費税率</label>
        <select id="consumptionTaxRate" className="ml-2 px-2 py-1 border rounded">
          {consumptionTaxRateOptions.map((rate) => (
            <option key={rate} value={rate}>
              {rate}%
            </option>
          ))}
        </select>
      </div>

      <div className="mb-2">
        <label htmlFor="fixedAmount">調定金額</label>
        <input
          id="fixedAmount"
          type="number"
          value={fixedAmount}
          className="ml-2 px-2 py-1 border rounded"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="internalTax">内消費税額</label>
        <input
          id="internalTax"
          type="number"
          value={internalTax}
          className="ml-2 px-2 py-1 border rounded"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="specialRevenue">特定収入</label>
        <input
          id="specialRevenue"
          type="number"
          value={specialRevenue}
          className="ml-2 px-2 py-1 border rounded"
        />
      </div>

      <div className="flex space-x-4">
        <button onClick={onOk} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">キャンセル</button>
      </div>
    </div>
  );
};

export default TransactionInputForm;
```