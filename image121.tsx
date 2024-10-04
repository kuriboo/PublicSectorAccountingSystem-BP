```tsx
import React from 'react';

interface AdjustmentFormProps {
  adjustmentDate: string;
  section: string;
  details: string;
  abnormalSummary: string;
  remainingRate: number;
  remainingAmount: number;
  limitRate: number;
  annualDepreciation: number;
  preAdjustment: DepreciationDetails;
  postAdjustment: DepreciationDetails;
}

interface DepreciationDetails {
  years: number;
  rate: number;
  cumulativeAmount: number;
  annualAmount: number;
}

const AdjustmentForm: React.FC<AdjustmentFormProps> = ({
  adjustmentDate,
  section,
  details,
  abnormalSummary,
  remainingRate,
  remainingAmount,
  limitRate,
  annualDepreciation,
  preAdjustment,
  postAdjustment,
}) => {
  return (
    <div className="p-6 bg-purple-100 rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">{adjustmentDate}</h2>
      <div className="mb-2">
        <label className="font-bold">Section: </label>
        <span>{section}</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">Details: </label>
        <span>{details}</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">Abnormal Summary: </label>
        <span>{abnormalSummary}</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">Remaining Rate: </label>
        <span>{remainingRate}%</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">Remaining Amount: </label>
        <span>{remainingAmount}</span>
      </div>
      <div className="mb-2">
        <label className="font-bold">Limit Rate: </label>
        <span>{limitRate}%</span>
      </div>
      <div className="mb-6">
        <label className="font-bold">Annual Depreciation: </label>
        <span>{annualDepreciation}</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2">Before Adjustment</h3>
          <ul className="list-disc list-inside">
            <li>Years: {preAdjustment.years}</li>
            <li>Rate: {preAdjustment.rate}%</li>
            <li>Cumulative Amount: {preAdjustment.cumulativeAmount}</li>
            <li>Annual Amount: {preAdjustment.annualAmount}</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">After Adjustment</h3>
          <ul className="list-disc list-inside">
            <li>Years: {postAdjustment.years}</li>
            <li>Rate: {postAdjustment.rate}%</li>
            <li>Cumulative Amount: {postAdjustment.cumulativeAmount}</li>
            <li>Annual Amount: {postAdjustment.annualAmount}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdjustmentForm;
```