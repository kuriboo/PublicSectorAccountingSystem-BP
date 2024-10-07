import React from 'react';

type RecordProps = {
  fiscalYear: string;
  removalDate: string;
  assetNumber: string;
  assetName: string;
  description: string;
  records: {
    receiptNumber: number;
    debit: string;
    credit: string;
    amount: number;
  }[];
};

const RecordTable: React.FC<RecordProps> = ({
  fiscalYear,
  removalDate,
  assetNumber,
  assetName,
  description,
  records,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      {/* Header Information */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">自動仕訳作成処理 (除却) 解除入力</h2>
        <p className="text-sm">当期会計年度: {fiscalYear}</p>
        <p className="text-sm">除却年月日: {removalDate}</p>
        <p className="text-sm">資産番号: {assetNumber}</p>
        <p className="text-sm">資産名称: {assetName}</p>
        <p className="text-sm">摘要: {description}</p>
      </div>

      {/* Records Table */}
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">伝票番号</th>
            <th className="border border-gray-300 px-4 py-2">借方科目</th>
            <th className="border border-gray-300 px-4 py-2">貸方科目</th>
            <th className="border border-gray-300 px-4 py-2">金額</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{record.receiptNumber}</td>
              <td className="border border-gray-300 px-4 py-2">{record.debit}</td>
              <td className="border border-gray-300 px-4 py-2">{record.credit}</td>
              <td className="border border-gray-300 px-4 py-2">{record.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordTable;
