```tsx
// PaymentDataViewer.tsx
import React from 'react';

// 型定義
type PaymentData = {
  paymentDate: string;
  decisionNumber: number;
  settled: string;
  paymentDestination: string;
  paymentAmount: number;
  subjectName: string;
  description: string;
};

type PaymentDataViewerProps = {
  data: PaymentData[];
  onClear: () => void;
  onExit: () => void;
};

// コンポーネント定義
const PaymentDataViewer: React.FC<PaymentDataViewerProps> = ({ data, onClear, onExit }) => (
  <div className="p-4 bg-gray-100 rounded-lg">
    <h1 className="text-xl font-bold mb-4">支払済データ照会</h1>
    <table className="min-w-full table-fixed border-collapse">
      <thead>
        <tr className="bg-blue-200 text-left">
          <th className="p-2 w-1/6 border">支払予定日</th>
          <th className="p-2 w-1/12 border">決定番号</th>
          <th className="p-2 w-1/12 border">済</th>
          <th className="p-2 w-1/4 border">支払先</th>
          <th className="p-2 w-1/6 border">支払額</th>
          <th className="p-2 w-1/4 border">科目名</th>
          <th className="p-2 w-1/4 border">摘要</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="bg-white even:bg-gray-50 text-sm">
            <td className="p-2 border">{item.paymentDate}</td>
            <td className="p-2 border">{item.decisionNumber}</td>
            <td className="p-2 border">{item.settled}</td>
            <td className="p-2 border">{item.paymentDestination}</td>
            <td className="p-2 border">{item.paymentAmount.toLocaleString()}</td>
            <td className="p-2 border">{item.subjectName}</td>
            <td className="p-2 border">{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="mt-4 flex justify-between">
      <button onClick={onClear} className="bg-gray-300 p-2 rounded">クリア</button>
      <button onClick={onExit} className="bg-gray-300 p-2 rounded">終了</button>
    </div>
  </div>
);

export default PaymentDataViewer;
```