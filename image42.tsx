```tsx
import React from 'react';

// Propsの型定義
type InvoiceManagementProps = {
  title: string;
  dateRange: string;
  invoiceNumberRange: string;
  showOnlyZeroTax: boolean;
  summary: string;
  items: {
    fiscalYear: string;
    invoiceNumber: string;
    date: string;
    description1: string;
    description2: string;
    amountWithTax: number;
    taxAmount: number;
    expenseTax: number;
  }[];
};

// コンポーネント定義
const InvoiceManagement: React.FC<InvoiceManagementProps> = ({
  title,
  dateRange,
  invoiceNumberRange,
  showOnlyZeroTax,
  summary,
  items,
}) => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h1 className="text-lg font-bold text-purple-700 mb-2">{title}</h1>
      
      {/* フィルターセクション */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label className="mr-2">伝票日付:</label>
          <input type="text" className="border p-1" value={dateRange} readOnly />
          
          <label className="ml-4 mr-2">伝票番号:</label>
          <input type="text" className="border p-1" value={invoiceNumberRange} readOnly />
        </div>
        
        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" checked={showOnlyZeroTax} readOnly />
          <label>課税の支出予算執行かつ税額0円の伝票のみ抽出</label>
        </div>
        
        <div className="flex items-center">
          <label className="mr-2">摘要:</label>
          <input type="text" className="border p-1 flex-grow" value={summary} readOnly />
          <button className="bg-blue-500 text-white px-4 py-1 ml-2 rounded">表示</button>
        </div>
      </div>
      
      {/* テーブル */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">摘要2</th>
            <th className="border p-2">振替年度</th>
            <th className="border p-2">振替番号</th>
            <th className="border p-2">伝票日付</th>
            <th className="border p-2">摘要1</th>
            <th className="border p-2">課税額</th>
            <th className="border p-2">税技額</th>
            <th className="border p-2">消費税額</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="even:bg-gray-100">
              <td className="border p-2">{item.description2}</td>
              <td className="border p-2">{item.fiscalYear}</td>
              <td className="border p-2">{item.invoiceNumber}</td>
              <td className="border p-2">{item.date}</td>
              <td className="border p-2">{item.description1}</td>
              <td className="border p-2">{item.amountWithTax.toLocaleString()}</td>
              <td className="border p-2">{item.taxAmount.toLocaleString()}</td>
              <td className="border p-2">{item.expenseTax.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* ボタン */}
      <div className="mt-4 flex justify-end space-x-2">
        <button className="bg-green-500 text-white px-4 py-1 rounded">OK</button>
        <button className="bg-gray-500 text-white px-4 py-1 rounded">クリア</button>
        <button className="bg-red-500 text-white px-4 py-1 rounded">終了</button>
      </div>
    </div>
  );
};

export default InvoiceManagement;
```