```tsx
import React from 'react';

type AccountFormProps = {
  fiscalYear: string;
  setFiscalYear: (year: string) => void;
  accountSection: string;
  setAccountSection: (section: string) => void;
  accountDetail: string;
  setAccountDetail: (detail: string) => void;
  onSearch: () => void;
  monthlyAmounts: number[];
  setMonthlyAmounts: (amounts: number[]) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

const AccountForm: React.FC<AccountFormProps> = ({
  fiscalYear,
  setFiscalYear,
  accountSection,
  setAccountSection,
  accountDetail,
  setAccountDetail,
  onSearch,
  monthlyAmounts,
  setMonthlyAmounts,
  onSubmit,
  onClear,
  onExit,
}) => {
  // Handle the change for monthly amounts
  const handleMonthlyChange = (index: number, value: string) => {
    const newAmounts = [...monthlyAmounts];
    newAmounts[index] = parseInt(value, 10) || 0;
    setMonthlyAmounts(newAmounts);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">仕訳科目貸借金額</h2>
      {/* Registration type selection */}
      <div className="flex mb-4">
        <label className="mr-4">
          <input type="radio" name="status" defaultChecked /> 登録
        </label>
        <label className="mr-4">
          <input type="radio" name="status" /> 訂正
        </label>
        <label>
          <input type="radio" name="status" /> 削除
        </label>
      </div>
      
      {/* Fiscal year input */}
      <div className="mb-4">
        <label>会計年度:</label>
        <input
          type="text"
          value={fiscalYear}
          onChange={(e) => setFiscalYear(e.target.value)}
          className="border ml-2 p-1"
        />
      </div>
      
      {/* Account section input */}
      <div className="mb-4">
        <label>仕訳部:</label>
        <input
          type="text"
          value={accountSection}
          onChange={(e) => setAccountSection(e.target.value)}
          className="border ml-2 p-1"
        />
      </div>

      {/* Account detail input */}
      <div className="mb-4">
        <label>仕訳細部:</label>
        <input
          type="text"
          value={accountDetail}
          onChange={(e) => setAccountDetail(e.target.value)}
          className="border ml-2 p-1"
        />
      </div>

      {/* Search button */}
      <button onClick={onSearch} className="bg-blue-500 text-white px-4 py-2 mb-4">
        科目検索
      </button>

      {/* Monthly amounts inputs */}
      <div>
        <label>月割振分金額 (円):</label>
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="flex items-center mb-1">
            <span className="mr-2">{i + 4}月:</span>
            <input
              type="number"
              value={monthlyAmounts[i]}
              onChange={(e) => handleMonthlyChange(i, e.target.value)}
              className="border p-1"
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex mt-4 space-x-2">
        <button onClick={onSubmit} className="bg-green-500 text-white px-4 py-2">
          OK
        </button>
        <button onClick={onClear} className="bg-yellow-500 text-white px-4 py-2">
          クリア
        </button>
        <button onClick={onExit} className="bg-red-500 text-white px-4 py-2">
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountForm;
```