```tsx
import React from 'react';

// 型定義
interface Item {
  id: string;
  name: string;
  specification: string;
  unit: string;
  outgoingQuantity: number;
  outgoingAmount: number;
  incomingQuantity: number;
  incomingAmount: number;
}

interface ReportProps {
  title: string;
  dateRange: string;
  items: Item[];
}

// スタイルの定義 (Tailwind CSS使用)
const styles = {
  container: 'p-4',
  header: 'text-lg font-bold mb-2',
  table: 'w-full table-auto',
  th: 'border px-4 py-2 bg-gray-200',
  td: 'border px-4 py-2',
};

// コンポーネントの定義
const Report: React.FC<ReportProps> = ({ title, dateRange, items }) => {
  return (
    <div className={styles.container}>
      {/* ヘッダー情報 */}
      <div className={styles.header}>
        <div>{title}</div>
        <div>{dateRange}</div>
      </div>

      {/* テーブル */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>品番</th>
            <th className={styles.th}>品名</th>
            <th className={styles.th}>規格</th>
            <th className={styles.th}>単位</th>
            <th className={styles.th}>数量(出庫)</th>
            <th className={styles.th}>金額(出庫)</th>
            <th className={styles.th}>数量(入庫)</th>
            <th className={styles.th}>金額(入庫)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className={styles.td}>{item.id}</td>
              <td className={styles.td}>{item.name}</td>
              <td className={styles.td}>{item.specification}</td>
              <td className={styles.td}>{item.unit}</td>
              <td className={styles.td}>{item.outgoingQuantity.toFixed(2)}</td>
              <td className={styles.td}>{item.outgoingAmount.toFixed(2)}</td>
              <td className={styles.td}>{item.incomingQuantity}</td>
              <td className={styles.td}>{item.incomingAmount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
```