// ContractInputForm.tsx
import React from 'react';

// TypeScript type definitions for component props
type ContractInputFormProps = {
  processingDate: string;
  belonging: string;
  contractYear: number;
  budgetYear: number;
  expectedDate: string;
  placeCode: string;
  workName: string;
  description: string;
  productNumber: string;
  productName: string;
  specification: string;
  quantity: number;
  unitPrice: number;
  taxRate: number;
  totalAmount: number;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const ContractInputForm: React.FC<ContractInputFormProps> = ({
  processingDate,
  belonging,
  contractYear,
  budgetYear,
  expectedDate,
  placeCode,
  workName,
  description,
  productNumber,
  productName,
  specification,
  quantity,
  unitPrice,
  taxRate,
  totalAmount,
  onRegister,
  onEdit,
  onDelete,
  onClear,
  onEnd,
}) => {
  // Calculate tax and total
  const taxAmount = Math.round((unitPrice * quantity * taxRate) / 100);
  const totalWithTax = totalAmount + taxAmount;

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg max-w-2xl">
      <div className="mb-4">
        <h2 className="text-lg font-bold">契約発注入力</h2>
        <div className="flex justify-between">
          <div>
            <label>処理年月日: </label>
            <span>{processingDate}</span>
          </div>
          <div>
            <label>所属: </label>
            <span>{belonging}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <label>契約年度: </label>
            <span>{contractYear}</span>
          </div>
          <div>
            <label>見積年度: </label>
            <span>{budgetYear}</span>
          </div>
        </div>
        <div>
          <label>入庫予定日: </label>
          <span>{expectedDate}</span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">工事名場所</h3>
        <div>
          <label>場所コード: </label>
          <span>{placeCode}</span>
        </div>
        <div>
          <label>工事名: </label>
          <span>{workName}</span>
        </div>
        <div>
          <label>摘要: </label>
          <span>{description}</span>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">品名一覧</h3>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border">品番</th>
              <th className="border">品名</th>
              <th className="border">規格</th>
              <th className="border">数量</th>
              <th className="border">単価</th>
              <th className="border">金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border">{productNumber}</td>
              <td className="border">{productName}</td>
              <td className="border">{specification}</td>
              <td className="border">{quantity}</td>
              <td className="border">{unitPrice}</td>
              <td className="border">{totalAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mb-4">
        <div>
          <label>消費税率: </label>
          <span>{taxRate}%</span>
        </div>
        <div>
          <label>消費税額: </label>
          <span>{taxAmount}</span>
        </div>
        <div>
          <label>税込合計: </label>
          <span>{totalWithTax}</span>
        </div>
      </div>

      <div className="flex justify-end">
        <button onClick={onRegister} className="mx-2 bg-blue-500 text-white px-4 py-2 rounded">
          登録
        </button>
        <button onClick={onEdit} className="mx-2 bg-green-500 text-white px-4 py-2 rounded">
          訂正
        </button>
        <button onClick={onDelete} className="mx-2 bg-red-500 text-white px-4 py-2 rounded">
          削除
        </button>
        <button onClick={onClear} className="mx-2 bg-gray-500 text-white px-4 py-2 rounded">
          クリア
        </button>
        <button onClick={onEnd} className="mx-2 bg-black text-white px-4 py-2 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default ContractInputForm;
