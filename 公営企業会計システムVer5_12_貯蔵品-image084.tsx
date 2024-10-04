```tsx
import React from 'react';

type FileManagementProps = {
  fiscalYear: string;
  disposalDate: string;
  storageLocation: string;
  department: string;
  itemNumber: string;
  specs: string;
  currentInventory: number;
  unit: string;
  summaryAccountTitle: string;
  remarks: string;
  averageUnitPrice: number;
  appliedUnitPrice: number;
  currentInventoryAmount: number;
  appliedAmount: number;
  evaluationDifference: number;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const FileManagementComponent: React.FC<FileManagementProps> = ({
  fiscalYear,
  disposalDate,
  storageLocation,
  department,
  itemNumber,
  specs,
  currentInventory,
  unit,
  summaryAccountTitle,
  remarks,
  averageUnitPrice,
  appliedUnitPrice,
  currentInventoryAmount,
  appliedAmount,
  evaluationDifference,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-lg font-bold mb-4">たな卸資産価額入力（移動平均）</h2>
      
      <div className="mb-2">
        <label>年度: </label>
        <input className="border p-1" value={fiscalYear} readOnly />
      </div>
      
      <div className="mb-2">
        <label>適用年月日: </label>
        <input className="border p-1" value={disposalDate} readOnly />
      </div>
      
      <div className="mb-2">
        <label>保管場所: </label>
        <input className="border p-1" value={storageLocation} readOnly />
      </div>
      
      <div className="mb-2">
        <label>所属: </label>
        <input className="border p-1" value={department} readOnly />
      </div>
      
      <div className="mb-2">
        <label>品番: </label>
        <input className="border p-1" value={itemNumber} readOnly />
      </div>
      
      <div className="mb-2">
        <label>規格: </label>
        <input className="border p-1" value={specs} readOnly />
      </div>
      
      <div className="mb-2">
        <label>現在庫数量: </label>
        <input className="border p-1" value={currentInventory.toLocaleString()} readOnly />
      </div>
      
      <div className="mb-2">
        <label>単位: </label>
        <input className="border p-1" value={unit} readOnly />
      </div>
      
      <div className="mb-2">
        <label>評価損: </label>
        <input className="border p-1" value={evaluationDifference.toLocaleString()} readOnly />
      </div>
      
      <div className="mb-2">
        <label>摘要: </label>
        <input className="border p-1" value={remarks} readOnly />
      </div>
      
      <div className="flex mb-4">
        <div className="mr-4">
          <button className="bg-blue-500 text-white px-4 py-2" onClick={onRegister}>登録</button>
        </div>
        <div className="mr-4">
          <button className="bg-yellow-500 text-white px-4 py-2" onClick={onEdit}>訂正</button>
        </div>
        <div>
          <button className="bg-red-500 text-white px-4 py-2" onClick={onDelete}>削除</button>
        </div>
      </div>
      
      <div className="bg-white p-4">
        <p>平均単価: {averageUnitPrice.toLocaleString()}</p>
        <p>適用単価: {appliedUnitPrice.toLocaleString()}</p>
        <p>現在庫金額: {currentInventoryAmount.toLocaleString()}</p>
        <p>適用後金額: {appliedAmount.toLocaleString()}</p>
        <p>損金仕訳: {summaryAccountTitle}</p>
      </div>
    </div>
  );
};

export default FileManagementComponent;
```