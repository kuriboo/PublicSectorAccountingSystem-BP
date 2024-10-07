import React from 'react';

// TypeScriptのプロパティ定義
type DataItem = {
  categoryLarge: string;
  categorySmall: string;
  fiscalYear: string;
  date: string;
  classification: string;
  businessDetails: string;
  adjustmentYear: string;
  summary: string;
  totalAmount: number;
  usageFee: number;
  consumptionTax: number;
};

type DataTableProps = {
  data: DataItem[];
};

// コンポーネントの定義
const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 border">事業区分（大）</th>
            <th className="px-4 py-2 border">事業区分（小）</th>
            <th className="px-4 py-2 border">会計年度 発生日</th>
            <th className="px-4 py-2 border">分類</th>
            <th className="px-4 py-2 border">業務区分</th>
            <th className="px-4 py-2 border">調定年度</th>
            <th className="px-4 py-2 border">摘要</th>
            <th className="px-4 py-2 border">合計金額</th>
            <th className="px-4 py-2 border">使用料</th>
            <th className="px-4 py-2 border">消費税額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{item.categoryLarge}</td>
              <td className="px-4 py-2 border">{item.categorySmall}</td>
              <td className="px-4 py-2 border">{item.fiscalYear} {item.date}</td>
              <td className="px-4 py-2 border">{item.classification}</td>
              <td className="px-4 py-2 border">{item.businessDetails}</td>
              <td className="px-4 py-2 border">{item.adjustmentYear}</td>
              <td className="px-4 py-2 border">{item.summary}</td>
              <td className="px-4 py-2 border text-right">{item.totalAmount.toLocaleString()}</td>
              <td className="px-4 py-2 border text-right">{item.usageFee.toLocaleString()}</td>
              <td className="px-4 py-2 border text-right">{item.consumptionTax.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 使用する側の例
const dataExample: DataItem[] = [
  {
    categoryLarge: '水道事業',
    categorySmall: 'ぎょうせい地区',
    fiscalYear: '2017',
    date: '2017/09/01',
    classification: '収入',
    businessDetails: '過',
    adjustmentYear: '2016',
    summary: '収納（基本・超過） ぎょうせい地区 平成28年 1件 1,000円',
    totalAmount: 1000,
    usageFee: 1000,
    consumptionTax: 0
  },
  // 他のデータも同様に追加
];

export default function App() {
  return <DataTable data={dataExample} />;
}
```