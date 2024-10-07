import React from 'react';

// TypeScript type definitions for component props
interface DocumentDetailsProps {
  year: string;
  determinationDate: string;
  determinationPerson: string;
  cancellationDate: string;
  collector: string;
  issuer: string;
  rights: string;
  debtorCode: string;
  debtorName: string;
  summary: string;
  deadline: string;
  contractor: string;
  taxRate: string;
  inspectionAmount: number;
  consumptionTaxAmount: number;
  specialIncome: number;
}

// Reusable DocumentDetails component
const DocumentDetails: React.FC<DocumentDetailsProps> = ({
  year,
  determinationDate,
  determinationPerson,
  cancellationDate,
  collector,
  issuer,
  rights,
  debtorCode,
  debtorName,
  summary,
  deadline,
  contractor,
  taxRate,
  inspectionAmount,
  consumptionTaxAmount,
  specialIncome,
}) => {
  return (
    <div className="p-4 border rounded-md bg-white shadow-lg">
      <div className="mb-2">
        <h3 className="text-xl font-bold">調定詳細</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div>
          <p><strong>種別:</strong> 個別調定</p>
          <p><strong>調定日:</strong> {determinationDate}</p>
          <p><strong>調定起案者:</strong> {determinationPerson}</p>
          <p><strong>収納日:</strong> {cancellationDate}</p>
          <p><strong>収納起案者:</strong> {collector}</p>
          <p><strong>収納者:</strong> {issuer}</p>
          <p><strong>起案所履:</strong> {rights}</p>
          <p><strong>値務者:</strong> {debtorCode} {debtorName}</p>
          <p><strong>摘要:</strong> {summary}</p>
          <p><strong>納入期限:</strong> {deadline}</p>
          <p><strong>工事店:</strong> {contractor}</p>
        </div>
        
        {/* Right Column */}
        <div>
          <p><strong>{year} 年度</strong></p>
          <p><strong>調定番号:</strong> 201</p>
          <p><strong>合計調定金額:</strong> {inspectionAmount.toLocaleString()}</p>
          <p><strong>合計消費税額:</strong> {consumptionTaxAmount.toLocaleString()}</p>
          <p><strong>合計特定収入:</strong> {specialIncome.toLocaleString()}</p>
          <div className="mt-4">
            <table className="border-collapse w-full table-auto">
              <thead>
                <tr>
                  <th className="border px-4 py-2">税</th>
                  <th className="border px-4 py-2">税率</th>
                  <th className="border px-4 py-2">調定金額</th>
                  <th className="border px-4 py-2">内消費税額</th>
                  <th className="border px-4 py-2">特定収入</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">課</td>
                  <td className="border px-4 py-2">{taxRate}</td>
                  <td className="border px-4 py-2">{inspectionAmount.toLocaleString()}</td>
                  <td className="border px-4 py-2">{consumptionTaxAmount.toLocaleString()}</td>
                  <td className="border px-4 py-2">{specialIncome.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentDetails;