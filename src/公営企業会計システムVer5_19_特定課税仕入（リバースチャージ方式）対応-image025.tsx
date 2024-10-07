import React from 'react';

// TypeScriptの型定義
type TaxCalculationProps = {
  taxPeriod: string;
  taxpayerName: string;
  taxAmounts: {
    generalSale: number;
    exemptedSale: number;
    exportedGoods: number;
    nonTaxedSale: number;
    assetTransferAmount: number;
    taxedDifferential: number;
    importTaxable: number;
  };
  currency: string;
};

// 再利用可能なコンポーネント
const TaxCalculationTable: React.FC<TaxCalculationProps> = ({
  taxPeriod,
  taxpayerName,
  taxAmounts,
  currency
}) => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-lg font-bold mb-4">課税売上割合・控除対象仕入税額等の計算表</h2>
      <div className="mb-2">
        <span className="font-medium">課税期間:</span> {taxPeriod}
      </div>
      <div className="mb-6">
        <span className="font-medium">氏名又は名称:</span> {taxpayerName}
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">項目</th>
            <th className="border border-gray-300 px-4 py-2">金額 ({currency})</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">課税売上額</td>
            <td className="border border-gray-300 px-4 py-2">{taxAmounts.generalSale.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">免税売上額</td>
            <td className="border border-gray-300 px-4 py-2">{taxAmounts.exemptedSale.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">輸出売上額等</td>
            <td className="border border-gray-300 px-4 py-2">{taxAmounts.exportedGoods.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">非課税売上額</td>
            <td className="border border-gray-300 px-4 py-2">{taxAmounts.nonTaxedSale.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">資産の譲渡等の対価の額</td>
            <td className="border border-gray-300 px-4 py-2">{taxAmounts.assetTransferAmount.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">課税売上割合差額</td>
            <td className="border border-gray-300 px-4 py-2">{taxAmounts.taxedDifferential.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">仕入税額控除に係る課税仕入額</td>
            <td className="border border-gray-300 px-4 py-2">{taxAmounts.importTaxable.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaxCalculationTable;
