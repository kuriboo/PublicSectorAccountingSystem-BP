import React from 'react';

// Props type definition
type FormProps = {
  chargeDate: string;
  decisionCategory: string;
  councilCategory: string;
  scheduledFiscalYear: string;
  contractSequence: number;
  projectType: string;
  projectLocation: string;
  summary: string;
  counterpart: string;
  previousAmount: number;
  totalAmount: number;
  taxExclusiveAmount: number;
  consumptionTax: number;
};

// Reusable component
const ConstructionForm: React.FC<FormProps> = ({
  chargeDate,
  decisionCategory,
  councilCategory,
  scheduledFiscalYear,
  contractSequence,
  projectType,
  projectLocation,
  summary,
  counterpart,
  previousAmount,
  totalAmount,
  taxExclusiveAmount,
  consumptionTax
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-bold">支出負担行為入力(工事)</h2>
      <div className="space-y-2 mt-4">
        <div>
          <label className="block text-sm font-medium">負担処理日</label>
          <input type="text" value={chargeDate} readOnly className="w-full p-2 border rounded-md" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">決裁区分</label>
            <input type="text" value={decisionCategory} readOnly className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">合議区分</label>
            <input type="text" value={councilCategory} readOnly className="w-full p-2 border rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">予定年度</label>
            <input type="text" value={scheduledFiscalYear} readOnly className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">契約リンクシーケンス</label>
            <input type="number" value={contractSequence} readOnly className="w-full p-2 border rounded-md" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">工事名称</label>
          <input type="text" value={projectType} readOnly className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium">工事場所</label>
          <input type="text" value={projectLocation} readOnly className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium">摘要</label>
          <input type="text" value={summary} readOnly className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium">相手先</label>
          <input type="text" value={counterpart} readOnly className="w-full p-2 border rounded-md" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">前払金額</label>
            <input type="number" value={previousAmount} readOnly className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">合計負担額</label>
            <input type="number" value={totalAmount} readOnly className="w-full p-2 border rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">合計体税額</label>
            <input type="number" value={taxExclusiveAmount} readOnly className="w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">合計消費税額</label>
            <input type="number" value={consumptionTax} readOnly className="w-full p-2 border rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionForm;
