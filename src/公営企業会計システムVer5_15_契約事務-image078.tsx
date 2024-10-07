// types.ts
export interface CompanyInfoProps {
  businessName: string;
  businessNameKana: string;
  suspensionPeriod: string;
  officeName: string;
  postalCode: string;
  area: string;
  address: string;
  phoneNumber: string;
  faxNumber: string;
  email: string;
  ceoPosition: string;
  ceoName: string;
  managerPosition: string;
  managerName: string;
  capital: number;
  completionAmount: number;
  totalEmployees: number;
  divisionEmployees: number;
  businessAge: number;
  industryStatus: IndustryStatus[];
}

export interface IndustryStatus {
  industryType: string;
  qualification: string;
  designatedBids: number;
  designatedBidFailures: number;
  generalBids: number;
  generalBidFailures: number;
  contractBids: number;
  contractBidFailures: number;
}

// CompanyInfo.tsx
import React from 'react';
import { CompanyInfoProps, IndustryStatus } from './types';

export const CompanyInfo: React.FC<CompanyInfoProps> = ({
  businessName,
  businessNameKana,
  suspensionPeriod,
  officeName,
  postalCode,
  area,
  address,
  phoneNumber,
  faxNumber,
  email,
  ceoPosition,
  ceoName,
  managerPosition,
  managerName,
  capital,
  completionAmount,
  totalEmployees,
  divisionEmployees,
  businessAge,
  industryStatus,
}) => {
  return (
    <div className="p-4 border border-gray-300">
      {/* Header Section */}
      <div className="bg-blue-900 text-white p-2">
        <h1 className="text-lg font-bold">詳細情報</h1>
      </div>

      {/* Business Information */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <div>
          <div>業者名: {businessName}</div>
          <div>業者カナ: {businessNameKana}</div>
          <div>停止期間: {suspensionPeriod}</div>
        </div>
        <div>
          <div>契約先: {officeName}</div>
          <div>郵便番号: {postalCode}</div>
          <div>地区: {area}</div>
          <div>住所: {address}</div>
          <div>電話番号: {phoneNumber}</div>
          <div>FAX番号: {faxNumber}</div>
          <div>メール: {email}</div>
          <div>代表者役職: {ceoPosition}</div>
          <div>代表者: {ceoName}</div>
          <div>担当者役職: {managerPosition}</div>
          <div>担当者: {managerName}</div>
        </div>
      </div>

      {/* Economic Status */}
      <div className="border-t border-gray-300 px-4 py-2 grid grid-cols-3 gap-4">
        <div>資本金: {capital.toLocaleString()}</div>
        <div>完成高: {completionAmount.toLocaleString()}</div>
        <div>総合評点:</div>
        <div>総職員数: {totalEmployees}</div>
        <div>区分別職員数: {divisionEmployees}</div>
        <div>営業年数: {businessAge}</div>
      </div>

      {/* Industry Status Table */}
      <table className="w-full mt-4 border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200 border-b border-gray-400">
            <th className="p-2 border-r">業種</th>
            <th className="p-2 border-r">格付</th>
            <th className="p-2 border-r">指名回数</th>
            <th className="p-2 border-r">指名落札回数</th>
            <th className="p-2 border-r">一般回数</th>
            <th className="p-2 border-r">一般落札回数</th>
            <th className="p-2 border-r">随契回数</th>
            <th className="p-2">随契落札回数</th>
          </tr>
        </thead>
        <tbody>
          {industryStatus.map((status, index) => (
            <tr key={index} className="border-b border-gray-400">
              <td className="p-2 border-r">{status.industryType}</td>
              <td className="p-2 border-r">{status.qualification}</td>
              <td className="p-2 border-r">{status.designatedBids}</td>
              <td className="p-2 border-r">{status.designatedBidFailures}</td>
              <td className="p-2 border-r">{status.generalBids}</td>
              <td className="p-2 border-r">{status.generalBidFailures}</td>
              <td className="p-2 border-r">{status.contractBids}</td>
              <td className="p-2">{status.contractBidFailures}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Button */}
      <div className="flex justify-end mt-4">
        <button className="bg-gray-300 p-2 rounded">キャンセル</button>
      </div>
    </div>
  );
};