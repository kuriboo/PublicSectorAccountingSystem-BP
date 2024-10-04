```tsx
import React from 'react';

type ConstructionDetailsProps = {
  title: string;
  location: string;
  summary: string;
  startDate: string;
  endDate: string;
  contractDate: string;
  contractNumber?: string; // Optional
  onCancel: () => void;
};

const ConstructionDetails: React.FC<ConstructionDetailsProps> = ({
  title,
  location,
  summary,
  startDate,
  endDate,
  contractDate,
  contractNumber,
  onCancel
}) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 bg-white shadow-lg">
      <header className="border-b border-gray-200 pb-2 mb-4">
        <h1 className="text-xl font-bold">工事明細</h1>
      </header>
      <div className="mb-2">
        <h2 className="text-lg font-semibold">工事名</h2>
        <p>{title}</p>
      </div>
      <div className="mb-2">
        <h2 className="text-lg font-semibold">工事場所</h2>
        <p>{location}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">摘要</h2>
        <p>{summary}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h2 className="text-lg font-semibold">着手日</h2>
          <p>{startDate}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">契約日</h2>
          <p>{contractDate}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">完了日</h2>
          <p>{endDate}</p>
        </div>
        {contractNumber && (
          <div>
            <h2 className="text-lg font-semibold">契約番号</h2>
            <p>{contractNumber}</p>
          </div>
        )}
      </div>
      <button
        className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300"
        onClick={onCancel}
      >
        キャンセル
      </button>
    </div>
  );
};

export default ConstructionDetails;
```