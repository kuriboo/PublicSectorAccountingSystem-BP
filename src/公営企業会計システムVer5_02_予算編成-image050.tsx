import React from 'react';

type BudgetFormProps = {
  yearLabel: string;
  budgetOptions: { id: number; label: string }[];
  taxIncluded: boolean;
  printLevel: string;
  departmentOptions: { id: number; label: string }[];
  onSubmit: (data: any) => void;
  onClear: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  yearLabel,
  budgetOptions,
  taxIncluded,
  printLevel,
  departmentOptions,
  onSubmit,
  onClear,
}) => {
  return (
    <form
      className="p-4 bg-white shadow-md rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        // Collect form data and pass to onSubmit
        const data = new FormData(e.currentTarget);
        onSubmit(data);
      }}
    >
      <h1 className="text-xl font-bold mb-4">{yearLabel} 年度 予算査定一覧表</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium">予算編成区分</label>
        <select name="budgetSection" className="mt-1 block w-full">
          {budgetOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center mb-4">
        <label className="block text-sm font-medium">全額種別</label>
        <input
          type="checkbox"
          name="taxIncluded"
          checked={taxIncluded}
          className="ml-2"
        />{' '}
        税込
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">印字レベル</label>
        <input
          type="text"
          name="printLevel"
          defaultValue={printLevel}
          className="mt-1 block w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">帳票種別</label>
        <select name="reportType" className="mt-1 block w-full">
          <option value="科目別">科目別</option>
          <option value="所属別">所属別</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">範囲指定</label>
        <div className="flex space-x-2 mt-1">
          {departmentOptions.map((option) => (
            <div key={option.id} className="flex items-center">
              <input type="text" name={`range_${option.id}_start`} defaultValue="0000000" className="block w-24"/>
              <span className="mx-2">~</span>
              <input type="text" name={`range_${option.id}_end`} defaultValue="9999999" className="block w-24"/>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-4">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          OK
        </button>
        <button type="button" className="bg-gray-300 text-black px-4 py-2 rounded" onClick={onClear}>
          クリア
        </button>
        <button type="button" className="bg-red-500 text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </form>
  );
};

export default BudgetForm;
```