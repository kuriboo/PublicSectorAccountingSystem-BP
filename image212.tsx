```tsx
import React from 'react';

type PartnerDetails = {
  partnerCode: string;
  partnerName1: string;
  partnerName2: string;
  paymentAmount: number;
  exclusionAmount: number;
};

type TransferInfo = {
  depositType: string;
  accountNumber: string;
  accountName: string;
  bank: string;
  branch: string;
};

interface PaymentDetailsProps {
  title: string;
  representativeName: string;
  formerRepresentativeName: string;
  partnerDetails: PartnerDetails[];
  totalPayment: number;
  totalExclusion: number;
  creditorDetails: string;
  transferInfo: TransferInfo;
  onCancel: () => void;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  title,
  representativeName,
  formerRepresentativeName,
  partnerDetails,
  totalPayment,
  totalExclusion,
  creditorDetails,
  transferInfo,
  onCancel,
}) => {
  return (
    <div className="border p-4 max-w-3xl mx-auto bg-white">
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="mt-2">
        <p>代表名称: {representativeName}</p>
        <p>代表取名: {formerRepresentativeName}</p>
      </div>
      <table className="min-w-full mt-4 border">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="py-2 px-4 border">一時計相手先</th>
            <th className="py-2 px-4 border">相手先コード</th>
            <th className="py-2 px-4 border">相手先名称1</th>
            <th className="py-2 px-4 border">相手先名称2</th>
            <th className="py-2 px-4 border">支払金額</th>
            <th className="py-2 px-4 border">控除額</th>
          </tr>
        </thead>
        <tbody>
          {partnerDetails.map((detail, index) => (
            <tr key={index} className="odd:bg-gray-100">
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{detail.partnerCode}</td>
              <td className="py-2 px-4 border">{detail.partnerName1}</td>
              <td className="py-2 px-4 border">{detail.partnerName2}</td>
              <td className="py-2 px-4 border">{detail.paymentAmount}</td>
              <td className="py-2 px-4 border">{detail.exclusionAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-2">
        <p>計: {totalPayment}</p>
        <p>{totalExclusion}</p>
      </div>
      <div className="mt-4 border-t pt-4">
        <h2 className="text-blue-900 font-bold">債権者明細</h2>
        <p>{creditorDetails}</p>
      </div>
      <div className="mt-4 border-t pt-4">
        <h2 className="text-blue-900 font-bold">振込先情報</h2>
        <p>預金種別: {transferInfo.depositType}</p>
        <p>口座番号: {transferInfo.accountNumber}</p>
        <p>口座名義人: {transferInfo.accountName}</p>
        <p>銀行: {transferInfo.bank}</p>
        <p>支店: {transferInfo.branch}</p>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
```