import React from 'react';

// 型定義
type TaxCalculationProps = {
  taxPeriod: string;
  nameOrCompany: string;
  salesData: {
    totalSales: number;
    exemptSales: number;
    nonExemptSales: number;
    taxableSales: number;
    purchaseExemptRefund: number;
    purchaseConsumption: number;
    specificPurchase: number;
    specialPurchase: number;
  };
};

const TaxCalculation: React.FC<TaxCalculationProps> = ({
  taxPeriod,
  nameOrCompany,
  salesData,
}) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <h2 className="text-xl font-bold">課税売上割合・控除対象仕入税額等の計算表</h2>
        <p>課税期間: {taxPeriod}</p>
        <p>氏名又は名称: {nameOrCompany}</p>
      </div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">項目</th>
            <th className="px-4 py-2 border-b">金額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b">課税売上高 (税込み)</td>
            <td className="px-4 py-2 border-b">{salesData.totalSales.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">免税売上額</td>
            <td className="px-4 py-2 border-b">{salesData.exemptSales.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">非課税売上高</td>
            <td className="px-4 py-2 border-b">{salesData.nonExemptSales.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">課税資産の譲渡等の対価の額</td>
            <td className="px-4 py-2 border-b">{salesData.taxableSales.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">仕入税額控除対象仕入税額</td>
            <td className="px-4 py-2 border-b">{salesData.purchaseExemptRefund.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">課税仕入れに係る消費税額</td>
            <td className="px-4 py-2 border-b">{salesData.purchaseConsumption.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">特定課税仕入れに係る消費税額</td>
            <td className="px-4 py-2 border-b">{salesData.specificPurchase.toLocaleString()}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">特例課税仕入れに係る消費税額</td>
            <td className="px-4 py-2 border-b">{salesData.specialPurchase.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaxCalculation;
```