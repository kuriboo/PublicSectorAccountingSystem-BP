// components/RecordDetails.tsx

import React from 'react';

type Record = {
  date: string;
  type: string;
  invoiceNumber: number;
  adjustmentAmount: number;
  summary: string;
};

interface RecordDetailsProps {
  year: string;
  serialNumber: number;
  category: string;
  records: Record[];
  onDetailClick: () => void;
  onReissueClick: () => void;
  onCancelClick: () => void;
}

const RecordDetails: React.FC<RecordDetailsProps> = ({
  year,
  serialNumber,
  category,
  records,
  onDetailClick,
  onReissueClick,
  onCancelClick
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">年度: {year}  伝票番号: {serialNumber}</h2>
        <p>種別: {category}</p>
      </div>
      
      <button
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={onDetailClick}
      >
        詳細
      </button>

      <table className="min-w-full border-collapse">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="px-4 py-2 border">起案日</th>
            <th className="px-4 py-2 border">種別</th>
            <th className="px-4 py-2 border">伝票No</th>
            <th className="px-4 py-2 border">調整金額</th>
            <th className="px-4 py-2 border">摘要</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="bg-gray-50 border-b">
              <td className="px-4 py-2">{record.date}</td>
              <td className="px-4 py-2">{record.type}</td>
              <td className="px-4 py-2">{record.invoiceNumber}</td>
              <td className="px-4 py-2">{record.adjustmentAmount.toLocaleString()}</td>
              <td className="px-4 py-2">{record.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex space-x-4 mt-4">
        <button
          className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-700"
          onClick={onReissueClick}
        >
          再発行
        </button>
        <button
          className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-700"
          onClick={onCancelClick}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default RecordDetails;
