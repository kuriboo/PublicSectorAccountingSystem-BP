import React, { FC } from 'react';
import classNames from 'classnames';

type LedgerEntry = {
  division: string;
  adjustmentItem: string;
  adjustmentDetail: string;
  adjustmentAmount: number;
  internalTaxAmount: number;
  specifiedIncome: number;
};

type LedgerFormProps = {
  date: string;
  description: string;
  amount: number;
  tax: number;
  entries: LedgerEntry[];
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const LedgerForm: FC<LedgerFormProps> = ({ date, description, amount, tax, entries, onSubmit, onClear, onClose }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">調整入力</h1>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-medium text-gray-700">調定日</label>
          <input type="text" value={date} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" readOnly />
        </div>
        <div>
          <label className="block font-medium text-gray-700">摘要</label>
          <input type="text" value={description} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" readOnly />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-medium text-gray-700">調定金額</label>
          <input type="text" value={amount} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" readOnly />
        </div>
        <div>
          <label className="block font-medium text-gray-700">消費税額</label>
          <input type="text" value={tax} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" readOnly />
        </div>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">区分</th>
            <th className="px-4 py-2 border">調整科目</th>
            <th className="px-4 py-2 border">調整細節</th>
            <th className="px-4 py-2 border">調定金額</th>
            <th className="px-4 py-2 border">内消費税額</th>
            <th className="px-4 py-2 border">特定収入</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{entry.division}</td>
              <td className="px-4 py-2 border">{entry.adjustmentItem}</td>
              <td className="px-4 py-2 border">{entry.adjustmentDetail}</td>
              <td className="px-4 py-2 border">{entry.adjustmentAmount}</td>
              <td className="px-4 py-2 border">{entry.internalTaxAmount}</td>
              <td className="px-4 py-2 border">{entry.specifiedIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">OK</button>
        <button onClick={onClear} className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-md">終了</button>
      </div>
    </div>
  );
};

export default LedgerForm;
```