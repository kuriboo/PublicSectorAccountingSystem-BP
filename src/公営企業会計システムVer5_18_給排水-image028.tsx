// components/BillingTable.tsx
import React from 'react';

// データ型の定義
type TableRow = {
  date: string;
  number: string;
  location: string;
  name: string;
  manager: string;
  workDetails: string;
  diameter: string;
  quantity: number;
  entranceFee: string;
  processingFee1: string;
  processingFee2: string;
  otherFee1: string;
  otherFee2: string;
  note?: string;
};

// プロパティ型の定義
type BillingTableProps = {
  rows: TableRow[];
};

const BillingTable: React.FC<BillingTableProps> = ({ rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
              日付
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
              工事番号
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
              工事場所
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
              申請者
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
              業者名
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
              口径
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
              数量
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
              加入負担金
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
              加工手数料
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
              加工手数料
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
              占用申請手数料
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
              占用手数料
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
              備考
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {row.date}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {row.number}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {row.location}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {row.name}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {row.manager}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {row.diameter}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {row.quantity}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {row.entranceFee}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {row.processingFee1}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {row.processingFee2}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {row.otherFee1}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {row.otherFee2}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                {row.note ?? ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillingTable;
```