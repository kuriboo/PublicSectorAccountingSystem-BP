import React from "react";

interface AccountInfo {
  code: string;
  name: string;
  bank: string;
  branch: string;
  accountNumber: string;
}

interface Props {
  title: string;
  decisionAmount: number;
  accounts: AccountInfo[];
  totalAmount: number;
  transferableAmount: number;
  additionalAmount: number;
}

const AccountComponent: React.FC<Props> = ({
  title,
  decisionAmount,
  accounts,
  totalAmount,
  transferableAmount,
  additionalAmount,
}) => {
  return (
    <div className="p-4 bg-gray-100 text-sm font-medium">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl">{title}</h1>
        <div className="text-blue-900">決定額計 {decisionAmount.toLocaleString()} 円</div>
      </div>

      <table className="w-full mb-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-200">
            <th className="border border-gray-300 p-2">相手先コード</th>
            <th className="border border-gray-300 p-2">相手先名称</th>
            <th className="border border-gray-300 p-2">銀行</th>
            <th className="border border-gray-300 p-2">支店</th>
            <th className="border border-gray-300 p-2">口座番号</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{account.code}</td>
              <td className="border border-gray-300 p-2">{account.name}</td>
              <td className="border border-gray-300 p-2">{account.bank}</td>
              <td className="border border-gray-300 p-2">{account.branch}</td>
              <td className="border border-gray-300 p-2">{account.accountNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div>計 {totalAmount.toLocaleString()}</div>
        <div>振込先情報</div>
      </div>

      <div className="mt-4 flex">
        <div className="mr-2">
          <label>支払金額</label>
          <input
            type="text"
            value={transferableAmount}
            readOnly
            className="ml-2 border border-gray-300 p-1"
          />
        </div>
        <div className="mr-2">
          <label>控除額</label>
          <input
            type="text"
            value={additionalAmount}
            readOnly
            className="ml-2 border border-gray-300 p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountComponent;
