```tsx
import React from 'react';

type AssetInputProps = {
  assetNumber: string;
  assetName: string;
  originalValue: number;
  currentAmount: number;
  currentAmountValue: number;
  correctedAmount: number;
  correctedValue: number;
  onConfirm: () => void;
  onCancel: () => void;
};

const AssetInput: React.FC<AssetInputProps> = ({
  assetNumber,
  assetName,
  originalValue,
  currentAmount,
  currentAmountValue,
  correctedAmount,
  correctedValue,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="m-4 p-4 border rounded shadow-md">
      {/* Asset Information */}
      <div className="mb-4">
        <div>
          <span className="font-bold">資産番号: </span>
          {assetNumber}
        </div>
        <div>
          <span className="font-bold">資産名称: </span>
          {assetName}
        </div>
        <div>
          <span className="font-bold">更正後帳簿原価: </span>
          {originalValue.toLocaleString()}
        </div>
      </div>
      
      {/* Table header for structure details */}
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">行番号</th>
            <th className="border p-2">構造内容</th>
            <th className="border p-2">現在数量</th>
            <th className="border p-2">単位</th>
            <th className="border p-2">現在金額</th>
            <th className="border p-2">更正後数量</th>
            <th className="border p-2">更正後金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">構造内容</td>
            <td className="border p-2">{currentAmount.toFixed(2)}</td>
            <td className="border p-2">1</td>
            <td className="border p-2">{currentAmountValue.toLocaleString()}</td>
            <td className="border p-2">{correctedAmount.toFixed(2)}</td>
            <td className="border p-2">{correctedValue.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      {/* Input fields */}
      <div className="mt-4">
        <div className="mb-2">
          <label className="block">現在数量</label>
          <input 
            type="number" 
            className="border p-1 w-full"
            readOnly 
            value={currentAmount.toFixed(2)} 
          />
        </div>
        <div className="mb-2">
          <label className="block">更正後数量</label>
          <input 
            type="number" 
            className="border p-1 w-full"
            readOnly 
            value={correctedAmount.toFixed(2)} 
          />
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <button 
            onClick={onConfirm}
            className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
          >
            行確定
          </button>
          <button 
            onClick={onCancel}
            className="bg-gray-400 text-white py-1 px-4 rounded hover:bg-gray-500"
          >
            行キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetInput;
```