```tsx
import React from 'react';

// Type definitions for component props
type InquiryFormProps = {
  fiscalYear?: string;
  officeCode?: string;
  startDate?: string;
  endDate?: string;
  balanceStart?: number;
  balanceEnd?: number;
  amountStart?: number;
  amountEnd?: number;
  onDisplay?: () => void;
  onCSVExport?: () => void;
};

// Tailwind CSS classes for styling
const formClass = "bg-gray-100 p-4 rounded";
const labelClass = "block text-sm font-medium text-gray-700";
const inputClass = "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm";
const buttonClass = "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600";

// React component
const InquiryForm: React.FC<InquiryFormProps> = ({
  fiscalYear = '2023',
  officeCode = '',
  startDate = '',
  endDate = '',
  balanceStart = 0,
  balanceEnd = 999999999,
  amountStart = 0,
  amountEnd = 999999999,
  onDisplay,
  onCSVExport,
}) => {
  return (
    <div className={formClass}>
      <div>
        <label className={labelClass}>年度</label>
        <input type="text" value={fiscalYear} className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>起案所属</label>
        <input type="text" value={officeCode} className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>期間</label>
        <input type="date" value={startDate} className={inputClass} />
        <input type="date" value={endDate} className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>伝票金額</label>
        <input type="number" value={balanceStart} className={inputClass} />
        <input type="number" value={balanceEnd} className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>明細金額</label>
        <input type="number" value={amountStart} className={inputClass} />
        <input type="number" value={amountEnd} className={inputClass} />
      </div>
      <div className="mt-4">
        <button onClick={onDisplay} className={buttonClass}>
          表示
        </button>
        <button onClick={onCSVExport} className={buttonClass + ' ml-2'}>
          CSV
        </button>
      </div>
    </div>
  );
};

export default InquiryForm;
```