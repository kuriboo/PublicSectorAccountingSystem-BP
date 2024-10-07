// Import necessary modules from React and Next.js
import React from 'react';

// Define TypeScript interface for component props
interface RevenueItemSettingsProps {
  title: string;
  fiscalPeriod: string;
  data: {
    budgetClass: string;
    budgetItem: string;
    budgetTitle: string;
    budgetSection: string;
    specificAmount: number;
    nonspecificAmount: number;
    internalInput: number;
  }[];
  onClickOk: () => void;
  onClickClear: () => void;
  onClickClose: () => void;
}

// Define the RevenueItemSettings component
const RevenueItemSettings: React.FC<RevenueItemSettingsProps> = ({
  title,
  fiscalPeriod,
  data,
  onClickOk,
  onClickClear,
  onClickClose,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Title Section */}
      <div className="text-xl font-bold mb-4">{title}</div>

      {/* Fiscal Period */}
      <div className="mb-4 text-gray-700">課税期間: {fiscalPeriod}</div>
      
      {/* Table Section */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              予算款
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              予算項
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              予算目
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              予算節
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              特定収入額
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              特定収入以外の額
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              内訳入力
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{item.budgetClass}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.budgetItem}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.budgetTitle}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.budgetSection}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.specificAmount.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.nonspecificAmount.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.internalInput.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button Section */}
      <div className="mt-6 flex justify-end space-x-3">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={onClickOk}
        >
          OK
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          onClick={onClickClear}
        >
          クリア
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={onClickClose}
        >
          終了
        </button>
      </div>
    </div>
  );
};

// Export the Component
export default RevenueItemSettings;