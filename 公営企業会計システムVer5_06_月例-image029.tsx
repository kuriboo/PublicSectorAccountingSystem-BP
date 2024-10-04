```tsx
// Import necessary libraries
import React from 'react';

// Define props interface
interface ExpenseFormProps {
  initialSummaryChecked?: boolean;
  initialDetailsChecked?: boolean;
  startDate?: string;
  endDate?: string;
  isTaxExcluded?: boolean;
  onSubmit: (data: { includeSummary: boolean; includeDetails: boolean; period: [string, string]; taxType: 'excluded' | 'included' }) => void;
}

// Functional component
const ExpenseForm: React.FC<ExpenseFormProps> = ({
  initialSummaryChecked = false,
  initialDetailsChecked = true,
  startDate = '',
  endDate = '',
  isTaxExcluded = true,
  onSubmit,
}) => {
  const [summaryChecked, setSummaryChecked] = React.useState(initialSummaryChecked);
  const [detailsChecked, setDetailsChecked] = React.useState(initialDetailsChecked);
  const [period, setPeriod] = React.useState<[string, string]>([startDate, endDate]);
  const [taxType, setTaxType] = React.useState<'excluded' | 'included'>(isTaxExcluded ? 'excluded' : 'included');

  // Submit handler
  const handleSubmit = () => {
    onSubmit({
      includeSummary: summaryChecked,
      includeDetails: detailsChecked,
      period,
      taxType,
    });
  };

  return (
    <div className="p-4 border rounded-md max-w-md">
      <h2 className="font-bold mb-4">範囲指定</h2>
      <div className="mb-4">
        <label className="mr-2">
          <input
            type="checkbox"
            checked={summaryChecked}
            onChange={(e) => setSummaryChecked(e.target.checked)}
          />
          合計表
        </label>
        <label className="mr-2">
          <input
            type="checkbox"
            checked={detailsChecked}
            onChange={(e) => setDetailsChecked(e.target.checked)}
          />
          明細表
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">集計年月</label>
        <input
          type="text"
          value={period[0]}
          onChange={(e) => setPeriod([e.target.value, period[1]])}
          className="border rounded px-2 py-1 mr-2"
          placeholder="開始年月"
        />
        ～
        <input
          type="text"
          value={period[1]}
          onChange={(e) => setPeriod([period[0], e.target.value])}
          className="border rounded px-2 py-1 ml-2"
          placeholder="終了年月"
        />
      </div>
      <div className="mb-4">
        <label className="mr-2">
          <input
            type="radio"
            name="taxType"
            checked={taxType === 'excluded'}
            onChange={() => setTaxType('excluded')}
          />
          税抜
        </label>
        <label>
          <input
            type="radio"
            name="taxType"
            checked={taxType === 'included'}
            onChange={() => setTaxType('included')}
          />
          税込
        </label>
      </div>
      <div className="flex justify-end space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>
          OK
        </button>
        <button className="bg-gray-300 px-4 py-2 rounded" onClick={() => setSummaryChecked(false) && setDetailsChecked(true)}>
          クリア
        </button>
        <button className="bg-gray-300 px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default ExpenseForm;
```