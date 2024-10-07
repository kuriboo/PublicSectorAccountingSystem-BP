// components/VoucherForm.tsx
import React from 'react';

// 型定義
type VoucherFormProps = {
  startDate: string;
  endDate: string;
  departmentStart: string;
  departmentEnd: string;
  voucherNumber: string;
  onStartChange: (value: string) => void;
  onEndChange: (value: string) => void;
  onDepartmentStartChange: (value: string) => void;
  onDepartmentEndChange: (value: string) => void;
  onVoucherNumberChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const VoucherForm: React.FC<VoucherFormProps> = ({
  startDate,
  endDate,
  departmentStart,
  departmentEnd,
  voucherNumber,
  onStartChange,
  onEndChange,
  onDepartmentStartChange,
  onDepartmentEndChange,
  onVoucherNumberChange,
  onSubmit,
  onClear,
  onExit
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold">振替伝票作成</h2>
      <div className="mt-4 space-y-3">
        <div className="flex space-x-2">
          <label className="flex-1">
            振替日:
            <input
              type="date"
              value={startDate}
              onChange={(e) => onStartChange(e.target.value)}
              className="border p-1 rounded"
            />
          </label>
          <span>~</span>
          <label className="flex-1">
            <input
              type="date"
              value={endDate}
              onChange={(e) => onEndChange(e.target.value)}
              className="border p-1 rounded"
            />
          </label>
        </div>

        <div className="flex space-x-2">
          <label className="flex-1">
            所属:
            <input
              type="text"
              value={departmentStart}
              onChange={(e) => onDepartmentStartChange(e.target.value)}
              className="border p-1 rounded"
            />
          </label>
          <span>~</span>
          <label className="flex-1">
            <input
              type="text"
              value={departmentEnd}
              onChange={(e) => onDepartmentEndChange(e.target.value)}
              className="border p-1 rounded"
            />
          </label>
        </div>

        <div className="space-y-2">
          <label>
            伝票番号:
            <input
              type="text"
              value={voucherNumber}
              onChange={(e) => onVoucherNumberChange(e.target.value)}
              className="border p-1 rounded"
            />
          </label>
        </div>
      </div>

      <div className="mt-4 flex space-x-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default VoucherForm;
```