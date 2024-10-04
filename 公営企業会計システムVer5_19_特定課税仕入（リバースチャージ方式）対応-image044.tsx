import React from 'react';

type FormProps = {
  year: string;
  budgetCode: string;
  budgetName: string;
  taxDivisionOptions: string[];
  taxDivision: string;
  onTaxDivisionChange: (value: string) => void;
  taxRate: string;
  onTaxRateChange: (value: string) => void;
  revenueDivisionOptions: string[];
  revenueDivision: string;
  onRevenueDivisionChange: (value: string) => void;
  managementDivisionOptions: string[];
  managementDivision: string;
  onManagementDivisionChange: (value: string) => void;
  unpaidDivision: string;
  budgetItemDivision: string;
  entryDivision: string;
  calculationFlag: string;
  onCancel: () => void;
  onClear: () => void;
  onSubmit: () => void;
};

const BudgetForm: React.FC<FormProps> = ({
  year,
  budgetCode,
  budgetName,
  taxDivisionOptions,
  taxDivision,
  onTaxDivisionChange,
  taxRate,
  onTaxRateChange,
  revenueDivisionOptions,
  revenueDivision,
  onRevenueDivisionChange,
  managementDivisionOptions,
  managementDivision,
  onManagementDivisionChange,
  unpaidDivision,
  budgetItemDivision,
  entryDivision,
  calculationFlag,
  onCancel,
  onClear,
  onSubmit,
}) => {
  return (
    <form className="space-y-4 p-4 bg-white shadow-md rounded">
      <div className="flex items-center space-x-2">
        <label className="text-gray-700">年度:</label>
        <input type="text" value={year} disabled className="bg-gray-100" />

        <label className="text-gray-700">予算科目コード:</label>
        <input type="text" value={budgetCode} disabled className="bg-gray-100" />

        <label className="text-gray-700">略名:</label>
        <input type="text" value={budgetName} disabled className="bg-gray-100" />
      </div>

      <div className="flex items-center space-x-2">
        <label className="text-gray-700">税区分:</label>
        <select value={taxDivision} onChange={(e) => onTaxDivisionChange(e.target.value)} className="border">
          {taxDivisionOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        <label className="text-gray-700">消費税:</label>
        <input type="text" value={taxRate} onChange={(e) => onTaxRateChange(e.target.value)} className="border" />
        <span>%</span>
      </div>

      <div className="flex items-center space-x-2">
        <label className="text-gray-700">収入区分:</label>
        <select value={revenueDivision} onChange={(e) => onRevenueDivisionChange(e.target.value)} className="border">
          {revenueDivisionOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        <label className="text-gray-700">経営区分:</label>
        <select value={managementDivision} onChange={(e) => onManagementDivisionChange(e.target.value)} className="border">
          {managementDivisionOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <label className="text-gray-700">積算税込フラグ:</label>
        <input type="radio" value="excl_tax" checked={calculationFlag === 'excl_tax'} readOnly /> 税抜
        <input type="radio" value="incl_tax" checked={calculationFlag === 'incl_tax'} readOnly /> 税込
      </div>

      <div className="flex space-x-2">
        <button type="button" onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button type="button" onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded">クリア</button>
        <button type="button" onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded">キャンセル</button>
      </div>
    </form>
  );
};

export default BudgetForm;