// BudgetMasterForm.tsx

import React from 'react';
import classNames from 'classnames';

type BudgetMasterFormProps = {
  fiscalYear: string;
  onFiscalYearChange: (value: string) => void;
  onDisplayClick: () => void;
  currencyFormat: string;
  onCurrencyFormatChange: (value: string) => void;
  onEditClick: () => void;
  onClearClick: () => void;
  onEndClick: () => void;
};

const BudgetMasterForm: React.FC<BudgetMasterFormProps> = ({
  fiscalYear,
  onFiscalYearChange,
  onDisplayClick,
  currencyFormat,
  onCurrencyFormatChange,
  onEditClick,
  onClearClick,
  onEndClick
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <span className="mr-2">年度</span>
        <input
          type="text"
          value={fiscalYear}
          onChange={(e) => onFiscalYearChange(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      
      <button
        onClick={onDisplayClick}
        className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        表示
      </button>
      
      <select
        value={currencyFormat}
        onChange={(e) => onCurrencyFormatChange(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="名称:金額円で示す">名称:金額円で示す</option>
        {/* 他のオプションをここに追加 */}
      </select>

      <div className="mt-4">
        <button
          onClick={onEditClick}
          className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          編集
        </button>
        <button
          onClick={onClearClick}
          className="mr-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          クリア
        </button>
        <button
          onClick={onEndClick}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetMasterForm;