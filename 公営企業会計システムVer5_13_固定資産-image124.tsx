```tsx
import React from 'react';

type DataRow = {
  sourceCode: string;
  sourceName: string;
  fluctuationAmount: number;
  depreciationDepthRate: number;
  residualValue: number;
};

interface AssetFluctuationProps {
  assetNumber: string;
  assetName: string;
  fluctuationAmount: number;
  residualValue: number;
  dataRows: DataRow[];
}

const AssetFluctuation: React.FC<AssetFluctuationProps> = ({
  assetNumber,
  assetName,
  fluctuationAmount,
  residualValue,
  dataRows,
}) => {
  return (
    <div className="p-4 border border-gray-300 shadow-lg rounded-lg bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">Asset Fluctuation Record</h1>
        <div>
          <span className="font-medium">Asset Number: </span>{assetNumber}
        </div>
      </div>

      {/* Asset Info */}
      <div className="border-t border-b py-2 flex justify-between items-center">
        <div>
          <span className="font-medium">Asset Name: </span>{assetName}
        </div>
        <div>
          <span className="font-medium">Fluctuation Amount: </span>{fluctuationAmount.toLocaleString()}
        </div>
        <div>
          <span className="font-medium">Residual Value: </span>{residualValue.toLocaleString()}
        </div>
      </div>

      {/* Data Table */}
      <table className="w-full mt-4 border-collapse border-2 border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2">Source Code</th>
            <th className="border border-gray-200 p-2">Source Name</th>
            <th className="border border-gray-200 p-2">Fluctuation Amount</th>
            <th className="border border-gray-200 p-2">Depreciation Depth Rate</th>
            <th className="border border-gray-200 p-2">Residual Value</th>
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, index) => (
            <tr key={index}>
              <td className="border border-gray-200 p-2">{row.sourceCode}</td>
              <td className="border border-gray-200 p-2">{row.sourceName}</td>
              <td className="border border-gray-200 p-2">{row.fluctuationAmount.toLocaleString()}</td>
              <td className="border border-gray-200 p-2">{row.depreciationDepthRate}</td>
              <td className="border border-gray-200 p-2">{row.residualValue.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Buttons */}
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white p-2 rounded-md mr-2">OK</button>
        <button className="bg-gray-400 text-white p-2 rounded-md">Cancel</button>
      </div>
    </div>
  );
};

export default AssetFluctuation;
```