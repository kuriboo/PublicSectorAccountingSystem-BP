```tsx
// components/DenshuManagement.tsx
import React from 'react';

type DenshuManagementProps = {
  title?: string;
  description?: string;
  data: DenshuData[];
};

type DenshuData = {
  year: number;
  number: number;
  date: string;
  description1: string;
  description2: string;
  amountTaxIncluded: number;
  amountTaxExcluded: number;
  consumptionTaxAmount: number;
};

const DenshuManagement: React.FC<DenshuManagementProps> = ({
  title = "特定課税仕入伝票管理入力",
  description = "課税の支出予算執行かつ税額0円の伝票のみ抽出",
  data,
}) => {
  return (
    <div className="p-4 bg-white shadow-lg max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      
      {/* Search Conditions */}
      <div className="mt-4">
        <input type="text" placeholder="摘要" className="border p-2 w-full" />
      </div>

      {/* Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="border-b">
              <th className="p-2 border-r">摘要2</th>
              <th className="p-2 border-r">振替年度</th>
              <th className="p-2 border-r">振替番号</th>
              <th className="p-2 border-r">伝票日付</th>
              <th className="p-2 border-r">摘要1</th>
              <th className="p-2 border-r">税込額</th>
              <th className="p-2 border-r">税抜額</th>
              <th className="p-2">消費税額</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 border-r">{item.description2}</td>
                <td className="p-2 border-r">{item.year}</td>
                <td className="p-2 border-r">{item.number}</td>
                <td className="p-2 border-r">{item.date}</td>
                <td className="p-2 border-r">{item.description1}</td>
                <td className="p-2 border-r text-right">{item.amountTaxIncluded.toLocaleString()}</td>
                <td className="p-2 border-r text-right">{item.amountTaxExcluded.toLocaleString()}</td>
                <td className="p-2 text-right">{item.consumptionTaxAmount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Buttons */}
      <div className="mt-4 flex justify-end space-x-2">
        <button className="px-4 py-2 bg-blue-500 text-white">OK</button>
        <button className="px-4 py-2 bg-gray-500 text-white">クリア</button>
        <button className="px-4 py-2 bg-red-500 text-white">終了</button>
      </div>
    </div>
  );
};

export default DenshuManagement;
```