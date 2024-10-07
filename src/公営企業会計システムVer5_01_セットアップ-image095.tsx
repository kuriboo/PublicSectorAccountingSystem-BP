import React from 'react';

type AccountingFormProps = {
  fiscalYear: number;
  formCode: string;
  budgetCode: string;
  gatherNumber: number;
  gatherFraction: number;
  totalAmount: string;
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
};

const AccountingForm: React.FC<AccountingFormProps> = ({
  fiscalYear,
  formCode,
  budgetCode,
  gatherNumber,
  gatherFraction,
  totalAmount,
  onSubmit,
  onClear,
  onClose,
}) => {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4">損益計算書 貸借対照表集計金額</h2>
      
      <form>
        <label className="block mb-2">
          会計年度
          <input
            type="number"
            value={fiscalYear}
            className="ml-2 p-1 border rounded"
            readOnly
          />
        </label>

        <label className="block mb-2">
          集計表区分コード
          <select className="ml-2 p-1 border rounded" value={formCode} readOnly>
            <option value="06">06 月次貸借対照表</option>
          </select>
        </label>

        <label className="block mb-2">
          予算編成区分
          <select className="ml-2 p-1 border rounded" value={budgetCode} readOnly>
            <option value="6">6 月例</option>
          </select>
        </label>

        <label className="block mb-2">
          集計番号
          <input
            type="number"
            value={gatherNumber}
            className="ml-2 p-1 border rounded"
            readOnly
          />
        </label>

        <label className="block mb-2">
          集計区分
          <input
            type="number"
            value={gatherFraction}
            className="ml-2 p-1 border rounded"
            readOnly
          />
        </label>

        <div className="block mb-4">
          <span className="block">集計仕訳金額</span>
          <span className="text-xl font-semibold">{totalAmount}</span>
        </div>

        <div className="flex space-x-2">
          <button
            type="button"
            onClick={onSubmit}
            className="p-2 bg-blue-500 text-white rounded"
          >
            OK
          </button>
          
          <button
            type="button"
            onClick={onClear}
            className="p-2 bg-gray-300 text-black rounded"
          >
            クリア
          </button>
          
          <button
            type="button"
            onClick={onClose}
            className="p-2 bg-red-500 text-white rounded"
          >
            終了
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountingForm;
