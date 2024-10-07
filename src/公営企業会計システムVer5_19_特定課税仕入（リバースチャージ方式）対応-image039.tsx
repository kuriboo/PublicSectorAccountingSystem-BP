import React from 'react';

// Tailwind CSS classes for styling
const inputStyles = "bg-purple-100 border border-gray-300 text-black p-1";
const labelStyles = "text-blue-900 font-bold";

type Props = {
  loanType: '借方' | '貸方';
  determination: string;
  subjectDepartment: string;
  detailedSettlement: string;
  unpaidProcessing: string;
  bsAccountExceedAmount: number;
  onLoanTypeChange: (value: '借方' | '貸方') => void;
  onDeterminationChange: (value: string) => void;
  onSubjectDepartmentChange: (value: string) => void;
  onDetailedSettlementChange: (value: string) => void;
  onUnpaidProcessingChange: (value: string) => void;
  onBsAccountExceedAmountChange: (value: number) => void;
};

const FinanceForm: React.FC<Props> = ({
  loanType,
  determination,
  subjectDepartment,
  detailedSettlement,
  unpaidProcessing,
  bsAccountExceedAmount,
  onLoanTypeChange,
  onDeterminationChange,
  onSubjectDepartmentChange,
  onDetailedSettlementChange,
  onUnpaidProcessingChange,
  onBsAccountExceedAmountChange,
}) => {
  return (
    <div className="border p-4 grid grid-cols-2 gap-4">
      {/* Loan Type Section */}
      <div className="flex items-center">
        <span className={labelStyles}>貸借区分</span>
        <label className="ml-2">
          <input
            type="radio"
            name="loanType"
            value="借方"
            checked={loanType === '借方'}
            onChange={() => onLoanTypeChange('借方')}
          />
          借方
        </label>
        <label className="ml-2">
          <input
            type="radio"
            name="loanType"
            value="貸方"
            checked={loanType === '貸方'}
            onChange={() => onLoanTypeChange('貸方')}
          />
          貸方
        </label>
      </div>

      {/* Determination Section */}
      <div className="flex items-center">
        <span className={labelStyles}>勘定区分</span>
        <input
          type="text"
          value={determination}
          onChange={(e) => onDeterminationChange(e.target.value)}
          className={inputStyles}
        />
      </div>

      {/* Subject Department Section */}
      <div className="flex flex-col">
        <span className={labelStyles}>仕訳科目区分</span>
        <input
          type="text"
          value={subjectDepartment}
          onChange={(e) => onSubjectDepartmentChange(e.target.value)}
          className={inputStyles}
        />
      </div>

      {/* Detailed Settlement Section */}
      <div className="flex flex-col">
        <span className={labelStyles}>細節決裁区分</span>
        <input
          type="text"
          value={detailedSettlement}
          onChange={(e) => onDetailedSettlementChange(e.target.value)}
          className={inputStyles}
        />
      </div>

      {/* Unpaid Processing Section */}
      <div className="flex flex-col">
        <span className={labelStyles}>未払計上</span>
        <input
          type="text"
          value={unpaidProcessing}
          onChange={(e) => onUnpaidProcessingChange(e.target.value)}
          className={inputStyles}
        />
      </div>

      {/* BS Account Exceed Amount Section */}
      <div className="flex flex-col">
        <span className={labelStyles}>BS科目繰越額</span>
        <input
          type="number"
          value={bsAccountExceedAmount}
          onChange={(e) => onBsAccountExceedAmountChange(Number(e.target.value))}
          className={inputStyles}
        />
      </div>
    </div>
  );
};

export default FinanceForm;
```