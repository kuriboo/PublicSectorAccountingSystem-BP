import React from 'react';

type AssetInfoProps = {
  assetNumber: string;
  assetName: string;
  latestOperationDate: string;
  periodStart: string;
  periodEnd: string;
  monthCount: number;
  accountingValue: number;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
  onSearch: () => void;
};

const AssetInfo: React.FC<AssetInfoProps> = ({
  assetNumber,
  assetName,
  latestOperationDate,
  periodStart,
  periodEnd,
  monthCount,
  accountingValue,
  onConfirm,
  onClear,
  onCancel,
  onSearch
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <div className="flex justify-between">
        <span>資産番号: {assetNumber}</span>
        <button onClick={onSearch} className="px-3 py-1 bg-blue-500 text-white rounded">科目検索</button>
      </div>
      <div>
        <label className="block">資産名称: {assetName}</label>
        <label className="block">最新更新年月日: {latestOperationDate}</label>
      </div>
      
      <div className="flex mt-4">
        <div className="flex-1">
          <label>期間</label>
          <div>
            <input type="date" value={periodStart} className="border rounded px-2 py-1" readOnly />
            <span>~</span>
            <input type="date" value={periodEnd} className="border rounded px-2 py-1" readOnly />
          </div>
        </div>
        <div className="ml-4">
          <label>月数: {monthCount}</label>
        </div>
      </div>

      <div className="mt-4">
        <label>帳簿価額: {accountingValue.toLocaleString()}</label>
      </div>

      <div className="flex justify-end mt-4 space-x-4">
        <button onClick={onConfirm} className="px-4 py-2 bg-green-500 text-white rounded">行確定</button>
        <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded">行キャンセル</button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded">クリア</button>
      </div>
    </div>
  );
};

export default AssetInfo;
```