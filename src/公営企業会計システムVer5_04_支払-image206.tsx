import React from 'react';

type PaymentDetailProps = {
  fiscalYear: string;
  chargeNumber: number;
  changeCount: number;
  paymentType: string;
  processDate: string;
  originDept: string;
  chargePerson: string;
  workLocation: string;
  summary: string;
  arrivalDate: string;
  deadlineDate: string;
  contractDate: string;
  contractPeriod: string;
  contractMethod: string;
  contractNumber: string;
  beforeTax: string;
  contractGuarantor: string;
  paymentCount: number;
  accountSegment: string;
  budgetDetail: string;
  tax: string;
  taxCategory: string;
  chargeAmount: number;
  taxAmount: number;
  totalChargeAmount: number;
  totalBaseAmount: number;
};

const PaymentDetail: React.FC<PaymentDetailProps> = ({
  fiscalYear,
  chargeNumber,
  changeCount,
  paymentType,
  processDate,
  originDept,
  chargePerson,
  workLocation,
  summary,
  arrivalDate,
  deadlineDate,
  contractDate,
  contractPeriod,
  contractMethod,
  contractNumber,
  beforeTax,
  contractGuarantor,
  paymentCount,
  accountSegment,
  budgetDetail,
  tax,
  taxCategory,
  chargeAmount,
  taxAmount,
  totalChargeAmount,
  totalBaseAmount
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* Header information */}
      <div className="mb-4 border-b pb-2">
        <div className="flex justify-between">
          <div>
            <p>年度: {fiscalYear}</p>
            <p>負担番号: {chargeNumber}</p>
            <p>変更回数: {changeCount}</p>
            <p>支払種別: {paymentType}</p>
          </div>
        </div>
        <p>負担処理日: {processDate}</p>
        <p>起案所属: {originDept}</p>
        <p>起案者: {chargePerson}</p>
        <p>工事名場所: {workLocation}</p>
      </div>

      {/* Detail information */}
      <div className="mb-4">
        <p>摘要: {summary}</p>
        <p>着手年月日: {arrivalDate}</p>
        <p>納期年月日: {deadlineDate}</p>
        <p>契約年月日: {contractDate}</p>
        <p>期間: {contractPeriod}</p>
        <p>契約方法: {contractMethod}</p>
        <p>契約書番号: {contractNumber}</p>
        <p>前払区分: {beforeTax}</p>
        <p>契約保証人: {contractGuarantor}</p>
        <p>支払回数: {paymentCount}</p>
      </div>

      {/* Financial information */}
      <div className="mb-4">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b">予算節</th>
              <th className="border-b">予算細節</th>
              <th className="border-b">税</th>
              <th className="border-b">税区分</th>
              <th className="border-b">負担額</th>
              <th className="border-b">消費税額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b">{accountSegment}</td>
              <td className="border-b">{budgetDetail}</td>
              <td className="border-b">{tax}</td>
              <td className="border-b">{taxCategory}</td>
              <td className="border-b">{chargeAmount}</td>
              <td className="border-b">{taxAmount}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-2">
          <p>合計負担額: {totalChargeAmount}</p>
          <p>合計本体額: {totalBaseAmount}</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md">物品詳細</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">再発行</button>
        <button className="bg-gray-300 px-4 py-2 ml-2 rounded-md">キャンセル</button>
      </div>
    </div>
  );
};

export default PaymentDetail;
```