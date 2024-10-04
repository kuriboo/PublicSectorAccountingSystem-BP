```tsx
import React from 'react';

// Props interface
interface TaxAdjustmentFormProps {
  fiscalYear?: string;
  startDate?: string;
  endDate?: string;
  docType?: string;
  docNumberFrom?: number;
  docNumberTo?: number;
  taxGroupCode?: string;
  consumptionTaxRate?: number;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

// Component definition
const TaxAdjustmentForm: React.FC<TaxAdjustmentFormProps> = ({
  fiscalYear = '平成29年度',
  startDate = '平成29年04月01日',
  endDate = '平成29年03月31日',
  docType = '伝票発生源区分',
  docNumberFrom = 0,
  docNumberTo = 999999,
  taxGroupCode = '05',
  consumptionTaxRate = 8,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-xl font-bold text-center mb-4">消費税率変更正入力</h1>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">伝票年度</label>
          <input
            type="text"
            defaultValue={fiscalYear}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">伝票日付</label>
          <input
            type="text"
            defaultValue={`${startDate} ~ ${endDate}`}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">伝票種別</label>
          <input
            type="text"
            defaultValue={docType}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">伝票番号</label>
          <input
            type="text"
            defaultValue={`${docNumberFrom} ~ ${docNumberTo}`}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">予算科目コード</label>
          <input
            type="text"
            defaultValue={taxGroupCode}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">消費税率</label>
          <input
            type="number"
            defaultValue={consumptionTaxRate}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      
      <div className="flex justify-end space-x-2 mt-4">
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md">OK</button>
        <button
          onClick={onClear}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md">クリア</button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded-md">終了</button>
      </div>
    </div>
  );
};

export default TaxAdjustmentForm;
```