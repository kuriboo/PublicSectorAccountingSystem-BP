```tsx
import React from 'react';

// 型定義
interface FormComponentProps {
  accountingSubject?: string;
  name?: string;
  department?: string;
  rowNumber?: number;
  useReason?: string;
  correctionCount?: number;
  usageAmountInclTax?: number;
  usageAmountExclTax?: number;
  taxRate?: number;
  consumptionTaxAmount?: number;
  taxType?: string;
  onOkClick?: () => void;
  onClearClick?: () => void;
  onCancelClick?: () => void;
}

const FormComponent: React.FC<FormComponentProps> = ({
  accountingSubject = '000401 040000111001',
  name = '共済組合負担/非',
  department = '下水道課',
  rowNumber = 10,
  useReason = '法廷福祉費からの流用①',
  correctionCount = 1,
  usageAmountInclTax = 15000,
  usageAmountExclTax = 15000,
  taxRate = 0,
  consumptionTaxAmount = 0,
  taxType = '非課税',
  onOkClick,
  onClearClick,
  onCancelClick
}) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium" htmlFor="accountingSubject">予算科目</label>
        <input type="text" id="accountingSubject" value={accountingSubject} readOnly className="mt-1 block w-full" />
      </div>
      <div className="grid grid-cols-2 gap-x-4 mb-4">
        <div>
          <label className="block text-sm font-medium" htmlFor="name">名称</label>
          <input type="text" id="name" value={name} readOnly className="mt-1 block w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="department">所属</label>
          <input type="text" id="department" value={department} readOnly className="mt-1 block w-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 mb-4">
        <div>
          <label className="block text-sm font-medium" htmlFor="rowNumber">行番号</label>
          <input type="number" id="rowNumber" value={rowNumber} readOnly className="mt-1 block w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="useReason">流用理由</label>
          <input type="text" id="useReason" value={useReason} readOnly className="mt-1 block w-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 mb-4">
        <div>
          <label className="block text-sm font-medium" htmlFor="correctionCount">補正回数</label>
          <input type="number" id="correctionCount" value={correctionCount} readOnly className="mt-1 block w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="usageAmountInclTax">流用額(税込)</label>
          <input type="number" id="usageAmountInclTax" value={usageAmountInclTax} readOnly className="mt-1 block w-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 mb-4">
        <div>
          <label className="block text-sm font-medium" htmlFor="usageAmountExclTax">流用額(税抜)</label>
          <input type="number" id="usageAmountExclTax" value={usageAmountExclTax} readOnly className="mt-1 block w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="taxRate">消費税率</label>
          <input type="number" id="taxRate" value={taxRate} readOnly className="mt-1 block w-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 mb-4">
        <div>
          <label className="block text-sm font-medium" htmlFor="consumptionTaxAmount">消費税額</label>
          <input type="number" id="consumptionTaxAmount" value={consumptionTaxAmount} readOnly className="mt-1 block w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="taxType">税区分</label>
          <input type="text" id="taxType" value={taxType} readOnly className="mt-1 block w-full" />
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={onOkClick} className="px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button onClick={onClearClick} className="px-4 py-2 bg-gray-500 text-white rounded">クリア</button>
        <button onClick={onCancelClick} className="px-4 py-2 bg-red-500 text-white rounded">キャンセル</button>
      </div>
    </div>
  );
};

export default FormComponent;
```