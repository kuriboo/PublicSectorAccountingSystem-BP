```tsx
import React from 'react';

// TypeScriptの型定義
interface FinanceMasterProps {
  code: string;
  name: string;
  abbreviation: string;
  creditDivisionCode: number;
  totalConstructionCost: number;
  consumptionTaxConstruction: number;
  totalAdministrativeCost: number;
  consumptionTaxAdministrative: number;
  calculationDivisionCode: number;
  onSubmit: () => void;
  onClear: () => void;
  onEnd: () => void;
}

const FinanceMaster: React.FC<FinanceMasterProps> = ({
  code,
  name,
  abbreviation,
  creditDivisionCode,
  totalConstructionCost,
  consumptionTaxConstruction,
  totalAdministrativeCost,
  consumptionTaxAdministrative,
  calculationDivisionCode,
  onSubmit,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <div className="mb-4">
        <label className="block text-gray-700">財源コード</label>
        <input 
          type="text" 
          value={code} 
          className="w-full p-2 border border-gray-300 rounded" 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">名称</label>
        <input 
          type="text" 
          value={name} 
          className="w-full p-2 border border-gray-300 rounded" 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">略称</label>
        <input 
          type="text" 
          value={abbreviation} 
          className="w-full p-2 border border-gray-300 rounded" 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">償却区分コード</label>
        <input 
          type="number" 
          value={creditDivisionCode} 
          className="w-full p-2 border border-gray-300 rounded" 
        />
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block text-gray-700">総工事費</label>
          <input
            type="number"
            value={totalConstructionCost}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block text-gray-700">消費税額</label>
          <input
            type="number"
            value={consumptionTaxConstruction}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block text-gray-700">総事務費</label>
          <input
            type="number"
            value={totalAdministrativeCost}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block text-gray-700">消費税額</label>
          <input
            type="number"
            value={consumptionTaxAdministrative}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">計上区分コード</label>
        <input 
          type="number" 
          value={calculationDivisionCode} 
          className="w-full p-2 border border-gray-300 rounded" 
        />
      </div>
      <div className="flex justify-between">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onEnd} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default FinanceMaster;
```