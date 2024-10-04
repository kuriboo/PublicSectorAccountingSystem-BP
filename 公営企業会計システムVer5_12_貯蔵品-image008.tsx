```tsx
import React from 'react';

type InventoryFormProps = {
  processingDate: string;
  storageLocation: string;
  possession: string;
  budgetClassification: string;
  industry: string;
  constructionSite: string;
  summary: string;
  details: Detail[];
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

type Detail = {
  itemCode: string;
  itemName: string;
  specification: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  amount: number;
};

const InventoryForm: React.FC<InventoryFormProps> = ({
  processingDate,
  storageLocation,
  possession,
  budgetClassification,
  industry,
  constructionSite,
  summary,
  details,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      {/* Form Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">戻し入庫入力 (移動平均)</h2>
        <p>処理年月日: {processingDate}</p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>保管場所: {storageLocation}</p>
        </div>
        <div>
          <p>所属: {possession}</p>
        </div>
        <div>
          <p>入庫区分: {budgetClassification}</p>
        </div>
        <div>
          <p>業者: {industry}</p>
        </div>
        <div>
          <p>工事名場所: {constructionSite}</p>
        </div>
        <div>
          <p>摘要: {summary}</p>
        </div>
      </div>

      {/* Details Table */}
      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th>品番</th>
            <th>品名</th>
            <th>規格</th>
            <th>数量</th>
            <th>単位</th>
            <th>単価</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index} className="border-t">
              <td>{detail.itemCode}</td>
              <td>{detail.itemName}</td>
              <td>{detail.specification}</td>
              <td>{detail.quantity}</td>
              <td>{detail.unit}</td>
              <td>{detail.unitPrice.toFixed(2)}</td>
              <td>{detail.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Buttons */}
      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 mr-2 bg-gray-300 hover:bg-gray-400"
          onClick={onClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 mr-2 bg-blue-500 text-white hover:bg-blue-600"
          onClick={onSubmit}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white hover:bg-red-600"
          onClick={onClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default InventoryForm;
```