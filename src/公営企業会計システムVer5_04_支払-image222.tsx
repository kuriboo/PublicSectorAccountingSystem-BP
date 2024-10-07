import React from 'react';

type DataItem = {
  date: string;
  number: number;
  type: string;
  amount: number;
  description: string;
};

type SearchComponentProps = {
  data: DataItem[];
  onSearch: (criteria: string) => void;
};

const SearchComponent: React.FC<SearchComponentProps> = ({ data, onSearch }) => {
  return (
    <div className="p-4 border">
      {/* Search Inputs */}
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="摘要"
          className="border p-2 rounded mr-2"
          onChange={(e) => onSearch(e.target.value)} 
        />
        <button className="bg-blue-500 text-white p-2 rounded">科目検索</button>
      </div>

      {/* Results Table */}
      <table className="min-w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">処理日</th>
            <th className="border p-2">決定番号</th>
            <th className="border p-2">支払種別</th>
            <th className="border p-2">決定額</th>
            <th className="border p-2">摘要</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.date}</td>
              <td className="border p-2">{item.number}</td>
              <td className="border p-2">{item.type}</td>
              <td className="border p-2">{item.amount.toLocaleString()}</td>
              <td className="border p-2">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Action Buttons */}
      <div className="mt-4">
        <button className="bg-green-500 text-white p-2 rounded mr-2">OK</button>
        <button className="bg-gray-500 text-white p-2 rounded">クリア</button>
      </div>
    </div>
  );
};

export default SearchComponent;
```