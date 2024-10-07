import React from 'react';

// 型定義
interface FinanceFormProps {
  onChange: (field: string, value: string) => void;
  values: {
    loanType: string;
    determinationSection: string;
    itemDivision: string;
    detailedDecision: string;
    unpaidSettlement: string;
    targetAccount: string;
    targetItem: string;
    bsAmount: string;
  };
}

// コンポーネント定義
const FinanceForm: React.FC<FinanceFormProps> = ({ onChange, values }) => {
  return (
    <div className="flex flex-wrap border p-4">
      {/* 貸借区分 */}
      <div className="w-1/3 p-2">
        <label className="block text-blue-800">貸借区分</label>
        <div>
          <label className="mr-2">
            <input
              type="radio"
              name="loanType"
              value="借方"
              checked={values.loanType === '借方'}
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />{' '}
            借方
          </label>
          <label>
            <input
              type="radio"
              name="loanType"
              value="貸方"
              checked={values.loanType === '貸方'}
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />{' '}
            貸方
          </label>
        </div>
      </div>

      {/* 勘定区分 */}
      <div className="w-1/3 p-2">
        <label className="block text-blue-800">勘定区分</label>
        <input
          type="text"
          className="w-full bg-purple-100"
          name="determinationSection"
          value={values.determinationSection}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>

      {/* 仕訳科目区分 */}
      <div className="w-1/3 p-2">
        <label className="block text-blue-800">仕訳科目区分</label>
        <input
          type="text"
          className="w-full bg-purple-100"
          name="itemDivision"
          value={values.itemDivision}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>

      {/* 細節決裁区分 */}
      <div className="w-1/3 p-2">
        <label className="block text-blue-800">細節決裁区分</label>
        <input
          type="text"
          className="w-full bg-purple-100"
          name="detailedDecision"
          value={values.detailedDecision}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>

      {/* 未払計上 */}
      <div className="w-1/3 p-2">
        <label className="block text-blue-800">未払計上</label>
        <div className="flex">
          <input
            type="text"
            className="flex-grow"
            name="unpaidSettlement"
            value={values.unpaidSettlement}
            onChange={(e) => onChange(e.target.name, e.target.value)}
          />
          <select
            className="ml-2"
            name="selectOption"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          >
            <option value="">選択</option>
            {/* 適切なオプションを追加してください */}
          </select>
        </div>
      </div>

      {/* 対象科目 */}
      <div className="w-1/3 p-2">
        <label className="block text-blue-800">対象科目</label>
        <input
          type="text"
          className="w-full"
          name="targetAccount"
          value={values.targetAccount}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>

      {/* 対象項目 */}
      <div className="w-1/3 p-2">
        <label className="block text-blue-800">対象項目</label>
        <input
          type="text"
          className="w-full"
          name="targetItem"
          value={values.targetItem}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>

      {/* BS科目繰越額 */}
      <div className="w-1/3 p-2">
        <label className="block text-blue-800">BS科目繰越額</label>
        <input
          type="text"
          className="w-full bg-purple-100"
          name="bsAmount"
          value={values.bsAmount}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
    </div>
  );
};

export default FinanceForm;