// Import necessary libraries
import React from 'react';

// Define types for the component props
interface DataEntryFormProps {
  year: string;
  content: string[];
  onSearch: () => void;
  onAddRow: () => void;
  onDeleteRow: () => void;
  onPageChange: (direction: 'next' | 'prev') => void;
}

// Create a reusable component
const DataEntryForm: React.FC<DataEntryFormProps> = ({
  year,
  content,
  onSearch,
  onAddRow,
  onDeleteRow,
  onPageChange,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {/* Year selection */}
        <label className="text-lg mr-2">年度</label>
        <span className="text-lg mr-4">{year}</span>

        {/* Content dropdown */}
        <select className="border border-gray-300 rounded p-2 mr-4">
          {content.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Search button */}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onSearch}
        >
          表示
        </button>
      </div>

      <div className="flex mb-4">
        {/* Add row button */}
        <button
          className="bg-gray-200 text-black py-2 px-4 rounded mr-2"
          onClick={onAddRow}
        >
          行追加
        </button>

        {/* Delete row button */}
        <button
          className="bg-gray-200 text-black py-2 px-4 rounded"
          onClick={onDeleteRow}
        >
          行削除
        </button>
      </div>

      {/* Table placeholder */}
      <div className="border border-blue-900 text-center h-40">
        ※一覧に直接書き込んで下さい。
      </div>

      <div className="flex justify-between items-center mt-4">
        {/* Pagination controls */}
        <button
          className="bg-gray-200 text-black py-2 px-4 rounded"
          onClick={() => onPageChange('prev')}
        >
          &lt;&lt;
        </button>
        <select className="border border-gray-300 rounded p-2">
          <option value="500">500</option>
        </select>
        <button
          className="bg-gray-200 text-black py-2 px-4 rounded"
          onClick={() => onPageChange('next')}
        >
          &gt;&gt;
        </button>
      </div>

      <div className="flex justify-end mt-4">
        {/* Data update and clear buttons */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
          データ更新
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
          クリア
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default DataEntryForm;
```