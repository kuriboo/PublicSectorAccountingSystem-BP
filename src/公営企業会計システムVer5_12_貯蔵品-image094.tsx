// types.ts
export interface PriceMasterProps {
  fiscalYear: string;
  registrationMode: 'register' | 'edit' | 'delete';
  unitPriceCode: string;
  unitName: string;
  unitSpec: string;
  unit: string;
  departmentCode: string;
  departmentName: string;
  priceRecords: { startDate: string; price: string }[];
  onPreviousClick: () => void;
  onNextClick: () => void;
  onOkClick: () => void;
  onClearClick: () => void;
  onExitClick: () => void;
}

// PriceMaster.tsx
import React from 'react';
import { PriceMasterProps } from './types';

const PriceMaster: React.FC<PriceMasterProps> = ({
  fiscalYear,
  registrationMode,
  unitPriceCode,
  unitName,
  unitSpec,
  unit,
  departmentCode,
  departmentName,
  priceRecords,
  onPreviousClick,
  onNextClick,
  onOkClick,
  onClearClick,
  onExitClick,
}) => {
  return (
    <div className="p-4 bg-white">
      {/* Header */}
      <div className="flex justify-between">
        <div>年度: {fiscalYear}</div>
        <div className="space-x-4">
          <button className={registrationMode === 'register' ? 'bg-blue-500' : ''}>登録</button>
          <button className={registrationMode === 'edit' ? 'bg-blue-500' : ''}>訂正</button>
          <button className={registrationMode === 'delete' ? 'bg-blue-500' : ''}>削除</button>
        </div>
      </div>

      {/* Unit Price Info */}
      <div className="mt-4 p-4 border rounded">
        <div>
          <label>単価名称:</label>
          <input type="text" value={unitPriceCode} readOnly className="border m-2 p-1" />
          <span>{unitName}</span>
        </div>
        <div>
          <label>単価規格:</label>
          <input type="text" value={unitSpec} readOnly className="border m-2 p-1" />
        </div>
        <div>
          <label>単位:</label>
          <input type="text" value={unit} readOnly className="border m-2 p-1" />
        </div>
        <div>
          <label>所属:</label>
          <input type="text" value={departmentCode} readOnly className="border m-2 p-1" />
          <span>{departmentName}</span>
        </div>
      </div>

      {/* Price Records */}
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th>適用開始年月日</th>
            <th>単価</th>
          </tr>
        </thead>
        <tbody>
          {priceRecords.map((record, index) => (
            <tr key={index} className="border-b">
              <td>{record.startDate}</td>
              <td>{record.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons */}
      <div className="mt-4 space-x-4">
        <button onClick={onPreviousClick}>前データ</button>
        <button onClick={onNextClick}>次データ</button>
        <button onClick={onOkClick}>OK</button>
        <button onClick={onClearClick}>クリア</button>
        <button onClick={onExitClick}>終了</button>
      </div>
    </div>
  );
};

export default PriceMaster;
```