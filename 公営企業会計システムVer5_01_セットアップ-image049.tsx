```tsx
import React from 'react';

type FiscalComponentProps = {
  fiscalYear: number;
  startDept: number;
  endDept: number;
  startBudgetItem: number;
  endBudgetItem: number;
  onConfirm: () => void;
  onClear: () => void;
  onClose: () => void;
};

const FiscalComponent: React.FC<FiscalComponentProps> = ({
  fiscalYear,
  startDept,
  endDept,
  startBudgetItem,
  endBudgetItem,
  onConfirm,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 rounded-md shadow-md bg-white max-w-md">
      <h2 className="text-lg font-bold mb-4">事業別予算科目マスタリスト</h2>
      
      <div className="mb-4">
        <label className="block mb-2">年度: {fiscalYear}</label>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center">
          <label className="mr-4">所属</label>
          <button className="border rounded px-2 py-1 mr-4">~</button>
          <input 
            type="number" 
            className="border rounded px-2 py-1 mr-2 w-24"
            value={startDept}
            readOnly
          />
          <span>~</span>
          <input 
            type="number" 
            className="border rounded px-2 py-1 ml-2 w-24"
            value={endDept}
            readOnly
          />
        </div>
        
        <div className="flex items-center mt-4">
          <label className="mr-4">事業科目</label>
          <button className="border rounded px-2 py-1 mr-4">~</button>
          <input 
            type="number" 
            className="border rounded px-2 py-1 mr-2 w-24"
            value={startBudgetItem}
            readOnly
          />
          <span>~</span>
          <input 
            type="number" 
            className="border rounded px-2 py-1 ml-2 w-24"
            value={endBudgetItem}
            readOnly
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4 mt-6">
        <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={onConfirm}>
          OK
        </button>
        <button className="bg-gray-500 text-white px-3 py-1 rounded" onClick={onClear}>
          クリア
        </button>
        <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={onClose}>
          終了
        </button>
      </div>
    </div>
  );
};

export default FiscalComponent;
```