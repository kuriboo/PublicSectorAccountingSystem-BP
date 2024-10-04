```tsx
import React from 'react';

type FormData = {
  accountingCode: string;
  assetNumber: string;
  division: string;
  subDivision: string;
  detail: string;
  method: string;
  useYears: string;
  leaseMethod: string;
  contractPeriod: string;
  months: string;
  quantity: string;
  amount: string;
  exclusionAmount: string;
  depreciationRate: string;
};

type ComponentProps = {
  data: FormData;
  onChange: (field: keyof FormData, value: string) => void;
};

const DataInputForm: React.FC<ComponentProps> = ({ data, onChange }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-md shadow-md">
      {/* Accounting Info */}
      <div className="mb-4">
        <label className="block text-gray-700">会計区分コード</label>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-1 w-full"
          value={data.accountingCode}
          onChange={(e) => onChange('accountingCode', e.target.value)}
        />
      </div>

      {/* Asset Number */}
      <div className="mb-4">
        <label className="block text-gray-700">資産番号</label>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-1 w-full"
          value={data.assetNumber}
          onChange={(e) => onChange('assetNumber', e.target.value)}
        />
      </div>

      {/* Division */}
      <div className="mb-4">
        <label className="block text-gray-700">節</label>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-1 w-full"
          value={data.division}
          onChange={(e) => onChange('division', e.target.value)}
        />
      </div>

      {/* Depreciation Method */}
      <div className="mb-4">
        <label className="block text-gray-700">償却方法</label>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-1 w-full"
          value={data.method}
          onChange={(e) => onChange('method', e.target.value)}
        />
      </div>

      {/* Lease Method */}
      <div className="mb-4">
        <label className="block text-gray-700">契約方法</label>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-1 w-full"
          value={data.leaseMethod}
          onChange={(e) => onChange('leaseMethod', e.target.value)}
        />
      </div>

      <button className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4">OK</button>
    </div>
  );
};

export default DataInputForm;
```