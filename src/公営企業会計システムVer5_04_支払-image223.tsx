import React from 'react';

// TypeScriptの型定義
type SearchFormProps = {
  year: string;
  handlingDate: string;
  onYearChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onHandlingDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

// コンポーネント定義
const SearchForm: React.FC<SearchFormProps> = ({
  year,
  handlingDate,
  onYearChange,
  onHandlingDateChange,
  onSearch,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex space-x-4 mb-4">
        <div>
          <label className="block text-sm">年度</label>
          <input
            type="text"
            value={year}
            onChange={onYearChange}
            className="border p-1"
          />
        </div>
        <div>
          <label className="block text-sm">処理日</label>
          <input
            type="text"
            value={handlingDate}
            onChange={onHandlingDateChange}
            className="border p-1"
          />
        </div>
      </div>
      <button onClick={onSearch} className="bg-blue-500 text-white px-4 py-2">
        科目検索
      </button>
    </div>
  );
};

export default SearchForm;
```

```tsx
import React from 'react';

// TypeScriptの型定義
type DataTableProps = {
  data: {
    date: string;
    decisionNumber: number;
    paymentType: string;
    decisionAmount: number;
    summary: string;
  }[];
};

// コンポーネント定義
const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">処理日</th>
            <th className="border px-4 py-2">決定番号</th>
            <th className="border px-4 py-2">支払種別</th>
            <th className="border px-4 py-2">決定額</th>
            <th className="border px-4 py-2">摘要</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{entry.date}</td>
              <td className="border px-4 py-2">{entry.decisionNumber}</td>
              <td className="border px-4 py-2">{entry.paymentType}</td>
              <td className="border px-4 py-2">{entry.decisionAmount.toLocaleString()}</td>
              <td className="border px-4 py-2">{entry.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
```