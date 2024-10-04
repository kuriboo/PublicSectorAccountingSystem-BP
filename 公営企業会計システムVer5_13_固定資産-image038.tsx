import React from 'react';

// TypeScript types for component props
type AssetRegistrationProps = {
  assetNumber: string;
  assetName: string;
  location: string;
  department: string;
  acquisitionAmount: number;
  bookValue: number;
  residualRate: number;
  residualAmount: number;
  // Additional properties as needed
};

const AssetRegistration: React.FC<AssetRegistrationProps> = ({
  assetNumber,
  assetName,
  location,
  department,
  acquisitionAmount,
  bookValue,
  residualRate,
  residualAmount,
}) => {
  return (
    <div className="p-4 bg-white shadow-md max-w-lg mx-auto">
      {/* Header */}
      <div className="text-lg font-bold mb-4 text-center">
        更正資産対象登録
      </div>
      
      {/* Asset Information */}
      <div className="mb-4">
        <div className="flex justify-between">
          <span>資産番号:</span>
          <span>{assetNumber}</span>
        </div>
        <div className="flex justify-between">
          <span>資産名称:</span>
          <span>{assetName}</span>
        </div>
        <div className="flex justify-between">
          <span>所在地:</span>
          <span>{location}</span>
        </div>
        <div className="flex justify-between">
          <span>部門:</span>
          <span>{department}</span>
        </div>
      </div>

      {/* Financial Information */}
      <div className="mb-4 border-t border-gray-300 pt-2">
        <div className="flex justify-between">
          <span>取得価格:</span>
          <span>{acquisitionAmount.toLocaleString()}円</span>
        </div>
        <div className="flex justify-between">
          <span>帳簿価額:</span>
          <span>{bookValue.toLocaleString()}円</span>
        </div>
        <div className="flex justify-between">
          <span>残存率:</span>
          <span>{residualRate}%</span>
        </div>
        <div className="flex justify-between">
          <span>残存価額:</span>
          <span>{residualAmount.toLocaleString()}円</span>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2">OK</button>
        <button className="px-4 py-2 bg-gray-300 rounded">クリア</button>
      </div>
    </div>
  );
};

export default AssetRegistration;