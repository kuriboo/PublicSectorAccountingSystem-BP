import React from 'react';

// 型定義
type BudgetManagementProps = {
  fiscalYear: string;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  managementType: string;
  segment: string;
  startItem: string;
  endItem: string;
  onView: () => void;
  segmentOptions: string[];
  itemCodes: { code: string; segment: string }[];
  onConfirm: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const BudgetManagement: React.FC<BudgetManagementProps> = ({
  fiscalYear,
  onRegister,
  onEdit,
  onDelete,
  managementType,
  segment,
  startItem,
  endItem,
  onView,
  segmentOptions,
  itemCodes,
  onConfirm,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-lg font-bold">年度: </span>
          <span>{fiscalYear}</span>
        </div>
        <div>
          <button className="mx-2" onClick={onRegister}>登録</button>
          <button className="mx-2" onClick={onEdit}>訂正</button>
          <button className="mx-2" onClick={onDelete}>削除</button>
        </div>
      </div>
      <div className="flex mb-4">
        <div className="mr-4">
          <label>管理区分: </label>
          <select value={managementType} className="ml-2 border rounded">
            {segmentOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>セグメント: </label>
          <input type="text" value={segment} className="ml-2 border rounded" />
        </div>
      </div>
      <div className="flex items-center mb-4">
        <label>科目: </label>
        <input type="text" value={startItem} className="ml-2 border rounded" />
        <span className="mx-2">~</span>
        <input type="text" value={endItem} className="border rounded" />
        <button className="ml-2" onClick={onView}>表示</button>
      </div>
      <table className="w-full mb-4 border">
        <thead className="bg-blue-100">
          <tr>
            <th className="border">科目コード</th>
            <th className="border">セグメント</th>
          </tr>
        </thead>
        <tbody>
          {itemCodes.map((item, index) => (
            <tr key={index}>
              <td className="border px-2">{item.code}</td>
              <td className="border px-2">{item.segment}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between">
        <button onClick={onConfirm} className="mx-2">確定</button>
        <button onClick={onClear} className="mx-2">クリア</button>
        <button onClick={onEnd} className="mx-2">終了</button>
      </div>
    </div>
  );
};

export default BudgetManagement;
```