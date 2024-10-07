import React from 'react';

// Define the type for the component props
interface AssetInfoProps {
  assetNumber: string;
  section: string;
  subsection: string;
  subdivision: string;
  relevantYear: string;
  department: string;
  location: string;
  description: string;
  region: string;
  acquisitionDate: string;
  acquisitionPrice: number;
  depreciationMethod: string;
  netAmount: number;
  depreciationYears: number;
  depreciationRate: number;
  remainingRate: number;
}

const AssetInfo: React.FC<AssetInfoProps> = ({
  assetNumber,
  section,
  subsection,
  subdivision,
  relevantYear,
  department,
  location,
  description,
  region,
  acquisitionDate,
  acquisitionPrice,
  depreciationMethod,
  netAmount,
  depreciationYears,
  depreciationRate,
  remainingRate,
}) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      {/* Asset Information */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">Asset Information</h2>
        <p className="text-sm">Asset Number: {assetNumber}</p>
        <p className="text-sm">Section: {section}</p>
        <p className="text-sm">Subsection: {subsection}</p>
        <p className="text-sm">Subdivision: {subdivision}</p>
        <p className="text-sm">Relevant Year: {relevantYear}</p>
        <p className="text-sm">Department: {department}</p>
      </div>

      {/* Location and Description */}
      <div className="mb-4">
        <h2 className="text-lg font-bold">Location and Description</h2>
        <p className="text-sm">Location: {location}</p>
        <p className="text-sm">Description: {description}</p>
        <p className="text-sm">Region: {region}</p>
      </div>

      {/* Finance Information */}
      <div>
        <h2 className="text-lg font-bold">Finance Information</h2>
        <p className="text-sm">Acquisition Date: {acquisitionDate}</p>
        <p className="text-sm">Acquisition Price: {acquisitionPrice.toLocaleString()}</p>
        <p className="text-sm">Depreciation Method: {depreciationMethod}</p>
        <p className="text-sm">Net Amount: {netAmount.toLocaleString()}</p>
        <p className="text-sm">Depreciation Years: {depreciationYears} years</p>
        <p className="text-sm">Depreciation Rate: {depreciationRate}%</p>
        <p className="text-sm">Remaining Rate: {remainingRate}%</p>
      </div>
    </div>
  );
};

export default AssetInfo;
```