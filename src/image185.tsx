import React from 'react';

type FinanceMasterFormProps = {
  resourceCode: string;
  name: string;
  abbreviation: string;
  accountCode: string;
  projectExpTaxExcl: number;
  projectExpTaxIncl: number;
  officeExpTaxExcl: number;
  officeExpTaxIncl: number;
  accountingCode: string;
  investmentCode: string;
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const FinanceMasterForm: React.FC<FinanceMasterFormProps> = ({
  resourceCode,
  name,
  abbreviation,
  accountCode,
  projectExpTaxExcl,
  projectExpTaxIncl,
  officeExpTaxExcl,
  officeExpTaxIncl,
  accountingCode,
  investmentCode,
  onSubmit,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-8 bg-white max-w-md mx-auto shadow-md rounded-md">
      <h1 className="text-xl font-bold mb-4">財源マスタ</h1>
      <form onSubmit={e => { e.preventDefault(); onSubmit(); }}>
        <div className="mb-4">
          <label className="block mb-2">財源コード</label>
          <input
            type="text"
            value={resourceCode}
            className="border py-2 px-3 w-full"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">名称</label>
          <input
            type="text"
            value={name}
            className="border py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">略称</label>
          <input
            type="text"
            value={abbreviation}
            className="border py-2 px-3 w-full"
          />
        </div>
        {/* Omitted other fields for brevity */}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded">終了</button>
          <button
            type="button"
            onClick={onClear}
            className="px-4 py-2 bg-yellow-200 rounded">クリア</button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded">OK</button>
        </div>
      </form>
    </div>
  );
};

export default FinanceMasterForm;
