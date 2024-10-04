```tsx
// Import necessary libraries
import React from 'react';

// Define TypeScript types for the component props
type CollectionHistoryProps = {
  year: string;
  voucherNumber: string;
  type: string;
  details: {
    date: string;
    type: string;
    voucherNo: number;
    collectionAmount: number;
    refundAmount: number;
    remark: string;
  }[];
  onDetailClick: () => void;
  onReissueClick: () => void;
  onCancelClick: () => void;
};

// Create the CollectionHistory component
const CollectionHistory: React.FC<CollectionHistoryProps> = ({
  year,
  voucherNumber,
  type,
  details,
  onDetailClick,
  onReissueClick,
  onCancelClick,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h3 className="text-xl font-bold">集合収納履歴</h3>
      <div className="mt-2">
        <div className="flex">
          <div className="mr-4">年度</div>
          <div>{year}</div>
        </div>
        <div className="flex">
          <div className="mr-4">伝票番号</div>
          <div>{voucherNumber}</div>
        </div>
        <div className="flex">
          <div className="mr-4">種別</div>
          <div>{type}</div>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-gray-300 rounded" onClick={onDetailClick}>
        詳細
      </button>
      <table className="mt-4 w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th>起案日</th>
            <th>種別</th>
            <th>伝票No</th>
            <th>収納金額</th>
            <th>戻出金額</th>
            <th>摘要</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index} className="text-center">
              <td>{detail.date}</td>
              <td>{detail.type}</td>
              <td>{detail.voucherNo}</td>
              <td>{detail.collectionAmount.toLocaleString()}</td>
              <td>{detail.refundAmount.toLocaleString()}</td>
              <td>{detail.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex mt-4">
        <button className="mr-2 px-4 py-2 bg-gray-300 rounded" onClick={onReissueClick}>
          再発行
        </button>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={onCancelClick}>
          キャンセル
        </button>
      </div>
    </div>
  );
};

// Export the component as the default export
export default CollectionHistory;
```