```tsx
// DocumentComponent.tsx
import React from 'react';

interface DocumentProps {
  title?: string;
  decisionNo?: string;
  chargeNo?: string;
  decisionDate?: string;
  paymentDate?: string;
  amount?: string;
  subDetails?: string[];
}

const DocumentComponent: React.FC<DocumentProps> = ({
  title = "負担行為伺兼命令書",
  decisionNo = "27-000451-07",
  chargeNo = "27-000413",
  decisionDate = "平成２８年３月２７日",
  paymentDate = "平成２８年３月２７日",
  amount = "1,000,000円",
  subDetails = ["電子書籍購入費"]
}) => {
  return (
    <div className="p-4 border border-gray-300 bg-white">
      <h1 className="text-center text-xl font-bold mb-4">{title}</h1>
      <div className="flex justify-between mb-2">
        <div>
          <p>決定No. <span>{decisionNo}</span></p>
          <p>負担No. <span>{chargeNo}</span></p>
        </div>
      </div>
      <table className="w-full text-left mb-4">
        <thead>
          <tr>
            <th className="border px-2">属性</th>
            <th className="border px-2">起案者</th>
            <th className="border px-2">決定処理日</th>
            <th className="border px-2">支払予定日</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2">検証用</td>
            <td className="border px-2"></td>
            <td className="border px-2">{decisionDate}</td>
            <td className="border px-2">{paymentDate}</td>
          </tr>
        </tbody>
      </table>
      <p className="mb-2">以下のとおり支出してよろしいか。</p>
      <table className="w-full text-left mb-4">
        <thead>
          <tr>
            <th className="border px-2">款</th>
            <th className="border px-2">項</th>
            <th className="border px-2">目</th>
            <th className="border px-2">節</th>
            <th className="border px-2">細節</th>
            <th className="border px-2">明細</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2">002 事業費用</td>
            <td className="border px-2">01 営業費用</td>
            <td className="border px-2">01 〇〇事業</td>
            <td className="border px-2">13 印刷製本費</td>
            <td className="border px-2">0001 印刷製本費</td>
            <td className="border px-2">0001 {subDetails.join(', ')}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between items-center">
        <div>
          <p>決裁金額</p>
        </div>
        <div className="border border-gray-300 p-2">
          <p className="text-right font-bold">{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentComponent;
```