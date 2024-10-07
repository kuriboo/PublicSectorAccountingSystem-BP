import React from 'react';

type Props = {
  date: string;
  voucherNumber: string;
  summary: string;
  items: Array<{
    debitAccount: string;
    debitDetail: string;
    debitSubDetail: string;
    creditAccount: string;
    creditDetail: string;
    creditSubDetail: string;
  }>;
  quantity: number;
  taxIncludedAmount: number;
  mainAmount: number;
  taxAmount: number;
  consumptionTaxRate: number;
  onSubmit: () => void;
  onReset: () => void;
};

const EntryForm: React.FC<Props> = ({
  date,
  voucherNumber,
  summary,
  items,
  quantity,
  taxIncludedAmount,
  mainAmount,
  taxAmount,
  consumptionTaxRate,
  onSubmit,
  onReset,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">調定用振替入力</h2>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">伝票日付:</label>
        <input type="text" value={date} readOnly className="border p-2 w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">仕訳:</label>
        <input type="text" value={voucherNumber} readOnly className="border p-2 w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">摘要:</label>
        <input type="text" value={summary} readOnly className="border p-2 w-full" />
      </div>
      <table className="w-full mb-4 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">借方科目</th>
            <th className="border p-2">借方細節</th>
            <th className="border p-2">借方明細</th>
            <th className="border p-2">貸方科目</th>
            <th className="border p-2">貸方細節</th>
            <th className="border p-2">貸方明細</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">{item.debitAccount}</td>
              <td className="border p-2">{item.debitDetail}</td>
              <td className="border p-2">{item.debitSubDetail}</td>
              <td className="border p-2">{item.creditAccount}</td>
              <td className="border p-2">{item.creditDetail}</td>
              <td className="border p-2">{item.creditSubDetail}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">件数:</label>
        <input type="number" value={quantity} readOnly className="border p-2 w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">税込金額:</label>
        <input type="number" value={taxIncludedAmount} readOnly className="border p-2 w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">本体金額:</label>
        <input type="number" value={mainAmount} readOnly className="border p-2 w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">消費税額:</label>
        <input type="number" value={taxAmount} readOnly className="border p-2 w-full" />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">消費税率:</label>
        <input type="number" value={consumptionTaxRate} readOnly className="border p-2 w-full" />
      </div>
      <div className="flex justify-end space-x-4">
        <button 
          onClick={onReset} 
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded"
        >
          クリア
        </button>
        <button 
          onClick={onSubmit} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default EntryForm;
