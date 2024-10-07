// SearchComponent.tsx

import React from 'react';

// TypeScript Props Interface
interface SearchComponentProps {
  fiscalYear: number;
  debtorOptions: string[];
  onSearch: (query: SearchQuery) => void;
}

// SearchQuery Type
interface SearchQuery {
  summaryNumber?: string;
  fiscalYear: number;
  debtor: string;
  determinationDateFrom?: string;
  determinationDateTo?: string;
  dueDateFrom?: string;
  dueDateTo?: string;
  paymentStatus: '未入金' | '入金済' | 'すべて';
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  fiscalYear,
  debtorOptions,
  onSearch,
}) => {
  // Default form state
  const [query, setQuery] = React.useState<SearchQuery>({
    fiscalYear,
    debtor: debtorOptions[0] || '',
    paymentStatus: 'すべて',
  });

  // Handle Input Change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Radio Change
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery((prev) => ({ ...prev, paymentStatus: e.target.value as '未入金' | '入金済' | 'すべて' }));
  };

  // Handle Search Button
  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">検索条件設定</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>平成 {fiscalYear} 年度</label>
        </div>
        <div>
          <label>債務者</label>
          <select
            name="debtor"
            value={query.debtor}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          >
            {debtorOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>とりまとめ番号</label>
          <input
            type="text"
            name="summaryNumber"
            value={query.summaryNumber || ''}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label>調定日</label>
          <div>
            <input
              type="date"
              name="determinationDateFrom"
              value={query.determinationDateFrom || ''}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
            <span className="mx-2">〜</span>
            <input
              type="date"
              name="determinationDateTo"
              value={query.determinationDateTo || ''}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
          </div>
        </div>
        <div>
          <label>納入期限</label>
          <div>
            <input
              type="date"
              name="dueDateFrom"
              value={query.dueDateFrom || ''}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
            <span className="mx-2">〜</span>
            <input
              type="date"
              name="dueDateTo"
              value={query.dueDateTo || ''}
              onChange={handleInputChange}
              className="border p-2 rounded"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label>区分</label>
        <div className="flex items-center space-x-4">
          <label>
            <input
              type="radio"
              name="paymentStatus"
              value="未入金"
              checked={query.paymentStatus === '未入金'}
              onChange={handleRadioChange}
              className="mr-2"
            />
            未入金
          </label>
          <label>
            <input
              type="radio"
              name="paymentStatus"
              value="入金済"
              checked={query.paymentStatus === '入金済'}
              onChange={handleRadioChange}
              className="mr-2"
            />
            入金済
          </label>
          <label>
            <input
              type="radio"
              name="paymentStatus"
              value="すべて"
              checked={query.paymentStatus === 'すべて'}
              onChange={handleRadioChange}
              className="mr-2"
            />
            すべて
          </label>
        </div>
      </div>
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
        表示
      </button>
    </div>
  );
};

export default SearchComponent;
```