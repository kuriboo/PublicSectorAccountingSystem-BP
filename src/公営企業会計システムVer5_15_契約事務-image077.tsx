// components/BusinessInfoTable.tsx

import React from 'react';

// TypeScript型定義
interface BusinessInfo {
  id: number;
  code: string;
  category: string;
  name: string;
  kana: string;
  representative: string;
  area: string;
}

interface BusinessInfoTableProps {
  businesses: BusinessInfo[];
}

// Tailwind CSSを利用したスタイリング
const BusinessInfoTable: React.FC<BusinessInfoTableProps> = ({ businesses }) => {
  return (
    <div className="p-4">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-200">
            <th className="border border-gray-300 px-4 py-2">No.</th>
            <th className="border border-gray-300 px-4 py-2">業者コード</th>
            <th className="border border-gray-300 px-4 py-2">受付区分</th>
            <th className="border border-gray-300 px-4 py-2">業者名</th>
            <th className="border border-gray-300 px-4 py-2">業者カナ</th>
            <th className="border border-gray-300 px-4 py-2">代表者名</th>
            <th className="border border-gray-300 px-4 py-2">地区</th>
          </tr>
        </thead>
        <tbody>
          {businesses.map((business, index) => (
            <tr key={business.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{business.code}</td>
              <td className="border border-gray-300 px-4 py-2">{business.category}</td>
              <td className="border border-gray-300 px-4 py-2">{business.name}</td>
              <td className="border border-gray-300 px-4 py-2">{business.kana}</td>
              <td className="border border-gray-300 px-4 py-2">{business.representative}</td>
              <td className="border border-gray-300 px-4 py-2">{business.area}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusinessInfoTable;
```