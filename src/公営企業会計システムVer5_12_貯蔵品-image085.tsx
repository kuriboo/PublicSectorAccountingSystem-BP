// components/AssetInputForm.tsx

import React from 'react';

interface AssetInputFormProps {
  title: string;
  fiscalYear: string;
  applicableDate: string;
  assetNumber?: string;
  evaluationMethod?: string;
  buttonLabels: {
    register: string;
    edit: string;
    delete: string;
    confirm: string;
    cancel: string;
    ok: string;
    clear: string;
    exit: string;
  };
}

const AssetInputForm: React.FC<AssetInputFormProps> = ({
  title,
  fiscalYear,
  applicableDate,
  assetNumber = '',
  evaluationMethod = '',
  buttonLabels,
}) => {
  return (
    <div className="bg-white p-4 shadow-md">
      <header className="bg-blue-500 text-white p-2 rounded">
        <h1 className="text-lg">{title}</h1>
      </header>
      <section className="mt-4">
        <div className="flex mb-2">
          <label className="flex-1 font-semibold">年度:</label>
          <span>{fiscalYear}</span>
        </div>
        <div className="flex mb-2">
          <label className="flex-1 font-semibold">適用年月日:</label>
          <span>{applicableDate}</span>
        </div>
        <div className="flex mb-2">
          <label className="flex-1 font-semibold">品番:</label>
          <input
            type="text"
            value={assetNumber}
            className="border rounded px-2"
            readOnly
          />
        </div>
        <div className="flex mb-2">
          <label className="flex-1 font-semibold">評価方法:</label>
          <input
            type="text"
            value={evaluationMethod}
            className="border rounded px-2"
            readOnly
          />
        </div>
      </section>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 text-white px-3 py-1 rounded">
          {buttonLabels.register}
        </button>
        <button className="bg-yellow-500 text-white px-3 py-1 rounded">
          {buttonLabels.edit}
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded">
          {buttonLabels.delete}
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white px-3 py-1 rounded">
          {buttonLabels.confirm}
        </button>
        <button className="bg-gray-500 text-white px-3 py-1 rounded">
          {buttonLabels.cancel}
        </button>
        <button className="bg-blue-700 text-white px-3 py-1 rounded">
          {buttonLabels.ok}
        </button>
        <button className="bg-purple-500 text-white px-3 py-1 rounded">
          {buttonLabels.clear}
        </button>
        <button className="bg-black text-white px-3 py-1 rounded">
          {buttonLabels.exit}
        </button>
      </div>
    </div>
  );
};

export default AssetInputForm;
```