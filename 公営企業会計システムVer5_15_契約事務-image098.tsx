```tsx
'use client';

import React from 'react';

type FormData = {
  year: string;
  acceptanceType: string;
  companyCode: string;
  companyName: string;
  displayName: string;
  registrationType: 'main' | 'temporary';
  capital: number;
  completedWorks: number;
  selfCapital: number;
};

type MasterComponentProps = {
  data: FormData;
  onConfirm: (data: FormData) => void;
  onCancel: () => void;
};

const MasterComponent: React.FC<MasterComponentProps> = ({ data, onConfirm, onCancel }) => {
  const handleSubmit = () => {
    onConfirm(data); // Confirm button handler
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">年度</label>
          <input
            type="text"
            value={data.year}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">受付区分</label>
          <input
            type="text"
            value={data.acceptanceType}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">業者コード</label>
          <input
            type="text"
            value={data.companyCode}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">業者名</label>
          <input
            type="text"
            value={data.companyName}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">略名</label>
          <input
            type="text"
            value={data.displayName}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">登録区分</label>
          <select
            value={data.registrationType}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="main">本登録</option>
            <option value="temporary">仮登録</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">資本金 (千円)</label>
          <input
            type="number"
            value={data.capital}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            OK
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            キャンセル
          </button>
        </div>
      </form>
    </div>
  );
};

export default MasterComponent;
```