import React from 'react';

// Propsの型定義
type FinancialFormProps = {
  onDebitCreditChange: (value: string) => void;
  onDeterminationChange: (value: string) => void;
  onAccountChange: (value: string) => void;
  onSettlementChange: (value: string) => void;
  onOutstandingAmountChange: (value: string) => void;
  onBSAmountChange: (value: string) => void;
  debitCreditValue: string;
  determinationValue: string;
  accountValue: string;
  settlementValue: string;
  outstandingAmountValue: string;
  bsAmountValue: string;
};

const FinancialForm: React.FC<FinancialFormProps> = ({
  onDebitCreditChange,
  onDeterminationChange,
  onAccountChange,
  onSettlementChange,
  onOutstandingAmountChange,
  onBSAmountChange,
  debitCreditValue,
  determinationValue,
  accountValue,
  settlementValue,
  outstandingAmountValue,
  bsAmountValue
}) => {
  return (
    <div className="flex flex-wrap p-4 border">
      <div className="w-1/3 p-2">
        <div>貸借区分</div>
        <div>
          <label>
            <input type="radio" name="debitCredit" value="借方" checked={debitCreditValue === '借方'} onChange={() => onDebitCreditChange('借方')} />
            借方
          </label>
          <label>
            <input type="radio" name="debitCredit" value="貸方" checked={debitCreditValue === '貸方'} onChange={() => onDebitCreditChange('貸方')} />
            貸方
          </label>
        </div>
        <div>
          勘定区分
          <input type="text" className="border p-1" value={determinationValue} onChange={(e) => onDeterminationChange(e.target.value)} />
        </div>
      </div>
      <div className="w-1/3 p-2">
        <div>
          仕訳科目区分
          <input type="text" className="border p-1" value={accountValue} onChange={(e) => onAccountChange(e.target.value)} />
        </div>
        <div>
          細節決裁区分
          <input type="text" className="border p-1" value={settlementValue} onChange={(e) => onSettlementChange(e.target.value)} />
        </div>
      </div>
      <div className="w-1/3 p-2">
        <div>
          未払計上
          <input type="text" className="border p-1" value={outstandingAmountValue} onChange={(e) => onOutstandingAmountChange(e.target.value)} />
          <select className="border p-1">
            <option>選択</option>
            {/* オプションを追加 */}
          </select>
        </div>
        <button className="bg-blue-500 text-white p-1 rounded">未達</button>
        <div>
          BS科目繰越額
          <input type="text" className="border p-1" value={bsAmountValue} onChange={(e) => onBSAmountChange(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default FinancialForm;