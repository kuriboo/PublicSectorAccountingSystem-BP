import React from 'react';

type AssetInfoProps = {
  assetNumber: string;
  assetName: string;
  fiscalYear: string;
};

type AccountSummaryProps = {
  previousBalance: number;
  currentIncrease: number;
  currentDecrease: number;
};

type AssetTableEntry = {
  code: string;
  sourceName: string;
  prevBalance: number;
  increase: number;
};

type AssetDetailsProps = {
  assetInfo: AssetInfoProps;
  accountSummary: AccountSummaryProps;
  assetTable: AssetTableEntry[];
};

const AssetDetails: React.FC<AssetDetailsProps> = ({ assetInfo, accountSummary, assetTable }) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      {/* Asset Information */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">{assetInfo.assetName}</h2>
        <p>資産番号: {assetInfo.assetNumber}</p>
        <p>会計年度: {assetInfo.fiscalYear}</p>
      </div>

      {/* Account Summary */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">帳簿価額</h3>
          <p>前期末残高: {accountSummary.previousBalance.toLocaleString()}</p>
          <p>当期増加額: {accountSummary.currentIncrease.toLocaleString()}</p>
          <p>当期減少額: {accountSummary.currentDecrease.toLocaleString()}</p>
          <p>現在高: {(accountSummary.previousBalance + accountSummary.currentIncrease - accountSummary.currentDecrease).toLocaleString()}</p>
        </div>
        {/* Add additional similar sections as needed */}
      </div>

      {/* Asset Table */}
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-4 py-2">財源コード</th>
            <th className="px-4 py-2">財源名称</th>
            <th className="px-4 py-2">帳簿原価 前期末残高</th>
            <th className="px-4 py-2">帳簿原価 当期増加額</th>
          </tr>
        </thead>
        <tbody>
          {assetTable.map((entry, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{entry.code}</td>
              <td className="px-4 py-2">{entry.sourceName}</td>
              <td className="px-4 py-2">{entry.prevBalance.toLocaleString()}</td>
              <td className="px-4 py-2">{entry.increase.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetDetails;
