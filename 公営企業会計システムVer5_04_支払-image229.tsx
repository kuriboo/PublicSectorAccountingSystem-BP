```tsx
import React from 'react';

type PaymentCodeFormProps = {
  sectionCode: string;
  subSectionCode: string;
  detailCode: string;
  onChange: (field: string, value: string) => void;
  onSearch: () => void;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const PaymentCodeForm: React.FC<PaymentCodeFormProps> = ({
  sectionCode,
  subSectionCode,
  detailCode,
  onChange,
  onSearch,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-blue-600 mb-4">支払科目設定</h1>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">節</label>
        <input
          type="text"
          value={sectionCode}
          onChange={(e) => onChange('sectionCode', e.target.value)}
          className="border p-1 rounded w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">細節</label>
        <input
          type="text"
          value={subSectionCode}
          onChange={(e) => onChange('subSectionCode', e.target.value)}
          className="border p-1 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">明細</label>
        <input
          type="text"
          value={detailCode}
          onChange={(e) => onChange('detailCode', e.target.value)}
          className="border p-1 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <button onClick={onSearch} className="bg-blue-600 text-white px-4 py-2 rounded-md shadow">
          科目検索
        </button>
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-gray-200 px-4 py-2 rounded-md shadow">OK</button>
        <button onClick={onClear} className="bg-gray-200 px-4 py-2 rounded-md shadow">クリア</button>
        <button onClick={onCancel} className="bg-gray-200 px-4 py-2 rounded-md shadow">キャンセル</button>
      </div>
    </div>
  );
};

export default PaymentCodeForm;
```