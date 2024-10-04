```tsx
import React from 'react';

// Props type definition
type AccountingProps = {
  title: string;
  subtitle: string;
  fiscalPeriod: {
    start: string;
    end: string;
  };
  adjustmentStatus: string;
  allocationStatus: string;
  onOk: () => void;
  onClose: () => void;
};

// Accounting Component
const AccountingComponent: React.FC<AccountingProps> = ({
  title,
  subtitle,
  fiscalPeriod,
  adjustmentStatus,
  allocationStatus,
  onOk,
  onClose,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded shadow">
      {/* Header Section */}
      <div className="flex justify-between bg-indigo-600 p-2 text-white rounded-t">
        <h1 className="text-lg">{title}</h1>
        <span>{subtitle}</span>
      </div>

      {/* Fiscal Period Section */}
      <div className="border-t mt-2 pt-2">
        <h2 className="text-sm font-bold">範囲指定</h2>
        <p className="mt-1">
          課税期間: {fiscalPeriod.start} ～ {fiscalPeriod.end}
        </p>
      </div>

      {/* Results Section */}
      <div className="border-t mt-2 pt-2">
        <h2 className="text-sm font-bold">割合算定結果</h2>
        <p className="mt-1">
          特定収入による仕入控除税額の調整要否: {adjustmentStatus}
        </p>
        <p className="mt-1">特定収入割合: {allocationStatus}</p>
      </div>

      {/* Button Section */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          className="bg-gray-300 text-black px-4 py-1 rounded"
          onClick={onClose}
        >
          終了
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded"
          onClick={onOk}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default AccountingComponent;
```