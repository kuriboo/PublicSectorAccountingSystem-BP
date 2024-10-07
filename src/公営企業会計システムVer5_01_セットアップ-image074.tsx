// components/MasterListForm.tsx

import React from 'react';

type Option = {
  value: string;
  label: string;
};

type MasterListFormProps = {
  accountingYear: string;
  startAccountingYearOptions: Option[];
  endAccountingYearOptions: Option[];
  aggregationSectionOptions: Option[];
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const MasterListForm: React.FC<MasterListFormProps> = ({
  accountingYear,
  startAccountingYearOptions,
  endAccountingYearOptions,
  aggregationSectionOptions,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">月次経営統制表マスタリスト作成</h1>

      <div className="mb-4">
        <label className="inline-block font-semibold w-24">会計年度</label>
        <input type="text" readOnly value={accountingYear} className="border px-2 py-1 w-24 mr-2" />年度
      </div>

      <div className="border p-4 mb-4">
        <h2 className="font-semibold text-lg mb-2">範囲指定</h2>
        
        <div className="flex items-center">
          <label className="w-24">集計表区分</label>
          <select className="border px-2 py-1 mr-2">
            {aggregationSectionOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          ～
          <select className="border px-2 py-1 ml-2">
            {aggregationSectionOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onSubmit}>
          OK
        </button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded-md" onClick={onClear}>
          クリア
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={onClose}>
          終了
        </button>
      </div>
    </div>
  );
};

export default MasterListForm;
