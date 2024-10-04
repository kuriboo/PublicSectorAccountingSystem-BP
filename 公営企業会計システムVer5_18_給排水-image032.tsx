```tsx
// components/ReceptionForm.tsx

import React from 'react';

// Props type definition
type ReceptionFormProps = {
  fiscalYear?: string;
  receptionNumberStart?: string;
  receptionNumberEnd?: string;
  receptionDate?: string;
  inspectionDate?: string;
  adjustmentDate?: string;
  deliveryDate?: string;
  approvalDate?: string;
  paymentDate?: string;
  completionDate?: string;
  cancellationDate?: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const ReceptionForm: React.FC<ReceptionFormProps> = ({
  fiscalYear = '',
  receptionNumberStart = '',
  receptionNumberEnd = '',
  receptionDate = '',
  inspectionDate = '',
  adjustmentDate = '',
  deliveryDate = '',
  approvalDate = '',
  paymentDate = '',
  completionDate = '',
  cancellationDate = '',
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="mb-4 text-lg font-bold">受付簿作成</h2>
      <div className="space-y-4">
        {/* Fiscal Year and Reception Number Range */}
        <div className="flex items-center space-x-2">
          <label>受付年度:</label>
          <input type="text" value={fiscalYear} className="w-20 p-1 border" readOnly />
          <label>受付番号:</label>
          <input type="text" value={receptionNumberStart} className="w-20 p-1 border" readOnly />
          <span>~</span>
          <input type="text" value={receptionNumberEnd} className="w-20 p-1 border" readOnly />
        </div>

        {/* Date Inputs */}
        {[
          ['受付日', receptionDate],
          ['受付審査日', inspectionDate],
          ['調定日', adjustmentDate],
          ['収納日', deliveryDate],
          ['承認日', approvalDate],
          ['重水器払出日', paymentDate],
          ['完了日', completionDate],
          ['取消日', cancellationDate],
        ].map(([label, date]) => (
          <div key={label} className="flex items-center space-x-2">
            <label>{label}:</label>
            <input type="text" value={date} className="w-40 p-1 border" readOnly />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex space-x-2 mt-4">
        <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-500 text-white rounded">
          クリア
        </button>
        <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default ReceptionForm;
```