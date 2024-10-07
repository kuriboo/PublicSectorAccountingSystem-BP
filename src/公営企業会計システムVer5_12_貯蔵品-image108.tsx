import React from 'react';

// TypeScriptの型定義
interface InventoryManagementProps {
  storageLocation: string;
  storageLocationName: string;
  unitCode: string;
  unitDescription: string;
  date: string;
  retentionFlag: 'normal' | 'excess';
  entryQuantity: number;
  exitQuantity: number;
  pseudoExitQuantity: number;
  cumulativeInventoryQuantity: number;
  entryAmount: number;
  exitAmount: number;
  cumulativeInventoryAmount: number;
  onEdit: () => void;
  onClear: () => void;
  onConfirm: () => void;
}

// コンポーネント定義
const InventoryManagement: React.FC<InventoryManagementProps> = ({
  storageLocation,
  storageLocationName,
  unitCode,
  unitDescription,
  date,
  retentionFlag,
  entryQuantity,
  exitQuantity,
  pseudoExitQuantity,
  cumulativeInventoryQuantity,
  entryAmount,
  exitAmount,
  cumulativeInventoryAmount,
  onEdit,
  onClear,
  onConfirm
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <div className="text-lg font-bold mb-4">貯蔵月別入出庫保守</div>
      <div className="flex space-x-4 mb-4">
        <div>
          <div className="font-semibold">保管場所</div>
          <div>{storageLocation} {storageLocationName}</div>
        </div>
        <div>
          <div className="font-semibold">単位コード</div>
          <div>{unitCode} {unitDescription}</div>
        </div>
      </div>
      <div className="mb-4">
        <div className="font-semibold">日時</div>
        <div>{date}</div>
      </div>
      <div className="mb-4">
        <div className="font-semibold">保護フラグ</div>
        <div>{retentionFlag === 'normal' ? '通常データ' : '繰越データ'}</div>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <div className="font-semibold">入庫数量</div>
          <div>{entryQuantity}</div>
        </div>
        <div>
          <div className="font-semibold">入庫金額</div>
          <div>{entryAmount.toLocaleString()}</div>
        </div>
        <div>
          <div className="font-semibold">出庫数量</div>
          <div>{exitQuantity}</div>
        </div>
        <div>
          <div className="font-semibold">出庫金額</div>
          <div>{exitAmount.toLocaleString()}</div>
        </div>
        <div>
          <div className="font-semibold">仮出庫数量</div>
          <div>{pseudoExitQuantity}</div>
        </div>
        <div>
          <div className="font-semibold">累積在庫数量</div>
          <div>{cumulativeInventoryQuantity}</div>
        </div>
      </div>
      <div className="mb-4">
        <div className="font-semibold">累積在庫金額</div>
        <div>{cumulativeInventoryAmount.toLocaleString()}</div>
      </div>
      <div className="flex space-x-2">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded" 
          onClick={onEdit}
        >
          編集
        </button>
        <button 
          className="px-4 py-2 bg-gray-500 text-white rounded" 
          onClick={onClear}
        >
          クリア
        </button>
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded" 
          onClick={onConfirm}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default InventoryManagement;
