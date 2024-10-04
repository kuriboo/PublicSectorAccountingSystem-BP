```tsx
import React from 'react';

type Props = {
  title: string;
  fiscalYear: number;
  projectCode: string;
  projectName: string;
  policyCode: string;
  policyName: string;
  descriptionCode: string;
  description: string;
  currentYearAmount: number;
  previousYearAmount: number;
  inclusiveAmount: number;
  onRegister: () => void;
  onCancel: () => void;
};

export const FinancialRecordForm: React.FC<Props> = ({
  title,
  fiscalYear,
  projectCode,
  projectName,
  policyCode,
  policyName,
  descriptionCode,
  description,
  currentYearAmount,
  previousYearAmount,
  inclusiveAmount,
  onRegister,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      {/* Header Section */}
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      
      {/* Form Controls */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">年度</label>
        <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option value={fiscalYear}>{`平成${fiscalYear}`}</option>
        </select>
      </div>

      {/* Project Information */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">事業</label>
        <div className="flex space-x-2">
          <input type="text" value={projectCode} readOnly className="bg-gray-200 p-2 border border-gray-300 rounded-md"/>
          <input type="text" value={projectName} readOnly className="bg-gray-200 p-2 border border-gray-300 rounded-md flex-grow"/>
        </div>
      </div>

      {/* Policy Information */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">施策</label>
        <div className="flex space-x-2">
          <input type="text" value={policyCode} readOnly className="bg-gray-200 p-2 border border-gray-300 rounded-md"/>
          <input type="text" value={policyName} readOnly className="bg-gray-200 p-2 border border-gray-300 rounded-md flex-grow"/>
        </div>
      </div>

      {/* Description Information */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">施策内訳</label>
        <div className="flex space-x-2">
          <input type="text" value={descriptionCode} readOnly className="bg-gray-200 p-2 border border-gray-300 rounded-md"/>
          <input type="text" value={description} readOnly className="bg-gray-200 p-2 border border-gray-300 rounded-md flex-grow"/>
        </div>
      </div>

      {/* Amount Information */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">当年度</label>
        <input type="text" value={currentYearAmount} readOnly className="bg-gray-200 p-2 border border-gray-300 rounded-md w-full"/>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">前年比較</label>
        <input type="text" value={previousYearAmount} readOnly className="bg-gray-200 p-2 border border-gray-300 rounded-md w-full"/>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button onClick={onRegister} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          登録
        </button>
        <button onClick={onCancel} className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
          終了
        </button>
      </div>
    </div>
  );
};
```