```tsx
import React from 'react';

// 型定義
interface PaymentDataProps {
  fiscalYear: string;
  scheduledNumber: number;
  responsibilityNumber: number;
  contractor: string;
  itemName: string;
  initialProcessingDate: string;
  initialStartDate: string;
  initialContractDate: string;
  initialCompletionDate: string;
  initialCharge: number;
  changeCharge: number;
  chargeAfterChange: number;
  prepaidAmount: number;
  paidAmount: number;
  remainingAmount: number;
  paymentCount: number;
  paymentDetails: Array<{
    processingDate: string;
    paymentDate: string;
    decisionNumber: number;
    paymentAmount: number;
  }>;
}

// コンポーネント作成
const PaymentData: React.FC<PaymentDataProps> = ({
  fiscalYear,
  scheduledNumber,
  responsibilityNumber,
  contractor,
  itemName,
  initialProcessingDate,
  initialStartDate,
  initialContractDate,
  initialCompletionDate,
  initialCharge,
  changeCharge,
  chargeAfterChange,
  prepaidAmount,
  paidAmount,
  remainingAmount,
  paymentCount,
  paymentDetails,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-bold">支払台帳データ照会</h1>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>年度: {fiscalYear}</p>
            <p>予定番号: {scheduledNumber}</p>
            <p>負担番号: {responsibilityNumber}</p>
            <p>契約先: {contractor}</p>
            <p>名称: {itemName}</p>
            <p>当初処理日: {initialProcessingDate}</p>
            <p>当初着手日: {initialStartDate}</p>
            <p>当初契約日: {initialContractDate}</p>
            <p>当初完了日: {initialCompletionDate}</p>
          </div>
          <div>
            <p>当初負担額: {initialCharge.toLocaleString()}円</p>
            <p>変更負担額: {changeCharge.toLocaleString()}円</p>
            <p>変更後負担額: {chargeAfterChange.toLocaleString()}円</p>
            <p>前払金額: {prepaidAmount.toLocaleString()}円</p>
            <p>支払済額: {paidAmount.toLocaleString()}円</p>
            <p>残額: {remainingAmount.toLocaleString()}円</p>
            <p>支払回数: {paymentCount}回</p>
          </div>
        </div>
        <table className="mt-4 w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">処理</th>
              <th className="border border-gray-300 px-4 py-2">支払日</th>
              <th className="border border-gray-300 px-4 py-2">決定番号</th>
              <th className="border border-gray-300 px-4 py-2">支払額</th>
            </tr>
          </thead>
          <tbody>
            {paymentDetails.map((detail, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{detail.processingDate}</td>
                <td className="border border-gray-300 px-4 py-2">{detail.paymentDate}</td>
                <td className="border border-gray-300 px-4 py-2">{detail.decisionNumber}</td>
                <td className="border border-gray-300 px-4 py-2">{detail.paymentAmount.toLocaleString()}円</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentData;
```