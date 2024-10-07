// types.ts
export interface AccountInquiryProps {
  startDate: string;
  department: string;
  subDepartment: string;
  detail: string;
  balance: string;
  onSearch: () => void;
  onClear: () => void;
  onClose: () => void;
}

// AccountInquiry.tsx
import React from 'react';
import { AccountInquiryProps } from './types';

const AccountInquiry: React.FC<AccountInquiryProps> = ({
  startDate,
  department,
  subDepartment,
  detail,
  balance,
  onSearch,
  onClear,
  onClose,
}) => {
  return (
    <div className="max-w-4xl mx-auto my-8">
      <h2 className="text-xl font-bold mb-4">総勘定元帳照会</h2>
      <div className="bg-gray-100 p-4 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">開始年月日</label>
          <input
            type="text"
            value={startDate}
            readOnly
            className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4 grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">節</label>
            <input
              type="text"
              value={department}
              readOnly
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">細節</label>
            <input
              type="text"
              value={subDepartment}
              readOnly
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">明細</label>
            <input
              type="text"
              value={detail}
              readOnly
              className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <button
          onClick={onSearch}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          科目検索
        </button>
      </div>
      <table className="mt-6 w-full table-auto">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-4 py-2 text-left">月日</th>
            <th className="px-4 py-2 text-left">番号</th>
            <th className="px-4 py-2 text-left">明細番号</th>
            <th className="px-4 py-2 text-left">相手科目</th>
            <th className="px-4 py-2 text-left">借方金額</th>
            <th className="px-4 py-2 text-left">貸方金額</th>
            <th className="px-4 py-2 text-left">残高</th>
            <th className="px-4 py-2 text-left">摘要</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2" colSpan={6}>前日残高</td>
            <td className="border px-4 py-2">{balance}</td>
            <td className="border px-4 py-2"></td>
          </tr>
          {/* Additional rows can be added here */}
        </tbody>
      </table>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={onClear}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          クリア
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountInquiry;
```