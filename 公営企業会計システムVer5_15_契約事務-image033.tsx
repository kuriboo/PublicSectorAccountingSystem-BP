```tsx
import React from 'react';

interface CompanyInfoProps {
  receptionNumber: string;
  caseName: string;
  companies: {
    code: string;
    name: string;
    address: string;
    tel: string;
    fax: string;
  }[];
}

const CompanyInfoTable: React.FC<CompanyInfoProps> = ({ receptionNumber, caseName, companies }) => {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="text-blue-600 font-bold">受付番号</span> {receptionNumber}
        </div>
        <div>
          <span className="font-bold">件名</span> {caseName}
        </div>
      </div>
      
      {/* Table */}
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="border px-2 py-1">業者コード</th>
            <th className="border px-2 py-1">業者名</th>
            <th className="border px-2 py-1">住所</th>
            <th className="border px-2 py-1">TEL</th>
            <th className="border px-2 py-1">FAX</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border px-2 py-1">{company.code}</td>
              <td className="border px-2 py-1">{company.name}</td>
              <td className="border px-2 py-1">{company.address}</td>
              <td className="border px-2 py-1">{company.tel}</td>
              <td className="border px-2 py-1">{company.fax}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyInfoTable;
```