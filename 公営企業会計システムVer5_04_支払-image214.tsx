```tsx
import React from 'react';

type CollectionHistoryProps = {
  year: string;
  ticketNumber: number;
  category: string;
  detailsLabel: string;
  issuanceDate: string;
  receiptType: string;
  slipNumber: number;
  collectionAmount: number;
  refundAmount: number;
  remarks: string;
  onDetailClick: () => void;
  onReissueClick: () => void;
  onCancelClick: () => void;
};

const CollectionHistory: React.FC<CollectionHistoryProps> = ({
  year,
  ticketNumber,
  category,
  detailsLabel,
  issuanceDate,
  receiptType,
  slipNumber,
  collectionAmount,
  refundAmount,
  remarks,
  onDetailClick,
  onReissueClick,
  onCancelClick
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <div className="flex justify-between mb-4">
        <div>
          <span className="mr-2">年度:</span>{year}
        </div>
        <div>
          <span className="mr-2">伝票番号:</span>{ticketNumber}
        </div>
      </div>
      <div className="mb-2">
        <span className="mr-2">種別:</span>{category}
      </div>
      <button 
        className="bg-gray-200 rounded px-4 py-2 mb-4" 
        onClick={onDetailClick}
      >
        {detailsLabel}
      </button>
      <table className="w-full border-collapse border">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="border p-2">起案日</th>
            <th className="border p-2">種別</th>
            <th className="border p-2">伝票 No</th>
            <th className="border p-2">収納金額</th>
            <th className="border p-2">戻出金額</th>
            <th className="border p-2">摘要</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="border p-2">{issuanceDate}</td>
            <td className="border p-2">{receiptType}</td>
            <td className="border p-2">{slipNumber}</td>
            <td className="border p-2">{collectionAmount}</td>
            <td className="border p-2">{refundAmount}</td>
            <td className="border p-2">{remarks}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <button 
          className="bg-gray-200 rounded px-4 py-2" 
          onClick={onReissueClick}
        >
          再発行
        </button>
        <button 
          className="bg-gray-200 rounded px-4 py-2" 
          onClick={onCancelClick}
        >
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default CollectionHistory;
```