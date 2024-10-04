```tsx
import React from 'react';

interface BusinessInfoProps {
  businessName: string;
  businessKana: string;
  contractDuration?: string;
  postalCode: string;
  location: string;
  address: string;
  phoneNumber: string;
  faxNumber: string;
  email: string;
  representativeRole: string;
  representative: string;
  contactRole: string;
  contact: string;
  capital: number;
  completedAmount: number;
  totalEmployees: number;
  categorizedEmployees: number;
  businessAge: number;
  selfCapital: number;
  totalScore: number;
  workStatuses: WorkStatus[];
}

interface WorkStatus {
  category: string;
  grade: string;
  directNomination: number;
  dropNomination: number;
  generalNomination: number;
  dropGeneral: number;
  additionalContract: number;
  dropAdditional: number;
}

const BusinessInfo: React.FC<BusinessInfoProps> = ({
  businessName,
  businessKana,
  contractDuration,
  postalCode,
  location,
  address,
  phoneNumber,
  faxNumber,
  email,
  representativeRole,
  representative,
  contactRole,
  contact,
  capital,
  completedAmount,
  totalEmployees,
  categorizedEmployees,
  businessAge,
  selfCapital,
  totalScore,
  workStatuses
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      {/* Header */}
      <div className="border-b-2 pb-4 mb-4">
        <h1 className="text-xl font-bold mb-2">{businessName}</h1>
        <h2 className="text-sm text-gray-500">{businessKana}</h2>
      </div>
      
      {/* Contract and Contact Information */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p><strong>契約先営業所名:</strong> {contractDuration}</p>
          <p><strong>郵便番号:</strong> {postalCode}</p>
          <p><strong>地区:</strong> {location}</p>
          <p><strong>住所:</strong> {address}</p>
          <p><strong>電話番号:</strong> {phoneNumber}</p>
          <p><strong>FAX番号:</strong> {faxNumber}</p>
          <p><strong>Eメール:</strong> {email}</p>
        </div>
        <div>
          <p><strong>代表者役職:</strong> {representativeRole}</p>
          <p><strong>代表者:</strong> {representative}</p>
          <p><strong>担当者役職:</strong> {contactRole}</p>
          <p><strong>担当者:</strong> {contact}</p>
        </div>
      </div>

      {/* Business Status */}
      <div className="bg-gray-100 p-4 mb-6 rounded-md">
        <p><strong>資本金:</strong> {capital}</p>
        <p><strong>完成高:</strong> {completedAmount}</p>
        <p><strong>総職員数:</strong> {totalEmployees}</p>
        <p><strong>区分別職員数:</strong> {categorizedEmployees}</p>
        <p><strong>営業年数:</strong> {businessAge}</p>
        <p><strong>自己資本額:</strong> {selfCapital}</p>
        <p><strong>総合評点:</strong> {totalScore}</p>
      </div>

      {/* Work Status Table */}
      <table className="w-full border-collapse border-spacing-0 border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">業種</th>
            <th className="border border-gray-300 p-2">格付</th>
            <th className="border border-gray-300 p-2">指名回数</th>
            <th className="border border-gray-300 p-2">指名落札回数</th>
            <th className="border border-gray-300 p-2">一般回数</th>
            <th className="border border-gray-300 p-2">一般落札回数</th>
            <th className="border border-gray-300 p-2">随契回数</th>
            <th className="border border-gray-300 p-2">随契落札回数</th>
          </tr>
        </thead>
        <tbody>
          {workStatuses.map((status, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{status.category}</td>
              <td className="border border-gray-300 p-2">{status.grade}</td>
              <td className="border border-gray-300 p-2">{status.directNomination}</td>
              <td className="border border-gray-300 p-2">{status.dropNomination}</td>
              <td className="border border-gray-300 p-2">{status.generalNomination}</td>
              <td className="border border-gray-300 p-2">{status.dropGeneral}</td>
              <td className="border border-gray-300 p-2">{status.additionalContract}</td>
              <td className="border border-gray-300 p-2">{status.dropAdditional}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusinessInfo;
```