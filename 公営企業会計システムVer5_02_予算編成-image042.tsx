```tsx
import React from 'react';

// 型定義
type AdjustmentProps = {
  year: string;
  correction: number;
  estimation: string;
  businessCode: string;
  policyCode: string;
  policyDescription: string;
  currentCorrection: number;
  preCorrection: number;
  postCorrection: number;
  onRegister: () => void;
  onEdit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AdjustmentComponent: React.FC<AdjustmentProps> = ({
  year,
  correction,
  estimation,
  businessCode,
  policyCode,
  policyDescription,
  currentCorrection,
  preCorrection,
  postCorrection,
  onRegister,
  onEdit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white shadow-md">
      <div className="mb-4">
        <h1 className="text-xl font-bold mb-2">補正事業別査定登録</h1>
        <div className="flex space-x-4">
          <span className="font-semibold">年度:</span>
          <span>{year}</span>
          <span className="font-semibold">補正:</span>
          <span>{correction}</span>
          <span>{estimation}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex space-x-4">
          <span className="font-semibold">事業:</span>
          <span>{businessCode}</span>
        </div>
        <div className="flex space-x-4">
          <span className="font-semibold">施策:</span>
          <span>{policyCode}</span>
        </div>
        <div className="flex space-x-4">
          <span className="font-semibold">施策内訳:</span>
          <span>{policyDescription}</span>
        </div>
      </div>

      <div className="mb-4">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th>税込</th>
              <th>税抜</th>
              <th>消費税</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currentCorrection}</td>
              <td>{preCorrection}</td>
              <td>{postCorrection}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex space-x-2">
        <button 
          className="bg-blue-500 text-white py-1 px-4 rounded" 
          onClick={onRegister}>
          登録
        </button>
        <button 
          className="bg-red-500 text-white py-1 px-4 rounded" 
          onClick={onEdit}>
          訂正
        </button>
        <button 
          className="bg-gray-500 text-white py-1 px-4 rounded" 
          onClick={onClear}>
          クリア
        </button>
        <button 
          className="bg-black text-white py-1 px-4 rounded" 
          onClick={onClose}>
          終了
        </button>
      </div>
    </div>
  );
};

export default AdjustmentComponent;
```