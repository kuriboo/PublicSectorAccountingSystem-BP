import React from 'react';

// Prop types for the FinanceComponent
type FinanceComponentProps = {
  loanType: string;
  settlementType: string;
  subjectDivision: string;
  detailDecisionDivision: string;
  unpaidLabel: string;
  bsSubjectLabel: string;
  unpaidValue: string;
  onSubmit: () => void;
};

// FinanceComponent with customizable props and Tailwind CSS for styling
const FinanceComponent: React.FC<FinanceComponentProps> = ({
  loanType,
  settlementType,
  subjectDivision,
  detailDecisionDivision,
  unpaidLabel,
  bsSubjectLabel,
  unpaidValue,
  onSubmit,
}) => {
  return (
    <div className="border p-4 grid grid-cols-3 gap-4">
      
      {/* Loan and Settlement Section */}
      <div className="border p-2">
        <div className="mb-2">
          <label className="font-bold">{loanType}</label>
          <div>
            <input type="radio" name="loan" className="mr-2" />借方
            <input type="radio" name="loan" className="ml-4 mr-2" />貸方
          </div>
        </div>
        <div>
          <label className="font-bold">{settlementType}</label>
          <input type="text" className="w-full p-1 border" />
        </div>
      </div>
      
      {/* Subject Division Section */}
      <div className="border p-2">
        <div>
          <label className="font-bold">{subjectDivision}</label>
          <input type="text" className="w-full p-1 border" />
        </div>
        <div className="mt-2">
          <label className="font-bold">{detailDecisionDivision}</label>
          <input type="text" className="w-full p-1 border" />
        </div>
      </div>
      
      {/* Unpaid Section */}
      <div className="border p-2">
        <div>
          <label className="font-bold">{unpaidLabel}</label>
          <input type="text" className="w-1/2 p-1 border mr-2" />
          <select className="p-1 border">
            <option>選択</option>
          </select>
        </div>
        <div className="mt-2 flex items-center">
          <button 
            onClick={onSubmit} 
            className="bg-blue-500 text-white p-1 rounded-full mr-2"
          >
            対象科目/消込明細
          </button>
          <input type="text" className="w-1/2 p-1 border" />
        </div>
        <div className="mt-2">
          <label className="font-bold">{bsSubjectLabel}</label>
          <input type="text" value={unpaidValue} className="w-full p-1 border" readOnly />
        </div>
      </div>
      
    </div>
  );
};

export default FinanceComponent;