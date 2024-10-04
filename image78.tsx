import React from 'react';

// Define TypeScript types for the component props
interface VendorInfoProps {
  fiscalYear: string;
  region: string;
  data: {
    no: number;
    vendorCode: string;
    receptionDivision: string;
    vendorName: string;
    vendorKana: string;
    representativeName: string;
    region: string;
  }[];
}

const VendorInfo: React.FC<VendorInfoProps> = ({ fiscalYear, region, data }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">業者情報問合せ</h1>
      
      {/* Search Conditions */}
      <div className="mb-4">
        <div className="font-semibold">実績年度: {fiscalYear} 年度</div>
        <div className="font-semibold">地区: {region}</div>
      </div>

      {/* Vendor Information Table */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>No.</th>
            <th>業者コード</th>
            <th>受付区分</th>
            <th>業者名</th>
            <th>業者カナ</th>
            <th>代表者名</th>
            <th>地区</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.no} className="odd:bg-gray-100">
              <td>{item.no}</td>
              <td>{item.vendorCode}</td>
              <td>{item.receptionDivision}</td>
              <td>{item.vendorName}</td>
              <td>{item.vendorKana}</td>
              <td>{item.representativeName}</td>
              <td>{item.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorInfo;