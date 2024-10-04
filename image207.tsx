```tsx
import React from 'react';

// プロパティの型定義
type BudgetDetailProps = {
  fiscalYear: string;
  planNumber: number;
  changeCount: number;
  paymentType: string;
  scheduledDate: string;
  department: string;
  manager: string;
  constructionSite: string;
  summary: string;
  startDate: string;
  dueDate: string;
  contractPeriod: string;
  contractMethod: string;
  prePaymentType: string;
  paymentCount: number;
  totalPlannedAmount: number;
  totalAmount: number;
  consumptionTax: number;
  items: { budgetItem: string; detail: string; tax: string; taxRate: string, plannedAmount: number; taxAmount: number }[];
};

// コンポーネント定義
const BudgetDetailCard: React.FC<BudgetDetailProps> = ({
  fiscalYear,
  planNumber,
  changeCount,
  paymentType,
  scheduledDate,
  department,
  manager,
  constructionSite,
  summary,
  startDate,
  dueDate,
  contractPeriod,
  contractMethod,
  prePaymentType,
  paymentCount,
  totalPlannedAmount,
  totalAmount,
  consumptionTax,
  items
}) => {
  return (
    <div className="p-4 rounded-md shadow-lg bg-white">
      <div className="flex justify-between mb-4">
        <div>
          <p>年度: {fiscalYear}</p>
          <p>予定番号: {planNumber}</p>
        </div>
        <div>
          <p>変更回数: {changeCount}</p>
        </div>
      </div>
      <div className="mb-4">
        <p>支払種別: {paymentType}</p>
        <p>予定処理日: {scheduledDate}</p>
        <p>部署: {department}</p>
        <p>起案者: {manager}</p>
        <p>工事名場所: {constructionSite}</p>
        <p>摘要: {summary}</p>
        <p>着手年月日: {startDate}</p>
        <p>納期年月日: {dueDate}</p>
        <p>契約方法: {contractMethod}</p>
        <p>前払区分: {prePaymentType}</p>
        <p>支払回数: {paymentCount}</p>
      </div>
      <div className="mb-4">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>予算節</th>
              <th>予算節細</th>
              <th>税</th>
              <th>税率</th>
              <th>予定額</th>
              <th>消費税額</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.budgetItem}</td>
                <td>{item.detail}</td>
                <td>{item.tax}</td>
                <td>{item.taxRate}</td>
                <td>{item.plannedAmount}</td>
                <td>{item.taxAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between">
        <div>
          <p>合計予定額: {totalPlannedAmount}</p>
          <p>合計本体額: {totalAmount}</p>
          <p>合計消費税額: {consumptionTax}</p>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">物品詳細</button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded">再発行</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">キャンセル</button>
        </div>
      </div>
    </div>
  );
}

export default BudgetDetailCard;
```