import React from 'react';

// Propsの型定義
interface TaxSummaryProps {
  totalAmount: number;
  taxExcludedAmount: number;
  consumptionTaxAmount: number;
  taxDetails: Array<{
    category: string;
    taxRate: string;
    taxIncludedAmount: number;
    taxExcludedAmount: number;
    consumptionTaxAmount: number;
  }>;
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const TaxSummary: React.FC<TaxSummaryProps> = ({
  totalAmount,
  taxExcludedAmount,
  consumptionTaxAmount,
  taxDetails,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <div className="bg-white p-4 border rounded shadow-lg max-w-md mx-auto">
      {/* 合計金額部分 */}
      <div className="mb-4">
        <div className="text-base font-bold mb-2">入力金額合計</div>
        <div className="flex justify-between">
          <span>税込額</span>
          <span>{totalAmount.toLocaleString()}円</span>
        </div>
        <div className="flex justify-between">
          <span>税抜額</span>
          <span>{taxExcludedAmount.toLocaleString()}円</span>
        </div>
        <div className="flex justify-between">
          <span>消費税額</span>
          <span>{consumptionTaxAmount.toLocaleString()}円</span>
        </div>
      </div>

      {/* 税区分テーブル */}
      <table className="w-full text-left border-collapse mb-4">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-2 border">税区分</th>
            <th className="p-2 border">消費税率</th>
            <th className="p-2 border">税込額</th>
            <th className="p-2 border">税抜額</th>
            <th className="p-2 border">消費税額</th>
          </tr>
        </thead>
        <tbody>
          {taxDetails.map((detail, index) => (
            <tr key={index} className="hover:bg-blue-100">
              <td className="p-2 border">{detail.category}</td>
              <td className="p-2 border">{detail.taxRate}</td>
              <td className="p-2 border">{detail.taxIncludedAmount.toLocaleString()}</td>
              <td className="p-2 border">{detail.taxExcludedAmount.toLocaleString()}</td>
              <td className="p-2 border">{detail.consumptionTaxAmount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ボタン */}
      <div className="flex justify-end space-x-2">
        <button onClick={onOk} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">OK</button>
        <button onClick={onClear} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">クリア</button>
        <button onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">キャンセル</button>
      </div>
    </div>
  );
};

export default TaxSummary;
