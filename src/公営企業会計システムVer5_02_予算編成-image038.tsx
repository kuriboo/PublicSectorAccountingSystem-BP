import React from 'react';
import 'tailwindcss/tailwind.css';

// TypeScriptの型定義
type BudgetEstimateProps = {
  year: string;
  section: string;
  details: string;
  attributes: {
    taxType: string;
    taxRate: number;
    burdenType: string;
    purposeType: string;
    calculationBasis: string;
    taxInclusionType: string;
  };
  prevYearAmount: number;
  detailsAmount: number;
  items: Array<{
    rowNumber: number;
    calculationBasis: string;
    unitPrice: number;
    unit: string;
    amount: number;
    total: number;
  }>;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onCalculate: () => void;
}

const BudgetEstimate: React.FC<BudgetEstimateProps> = ({
  year,
  section,
  details,
  attributes,
  prevYearAmount,
  detailsAmount,
  items,
  onRegister,
  onEdit,
  onDelete,
  onCalculate
}) => {
  return (
    <div className="p-4 max-w-3xl mx-auto bg-white rounded shadow-md">
      <div className="text-center font-semibold text-xl mb-4">暫定科目別予算見積要求登録</div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>年度</label>
          <div className="mb-2 border p-2">{year}</div>
          <label>節</label>
          <div className="mb-2 border p-2">{section}</div>
          <label>明細</label>
          <div className="mb-2 border p-2">{details}</div>
        </div>
        <div>
          <h3>予算明細属性</h3>
          <div className="border p-2 mb-2">
            <p>税区分: {attributes.taxType}</p>
            <p>消費税: {attributes.taxRate}%</p>
            <p>負担枠上区分: {attributes.burdenType}</p>
            <p>臨経区分: {attributes.purposeType}</p>
            <p>積算基礎: {attributes.calculationBasis}</p>
            <p>税込区分: {attributes.taxInclusionType}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <div>前年度: {prevYearAmount.toLocaleString()}</div>
        <div>明細: {detailsAmount.toLocaleString()}</div>
      </div>
      <div className="flex justify-center space-x-2 mb-4">
        <button onClick={onRegister} className="bg-gray-300 px-4 py-2 rounded">登録</button>
        <button onClick={onEdit} className="bg-gray-300 px-4 py-2 rounded">訂正</button>
        <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">行削除</button>
      </div>
      <table className="min-w-full border mb-4">
        <thead>
          <tr>
            <th className="border px-2">行番号</th>
            <th className="border px-2">積算基礎</th>
            <th className="border px-2">単価/数量</th>
            <th className="border px-2">単位</th>
            <th className="border px-2">金額(円)</th>
            <th className="border px-2">積</th>
            <th className="border px-2">共</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.rowNumber}>
              <td className="border px-2">{item.rowNumber}</td>
              <td className="border px-2">{item.calculationBasis}</td>
              <td className="border px-2">{item.unitPrice.toLocaleString()}</td>
              <td className="border px-2">{item.unit}</td>
              <td className="border px-2">{item.amount.toLocaleString()}</td>
              <td className="border px-2">{item.total.toLocaleString()}</td>
              <td className="border px-2">単</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center space-x-2">
        <button onClick={onCalculate} className="bg-blue-500 text-white px-4 py-2 rounded">積算参照</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">OK</button>
        <button className="bg-gray-300 px-4 py-2 rounded">クリア</button>
        <button className="bg-gray-300 px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
}

export default BudgetEstimate;
