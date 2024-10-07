import React from 'react';

// 型定義
interface InventoryInputProps {
  inventoryDate?: string;
  storageLocation?: string;
  fiscalYear?: string;
  inventoryNumber?: number;
  budgetLimit?: number;
  burdenCumulative?: number;
  burdenRemaining?: number;
  scheduledCumulative?: number;
  scheduledRemaining?: number;
  onRegister?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

// コンポーネント
const InventoryInput: React.FC<InventoryInputProps> = ({
  inventoryDate,
  storageLocation,
  fiscalYear,
  inventoryNumber,
  budgetLimit,
  burdenCumulative,
  burdenRemaining,
  scheduledCumulative,
  scheduledRemaining,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label>出庫日</label>
          <input type="text" value={inventoryDate} className="border rounded px-2" readOnly />
        </div>
        <div className="flex flex-col">
          <label>保管場所</label>
          <input type="text" value={storageLocation} className="border rounded px-2" readOnly />
        </div>
        <div className="flex flex-col">
          <label>年度</label>
          <input type="text" value={fiscalYear} className="border rounded px-2" readOnly />
        </div>
        <div className="flex flex-col">
          <label>入出庫番号</label>
          <input type="text" value={inventoryNumber} className="border rounded px-2" readOnly />
        </div>
      </div>
      <div className="mt-4 flex gap-4">
        <div className="flex flex-col">
          <label>予算額</label>
          <input type="text" value={budgetLimit} className="border rounded px-2" readOnly />
        </div>
        <div className="flex flex-col">
          <label>負担累計</label>
          <input type="text" value={burdenCumulative} className="border rounded px-2" readOnly />
        </div>
        <div className="flex flex-col">
          <label>負担残額</label>
          <input type="text" value={burdenRemaining} className="border rounded px-2" readOnly />
        </div>
        <div className="flex flex-col">
          <label>予定累計</label>
          <input type="text" value={scheduledCumulative} className="border rounded px-2" readOnly />
        </div>
        <div className="flex flex-col">
          <label>予定残額</label>
          <input type="text" value={scheduledRemaining} className="border rounded px-2" readOnly />
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={onRegister} className="bg-blue-500 text-white py-2 px-4 rounded">登録</button>
        <button onClick={onEdit} className="bg-gray-500 text-white py-2 px-4 rounded">編集</button>
        <button onClick={onDelete} className="bg-red-500 text-white py-2 px-4 rounded">削除</button>
      </div>
    </div>
  );
};

export default InventoryInput;
```