```tsx
import React from 'react';

// 型定義
type TransactionProps = {
  title: string;
  dateRange: string;
  registerYear: string;
  records: {
    type: string;
    origin: string;
    date: string;
    number: string;
    debitItem: string;
    creditItem: string;
    amount: string;
    tax: string;
    summary1: string;
    summary2: string;
  }[];
  onSearch?: () => void;
  onRegister?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

const TransactionComponent: React.FC<TransactionProps> = ({
  title,
  dateRange,
  registerYear,
  records,
  onSearch,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="w-full max-w-screen-lg mx-auto bg-gray-100 p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">{title}</h1>

      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="mr-2">伝票日付</label>
          <input type="text" value={dateRange} className="border rounded p-1" readOnly />
          <label className="ml-4 mr-2">年度</label>
          <input type="text" value={registerYear} className="border rounded p-1" readOnly />
        </div>
        <div>
          <button onClick={onRegister} className="bg-blue-500 text-white py-1 px-3 rounded m-1">
            登録
          </button>
          <button onClick={onEdit} className="bg-yellow-500 text-white py-1 px-3 rounded m-1">
            訂正
          </button>
          <button onClick={onDelete} className="bg-red-500 text-white py-1 px-3 rounded m-1">
            削除
          </button>
        </div>
      </div>

      <table className="w-full bg-white border-collapse">
        <thead>
          <tr>
            <th className="border p-2">種別</th>
            <th className="border p-2">発生源</th>
            <th className="border p-2">伝票日付</th>
            <th className="border p-2">番号</th>
            <th className="border p-2">明細</th>
            <th className="border p-2">借方科目</th>
            <th className="border p-2">貸方科目</th>
            <th className="border p-2">本体金額</th>
            <th className="border p-2">税額</th>
            <th className="border p-2">摘要1</th>
            <th className="border p-2">摘要2</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="odd:bg-gray-50 even:bg-gray-200">
              <td className="border p-2">{record.type}</td>
              <td className="border p-2">{record.origin}</td>
              <td className="border p-2">{record.date}</td>
              <td className="border p-2">{record.number}</td>
              <td className="border p-2">{record.debitItem}</td>
              <td className="border p-2">{record.creditItem}</td>
              <td className="border p-2">{record.amount}</td>
              <td className="border p-2">{record.tax}</td>
              <td className="border p-2">{record.summary1}</td>
              <td className="border p-2">{record.summary2}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right">
        <button onClick={onSearch} className="bg-green-500 text-white py-1 px-6 rounded">
          表示
        </button>
      </div>
    </div>
  );
};

export default TransactionComponent;
```