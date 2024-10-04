```tsx
import React from "react";

type InputFieldProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description?: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, description }) => (
  <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    {description && <p className="text-gray-500 text-sm">{description}</p>}
  </div>
);

type TableProps = {
  fiscalYear: string;
  accountingPart: string;
  itemCode: string;
  managementCode: string;
  exclusionCode: string;
  memoCode?: string;
  onFiscalYearChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAccountingPartChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onItemCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onManagementCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExclusionCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMemoCodeChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AccountingTable: React.FC<TableProps> = ({
  fiscalYear,
  accountingPart,
  itemCode,
  managementCode,
  exclusionCode,
  memoCode,
  onFiscalYearChange,
  onAccountingPartChange,
  onItemCodeChange,
  onManagementCodeChange,
  onExclusionCodeChange,
  onMemoCodeChange,
}) => (
  <form className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
    <InputField
      label="会計年度"
      value={fiscalYear}
      onChange={onFiscalYearChange}
    />
    <InputField
      label="会計区分"
      value={accountingPart}
      onChange={onAccountingPartChange}
    />
    <InputField
      label="目コード"
      value={itemCode}
      onChange={onItemCodeChange}
      description="給与システムから連携される科目コードです。"
    />
    <InputField
      label="管理コード"
      value={managementCode}
      onChange={onManagementCodeChange}
      description="給与システムから連携される節・細節をもととしたコードです。"
    />
    <InputField
      label="控除項目コード"
      value={exclusionCode}
      onChange={onExclusionCodeChange}
      description="給与システムから連携される控除区分・コードをもととしたコードです。"
    />
    <InputField
      label="仕訳コード"
      value={memoCode || ""}
      onChange={onMemoCodeChange || (() => {})}
    />
    <div className="flex mt-4">
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
        OK
      </button>
      <button type="reset" className="bg-gray-300 text-black px-4 py-2 rounded mr-2">
        クリア
      </button>
      <button type="button" className="bg-red-500 text-white px-4 py-2 rounded">
        終了
      </button>
    </div>
  </form>
);

export default AccountingTable;
```