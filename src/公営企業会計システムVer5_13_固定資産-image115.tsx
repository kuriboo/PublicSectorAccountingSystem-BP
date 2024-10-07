import React from 'react';

interface AssetMaintenanceProps {
  assetNumber: string;
  assetName: string;
  location: string;
  acquisitionDate: string;
  acquisitionAmount: number;
  depreciationAmount: number;
  netBookValue: number;
  onEditDetails: () => void;
  onDeleteAction: () => void;
}

const AssetMaintenance: React.FC<AssetMaintenanceProps> = ({
  assetNumber,
  assetName,
  location,
  acquisitionDate,
  acquisitionAmount,
  depreciationAmount,
  netBookValue,
  onEditDetails,
  onDeleteAction
}) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-lg font-bold mb-4">修繕履歴管理</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="mb-2"><strong>資産番号:</strong> {assetNumber}</p>
          <p className="mb-2"><strong>資産名称:</strong> {assetName}</p>
          <p className="mb-2"><strong>所在地:</strong> {location}</p>
          <p className="mb-2"><strong>取得年月日:</strong> {acquisitionDate}</p>
        </div>
        <div>
          <p className="mb-2"><strong>取得価額:</strong> {acquisitionAmount} 円</p>
          <p className="mb-2"><strong>償却累計額:</strong> {depreciationAmount} 円</p>
          <p className="mb-2"><strong>帳簿価額:</strong> {netBookValue} 円</p>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button 
          onClick={onEditDetails} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          明細編集
        </button>
        <button 
          onClick={onDeleteAction} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          行削除
        </button>
      </div>
    </div>
  );
}

export default AssetMaintenance;
