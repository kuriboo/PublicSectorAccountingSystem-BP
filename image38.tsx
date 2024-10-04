```tsx
import React, { useState } from 'react';
import type { FC } from 'react';
import 'tailwindcss/tailwind.css';

interface SearchCriteriaProps {
  fiscalYear: string;
  slipNumber: string;
  startDate: string;
  endDate: string;
  accountTitle: string;
  subAccountTitle: string;
  major: string;
  subMajor: string;
  amountFrom: number;
  amountTo: number;
  description: string;
  onSearch: () => void;
  onClear: () => void;
  onOk: () => void;
  onCancel: () => void;
}

const SearchCriteria: FC<SearchCriteriaProps> = ({
  fiscalYear,
  slipNumber,
  startDate,
  endDate,
  accountTitle,
  subAccountTitle,
  major,
  subMajor,
  amountFrom,
  amountTo,
  description,
  onSearch,
  onClear,
  onOk,
  onCancel,
}) => {
  const [formState, setFormState] = useState({
    fiscalYear,
    slipNumber,
    startDate,
    endDate,
    accountTitle,
    subAccountTitle,
    major,
    subMajor,
    amountFrom,
    amountTo,
    description,
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="p-4">
      <div className="border-b pb-2 mb-4">
        <h2 className="text-lg font-bold">検索条件設定</h2>
      </div>

      {/* Search Form */}
      <div className="mb-4">
        <div className="flex mb-2">
          <label className="w-1/4">年度</label>
          <input
            type="text"
            name="fiscalYear"
            value={formState.fiscalYear}
            onChange={handleChange}
            className="border p-1 w-3/4"
          />
        </div>
        <div className="flex mb-2">
          <label className="w-1/4">振替番号</label>
          <input
            type="text"
            name="slipNumber"
            value={formState.slipNumber}
            onChange={handleChange}
            className="border p-1 w-3/4"
          />
        </div>
        <div className="flex mb-2">
          <label className="w-1/4">振替日</label>
          <div className="flex-grow flex space-x-2">
            <input
              type="date"
              name="startDate"
              value={formState.startDate}
              onChange={handleChange}
              className="border p-1 w-full"
            />
            <span>~</span>
            <input
              type="date"
              name="endDate"
              value={formState.endDate}
              onChange={handleChange}
              className="border p-1 w-full"
            />
          </div>
        </div>
        <div className="flex mb-2">
          <label className="w-1/4">予算科目</label>
          <input
            type="text"
            name="accountTitle"
            value={formState.accountTitle}
            onChange={handleChange}
            className="border p-1 w-3/4"
          />
        </div>
        <div className="flex mb-2">
          <label className="w-1/4">細節</label>
          <input
            type="text"
            name="subMajor"
            value={formState.subMajor}
            onChange={handleChange}
            className="border p-1 w-3/4"
          />
        </div>
        <div className="flex mb-2">
          <label className="w-1/4">振替金額</label>
          <div className="flex-grow flex space-x-2">
            <input
              type="number"
              name="amountFrom"
              value={formState.amountFrom}
              onChange={handleChange}
              className="border p-1 w-full"
            />
            <span>~</span>
            <input
              type="number"
              name="amountTo"
              value={formState.amountTo}
              onChange={handleChange}
              className="border p-1 w-full"
            />
          </div>
        </div>
        <div className="flex mb-2">
          <label className="w-1/4">摘要</label>
          <input
            type="text"
            name="description"
            value={formState.description}
            onChange={handleChange}
            className="border p-1 w-3/4"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-2">
        <button onClick={onSearch} className="px-4 py-2 bg-gray-300 hover:bg-gray-400">表示</button>
        <button onClick={onOk} className="px-4 py-2 bg-gray-300 hover:bg-gray-400">OK</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 hover:bg-gray-400">クリア</button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 hover:bg-gray-400">キャンセル</button>
      </div>
    </div>
  );
};

export default SearchCriteria;
```