import React from 'react';

// 型定義
type InventoryInputProps = {
  title?: string;
  year?: number;
  fiscalYear?: number;
  registerNumber?: number;
  inventoryNumber?: number;
  decisionSection?: string;
  manager?: string;
  contractNumber?: number;
  supplier?: string;
  workSite?: string;
  summary?: string;
  items?: InventoryItem[];
};

type InventoryItem = {
  itemNumber: string;
  itemName: string;
  specification: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
  receiptScheduledDate: string;
  remainingQuantity: number;
};

// コンポーネント
const InventoryInput: React.FC<InventoryInputProps> = ({
  title = '発注済入庫入力（移動平均）',
  year,
  fiscalYear,
  registerNumber,
  inventoryNumber,
  decisionSection,
  manager,
  contractNumber,
  supplier = '',
  workSite = '',
  summary = '',
  items = [],
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>年度</label>
          <p>{year}</p>
        </div>
        <div>
          <label>発注年度</label>
          <p>{fiscalYear}</p>
        </div>
        <div>
          <label>伝票番号</label>
          <p>{registerNumber}</p>
        </div>
        <div>
          <label>入出庫番号</label>
          <p>{inventoryNumber}</p>
        </div>
        <div>
          <label>決裁区分</label>
          <p>{decisionSection}</p>
        </div>
        <div>
          <label>管理者</label>
          <p>{manager}</p>
        </div>
        <div>
          <label>契約発注番号</label>
          <p>{contractNumber}</p>
        </div>
        <div>
          <label>業者</label>
          <p>{supplier}</p>
        </div>
        <div>
          <label>工事名場所</label>
          <p>{workSite}</p>
        </div>
        <div>
          <label>摘要</label>
          <p>{summary}</p>
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">品番</th>
            <th className="py-2">品名</th>
            <th className="py-2">規格</th>
            <th className="py-2">入庫数</th>
            <th className="py-2">単価</th>
            <th className="py-2">金額</th>
            <th className="py-2">入庫予定日</th>
            <th className="py-2">発注残数</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">{item.itemNumber}</td>
              <td className="py-2">{item.itemName}</td>
              <td className="py-2">{item.specification}</td>
              <td className="py-2">{item.quantity}</td>
              <td className="py-2">{item.unitPrice}</td>
              <td className="py-2">{item.totalAmount}</td>
              <td className="py-2">{item.receiptScheduledDate}</td>
              <td className="py-2">{item.remainingQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryInput;