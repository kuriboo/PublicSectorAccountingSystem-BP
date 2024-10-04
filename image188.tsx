import React from 'react';

// Prop types definition
type TaxFormProps = {
  taxCode?: string;
  startDate?: string;
  taxRate?: number;
  localTaxRate?: number;
  reducedTax?: number;
  isReducedApplicable?: boolean;
  onChange: (field: string, value: string | number | boolean) => void;
  onSubmit: () => void;
  onClear: () => void;
  onExit: () => void;
};

// TaxForm component
const TaxForm: React.FC<TaxFormProps> = ({
  taxCode = '',
  startDate = '',
  taxRate = 0,
  localTaxRate = 0,
  reducedTax = 0,
  isReducedApplicable = false,
  onChange,
  onSubmit,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">消費税マスタ</h2>
      
      <form>
        <div className="mb-2">
          <label className="block text-gray-700">消費税コード</label>
          <input
            type="text"
            value={taxCode}
            onChange={(e) => onChange('taxCode', e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700">適用開始年月日</label>
          <input
            type="text"
            value={startDate}
            onChange={(e) => onChange('startDate', e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700">消費税率及び地方消費税率</label>
          <input
            type="number"
            value={taxRate}
            onChange={(e) => onChange('taxRate', parseFloat(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700">地方消費税率</label>
          <input
            type="number"
            value={localTaxRate}
            onChange={(e) => onChange('localTaxRate', parseFloat(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-2">
          <label className="block text-gray-700">軽減税率</label>
          <input
            type="number"
            value={reducedTax}
            onChange={(e) => onChange('reducedTax', parseFloat(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isReducedApplicable}
              onChange={(e) => onChange('isReducedApplicable', e.target.checked)}
              className="form-checkbox"
            />
            <span className="ml-2">軽減税率とする。</span>
          </label>
        </div>

        <div className="flex space-x-2">
          <button type="button" onClick={onSubmit} className="py-2 px-4 bg-blue-600 text-white rounded-md">
            OK
          </button>
          <button type="button" onClick={onClear} className="py-2 px-4 bg-gray-600 text-white rounded-md">
            クリア
          </button>
          <button type="button" onClick={onExit} className="py-2 px-4 bg-red-600 text-white rounded-md">
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaxForm;