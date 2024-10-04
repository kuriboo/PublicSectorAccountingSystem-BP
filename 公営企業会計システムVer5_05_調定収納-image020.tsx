```tsx
import React from 'react';

// TypeScript interface for the component props
interface FormInputProps {
  fiscalYear: string;
  voucherNo: string;
  date: string;
  summary: string;
  debitAccount: string;
  debitDetail: string;
  creditAccount: string;
  creditDetail: string;
  amount: number;
  onYearChange: (value: string) => void;
  onVoucherNoChange: (value: string) => void;
  onDateChange: (value: string) => void;
  onSummaryChange: (value: string) => void;
  onDebitAccountChange: (value: string) => void;
  onDebitDetailChange: (value: string) => void;
  onCreditAccountChange: (value: string) => void;
  onCreditDetailChange: (value: string) => void;
  onAmountChange: (value: number) => void;
  onSubmit: () => void;
  onClear: () => void;
}

const FormInput: React.FC<FormInputProps> = ({
  fiscalYear,
  voucherNo,
  date,
  summary,
  debitAccount,
  debitDetail,
  creditAccount,
  creditDetail,
  amount,
  onYearChange,
  onVoucherNoChange,
  onDateChange,
  onSummaryChange,
  onDebitAccountChange,
  onDebitDetailChange,
  onCreditAccountChange,
  onCreditDetailChange,
  onAmountChange,
  onSubmit,
  onClear,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-bold mb-4">調定日締解除入力</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium">年度:</label>
          <input
            type="text"
            value={fiscalYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">伝票日付:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">摘要:</label>
          <input
            type="text"
            value={summary}
            onChange={(e) => onSummaryChange(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>

        {/* Repeat similar input blocks for other fields like debitAccount, creditAccount, etc. */}

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={onSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            OK
          </button>
          <button
            type="button"
            onClick={onClear}
            className="px-4 py-2 bg-gray-300 text-black rounded"
          >
            クリア
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInput;
```