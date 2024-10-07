import React from 'react';

// TypeScript types for props
type Record = {
  date: string;
  number: number;
  type: string;
  amount: string;
  summary: string;
};

type SearchFormProps = {
  records: Record[];
  onSubmit: (filters: any) => void;
  onClear: () => void;
  onCancel: () => void;
};

const SearchForm: React.FC<SearchFormProps> = ({ records, onSubmit, onClear, onCancel }) => {
  return (
    <div className="p-4 bg-gray-100">
      {/* Search form section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>年度</label>
          <input type="text" className="w-full border rounded" />
        </div>
        <div>
          <label>処理日</label>
          <input type="date" className="w-full border rounded" />
        </div>
        {/* Add additional fields as needed */}
        <button type="button" className="bg-blue-500 text-white p-2 rounded" onClick={() => onSubmit({})}>表示</button>
      </div>

      {/* Records table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">処理日</th>
            <th className="border border-gray-300 p-2">負担番号</th>
            <th className="border border-gray-300 p-2">支払種別</th>
            <th className="border border-gray-300 p-2">負担額</th>
            <th className="border border-gray-300 p-2">摘要</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{record.date}</td>
              <td className="border border-gray-300 p-2">{record.number}</td>
              <td className="border border-gray-300 p-2">{record.type}</td>
              <td className="border border-gray-300 p-2">{record.amount}</td>
              <td className="border border-gray-300 p-2">{record.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Action buttons */}
      <div className="mt-4">
        <button type="button" className="bg-gray-500 text-white p-2 mr-2 rounded" onClick={onClear}>クリア</button>
        <button type="button" className="bg-red-500 text-white p-2 rounded" onClick={onCancel}>キャンセル</button>
      </div>
    </div>
  );
};

export default SearchForm;
