import React from 'react';

// TypeScriptの型定義
interface RecordTableProps {
  year: string;
  slipNumber: string;
  category: string;
  records: {
    date: string;
    category: string;
    slipNo: string;
    adjustmentAmount: string;
    collectionAmount?: string;
    transfer?: string;
    previousBalance?: string;
    summary?: string;
  }[];
  onRedraw?: () => void;
  onCancel?: () => void;
}

const RecordTable: React.FC<RecordTableProps> = ({
  year,
  slipNumber,
  category,
  records,
  onRedraw,
  onCancel,
}) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">伝票設定履歴</h2>
        <div className="text-sm">
          <span>年度:</span> <span>{year}</span>
          <span className="ml-4">伝票番号:</span> <span>{slipNumber}</span>
        </div>
        <div className="text-sm mt-2">
          <span>種別: </span> <span>{category}</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="px-4 py-2">起案日</th>
              <th className="px-4 py-2">種別</th>
              <th className="px-4 py-2">伝票No</th>
              <th className="px-4 py-2">調定金額</th>
              <th className="px-4 py-2">収納金額</th>
              <th className="px-4 py-2">振替</th>
              <th className="px-4 py-2">前受残</th>
              <th className="px-4 py-2">摘要</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index} className="bg-gray-50">
                <td className="border px-4 py-2">{record.date}</td>
                <td className="border px-4 py-2">{record.category}</td>
                <td className="border px-4 py-2">{record.slipNo}</td>
                <td className="border px-4 py-2">{record.adjustmentAmount}</td>
                <td className="border px-4 py-2">{record.collectionAmount || '-'}</td>
                <td className="border px-4 py-2">{record.transfer || '-'}</td>
                <td className="border px-4 py-2">{record.previousBalance || '-'}</td>
                <td className="border px-4 py-2">{record.summary || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={onRedraw}
          className="bg-gray-700 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
        >
          再発行
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default RecordTable;
```