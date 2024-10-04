```tsx
import React from 'react';

// Props type definition
type AssetHistoryProps = {
  assetNumber: string;
  assetName: string;
  history: {
    date: string;
    flag: string;
    code: string;
    summary: string;
    amount: number;
    rate: number;
    limit: number;
    lifetime: number;
    remainingRate: number;
    remainingAmount: number;
    annualAmount?: number;
  }[];
};

// AssetHistory component
const AssetHistory: React.FC<AssetHistoryProps> = ({
  assetNumber,
  assetName,
  history,
}) => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">{assetName}</h2>
        <p>資産番号: {assetNumber}</p>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th>異動年月日</th>
            <th>償却異動フラグ</th>
            <th>異動区分</th>
            <th>異動摘要</th>
            <th>異動金額</th>
            <th>償却限度率</th>
            <th>償却限度額</th>
            <th>耐用年数</th>
            <th>残存率</th>
            <th>残存価格</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index} className="text-center">
              <td>{item.date}</td>
              <td>{item.flag}</td>
              <td>{item.code}</td>
              <td>{item.summary}</td>
              <td>{item.amount.toLocaleString()}円</td>
              <td>{item.rate}%</td>
              <td>{item.limit.toLocaleString()}円</td>
              <td>{item.lifetime}年</td>
              <td>{item.remainingRate}%</td>
              <td>{item.remainingAmount.toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetHistory;
```