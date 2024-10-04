```tsx
import React from 'react';

type FinanceMasterProps = {
  financeCode: string;
  name: string;
  shortName: string;
  recognitionCode: string;
  totalProjectAmount: number;
  totalProjectTax: number;
  totalOfficeCostAmount: number;
  totalOfficeTax: number;
  calculationCode: string;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const FinanceMaster: React.FC<FinanceMasterProps> = ({
  financeCode,
  name,
  shortName,
  recognitionCode,
  totalProjectAmount,
  totalProjectTax,
  totalOfficeCostAmount,
  totalOfficeTax,
  calculationCode,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-white border rounded shadow">
      <h2 className="text-lg font-bold mb-4">財源マスタ</h2>
      <div className="mb-4">
        <label className="block">財源コード</label>
        <input 
          type="text" 
          value={financeCode} 
          className="border p-1" 
          readOnly 
        />
      </div>
      <div className="mb-4">
        <label className="block">名称</label>
        <input 
          type="text" 
          value={name} 
          className="border p-1" 
          readOnly 
        />
      </div>
      <div className="mb-4">
        <label className="block">略称</label>
        <input 
          type="text" 
          value={shortName} 
          className="border p-1" 
          readOnly 
        />
      </div>
      <div className="mb-4">
        <label className="block">償却区分コード</label>
        <input 
          type="text" 
          value={recognitionCode} 
          className="border p-1" 
          readOnly 
        />
      </div>
      <div className="mb-4">
        <label className="block">総工事費</label>
        <div className="flex space-x-2">
          <input 
            type="text" 
            value={totalProjectAmount} 
            className="border p-1" 
            readOnly 
          />
          <label className="block">消費税額</label>
          <input 
            type="text" 
            value={totalProjectTax} 
            className="border p-1" 
            readOnly 
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block">総事務費</label>
        <div className="flex space-x-2">
          <input 
            type="text" 
            value={totalOfficeCostAmount} 
            className="border p-1" 
            readOnly 
          />
          <label className="block">消費税額</label>
          <input 
            type="text" 
            value={totalOfficeTax} 
            className="border p-1" 
            readOnly 
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block">計上区分コード</label>
        <input 
          type="text" 
          value={calculationCode} 
          className="border p-1" 
          readOnly 
        />
      </div>
      <div className="flex space-x-2">
        <button onClick={onRegister} className="bg-blue-500 text-white p-2 rounded">登録</button>
        <button onClick={onEdit} className="bg-yellow-500 text-white p-2 rounded">訂正</button>
        <button onClick={onDelete} className="bg-red-500 text-white p-2 rounded">削除</button>
      </div>
    </div>
  );
};

export default FinanceMaster;
```