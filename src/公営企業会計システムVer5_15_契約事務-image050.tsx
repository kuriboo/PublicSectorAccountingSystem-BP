// BidHistory.tsx

import React from 'react';

type BidHistoryProps = {
  companyCode: string;
  companyName: string;
  bidResult: string;
  participationStatus: string;
  bidAmounts: number[];
  onConfirm: () => void;
  onCancel: () => void;
};

const BidHistory: React.FC<BidHistoryProps> = ({
  companyCode,
  companyName,
  bidResult,
  participationStatus,
  bidAmounts,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white border rounded-lg shadow-md space-y-4">
      {/* Company Details */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">{companyName}</h2>
          <p className="text-sm text-gray-600">{companyCode}</p>
        </div>
        <div>
          <select className="border p-2 rounded">
            <option>{participationStatus}</option>
          </select>
        </div>
      </div>
      
      {/* Bid Result */}
      <p className="bg-gray-200 p-2 rounded text-center">{bidResult}</p>

      {/* Bid Amounts */}
      <table className="min-w-full bg-white border rounded">
        <thead>
          <tr>
            <th className="text-left py-2 px-4 border-b">回数</th>
            <th className="text-right py-2 px-4 border-b">入札金額</th>
          </tr>
        </thead>
        <tbody>
          {bidAmounts.map((amount, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{`第${index + 1}回`}</td>
              <td className="py-2 px-4 border-b text-right">
                {amount.toLocaleString()}円
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={onCancel}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          キャンセル
        </button>
        <button
          onClick={onConfirm}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          確定
        </button>
      </div>
    </div>
  );
};

export default BidHistory;
```

```tsx
// Usage example
// This would be in a different file where you use the BidHistory component

import React from 'react';
import BidHistory from './BidHistory';

const ExampleUsage = () => {
  const handleConfirm = () => {
    // Handle confirm action
    console.log('Confirmed');
  };

  const handleCancel = () => {
    // Handle cancel action
    console.log('Cancelled');
  };

  return (
    <BidHistory
      companyCode="000001 00022"
      companyName="こうとう総合建築株式会社"
      bidResult="落札"
      participationStatus="許退"
      bidAmounts={[4000000, 3200000, 3000000]}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};

export default ExampleUsage;
```