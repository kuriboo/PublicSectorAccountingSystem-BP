// components/BudgetForm.tsx

import React from 'react';

type BudgetFormProps = {
  year: string;
  correction: string;
  correctionMonth: string;
  projectCode: string;
  projectName: string;
  measureCode: string;
  measureName: string;
  measureDesc: string;
  preTaxAmount: number;
  postTaxAmount: number;
  onRegister: () => void;
  onEdit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const BudgetForm: React.FC<BudgetFormProps> = ({
  year,
  correction,
  correctionMonth,
  projectCode,
  projectName,
  measureCode,
  measureName,
  measureDesc,
  preTaxAmount,
  postTaxAmount,
  onRegister,
  onEdit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      {/* Header */}
      <div className="text-xl font-bold mb-2">補正事業別見積要求登録</div>
      
      {/* Year and correction details */}
      <div className="mb-4">
        <div>
          <label className="block">年度: {year}</label>
        </div>
        <div>
          <label className="block">補正: {correction} {correctionMonth}</label>
        </div>
      </div>

      {/* Project and measure details */}
      <div className="mb-4">
        <div>
          <label className="block">事業: {projectCode} {projectName}</label>
        </div>
        <div>
          <label className="block">施策: {measureCode} {measureName}</label>
        </div>
        <div>
          <label className="block">施策内訳: {measureDesc}</label>
        </div>
      </div>

      {/* Amount details */}
      <div className="mb-4">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">税込</th>
              <th className="px-4 py-2">税抜</th>
              <th className="px-4 py-2">消費税</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">0</td>
              <td className="border px-4 py-2">{preTaxAmount}</td>
              <td className="border px-4 py-2">{postTaxAmount - preTaxAmount}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">{postTaxAmount}</td>
              <td className="border px-4 py-2">{preTaxAmount}</td>
              <td className="border px-4 py-2">{postTaxAmount - preTaxAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onRegister}
        >
          登録
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onEdit}
        >
          訂正
        </button>
        <button
          className="bg-gray-200 text-black px-4 py-2 rounded"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;
```