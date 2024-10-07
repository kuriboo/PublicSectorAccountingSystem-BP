import React from 'react';

// Define the types for the component props
type BudgetFormProps = {
  fiscalYear: string;
  budgetType: string;
  taxOption: string;
  budgetSection: string;
  budgetSubsection: string;
  budgetDetail: string;
  incomeIncluded: boolean;
  aidIncluded: boolean;
  onPrevDataClick: () => void;
  onNextDataClick: () => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onCloseClick: () => void;
};

// Create a reusable component
const BudgetForm: React.FC<BudgetFormProps> = ({
  fiscalYear,
  budgetType,
  taxOption,
  budgetSection,
  budgetSubsection,
  budgetDetail,
  incomeIncluded,
  aidIncluded,
  onPrevDataClick,
  onNextDataClick,
  onOkClick,
  onClearClick,
  onCloseClick,
}) => {
  return (
    <div className="p-4 border bg-white shadow-md">
      <h1 className="text-xl font-bold mb-4">予算特定収入科目設定科目別修正</h1>
      <div className="mb-4">
        <label>会計年度: </label>
        <span>{fiscalYear}</span>
      </div>
      <div className="mb-4">
        <label>予算編成区分: </label>
        <span>{budgetType}</span>
      </div>
      <div className="mb-4">
        <label>税区分指定: </label>
        <span>{taxOption}</span>
      </div>
      <div className="border p-2 mb-4">
        <h2 className="font-semibold mb-2">予算科目</h2>
        <div className="mb-2">
          <label>予算節: </label>
          <input type="text" className="border" value={budgetSection} readOnly />
        </div>
        <div className="mb-2">
          <label>予算細節: </label>
          <input type="text" className="border" value={budgetSubsection} readOnly />
        </div>
        <div className="mb-2">
          <label>予算明細: </label>
          <input type="text" className="border" value={budgetDetail} readOnly />
        </div>
        <div>
          <label>税区分: </label>
          <span>特定収入</span>
        </div>
      </div>
      <div className="mb-4">
        <label>
          <input type="checkbox" checked={incomeIncluded} readOnly />
          特定収入が含まれる
        </label>
      </div>
      <div className="mb-4">
        <label>
          <input type="checkbox" checked={aidIncluded} readOnly />
          借入金の償還に充てられた補助金を含む
        </label>
      </div>
      <div className="flex space-x-2">
        <button className="border p-2" onClick={onPrevDataClick}>
          前データ
        </button>
        <button className="border p-2" onClick={onNextDataClick}>
          次データ
        </button>
        <button className="border p-2" onClick={onOkClick}>
          OK
        </button>
        <button className="border p-2" onClick={onClearClick}>
          クリア
        </button>
        <button className="border p-2" onClick={onCloseClick}>
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
