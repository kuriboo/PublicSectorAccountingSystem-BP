```tsx
import React from 'react';

type SearchFormProps = {
  startDate: string;
  endDate: string;
  voucherNumberRange: { start: number; end: number };
  onSearch: () => void;
  onClear: () => void;
};

const SearchForm: React.FC<SearchFormProps> = ({
  startDate,
  endDate,
  voucherNumberRange,
  onSearch,
  onClear,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">検索条件設定</h2>
      <div className="mb-4">
        <label className="mr-2">振替日:</label>
        <input className="mr-2 border" type="text" value={startDate} readOnly />
        <span>~</span>
        <input className="ml-2 border" type="text" value={endDate} readOnly />
      </div>

      <div className="mb-4">
        <label className="mr-2">伝票番号:</label>
        <input className="mr-2 border" type="number" value={voucherNumberRange.start} readOnly />
        <span>~</span>
        <input className="ml-2 border" type="number" value={voucherNumberRange.end} readOnly />
      </div>

      <div className="space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onSearch}>
          表示
        </button>
        <button className="px-4 py-2 bg-gray-300 text-black rounded" onClick={onClear}>
          クリア
        </button>
      </div>
    </div>
  );
};

type DataTableProps = {
  data: Array<{ department: string; date: string; type: string; amount: number }>;
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th className="px-4 py-2">所属</th>
          <th className="px-4 py-2">振替日</th>
          <th className="px-4 py-2">種別</th>
          <th className="px-4 py-2">入力額</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-t">
            <td className="px-4 py-2">{row.department}</td>
            <td className="px-4 py-2">{row.date}</td>
            <td className="px-4 py-2">{row.type}</td>
            <td className="px-4 py-2">{row.amount.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Dashboard: React.FC = () => {
  // Sample data; replace with API data
  const sampleData = [
    { department: '経営企画課', date: '29/06/01', type: '支払', amount: 1000 },
    { department: '経営企画課', date: '29/06/01', type: '支払', amount: 10000 },
    // Add more data as needed
  ];

  const handleSearch = () => {
    console.log('Search clicked');
  };

  const handleClear = () => {
    console.log('Clear clicked');
  };

  return (
    <div className="container mx-auto">
      <SearchForm
        startDate="平成29年04月01日"
        endDate="平成30年04月01日"
        voucherNumberRange={{ start: 0, end: 9999999 }}
        onSearch={handleSearch}
        onClear={handleClear}
      />
      <DataTable data={sampleData} />
    </div>
  );
};

export default Dashboard;
```