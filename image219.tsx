```tsx
import React from 'react';

type Record = {
  起案日: string;
  種別: string;
  伝票No: number;
  予定額: number;
  負担額: number;
  前払金額: number;
  戻入金額: number;
  支出金額: number;
  負担未執行額: number;
  摘要: string;
};

type ExpenditureHistoryProps = {
  records: Record[];
  year: string;
  voucherNumber: number;
  paymentType: string;
  onReissue: () => void;
  onCancel: () => void;
};

const ExpenditureHistory: React.FC<ExpenditureHistoryProps> = ({
  records,
  year,
  voucherNumber,
  paymentType,
  onReissue,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm">令和{year}年度 伝票番号 {voucherNumber}</p>
          <p className="text-sm">支払種別 {paymentType}</p>
        </div>
        <button className="px-4 py-2 bg-gray-200 rounded-md">詳細</button>
      </div>
      <table className="w-full border-t border-b">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="px-2 py-1">起案日</th>
            <th className="px-2 py-1">種別</th>
            <th className="px-2 py-1">伝票No</th>
            <th className="px-2 py-1">予定額</th>
            <th className="px-2 py-1">負担額</th>
            <th className="px-2 py-1">前払金額</th>
            <th className="px-2 py-1">戻入金額</th>
            <th className="px-2 py-1">支出金額</th>
            <th className="px-2 py-1">負担未執行額</th>
            <th className="px-2 py-1">摘要</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="px-2 py-1">{record.起案日}</td>
              <td className="px-2 py-1">{record.種別}</td>
              <td className="px-2 py-1">{record.伝票No}</td>
              <td className="px-2 py-1">{record.予定額}</td>
              <td className="px-2 py-1">{record.負担額}</td>
              <td className="px-2 py-1">{record.前払金額}</td>
              <td className="px-2 py-1">{record.戻入金額}</td>
              <td className="px-2 py-1">{record.支出金額}</td>
              <td className="px-2 py-1">{record.負担未執行額}</td>
              <td className="px-2 py-1">{record.摘要}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex mt-4">
        <button
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md"
          onClick={onReissue}
        >
          再発行
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={onCancel}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default ExpenditureHistory;
```