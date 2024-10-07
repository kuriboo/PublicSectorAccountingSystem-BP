// AssetDetails.tsx
import React from 'react';

type AssetDetailProps = {
  assetNumber: string;
  section: string;
  subsection: string;
  detail: string;
  acquisitionYear: string;
  acquisitionQuantity: number;
  acquisitionAmount: number;
  depreciationRate: number;
  remainingAmount: number;
  annualDepreciation: number;
  residualRate: number;
  residualAmount: number;
  contractMethod: string;
  contractPeriod: string;
  department: string;
};

const AssetDetails: React.FC<AssetDetailProps> = ({
  assetNumber,
  section,
  subsection,
  detail,
  acquisitionYear,
  acquisitionQuantity,
  acquisitionAmount,
  depreciationRate,
  remainingAmount,
  annualDepreciation,
  residualRate,
  residualAmount,
  contractMethod,
  contractPeriod,
  department,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-2">資産番号: {assetNumber}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>節: {section}</div>
        <div>細節: {subsection}</div>
        <div>明細: {detail}</div>
        <div>部門: {department}</div>
        <div>取得年月: {acquisitionYear}</div>
        <div>取得数量: {acquisitionQuantity}</div>
        <div>取得金額: {acquisitionAmount}</div>
        <div>償却方法: {contractMethod}</div>
        <div>償却率: {depreciationRate}</div>
        <div>残存価格: {remainingAmount}</div>
        <div>年間償却額: {annualDepreciation}</div>
        <div>償却限度額: {residualAmount}</div>
        <div>契約期間: {contractPeriod}</div>
      </div>
    </div>
  );
};

export default AssetDetails;

```tsx
// AssetDetailTable.tsx
import React from 'react';

type DetailRowProps = {
  nameCode: string;
  standardCode: string;
  managementName: string;
  standardName: string;
  acquisitionQuantity: number;
  unit: string;
  acquisitionAmount: number;
};

type AssetDetailTableProps = {
  details: DetailRowProps[];
};

const AssetDetailTable: React.FC<AssetDetailTableProps> = ({ details }) => {
  return (
    <table className="min-w-full table-auto border-collapse border">
      <thead className="bg-gray-200">
        <tr>
          <th className="border px-4 py-2">名称コード</th>
          <th className="border px-4 py-2">規格コード</th>
          <th className="border px-4 py-2">管理名称</th>
          <th className="border px-4 py-2">規格名称</th>
          <th className="border px-4 py-2">取得数量</th>
          <th className="border px-4 py-2">単位</th>
          <th className="border px-4 py-2">取得金額</th>
        </tr>
      </thead>
      <tbody>
        {details.map((detail, index) => (
          <tr key={index}>
            <td className="border px-4 py-2">{detail.nameCode}</td>
            <td className="border px-4 py-2">{detail.standardCode}</td>
            <td className="border px-4 py-2">{detail.managementName}</td>
            <td className="border px-4 py-2">{detail.standardName}</td>
            <td className="border px-4 py-2">{detail.acquisitionQuantity}</td>
            <td className="border px-4 py-2">{detail.unit}</td>
            <td className="border px-4 py-2">{detail.acquisitionAmount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AssetDetailTable;
