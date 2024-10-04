import React from 'react';

type TaxDetailProps = {
  debitItems: { category: string; detail: string; description: string }[];
  creditItems: { category: string; detail: string; description: string }[];
  amount: number;
  baseAmount: number;
  taxAmount: number;
  debitIncome: number;
  creditIncome: number;
  settlementRemark: string;
  onCancel: () => void;
};

const TaxDetail: React.FC<TaxDetailProps> = ({
  debitItems,
  creditItems,
  amount,
  baseAmount,
  taxAmount,
  debitIncome,
  creditIncome,
  settlementRemark,
  onCancel,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-semibold">仕訳詳細</h2>
      <div className="flex">
        <div>
          <h3 className="font-bold text-blue-700">借方科目</h3>
          <table className="border-collapse border w-full mb-4">
            <thead>
              <tr>
                <th className="border px-2 py-1">借方科目</th>
                <th className="border px-2 py-1">借方細節</th>
                <th className="border px-2 py-1">借方明細</th>
              </tr>
            </thead>
            <tbody>
              {debitItems.map((item, index) => (
                <tr key={index}>
                  <td className="border px-2 py-1">{item.category}</td>
                  <td className="border px-2 py-1">{item.detail}</td>
                  <td className="border px-2 py-1">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="font-bold text-blue-700">貸方科目</h3>
          <table className="border-collapse border w-full mb-4">
            <thead>
              <tr>
                <th className="border px-2 py-1">貸方科目</th>
                <th className="border px-2 py-1">貸方細節</th>
                <th className="border px-2 py-1">貸方明細</th>
              </tr>
            </thead>
            <tbody>
              {creditItems.map((item, index) => (
                <tr key={index}>
                  <td className="border px-2 py-1">{item.category}</td>
                  <td className="border px-2 py-1">{item.detail}</td>
                  <td className="border px-2 py-1">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div className="text-center">
          <div>件数</div>
          <div className="font-bold">1</div>
        </div>
        <div className="text-center">
          <div>税込金額</div>
          <div className="font-bold">{amount.toLocaleString()} 円</div>
        </div>
        <div className="text-center">
          <div>本体金額</div>
          <div className="font-bold">{baseAmount.toLocaleString()} 円</div>
        </div>
        <div className="text-center">
          <div>借方指定收入</div>
          <div className="font-bold">{debitIncome.toLocaleString()} 円</div>
        </div>
        <div className="text-center">
          <div>貸方指定收入</div>
          <div className="font-bold">{creditIncome.toLocaleString()} 円</div>
        </div>
        <div className="text-center">
          <div>仕訳区分</div>
          <div className="font-bold">{settlementRemark}</div>
        </div>
      </div>
      <button onClick={onCancel} className="mt-4 py-1 px-4 bg-gray-300 rounded hover:bg-gray-400">
        キャンセル
      </button>
    </div>
  );
};

export default TaxDetail;