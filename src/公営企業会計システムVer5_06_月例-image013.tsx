import React from 'react';

type Props = {
  fiscalYear: string;
  voucherNumber: string;
  voucherDate: string;
  description: string;
  debitAccount: string;
  debitDetail: string;
  creditAccount: string;
  creditDetail: string;
  taxRate: string;
  taxIncludedAmount: string;
  consumptionTaxAmount: string;
  settlementType: '期中仕訳' | '決算仕訳';
  onOk: () => void;
  onClear: () => void;
  onExit: () => void;
};

const AccountingEntryForm: React.FC<Props> = ({
  fiscalYear,
  voucherNumber,
  voucherDate,
  description,
  debitAccount,
  debitDetail,
  creditAccount,
  creditDetail,
  taxRate,
  taxIncludedAmount,
  consumptionTaxAmount,
  settlementType,
  onOk,
  onClear,
  onExit,
}) => {
  return (
    <div className="p-4 border rounded shadow-md max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">振替日締解除入力</h1>
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block text-sm font-medium">年度</label>
          <input
            type="text"
            value={fiscalYear}
            readOnly
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">伝票番号</label>
          <input
            type="text"
            value={voucherNumber}
            readOnly
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">伝票日付</label>
        <input
          type="text"
          value={voucherDate}
          readOnly
          className="mt-1 block w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">摘要</label>
        <textarea
          value={description}
          readOnly
          className="mt-1 block w-full px-3 py-2 border rounded-md h-20"
        />
      </div>
      <div className="mb-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">借方科目</th>
              <th className="px-4 py-2">借方細部</th>
              <th className="px-4 py-2">貸方科目</th>
              <th className="px-4 py-2">貸方細部</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">{debitAccount}</td>
              <td className="border px-4 py-2">{debitDetail}</td>
              <td className="border px-4 py-2">{creditAccount}</td>
              <td className="border px-4 py-2">{creditDetail}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex mb-4">
        <div className="mr-4">
          <label className="block text-sm font-medium">消費税率</label>
          <input
            type="text"
            value={taxRate}
            readOnly
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">税込金額</label>
          <input
            type="text"
            value={taxIncludedAmount}
            readOnly
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">消費税額</label>
        <input
          type="text"
          value={consumptionTaxAmount}
          readOnly
          className="mt-1 block w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <fieldset className="flex space-x-4">
          <legend className="block text-sm font-medium">仕訳区分</legend>
          <div>
            <label>
              <input
                type="radio"
                checked={settlementType === '期中仕訳'}
                readOnly
              />
              期中仕訳
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                checked={settlementType === '決算仕訳'}
                readOnly
              />
              決算仕訳
            </label>
          </div>
        </fieldset>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onOk}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          OK
        </button>
        <button
          onClick={onClear}
          className="bg-gray-300 text-black px-4 py-2 rounded-md"
        >
          クリア
        </button>
        <button
          onClick={onExit}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          終了
        </button>
      </div>
    </div>
  );
};

export default AccountingEntryForm;
