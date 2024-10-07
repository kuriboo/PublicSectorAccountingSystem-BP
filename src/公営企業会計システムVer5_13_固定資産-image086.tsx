// Import necessary modules from React and Next.js
import React from 'react';

// Define the type for the table data
type TableRow = {
  rowNo: number;
  code: string;
  description: string;
  quantity: number;
  unit: string;
  amount: number;
};

// Define the type for component props
type AssetTableProps = {
  assetNo: string;
  assetName: string;
  rows: TableRow[];
  onFixedItemClick: () => void;
  onMovementClick: () => void;
  onCancelClick: () => void;
};

// Define the AssetTable component
const AssetTable: React.FC<AssetTableProps> = ({
  assetNo,
  assetName,
  rows,
  onFixedItemClick,
  onMovementClick,
  onCancelClick,
}) => (
  <div className="bg-white border-2 border-blue-800 p-4 rounded-lg">
    <h2 className="text-lg font-bold mb-2">資産照会</h2>
    <div className="flex justify-between mb-4">
      <div>
        <span className="mr-4">資産番号: {assetNo}</span>
        <span>資産名称: {assetName}</span>
      </div>
    </div>
    <table className="w-full border-collapse border border-blue-800">
      <thead className="bg-blue-800 text-white">
        <tr>
          <th className="border border-blue-800 py-2 px-4">行No.</th>
          <th className="border border-blue-800 py-2 px-4">内容コード</th>
          <th className="border border-blue-800 py-2 px-4">構造内容</th>
          <th className="border border-blue-800 py-2 px-4">数量</th>
          <th className="border border-blue-800 py-2 px-4">単位</th>
          <th className="border border-blue-800 py-2 px-4">金額</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.rowNo} className="border-t border-blue-800">
            <td className="border border-blue-800 py-2 px-4">{row.rowNo}</td>
            <td className="border border-blue-800 py-2 px-4">{row.code}</td>
            <td className="border border-blue-800 py-2 px-4">{row.description}</td>
            <td className="border border-blue-800 py-2 px-4">{row.quantity.toFixed(2)}</td>
            <td className="border border-blue-800 py-2 px-4">{row.unit}</td>
            <td className="border border-blue-800 py-2 px-4">{row.amount.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="flex justify-end mt-4 space-x-4">
      <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded" onClick={onFixedItemClick}>固定項目</button>
      <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded" onClick={onMovementClick}>異動履歴</button>
      <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded" onClick={onCancelClick}>キャンセル</button>
    </div>
  </div>
);

export default AssetTable;
