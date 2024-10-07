import React from 'react';

type TaxTableProps = {
  period: string;
  name: string;
  office: string;
  data: {
    mainTax: number;
    reducedTax: number;
    specialTax: number;
    total: number;
    breakdown: {
      category: string;
      oldRate: number;
      reducedRate: number;
      specialRate: number;
      subtotal: number;
    }[];
  };
};

const TaxTable: React.FC<TaxTableProps> = ({ period, name, office, data }) => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-gray-100">
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold">
          税率別消費税額計算表
        </h1>
        <p>課税期間: {period}</p>
        <p>氏名又は名称: {name}</p>
        <p>〇〇事業所: {office}</p>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2">区分</th>
            <th className="px-4 py-2">旧税率分</th>
            <th className="px-4 py-2">税率6.24%適用分</th>
            <th className="px-4 py-2">税率7.8%適用分</th>
            <th className="px-4 py-2">合計</th>
          </tr>
        </thead>
        <tbody>
          {data.breakdown.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.category}</td>
              <td className="border px-4 py-2">{item.oldRate.toLocaleString()}</td>
              <td className="border px-4 py-2">{item.reducedRate.toLocaleString()}</td>
              <td className="border px-4 py-2">{item.specialRate.toLocaleString()}</td>
              <td className="border px-4 py-2">{item.subtotal.toLocaleString()}</td>
            </tr>
          ))}
          <tr className="font-bold">
            <td className="border px-4 py-2">小計</td>
            <td className="border px-4 py-2">{data.mainTax.toLocaleString()}</td>
            <td className="border px-4 py-2">{data.reducedTax.toLocaleString()}</td>
            <td className="border px-4 py-2">{data.specialTax.toLocaleString()}</td>
            <td className="border px-4 py-2">{data.total.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaxTable;
```