import React from 'react';

type AssetManagementProps = {
  assetNumber: string;
  registrationDate: string;
  department: string;
  ownership: string;
  acquisitionDate: string;
  serviceYears: string;
  location: string;
  assetName: string;
  notes: string;
  improvementDetails: {
    movementSummary: string;
    improvementAmount: number;
    exclusionAmount: number;
    serviceYears: string;
    depreciationRate: number;
  };
  currentContents: {
    acquisitionAmount: number;
    bookValue: number;
    exclusionAmount: number;
    depreciationAmount: number;
    depreciationAccumulatedAmount: number;
    accountValue: number;
  };
};

const AssetManagement: React.FC<AssetManagementProps> = ({
  assetNumber,
  registrationDate,
  department,
  ownership,
  acquisitionDate,
  serviceYears,
  location,
  assetName,
  notes,
  improvementDetails,
  currentContents,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Asset Header */}
      <div className="text-xl font-bold text-blue-800 mb-2">改良資産対象登録</div>
      
      {/* Basic Information */}
      <div className="mb-4">
        <div>資産番号: {assetNumber}</div>
        <div>改良年月日: {registrationDate}</div>
        <div>部門: {department}</div>
        <div>所属: {ownership}</div>
        <div>取得年月日: {acquisitionDate}</div>
        <div>耐用年数: {serviceYears}</div>
        <div>所在地: {location}</div>
        <div>資産名称: {assetName}</div>
        <div>摘要: {notes}</div>
      </div>
      
      {/* Improvement Details */}
      <div className="mb-4">
        <div className="font-semibold">改良内容</div>
        <div>異動摘要: {improvementDetails.movementSummary}</div>
        <div>改良金額: {improvementDetails.improvementAmount.toLocaleString()}</div>
        <div>償却除外額: {improvementDetails.exclusionAmount.toLocaleString()}</div>
        <div>耐用年数: {improvementDetails.serviceYears}</div>
        <div>償却率: {improvementDetails.depreciationRate.toFixed(2)}</div>
      </div>
      
      {/* Current Contents */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="font-semibold">現在内容</div>
        <div>取得価格: {currentContents.acquisitionAmount.toLocaleString()}</div>
        <div>帳簿原価: {currentContents.bookValue.toLocaleString()}</div>
        <div>償却除外額: {currentContents.exclusionAmount.toLocaleString()}</div>
        <div>償却対象額: {currentContents.depreciationAmount.toLocaleString()}</div>
        <div>償却累計額: {currentContents.depreciationAccumulatedAmount.toLocaleString()}</div>
        <div>帳簿価額: {currentContents.accountValue.toLocaleString()}</div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end mt-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded mr-2">
          OK
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded mr-2">
          クリア
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-4 rounded">
          終了
        </button>
      </div>
    </div>
  );
};

export default AssetManagement;