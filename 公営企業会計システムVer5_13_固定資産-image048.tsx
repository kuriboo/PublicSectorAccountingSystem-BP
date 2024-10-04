```tsx
import React from 'react';

// TypeScriptの型定義
interface DataInputFormProps {
  periodStart: string;
  periodEnd: string;
  acquisitionFiscalYear: string;
  currentAmount: number;
  estimatedAmount: number;
  depreciationRate: number;
  residualRate: number;
  onRegister: () => void;
  onClear: () => void;
  onFinish: () => void;
}

// コンポーネント定義
const DataInputForm: React.FC<DataInputFormProps> = ({
  periodStart,
  periodEnd,
  acquisitionFiscalYear,
  currentAmount,
  estimatedAmount,
  depreciationRate,
  residualRate,
  onRegister,
  onClear,
  onFinish,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-4">異動予測データ入力</h2>
      <div className="mb-4">
        <label className="block font-bold mb-1">期間開始:</label>
        <input type="text" value={periodStart} className="w-full p-2 border rounded" readOnly />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-1">期間終了:</label>
        <input type="text" value={periodEnd} className="w-full p-2 border rounded" readOnly />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-1">取得年度:</label>
        <input type="text" value={acquisitionFiscalYear} className="w-full p-2 border rounded" readOnly />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-1">現在:</label>
        <input type="number" value={currentAmount} className="w-full p-2 border rounded" readOnly />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-1">異動:</label>
        <input type="number" value={estimatedAmount} className="w-full p-2 border rounded" readOnly />
      </div>
      <div className="mb-4 flex justify-between">
        <div>
          <label className="block font-bold mb-1">償却率:</label>
          <input type="number" value={depreciationRate} className="p-2 border rounded" readOnly />
        </div>
        <div>
          <label className="block font-bold mb-1">残存率:</label>
          <input type="number" value={residualRate} className="p-2 border rounded" readOnly />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <button onClick={onRegister} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          OK
        </button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          クリア
        </button>
        <button onClick={onFinish} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          終了
        </button>
      </div>
    </div>
  );
};

export default DataInputForm;
```