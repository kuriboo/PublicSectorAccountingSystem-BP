// Import necessary libraries
import React from 'react';

// Define the props type for the ComparisonForm component
interface ComparisonFormProps {
  creationDate: string;
  titles: string[];
  rows: RowProps[];
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

interface RowProps {
  year: string;
  amountType: string;
  correctionCount: number;
  targetMonth: string;
  fiscalEstimateCount: number;
  isEstimateAmount: boolean;
  onFieldChange: (field: string, value: any) => void;
}

const ComparisonForm: React.FC<ComparisonFormProps> = ({
  creationDate,
  titles,
  rows,
  onSubmit,
  onClear,
  onClose
}) => {
  return (
    <div className="p-4 bg-white shadow-lg">
      {/* Header Section */}
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold">対前年度比較表</h1>
        <p>作成日: {creationDate}</p>
      </div>

      {/* Main Form */}
      <form>
        <div className="grid grid-cols-2 gap-4">
          {rows.map((row, index) => (
            <div key={index} className="border p-4">
              <div className="mb-2">
                <label>年度:</label>
                <input
                  type="text"
                  className="ml-2 border"
                  value={row.year}
                  onChange={(e) => row.onFieldChange('year', e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label>金額区分:</label>
                <select
                  className="ml-2 border"
                  value={row.amountType}
                  onChange={(e) => row.onFieldChange('amountType', e.target.value)}
                >
                  <option value="当初">当初</option>
                  <option value="予算">予算</option>
                </select>
              </div>
              <div className="mb-2">
                <label>補正回数:</label>
                <input
                  type="number"
                  className="ml-2 border"
                  value={row.correctionCount}
                  onChange={(e) => row.onFieldChange('correctionCount', parseInt(e.target.value))}
                />
              </div>
              <div className="mb-2">
                <label>対象月:</label>
                <input
                  type="text"
                  className="ml-2 border"
                  value={row.targetMonth}
                  onChange={(e) => row.onFieldChange('targetMonth', e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label>決算見込回数:</label>
                <input
                  type="number"
                  className="ml-2 border"
                  value={row.fiscalEstimateCount}
                  onChange={(e) => row.onFieldChange('fiscalEstimateCount', parseInt(e.target.value))}
                />
              </div>
              <div>
                <label className="mr-2">金額種別:</label>
                <input
                  type="radio"
                  value="見積要求額"
                  checked={row.isEstimateAmount}
                  onChange={() => row.onFieldChange('isEstimateAmount', true)}
                /> 見積要求額
                <input
                  type="radio"
                  value="査定額"
                  checked={!row.isEstimateAmount}
                  onChange={() => row.onFieldChange('isEstimateAmount', false)}
                  className="ml-2"
                /> 査定額
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-4 text-center">
          <button type="button" className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={onSubmit}>印刷</button>
          <button type="button" className="bg-gray-500 text-white px-4 py-2 mr-2" onClick={onClear}>クリア</button>
          <button type="button" className="bg-red-500 text-white px-4 py-2" onClick={onClose}>終了</button>
        </div>
      </form>
    </div>
  );
};

export default ComparisonForm;
```.