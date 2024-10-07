import React from 'react';

// TypeScript型定義
interface MaintenanceRecordProps {
  assetNumber: string;
  assetName: string;
  location: string;
  acquisitionDate: string;
  usefulLife: string;
  acquisitionCost: string;
  depreciationMethod: string;
  residualValue: string;
  taxAuditValue: string;
  onEditDetails: () => void;
  onDeleteAction: () => void;
  onPreviousData: () => void;
  onNextData: () => void;
}

// メンテナンス記録コンポーネント
const MaintenanceRecord: React.FC<MaintenanceRecordProps> = ({
  assetNumber,
  assetName,
  location,
  acquisitionDate,
  usefulLife,
  acquisitionCost,
  depreciationMethod,
  residualValue,
  taxAuditValue,
  onEditDetails,
  onDeleteAction,
  onPreviousData,
  onNextData,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">修繕履歴管理</h2>
      <div className="mb-4">
        <div className="flex justify-between">
          <div className="w-1/3">
            <p>資産番号: {assetNumber}</p>
            <p>資産名称: {assetName}</p>
            <p>所在地: {location}</p>
            <p>取得年月日: {acquisitionDate}</p>
            <p>耐用年数: {usefulLife}</p>
          </div>
          <div className="w-1/3">
            <p>取得価額: {acquisitionCost}</p>
            <p>償却方法: {depreciationMethod}</p>
            <p>帳簿価額: {residualValue}</p>
            <p>帳簿価格: {taxAuditValue}</p>
          </div>
        </div>
      </div>
      <div className="flex mb-4">
        <button
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onEditDetails}
        >
          明細編集
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={onDeleteAction}
        >
          行削除
        </button>
      </div>
      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={onPreviousData}
        >
          前データ
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={onNextData}
        >
          次データ
        </button>
      </div>
    </div>
  );
};

export default MaintenanceRecord;
