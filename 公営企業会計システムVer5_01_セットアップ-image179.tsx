```tsx
import React from 'react';

// 型定義
type DataRow = {
  budgetMajorCode: string;
  budgetMinorCode: string;
  budgetDetailCode: string;
  budgetMajorName: string;
  budgetMinorName: string;
  budgetDetailName: string;
  count: number;
  amount: number;
};

type BudgetTableProps = {
  data: DataRow[];
  year: string;
  fiscalYear: string;
  onSearch: (majorCode: string, minorCode: string, detailCode: string) => void;
};

const BudgetTable: React.FC<BudgetTableProps> = ({ data, year, fiscalYear, onSearch }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl text-center font-bold mb-4">過年度予算科目別月別収入金額</h1>
      
      <div className="mb-4">
        <label className="block">会計年度: {year} 年度</label>
        <label className="block">調定年度: {fiscalYear} 年度</label>
      </div>

      {/* テーブル */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">予算部門コード</th>
            <th className="px-4 py-2">予算細部門コード</th>
            <th className="px-4 py-2">予算明細コード</th>
            <th className="px-4 py-2">予算部門名</th>
            <th className="px-4 py-2">予算細部門名</th>
            <th className="px-4 py-2">予算明細名</th>
            <th className="px-4 py-2">繰越件数</th>
            <th className="px-4 py-2">繰越金額</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row.budgetMajorCode}</td>
              <td className="border px-4 py-2">{row.budgetMinorCode}</td>
              <td className="border px-4 py-2">{row.budgetDetailCode}</td>
              <td className="border px-4 py-2">{row.budgetMajorName}</td>
              <td className="border px-4 py-2">{row.budgetMinorName}</td>
              <td className="border px-4 py-2">{row.budgetDetailName}</td>
              <td className="border px-4 py-2">{row.count}</td>
              <td className="border px-4 py-2">{row.amount.toLocaleString()} 円</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 検索フォーム */}
      <div className="mt-4">
        <input type="text" placeholder="予算部門コード" id="majorCode" className="mr-2 border p-1" />
        <input type="text" placeholder="予算細部門コード" id="minorCode" className="mr-2 border p-1" />
        <input type="text" placeholder="予算明細コード" id="detailCode" className="mr-2 border p-1" />
        <button 
          className="bg-blue-500 text-white px-4 py-2"
          onClick={() => {
            const majorCode = (document.getElementById('majorCode') as HTMLInputElement).value;
            const minorCode = (document.getElementById('minorCode') as HTMLInputElement).value;
            const detailCode = (document.getElementById('detailCode') as HTMLInputElement).value;
            onSearch(majorCode, minorCode, detailCode);
          }}
        >
          科目検索
        </button>
      </div>
    </div>
  );
};

export default BudgetTable;
```