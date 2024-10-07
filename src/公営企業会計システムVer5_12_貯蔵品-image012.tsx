import React from 'react';

// TypeScriptの型定義
type ContractFormProps = {
  processingDate?: string;
  managementLocation?: string;
  owner?: string;
  contractOrderNumber?: string;
  contractMethod?: string;
  contractorCode?: string;
  estimateFiscalYear?: string;
  deliveryDate?: string;
  constructionName?: string;
  summary?: string;
  items?: {
    itemCode: string;
    itemName: string;
    specification: string;
    quantity: number;
    unit: string;
    amount: number;
  }[];
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

// 再利用可能なコンポーネント
const ContractForm: React.FC<ContractFormProps> = ({
  processingDate,
  managementLocation,
  owner,
  contractOrderNumber,
  contractMethod,
  contractorCode,
  estimateFiscalYear,
  deliveryDate,
  constructionName,
  summary,
  items,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">契約発注入力</h1>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">処理年月日</label>
        <input type="text" value={processingDate} className="border rounded w-full p-2" readOnly/>
      </div>
      <div className="flex justify-between mb-4">
        <div>
          <label className="block text-sm font-bold mb-2">保管場所</label>
          <input type="text" value={managementLocation} className="border rounded p-2" readOnly/>
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">所属</label>
          <input type="text" value={owner} className="border rounded p-2" readOnly/>
        </div>
      </div>
      {/* 他のフィールドも同様に */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">契約発注番号</label>
        <input type="text" value={contractOrderNumber} className="border rounded w-full p-2" readOnly/>
      </div>
      {/* 見積年度、入庫予定日など */}
      {items && (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border">品番</th>
              <th className="px-4 py-2 border">品名</th>
              <th className="px-4 py-2 border">規格</th>
              <th className="px-4 py-2 border">数量</th>
              <th className="px-4 py-2 border">単位</th>
              <th className="px-4 py-2 border">金額</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.itemCode}</td>
                <td className="border px-4 py-2">{item.itemName}</td>
                <td className="border px-4 py-2">{item.specification}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">{item.unit}</td>
                <td className="border px-4 py-2">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="flex justify-end space-x-4 mt-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white p-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white p-2 rounded">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white p-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ContractForm;
