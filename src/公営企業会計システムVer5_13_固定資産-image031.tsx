import React from 'react';

type Props = {
  assetNumber: string;
  status: 'partial' | 'all' | 'decrease';
  description: string;
  location: string;
  area: number;
  valuationDate: string;
  remarks: string;
  totalAmount: number;
  onEdit: () => void;
  onFinanceSetting: () => void;
};

const AssetInput: React.FC<Props> = ({
  assetNumber,
  status,
  description,
  location,
  area,
  valuationDate,
  remarks,
  totalAmount,
  onEdit,
  onFinanceSetting,
}) => {
  return (
    <div className="p-4 bg-gray-100 shadow-md">
      <div className="mb-4">
        <label className="block text-sm font-medium">資産番号</label>
        <input
          type="text"
          value={assetNumber}
          className="mt-1 p-2 border border-gray-300 rounded"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">異動区分</label>
        <select
          value={status}
          className="mt-1 p-2 border border-gray-300 rounded"
          disabled
        >
          <option value="partial">一部除却</option>
          <option value="all">全除却</option>
          <option value="decrease">減損</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">異動摘要</label>
        <input
          type="text"
          value={description}
          className="mt-1 p-2 border border-gray-300 rounded"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">所在地</label>
        <input
          type="text"
          value={location}
          className="mt-1 p-2 border border-gray-300 rounded"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">総面積</label>
        <input
          type="number"
          value={area}
          className="mt-1 p-2 border border-gray-300 rounded"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">除却年月日</label>
        <input
          type="date"
          value={valuationDate}
          className="mt-1 p-2 border border-gray-300 rounded"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">除却摘要</label>
        <input
          type="text"
          value={remarks}
          className="mt-1 p-2 border border-gray-300 rounded"
          disabled
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onEdit}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          明細編集
        </button>
        <button
          onClick={onFinanceSetting}
          className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          財務設定
        </button>
      </div>
    </div>
  );
};

export default AssetInput;
```